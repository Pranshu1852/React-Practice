import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";

function App() {
  const [projectsState,setProjectsState]=useState({
    selectedProjectID: undefined,
    projects: [],
  });

  function handleStartAddProject() {
    setProjectsState((prevState)=>{
      return {
        ...prevState,
        selectedProjectID: null
      }
    })
  }

  function handleAddProject(projectData) {
    const newProject={
      ...projectData,
      id: Date.now()
    };

    setProjectsState((prevState)=>{
      return {
        ...prevState,
        projects: [...prevState.projects, newProject] 
      }
    })
  }

  console.log(projectsState);
  

  let content;

  if(projectsState.selectedProjectID === null){
    content=<NewProject onAdd={handleAddProject} />
  }
  else if(projectsState.selectedProjectID === undefined){
    content=<NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="flex flex-row h-screen">
      <Sidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  );
}

export default App;
