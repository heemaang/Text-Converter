import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import './App.css';
import { useState } from 'react';

function App() {
  const [mode,setMode] = useState('light');//weather dark mode is on or off
  
  const [alert,setAlert] = useState(null);// making alert as a object

  const showAlert =(message, type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null);
      },1300);
  }
 const toggleMode=()=>{
      if(mode==='light'){
        setMode('dark');
        document.body.style.backgroundColor= "#353b42";
        showAlert("Dark mode has been enabled", "success")
  
      }
      else{
        setMode('light');
        document.body.style.backgroundColor= "white";
        showAlert("Light mode has been enabled", "success")
      }
  }

  return (
    <> 
      <Navbar title ="Text Converter" about="text" mode={mode} toggleMode={toggleMode}  />
      <Alert alert={alert}/>
      <div className="container my-3">
            <TextForm heading=" Try Text Converter - Word Counter, Character Counter, Change Font, Lower to Upper Case, Upper to Lower Case Download Your Text" mode={mode}  showAlert={ showAlert}/>
      </div>
    
    </>
  );
}
export default App;

