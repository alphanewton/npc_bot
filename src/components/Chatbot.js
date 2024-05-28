import React, { useState, useRef, useEffect } from "react";
import Avatar from "./Avatar";
import ChatWindow from "./ChatWindow";

const Chatbot = () => {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setVisible(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  return (
    <div ref={ref}>
      <ChatWindow visible={visible} onClick={() => setVisible(!visible)} />
      <Avatar onClick={() => setVisible(!visible)} visible={visible} />
    </div>
  );
};

export default Chatbot;
