import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Sidebar from './components/Sidebar/Sidebar';
import Expenses from './pages/Expenses/Expenses';

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        <Route path='/expenses' element={<Expenses />}/>
      </Routes>
    </>
  );
}

export default App;
