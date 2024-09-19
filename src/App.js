import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Use Routes instead of Switch

let name = "Vikash";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark Mode has been Enabled', 'success');
      document.title = 'React App - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode has been Enabled', 'success');
      document.title = 'React App - Light Mode';
    }
  };

  return (
    <>
      {/* <Router> */}
        <div className="container my-3">
          <Navbar title="Navbar Field" mode={mode} toggleMode={toggleMode} aboutText="About Us" />
        </div>

        <Alert alert={alert} />

        {/* <Routes>
          <Route
            exact
            path="/"
            element={ */}
              <div className="container my-3">
                <TextForm showAlert={showAlert} heading="Enter your text" mode={mode} />
              </div>
            {/* }
          />

          <Route
            exact
            path="/about"
            element={ */}
              <div className="container my-3">
                <About />
              </div>
            {/* }
          />
        </Routes>
      </Router> */}
    </>
  );
}

export default App;
