import './App.css';
import { Header } from './component/header/Header';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import Technology from './pages/technology/Technology';
import Timetable from './pages/timetable/Timetable';
import Guarantee from './pages/guarantee/Guarantee';
import About from './pages/about/About';
import Contacts from './pages/contacts/Contacts';

function App() {
   return (
      <div className="App-wrapper">
         <Header />
         <Routes>
            <Route path="/*" element={<Main />} />
            <Route path="/technology" element={<Technology />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/guarantee" element={<Guarantee />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
         </Routes>
      </div>
   );
}

export default App;
