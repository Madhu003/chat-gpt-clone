import './App.css';
import Sidebar from './Sidebar';
import ChatSection from './ChatSection';

function App() {
  return (
    <div className="d-flex">
      <Sidebar />
      <ChatSection />
    </div>
  );
}

export default App;
