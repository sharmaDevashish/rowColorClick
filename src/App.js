import { useState } from "react";
import "./styles.css";

export default function App() {
  let boxArr1 = [1, 2, 3];
  let boxArr2 = [1, 2];
  let boxArr3 = [1, 2, 3];
  let [checkedBox1, setCheckedBox1] = useState([]);
  let [checkedBox2, setCheckedBox2] = useState([]);
  let [checkedBox3, setCheckedBox3] = useState([]);

  let handleClick1 = (index) => {
    //console.log(index);
    let newCheckedBox = [...checkedBox1];
    console.log(newCheckedBox);
    !newCheckedBox.includes(index)
      ? newCheckedBox.push(index)
      : newCheckedBox.splice(newCheckedBox.indexOf(index), 1);
    setCheckedBox1(newCheckedBox);
  };

  let checkColor1 = (index) => {
    let isChecked = false;
    isChecked = checkedBox1.includes(index);
    //console.log(isChecked);
    return isChecked;
  };

  let handleClick2 = (index) => {
    //console.log(index);
    let newCheckedBox = [...checkedBox2];
    console.log(newCheckedBox);
    !newCheckedBox.includes(index)
      ? newCheckedBox.push(index)
      : newCheckedBox.splice(newCheckedBox.indexOf(index), 1);
    setCheckedBox2(newCheckedBox);
  };

  let checkColor2 = (index) => {
    let isChecked = false;
    isChecked = checkedBox2.includes(index);
    //console.log(isChecked);
    return isChecked;
  };

  let handleClick3 = (index) => {
    //console.log(index);
    let newCheckedBox = [...checkedBox3];
    console.log(newCheckedBox);
    !newCheckedBox.includes(index)
      ? newCheckedBox.push(index)
      : newCheckedBox.splice(newCheckedBox.indexOf(index), 1);
    setCheckedBox3(newCheckedBox);
  };

  let checkColor3 = (index) => {
    let isChecked = false;
    isChecked = checkedBox3.includes(index);
    //console.log(isChecked);
    return isChecked;
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div style={{ float: "left" }}>
        {boxArr1.map((box, index) => {
          return (
            <div
              className={checkColor1(index) ? "redBox1" : "box1"}
              key={index}
              onClick={() => handleClick1(index)}
            ></div>
          );
        })}
      </div>
      <div style={{ marginTop: "40px" }}>
        {boxArr2.map((box, index) => {
          return (
            <div
              className={checkColor2(index) ? "redBox2" : "box2"}
              key={index}
              onClick={() => handleClick2(index)}
            ></div>
          );
        })}
      </div>
      <div style={{ float: "left" }}>
        {boxArr3.map((box, index) => {
          return (
            <div
              className={checkColor3(index) ? "redBox1" : "box1"}
              key={index}
              onClick={() => handleClick3(index)}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
