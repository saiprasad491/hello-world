import logo from './logo.svg';
import './App.css';
// import MyGreet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Greet from './components/Greet';
import Message from './components/Message';
import Counter from './components/Counter';
function App() {
  return (
    <div className="App">
      <Counter/>
      {/* <Message/> */}
     {/* <MyGreet/>
     <Welcome /> */}
     {/* <Greet name="Saiprasad Sahoo">
      <p>I'm practicing React.</p>
     </Greet>
     <Greet name="Satyajit Sethi">
      <button> Action </button>
     </Greet>
     <Greet name="Tarini Prasad Purohit"></Greet>
     <Welcome name="Sai" ></Welcome>
     <Welcome name="Kunal" ></Welcome>
     <Welcome name="Situ" ></Welcome> */}
    </div>
  );
}

export default App;
