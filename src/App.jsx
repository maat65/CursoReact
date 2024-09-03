import { useEffect, useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
import {v4} from 'uuid';
import Title from "./components/Title";

function App() {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

  function onTaskClick(taskId) {
    const newTasks = tasks.map(task => {
      // PRECISO ATUALIZAR ESSA TAREFA
      if (task.id == taskId) { 
        return {...task, isCompleted: !task.isCompleted}
      }
      return task;
    });
    setTasks(newTasks);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter(task => task.id != taskId)
    setTasks(newTasks);
  }

  function onAddTaskSubmit(title, description) {
      const newTask = {
        id: v4(),
        title: title,
        description: description,
        isCompleted: false,
      }
      setTasks([...tasks, newTask]);
  }

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks]);

  useEffect(() => {
    async function fetchTasks() {
      // CHAMAR API
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10', 
        {
        method: 'GET'
        });
      
      // PEGAR OS DADOS QUE ELA RETORNA TRANSFORMANDO EM JSON
      const data = await response.json();

      // PRINTAR NO CONSOLE PARA TESTE
      console.log(data);

      // ARMAZENAR OS DADOS NO STATE
      setTasks(data);
    }
    // É POSSIVEL CHAMAR UMA API PARA PEGAR AS TAREFAS
    // fetchTasks();
  });

  return (
    <div className="w-screen bg-slate-500 flex justify-center p-6"> 
      <div className="w-[500px] space-y-4">
        <Title>Gerenciador de Tarefas</Title>
        <AddTasks onAddTaskSubmit={onAddTaskSubmit}/>
        <Tasks tasks={tasks} onTaskClick={onTaskClick} onDeleteTaskClick={onDeleteTaskClick}/>

      </div>
    </div>
  );
}

export default App;