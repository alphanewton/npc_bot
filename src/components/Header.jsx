import { FaPlus } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function Header({ onNewChat, onClick }) {
  return (
    <div className="flex flex-row p-3 md:p-4 bg-white items-center m-1 rounded-t-3xl">
      <img
        height={45}
        width={45}
        src="/mini_logo.png"
        className="rounded-full"
        alt="InsSights Logo"
      />
      <p className="ml-[20px] text-xl md:text-2xl text-[#2759A6] font-semibold grow">
        NPC Bot
      </p>
      <div className="flex-row block md:hidden ml-auto justify-between space-x-2">
        <button
          className="bg-slate-400 text-white font-bold rounded-full p-4 text-md shadow-md"
          onClick={onNewChat}
        >
          <FaPlus />
        </button>
        <button
          className="bg-red-600 text-white font-bold rounded-full p-4 text-lg shadow-md ml-auto"
          onClick={() => onClick && onClick()}
        >
          <IoMdClose />
        </button>
      </div>
      <button
        className="bg-blue-500 text-white font-bold p-2 ml-auto hover:bg-blue-900 md:px-6 rounded-tl-3xl rounded-tr-xl rounded-br-xl text-lg hidden md:block "
        onClick={onNewChat}
      >
        New chat
      </button>
    </div>
  );
}
