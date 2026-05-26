import React from 'react'

const Message = ({ role, content }) => {
  return (
      <div
      className={`w-full flex ${
        role === "user"
          ? "justify-end"
          : "justify-start"
      }`}
    >
      
       <div
        className={`max-w-2xl px-5 py-3 rounded-2xl text-white ${
          role === "user"
            ? "bg-emerald-600"
            : "bg-[#2a2a2a]"
        }`}
      >

        {content}

      </div>

    </div>
  )
}

export default Message
