// import React from 'react'
// import Sidebar from './Sidebar'

// function Stats(){
//     return(
//         <div>
//             <h1>MEDIUM</h1>
//             <Sidebar/>

//             <div>
//             <h1>Welcome to Stats</h1>
//             </div>


//         </div>
//     )
// }

// export default Stats




import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
import "./Stats.css";

function Stats() {
  const [blogs, setBlogs] = useState([]);

  async function fetchBlogs() {
    const result = await fetch("https://6927d9e3b35b4ffc501346a2.mockapi.io/blog");
    const myres = await result.json();
    setBlogs(myres);
  }

  useEffect(() => {
    fetchBlogs();
  }, []);

  // ---------- STATS CALCULATION ----------

  // 1️⃣ Total Blogs
  const totalBlogs = blogs.length;

  // 2️⃣ Average Word Count
  const averageWords =
    blogs.length > 0
      ? Math.floor(
          blogs.reduce(
            (sum, b) => sum + b.myDescription.split(" ").length,
            0
          ) / blogs.length
        )
      : 0;

  // 3️⃣ Blogs added in last 7 days
  const recentBlogs = blogs.filter((b) => {
    const diff =
      (new Date() - new Date(b.createdAt)) / (1000 * 60 * 60 * 24);
    return diff <= 7;
  }).length;

  // 4️⃣ Pie Chart – Category breakup by length
  const pieData = [
    { name: "Short Blogs", value: blogs.filter(b => b.myDescription.length < 200).length },
    { name: "Medium Blogs", value: blogs.filter(b => b.myDescription.length >= 200 && b.myDescription.length < 400).length },
    { name: "Long Blogs", value: blogs.filter(b => b.myDescription.length >= 400).length },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FF8042"];

  // 5️⃣ Monthly Blog Trend
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  const barData = months.map((m, index) => ({
    month: m,
    blogs: blogs.filter(b => new Date(b.createdAt).getMonth() === index).length,
  }));

  return (
    <div className="stats-container">
      <Sidebar />

      <div className="stats-content">
        <h1 className="stats-title">📊 Blog Statistics</h1>

        {/* Cards */}
        <div className="stats-cards">
          <div className="stats-card">
            <h2>{totalBlogs}</h2>
            <p>Total Blogs</p>
          </div>

          <div className="stats-card">
            <h2>{averageWords}</h2>
            <p>Avg Words / Blog</p>
          </div>

          <div className="stats-card">
            <h2>{recentBlogs}</h2>
            <p>New This Week</p>
          </div>
        </div>

        {/* Charts Row */}
        <div className="chart-row">
          <PieChart width={300} height={300}>
            <Pie
              data={pieData}
              dataKey="value"
              outerRadius={110}
              fill="#8884d8"
              label
            >
              {pieData.map((entry, i) => (
                <Cell key={i} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>

          <BarChart width={500} height={300} data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="blogs" fill="#8884d8" />
          </BarChart>
        </div>
      </div>
    </div>
  );
}

export default Stats;

