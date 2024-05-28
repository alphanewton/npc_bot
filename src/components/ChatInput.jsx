import { MdSend } from "react-icons/md";
import { useState } from "react";

export default function ChatInput({ disabled, onSend }) {
  const [message, setMessage] = useState("");
  return (
    <form
      className="border-2 border-slate-400 rounded-lg p-2 flex flex-row m-2 text-slate-900 space-x-2"
      onSubmit={(e) => {
        if (message) {
          e.preventDefault();
          onSend(message);
          setMessage("");
        } else {
          e.preventDefault();
          console.log("Message is empty");
        }
      }}
      autoComplete="off"
    >
      <input
        name="message"
        className={
          "w-full " +
          "bg-[#E1E6F7] " +
          "focus:outline-none " +
          "placeholder-slate-600"
        }
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        disabled={disabled}
        className={
          "bg-slate-500 " +
          "text-white " +
          "font-bold " +
          "py-2 px-4 " +
          "rounded " +
          "hover:bg-blue-600 " + // Modified hover color to blue
          "disabled:bg-slate-600 " +
          "disabled:text-slate-400"
        }
      >
        <MdSend />
      </button>
    </form>
  );
}
