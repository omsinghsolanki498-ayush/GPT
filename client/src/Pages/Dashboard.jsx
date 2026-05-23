import React, { useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const Dashboard = () => {

  const fetchDashboard = async () => {

    try {

      const token = localStorage.getItem("token");

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

      toast.error(error.response.data.message);
    }
  };

  useEffect(() => {
    fetchDashboard();
  }, []);

  return (
    <div>
      Dashboard
    </div>
  );
};

export default Dashboard;