import { useState } from 'react';
import GlobalStyle from './styles/GlobalStyle';
import Header from './components/Header';
import Tasks from './components/Tasks';

export interface IData {
  id: string,
  subject: string,
  isCompleted: boolean;
}

function App() {
  const [data, setData] = useState<IData[]>([
    {
      id: '1',
      subject: 'teste',
      isCompleted: true
    }
  ]);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Tasks/>
    </>
  )
}

export default App
