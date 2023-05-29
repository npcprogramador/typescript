import { useState, useEffect } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import Tasks from './components/Tasks';

const LOCAL_STORAGE_KEY = "todo: savedTasks";

export interface ITask {
  id: string,
  subject: string,
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  useEffect(()=> {
    loadSavedtasks()
  }, [])

  function loadSavedtasks() {
    const saved = localStorage.getItem(LOCAL_STORAGE_KEY)
    if(saved) {
      setTasks(JSON.parse(saved))
    }
  }

  function setTasksAndSave(newTasks: ITask[]){
    setTasks(newTasks)

    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks))
  }


  function addTask(taskTitle: string){
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        subject: taskTitle,
        isCompleted: false
      }
    ]);
  }

  function deleteTaskId(taskId: string) {
    const newTasks = tasks.filter((task)=> task.id !== taskId)
    setTasksAndSave(newTasks)
  }

  function toggleTaskCompletedById(taskId: string) {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) {
        return {
          //recebe toda a task novamente
          ...task,
          //recebe o valor inverso do valor anterior
          isCompleted: !task.isCompleted
        }
      }
      return task;
    });
    setTasksAndSave(newTasks);
  }

  return (
    <>
      <GlobalStyle />
      <Header onAddTask={addTask}/>
      <Tasks
        tasks={tasks}
        onDelete={deleteTaskId}
        onComplete={toggleTaskCompletedById}  
      />
    </>
  )
}

export default App;
