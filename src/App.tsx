import { useState } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import Tasks from './components/Tasks';

export interface ITask {
  id: string,
  subject: string,
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    {
      id: '1',
      subject: 'Tarefa de casa',
      isCompleted: true
    },
    {
      id: '2',
      subject: 'Arrumar meu quarto',
      isCompleted: false
    },
    {
      id: '3',
      subject: 'Levar o lixo para fora hoje',
      isCompleted: false
    }
  ]);


  function addTask(taskTitle: string){
    setTasks([
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
    setTasks(newTasks)
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
    setTasks(newTasks);
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
