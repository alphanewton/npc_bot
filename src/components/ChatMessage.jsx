import Markdown from "react-markdown";
import { GoPerson } from "react-icons/go";
import remarkGfm from "remark-gfm";
// import { positiveFeedbackLoop } from "../services/api";
// import { negativeFeedbackLoop } from "../services/api";
import { useThread } from "../hooks/useThread";
import { motion } from "framer-motion";

export default function ChatMessage({ message, role, setRun }) {
  const roleIcon =
    role === "user" ? (
      <div className="rounded-full h-8 w-8 bg-slate-600 flex items-center justify-center font-semibold text-slate-300 shrink-0">
        <GoPerson />
      </div>
    ) : (
      <div className="rounded-full h-8 w-8 bg-transparent flex items-center justify-center font-semibold text-slate-50 shrink-0">
        <img src="/mini_logo-nobg.png" alt="mini logo" />
      </div>
    );

  const roleName = role === "user" ? "You" : "InsSights";

  const { messages } = useThread();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-row mx-2 my-3 group">
        {roleIcon}
        <div className="p-1 ml-2">
          <div className="flex-col relative">
            <p className="font-semibold text-slate-900">{roleName}</p>
            <Markdown
              className="text-slate-700 markdown"
              remarkPlugins={[remarkGfm]}
            >
              {message}
            </Markdown>
            {/* {role === "assistant" && (
              <div className="hidden absolute justify-center items-center top-full my-3 transform -translate-y-1/2 group-hover:flex">
                <button
                  className="cursor-pointer bg-transparent outline-none rounded-full border border-gray-300 w-6 h-6 text-xs inline-flex justify-center items-center focus:outline-none focus:bg-transparent hover:bg-blue-600 hover:transition-all hover:duration-200 hover:ease-in-out hover:shadow-lg hover:scale-110"
                  onClick={async () => {
                    //Search for the index of the message in the messages array and post the feedback
                    const index =
                      messages.findIndex((m) => m["content"] === message) - 1;
                    if (index > 0)
                      positiveFeedbackLoop(
                        messages[index]["content"],
                        message
                      ).then((res) => console.log(res));
                  }}
                >
                  👍
                </button>
                <button
                  className="cursor-pointer bg-transparent outline-none rounded-full border border-gray-300 w-6 h-6 text-xs inline-flex justify-center items-center focus:outline-none focus:bg-transparent hover:bg-blue-600 hover:transition-all hover:duration-200 hover:ease-in-out hover:shadow-lg hover:scale-110"
                  // onClick={async () => {
                  //   //Delete the recent question and answer pair delete it and regenrate the response
                  //   const index = messages.findIndex(
                  //     (m) => m["content"] === message
                  //   );
                  //   if (index > 0) {
                  //     negativeFeedbackLoop(message, threadId).then(setRun);
                  //   }
                  // }}
                >
                  👎
                </button>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
