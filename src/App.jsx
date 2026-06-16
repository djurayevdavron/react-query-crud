import { useState } from "react";
import "./App.css";
import Users from "./components/Users";
import Posts from "./components/Posts";

function App() {
  const [showHomework, setShowHomework] = useState(false);
  const [task, setTask] = useState("users");
  return (
    <div className="container">
      <div className="hero">
        <img src="/logo.svg" alt="React Query Logo" className="logo" />
        <h1 className="title">
          React Query CRUD
          <br />
          Homework
        </h1>
      </div>

      {/* Homework qismi*/}
      <button className="btn" onClick={() => setShowHomework(!showHomework)}>
        {showHomework ? "Hide Homework" : "Show Homework"}
      </button>
      {showHomework && (
        <div className="homework-box">
          <h2>Homework Requirements</h2>
          <ul>
            <li>Users API bilan GET POST PUT DELETE</li>

            <li>Posts API bilan GET POST PUT DELETE</li>

            <li>React Query ishlatish</li>
          </ul>
        </div>
      )}

      {/* Task buttons qismi */}
      <div className="task-buttons">
        <button className="btn" onClick={() => setTask("users")}>
          Task 1
        </button>

        <button className="btn" onClick={() => setTask("posts")}>
          Task 2
        </button>
      </div>

      {task === "users" && <Users />}

      {task === "posts" && <Posts />}
    </div>
  );
}
export default App;
