import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/DashboardComponent';
import Users from './components/UsersComponent';
import Login from './components/LoginComponent';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent';
import AddUser from './components/AddUserComponent';
import EditUser from './components/EditUsercomponent';
import Chat from './components/ChatComponent';
import Pagination from './components/PaginationComponent';

function App() {
  return (
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route>
            <Route index element={<Login/>} />
            <Route path='dashboard' element={<Dashboard/>} />
            <Route path='users' element={<Users/>} />
            <Route path='allusers' element={<Pagination/>} />
            <Route path='users/create' element={<AddUser/>} />
            <Route path='users/edit/:id' element={<EditUser/>} />
            <Route path='chats' element={<Chat/>} />
          </Route>
        </Routes>
        <Footer/>
      </BrowserRouter>
  );
}

export default App;
