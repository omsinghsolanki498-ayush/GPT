import React, { useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import Slidebar from "../component/Slidebar";
import Navbar from "../component/Navbar";
import Message from "../component/Message";
import PromptInput from "../component/PromptInput";

const Dashboard = () => {

  const messages = [
 
  ];

  const navigate = useNavigate();

  const fetchDashboard = async () => {

    try {

      const token = localStorage.getItem("token");

      if (!token) {
        navigate("/login");
        return;
      }

      const res = await axios.get(
        "http://localhost:3002/api/auth/dashboard",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(res.data);

      toast.success(res.data.message);

    } catch (error) {

      localStorage.removeItem("token");

      toast.error(
        error.response?.data?.message || "Unauthorized"
      );

      navigate("/login");
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  return (

    <div className="flex h-screen bg-black text-white">

      {/* Sidebar */}
      <Slidebar />

      {/* Main Section */}
      <div className="flex-1 flex flex-col">

        {/* Navbar */}
        <Navbar />

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto px-6 py-8 space-y-6">

          {/* Empty Screen */}
          {messages.length === 0 && (
            <div className="h-full flex flex-col items-center justify-center">

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
                alt="logo"
                className="w-20 h-20 invert mb-6"
              />

              <h1 className="text-3xl font-semibold mb-3">
              What’s on the agenda today?
              </h1>

            </div>
          )}

          {/* Messages */}
          {messages.map((message, index) => (
            <Message
              key={index}
              role={message.role}
              content={message.content}
            />
          ))}

        </div>

        {/* Prompt Input */}
        <PromptInput />

      </div>

    </div>
  );
};

export default Dashboard;