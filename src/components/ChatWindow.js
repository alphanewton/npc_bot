import React, { useEffect, useState, useRef } from "react";
// import { styles } from "./styles";
import Header from "./Header";
import ChatInput from "./ChatInput";
import ChatMessage from "./ChatMessage";
import ChatStatusIndicator from "./ChatStatusIndicator";
import Loading from "./Loading";
import { useThread } from "../hooks/useThread";
import { useRunPolling } from "../hooks/useRunPolling";
import { useRunRequiredActionsProcessing } from "../hooks/useRunRequiredActionsProcessing";
import { useRunStatus } from "../hooks/useRunStatus";
import { postMessage } from "../services/api";

function ChatWindow(props) {
  const [run, setRun] = useState(undefined);
  const { threadId, messages, setActionMessages, clearThread } = useThread(
    run,
    setRun
  );
  useRunPolling(threadId, run, setRun);
  useRunRequiredActionsProcessing(run, setRun, setActionMessages);
  const { status, processing } = useRunStatus(run);
  const [tempMessageList, setTempMessageList] = useState([]);
  const messageContainerRef = useRef(null);

  //Update tempMessageList when messages change by one or more
  useEffect(() => {
    if (
      messages.length > tempMessageList.length ||
      (messages.length > 0 &&
        tempMessageList.length > 0 &&
        tempMessageList[tempMessageList.length - 1]["props"]["message"] !==
          messages[0]["content"]) ||
      // Math.abs(messages.length - tempMessageList.length) > 1 ||
      // status === "Improving Response ..." ||
      messages.length === 0
    ) {
      setTempMessageList(
        messages
          .toReversed()
          .filter((message) => message.content && !message.hidden)
          .map((message) =>
            message === "" ? (
              <></>
            ) : (
              <ChatMessage
                message={message.content}
                role={message.role}
                key={message.id}
              />
            )
          )
      );
    }
  }, [messages, status, tempMessageList.length]);

  // Scroll to the bottom when messages or processing state changes
  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTo({
        top: messageContainerRef.current.scrollHeight,
        behavior: "smooth",
      });
    }
  }, [messages, processing]);

  const handleSend = (message) => {
    const tempId = `temp-${Date.now()}`;
    const newMessage = { content: message, role: "user", id: tempId };
    const updatedTempMessageList = [
      <ChatMessage
        message={newMessage.content}
        role={newMessage.role}
        key={newMessage.id}
        setRun={setRun}
      />,
      ...tempMessageList,
    ];
    setTempMessageList(updatedTempMessageList);

    postMessage(threadId, message).then(setRun);
  };

  const messageList =
    tempMessageList.length > messages.length
      ? tempMessageList
      : messages
          .toReversed()
          .filter((message) => !message.hidden)
          .map((message) =>
            message === "" ? (
              <></>
            ) : (
              <ChatMessage
                message={message.content}
                role={message.role}
                key={message.id}
                setRun={setRun}
              />
            )
          );
  return (
    <div
      className="transition-5 bottom-[0px] fixed md:bottom-[116px] right-[0px] md:right-[24px] w-screen md:w-[370px] h-[100%] md:h-[500px] bg-[#e1e6f7] overflow-hidden shadow-[0px_0px_16px_6px_rgba(0,0,0,0.33)] rounded-[1.5rem]"
      style={{
        // ...styles.supportWindow,
        ...{ opacity: props.visible ? "1" : "0" },
        ...{ zIndex: props.visible ? "10" : "-10" },
      }}
    >
      <div className="md:container md:mx-auto bg-[#e1e6f7] text-black flex flex-col h-[100%]">
        <Header
          onNewChat={clearThread}
          onClick={() => props.onClick && props.onClick()}
        />
        <div
          className="flex flex-col-reverse grow overflow-scroll"
          ref={messageContainerRef}
        >
          {status !== undefined && <ChatStatusIndicator status={status} />}
          {processing && <Loading />}
          {messageList}
        </div>
        <div className="my-4">
          <ChatInput onSend={handleSend} disabled={processing} />
        </div>
      </div>
    </div>
  );
}

export default ChatWindow;
