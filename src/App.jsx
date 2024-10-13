import React, { useState } from "react";
import './App.css';
function App() {
  // var [num1, setNum1] = useState(10);
  // var [num2, setNum2] = useState(11);
  // const[color, setColor] = useState("red");
  // useEffect(() => {alert("num2 changed")}, [num2,num1]);
  var [num, setNum] = useState(11);

  return (
    
    // <div className="text">sapna <div className="text2">jha</div></div>
    <div className="flex-container">
      <div className="flex-item">1</div>
      <div className="flex-item">3</div>
      <div className="flex-item">2</div>
      <div className="flex-item">4</div>


    </div>
    //   <div style={{backgroundColor: `${color}`}}>
    //     hello world <br />
    //     {num1}
    //     <button
    //       onClick={() => {
    //         setNum1(++num1);
    //       }}
    //     >
    //       num1
    //     </button>
    //     <br />
    //     {num2}
    //     <button
    //       onClick={() => {
    //         setNum2(++num2);
    //       }}
    //     >
    //       num2
    //     </button>
    //     <br />
    //     {num1 > num2 ? "num1 is greater" : "num2 is greater"}
    //     <div>
    //         <button
    //         type="button"
    //         onClick={()=> setColor("red")}>
    //           Red
    //         </button>
    //         <button
    //         type="button"
    //         onClick={()=> setColor("blue")}>
    //           Blue
    //         </button>
    //         <button type="button"
    //         onClick={()=> setColor("yellow")}>
    //         Yellow
    //         </button>
    //         <button type="button"
    //         onClick={()=> setColor("green")}>
    //           Green
    //         </button>
    //     </div>
    //   </div>
  );
}

export default App;
