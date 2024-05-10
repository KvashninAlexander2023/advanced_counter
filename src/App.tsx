import React, { useEffect, useState } from "react";
import "./App.css";
import Counter_2 from "./Counter_2";
import Counter_1 from "./Counter_1";
import { Button } from "./component/Button/Button";

function App() {


  const [showCounter, setShowCounter] = useState<boolean>(true);


  const changeHanler1 = () => {
    setShowCounter(true)
  }
  const changeHanler2 = () => {
    setShowCounter(false)
  }

let isTrueButtonSelection = showCounter ? "isActive" : ''
let isFalseButtonSelection = showCounter ? "" : 'isActive'

  return (
    <div className="counterConteiner">
      <div className="buttonConteiner">
        <div className={isFalseButtonSelection}>
          <Button
            title="Counter_1"
            callback={changeHanler1}
          />
        </div>
        <div className={isTrueButtonSelection}>
          <Button
            title="Counter_2"
            callback={changeHanler2}
          />
        </div>
      </div>
      {showCounter ? <Counter_1 /> : <Counter_2 />}
    </div>
  );
}

export default App;
