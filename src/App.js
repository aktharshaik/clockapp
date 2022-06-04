import './App.css';
import Clock from './Components/Clock';
import First from './Components/First';

// function App() {
//   return (
//     <div className="App">
//       <Clock />
//     </div>
//   );
// }
const App = (props) =>{
  return (
    <div className="App">
      <h1>WELCOME</h1>
      <Clock />
      <First />
      <hr />
    </div>
  );
}

export default App;
