import './App.css';
import CombinedCalendar from './components/CombinedCalendar';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <div className='bg-gray-100 h-full w-full'>
      
      <Navbar/>
      <CombinedCalendar/>
    
    </div>
  );
}

export default App;
