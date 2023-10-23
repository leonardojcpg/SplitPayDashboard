import React, { useState } from "react";
import "./app.css";
import MyCalendar from "./Components/Calendar/calendar";
import Cards from "./Components/Cards/cards";
import { Sidebar } from "./Components/Sidebar/sidebar";
import { Header } from "./Components/Header";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className={`dashboard ${theme}`}>
      <Sidebar />
      <main className="dashboardContainer">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <section className="content">
          <Cards />
          <div className="agenda">
            <MyCalendar />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
