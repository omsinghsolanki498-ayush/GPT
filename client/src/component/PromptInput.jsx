import React from 'react'
import { FiSend } from "react-icons/fi";

const PromptInput = () => {
    return (
        <div className='p-6'>
            <div className="max-w-4xl mx-auto bg-zinc-950 border border-white-700 rounded-4xl px-5 py-4 flex items-center gap-4">

                <input type='text'
                    placeholder='Type your prompt here...'
                    className="flex-1 bg-transparent outline-none text-white placeholder:text-gray-400"
                />
                <button className="bg-white text-black p-3 rounded-xl hover:bg-gray-300 transition-all">
                    <FiSend />
                </button>

            </div>

        </div>
    )
}

export default PromptInput
