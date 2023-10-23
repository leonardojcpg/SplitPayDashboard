import React from "react";
import "./app.css";
import MyCalendar from "./Components/Calendar/calendar";
import Cards from "./Components/Cards/cards";
import { Sidebar } from "./Components/Sidebar/sidebar";
import { Header } from "./Components/Header";

function App() {
  return (
    <div className="dashboard">
      <Sidebar />
      <main className="dashboardContainer">
        <Header />
        <body>
          <section className="content">
            <Cards />
            <div className="agenda">
              <MyCalendar />
            </div>
          </section>
        </body>
      </main>
    </div>
  );
}

export default App;
