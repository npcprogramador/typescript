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
  const [tasks] = useState<ITask[]>([
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

  return (
    <>
      <GlobalStyle />
      <Header />
      <Tasks tasks={tasks}/>
    </>
  )
}

export default App;
