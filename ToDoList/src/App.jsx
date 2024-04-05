import SideBar from "./components/SideBar";
import HomePage from "./components/HomePage";
import StartNewProject from "./components/StartNewProject";
import { useState } from "react";

function App() {
  const [showNoProjects, setShowNoProjects] = useState(true);
  return (
    <main className="h-screen flex gap-8">
      <SideBar />
      <HomePage
        displayHomePage={showNoProjects}
        setDisplayHomePage={setShowNoProjects}
      />
      <StartNewProject showNoProjects={showNoProjects} />
    </main>
  );
}

export default App;
