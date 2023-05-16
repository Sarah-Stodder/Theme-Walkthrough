import './App.css';
import  NavBar  from './components/NavBar'
import MyItem from './components/MyItem';
import CategoryBar from './components/CategoryBar';
import AdminMenu from './components/AdminMenu';
import { Box } from '@mui/material';

function App() {
  return (
  
    <NavBar>
    <CategoryBar/>
    <AdminMenu/> 
    <Box>
      <MyItem/>
      <h1>Base</h1>

    </Box>
    </NavBar>

  

  );
}

export default App;
