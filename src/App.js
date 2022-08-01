import logo from './logo.svg';
import './App.css';
import {ThemeProvider} from '@mui/material'
import HomePage from './HomePage/HomePage';
import Theme from './Theme';


function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <HomePage/>
      </ThemeProvider>
    </>
  );
}

export default App;
