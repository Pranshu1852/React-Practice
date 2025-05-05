import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import Sidebar from "./components/Sidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState,setProjectsState]=useState({
    selectedProjectID: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(text) {
    setProjectsState((prevState)=>{
      const newTask={
        text: text,
        projectId: prevState.selectedProjectID,
        taskId: Date.now()
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask] 
      }
    })
  }

  function handleDeleteTask(id) {
    setProjectsState((prevState)=>{
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task)=>{
          return task.taskId!==id;
        })
      }
    })
  }

  function handleStartAddProject() {
    setProjectsState((prevState)=>{
      return {
        ...prevState,
        selectedProjectID: null
      }
    })
  }

  function handleCancelAddProject() {
    setProjectsState((prevState)=>{
      return {
        ...prevState,
        selectedProjectID: undefined
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
        selectedProjectID: undefined,
        projects: [...prevState.projects, newProject] 
      }
    })
  }

  function handleSelectProject(id) {
    setProjectsState((prevState)=>{
      return {
        ...prevState,
        selectedProjectID: id
      }
    })
  }

  function handleDeleteProject() {
    setProjectsState((prevState)=>{
      return {
        ...prevState,
        selectedProjectID: undefined,
        projects: prevState.projects.filter((project)=>{
          return project.id!==prevState.selectedProjectID;
        })
      }
    })
  }

  console.log(projectsState);

  function getProject(id){
    const project=projectsState.projects.find((project)=>{
      return project.id===id;
    });

    return project;
  }

  const currProject=getProject(projectsState.selectedProjectID);
  

  let content=<SelectedProject onDelete={handleDeleteProject} project={currProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectsState.tasks}/>;

  if(projectsState.selectedProjectID === null){
    content=<NewProject onCancel={handleCancelAddProject} onAdd={handleAddProject} />
  }
  else if(projectsState.selectedProjectID === undefined){
    content=<NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="flex flex-row h-screen">
      <Sidebar onSelectProject={handleSelectProject} onStartAddProject={handleStartAddProject} projects={projectsState.projects} selectProjectID={projectsState.selectedProjectID}/>
      {content}
    </main>
  );
}

export default App;
