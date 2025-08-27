import logo from './logo.svg';
import './App.css';
// import MyGreet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Greet from './components/Greet';
function App() {
  return (
    <div className="App">
     {/* <MyGreet/>
     <Welcome /> */}
     <Greet name="Saiprasad Sahoo"></Greet>
     <Greet name="Satyajit Sethi"></Greet>
     <Greet name="Tarini Prasad Purohit"></Greet>
    </div>
  );
}

export default App;
