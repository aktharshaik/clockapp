import "./App.css";
import Clock from "./Components/Clock";
import First from "./Components/First";
import ClassMapArrObj from "./Components/ClassMapArrObj";
import ClassParent from "./Components/ClassParent";
import Calculator from "./Components/Calculator";

// function App() {
//   return (
//     <div className="App">
//       <Clock />
//     </div>
//   );
// }
const App = (props) => {
  return (
    <div className="App">
      <h1>WELCOME</h1>
      <Clock />
      <hr />
      <First />
      <hr />
      <h2>
        Iterate Records in JSON using map() method (Used only Single Record)
      </h2>
      <ClassMapArrObj />
      <hr />
      <h2>Lifting State Up</h2>
      <ClassParent />
      <hr />
      <h2>Temperature Calculator with Lifting State Up</h2>
      <Calculator />
      <hr />
    </div>
  );
};

export default App;
