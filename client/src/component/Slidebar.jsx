import {
  FiPlus,
  FiMessageSquare,
  FiLogOut,
} from "react-icons/fi";

function Sidebar() {

  return (

    <div className="w-[260px] bg-zinc-950 flex flex-col justify-between">

      {/* TOP */}
      <div>

        {/* LOGO */}
        <div className="p-4 flex items-center gap-3">

          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
            alt="logo"
            className="w-8 h-8 invert"
          />

          <h1 className="text-xl font-semibold text-white">
            ChatGPT
          </h1>

        </div>


        {/* NEW CHAT */}
        <div className="px-3">

          <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-[#2a2a2a] text-white transition-all">

            <FiPlus className="text-lg" />

            <span>New Chat</span>

          </button>

        </div>



        {/* CHAT HISTORY */}
        <div className="mt-6 px-3 space-y-2">

          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#2a2a2a] cursor-pointer text-gray-300">

            <FiMessageSquare />

            <p className="truncate text-sm">
              Build ChatGPT Clone
            </p>

          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#2a2a2a] cursor-pointer text-gray-300">

            <FiMessageSquare />

            <p className="truncate text-sm">
              React Interview Questions
            </p>

          </div>

          <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#2a2a2a] cursor-pointer text-gray-300">

            <FiMessageSquare />

            <p className="truncate text-sm">
              MERN Stack Guide
            </p>

          </div>

        </div>

      </div>



      {/* BOTTOM */}
      <div className="p-3 border-t border-gray-800">

        <button className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-[#2a2a2a] text-white transition-all">

          <FiLogOut className="text-lg" />

          <span>Logout</span>

        </button>

      </div>

    </div>
  );
}

export default Sidebar;