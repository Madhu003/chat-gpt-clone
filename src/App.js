import './App.css';
import Sidebar from './Sidebar';
import ChatSection from './ChatSection';
import { useEffect } from 'react';


function App() {
  useEffect(() => {
    console.log(process.env)
  }, [])
  return (
    <div className="d-flex">
      <Sidebar />
      <ChatSection />
    </div>
  );
}

export default App;
