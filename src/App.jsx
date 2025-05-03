import { ProjectSideBar } from "./components/ProjectSideBar";
import NewProject from "./components/NewProject";
import { useState } from "react";
import NotSelectedProject from "./components/NotSelectedProject";
import SelectedProject from "./components/SelectedProject";
function App() {
  const [projectState, setProjectState] = useState ({
    selectedProjectId : undefined,
    projects:[],
    tasks: []
  });
 
  function handleAddTask(text){
    setProjectState((prevState) =>{
      const taskId=  Math.random();
      const newTask = {
        text:text,
        projectId:prevState.selectedProjectId,
        id:taskId,

      }
        return {
          ...prevState,
         tasks : [...prevState.tasks, newTask]
        };
      });
  }
  function handleDeleteTask(id){
    setProjectState( (prevState) => {
      return {
        ...prevState,
       
        tasks: prevState.tasks.filter((task)=>
         task.id !== id
        ),
      };
    });
  }
  function handleSelectedProject(id){
    setProjectState( (prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }
  function handleDelete(){
    setProjectState( (prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project)=>
        project.id !== prevState.selectedProjectId
        ),
      };
    });
  }
    function handleProjectState(){
      setProjectState( (prevState) => {
        return {
          ...prevState,
          selectedProjectId: null,
        };
      });
    };
    function handleCancelProject(){
      setProjectState((prevState) =>{
        return{
          ...prevState,
          selectedProjectId : undefined
        }
      }
    )
    };
    
    function handleAddProjects(projectdata){
      setProjectState((prevState) =>{
      const newProject = {
        ...projectdata,
        id: Math.random()
      }
        return {
          ...prevState,
          projects:[...prevState.projects, newProject],
          selectedProjectId: undefined,
        };
      });
    };
    const selectedProject = projectState.projects.find( project => project.id === projectState.selectedProjectId)
let content = <SelectedProject
 project={selectedProject} 
 onDelete={handleDelete}  
 onAddTask ={handleAddTask}  
 tasks={projectState.tasks}
 onDeleteTask={handleDeleteTask}
 />
    if(projectState.selectedProjectId === null){
  content = <NewProject onAdd={handleAddProjects} onCancel={handleCancelProject}/>
    } else if(projectState.selectedProjectId === undefined){
      content =   <NotSelectedProject  onStartAddProject={handleProjectState}/>
    }
    
  return (
   <main className="h-screen my-8 flex gap-8">
     <ProjectSideBar 
    
     onStartAddProject={handleProjectState}
     projects= {projectState.projects}
     onSelectProject ={handleSelectedProject}
    
     />
    {content}
   </main>
  );
}

export default App;
