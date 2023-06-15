import './App.css';
import Cards from './components/cards/Cards.jsx';
import Nav from './components/nav/Nav';
import About from './components/about/About';
import Detail from './components/detail/Detail';
import Form from './components/form/Form';
import Favorites from './components/favorites/Favorites';

import { useEffect, useState } from 'react';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import axios from 'axios';


function App() {

   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   const EMAIL = "luchogianoglio@gmail.com"
   const PASSWORD = "Tito64" 

   const location = useLocation();
   const navigate = useNavigate();

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   function onSearch(id) {
      axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   //RECICLADA EN HW M3 - Express
   // function login (userData){
   //    if (userData.password === PASSWORD && userData.email === EMAIL){
   //       setAccess(true);
   //       navigate('/home');
   //    }
   // }

   function login(userData) {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';
      axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
         const { access } = data;
         setAccess(data);
         access && navigate('/home');
      });
   }

   const onClose = (id) => {
      const newChara = characters.filter(char => char.id !== id); 
      setCharacters(newChara);
   }

   return (
      <div className='App'>
         {(location.pathname !== "/") ? <Nav onSearch={onSearch} /> : null}
         <Routes>
            <Route path="/" element={<Form login={login}/>}/>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose}/>} />
            <Route path="/about" element={<About />} />
            <Route path="/favorites" element={<Favorites onClose={onClose}/>} />
            <Route path="/detail/:id" element={<Detail />} />
         </Routes>
      </div>
   );
}

export default App;