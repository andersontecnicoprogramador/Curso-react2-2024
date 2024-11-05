import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";


function App() {
  const [tasks, setTasks] = useState([
  {
   id:1,
   title: "Estudar programação",
   description: "Estudar programação para se tornar um desevolvedor full stackTraceLimit.",
   isCompleted:false 
  },
  {
    id:2,
   title: "Estudar inglês",
   description: "Estudar inglês para se tornar fluente.",
   isCompleted:false
  },
  {
    id:3,
    title: "Estudar matemática",
    description: "Estudar matemática para se tornar um desevolvedor full stack.",
    isCompleted:false 
  },
  
])


  function onTaskClick(taskId) {
   const newTasks = tasks.map((task) => {
    //PRECISO ATUALIZAR ESSA  tarefa
    if (task.id === taskId) {
      return {...task,isCompleted: !task.isCompleted}
    }

    // NÃO PRECISO ATUALIZAR ESSA TAREFA
    return task;
   }); 
   setTasks(newTasks);
  }
  function onDeleteTaskClick (taskId) {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks);
  }

  function onAddTaskSubmit (title, description) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isCompleted:false
    }
    setTasks([...tasks, newTask])
  }


  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
      <h1 className="text-3xl text-slate-100 fonte-bold text-center">
        Gerenciador de Tarefas
      </h1>
      <AddTask  onAddTaskSubmit={onAddTaskSubmit} />
      <Tasks 
      tasks={tasks} onTaskClick={onTaskClick} 
      onDeleteTaskClick={onDeleteTaskClick}
    
      />
    </div>
    </div>
  );
}

export default App;