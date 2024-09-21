"use client";
import Image from "next/image";
import Header from "./Header/page";
import Sidebar from "./Sidebar/page";
import { useState } from "react";
import Main from "./ui/Main";
import Content from "./ui/Content";
import Profile from "./Profile/Profile";
import Stats from "./Stats/Stats";
import Tem from "./Team/Team";
import Team from "./Team/Team";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    console.log("click");
  };
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <Header
        toggleDarkMode={toggleDarkMode}
        toggleSidebar={toggleSidebar}
        darkMode={darkMode}
      />
      <Sidebar isSidebarOpen={isSidebarOpen} />
      <Main>
        <Content>

          <Stats darkMode={darkMode}/>
          <div className="flex flex-col gap-3 lg:flex-row  "><Team/> </div>
          </Content>
         
        <Profile />
      </Main>
    </div>
  );
}
