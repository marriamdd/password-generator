import { useState, ChangeEvent } from "react";

import "./App.css";

const symbols = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "-",
  "=",
  "{",
  "}",
  "[",
  "]",
  "|",
  ":",
  ";",
  '"',
  "'",
  "<",
  ">",
  ",",
  ".",
  "/",
  "?",
];

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const lowercaseChars = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

const uppercaseChars = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
let passwordArray: any = [];
function App() {
  const [range, setRange] = useState<string>("8");
  const [password, setPassword] = useState<string>("");
  const handleRangeChange = (event: ChangeEvent<HTMLInputElement>) => {
    setRange(event.target.value);
  };
  const handleUpperCase = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      passwordArray.push(uppercaseChars);
      generatePassword();
    }
  };
  const handleLowerCase = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      passwordArray.push(lowercaseChars);
      generatePassword();
    }
  };
  const handleNumber = (event: ChangeEvent<HTMLInputElement>) => {
    passwordArray.push(numbers);
    generatePassword();
  };
  const handleSymbol = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      passwordArray.push(symbols);
      generatePassword();
    }
  };

  const generatePassword = () => {
    let newPassword = "";
    let handleNestedPassword = passwordArray.flat();
    for (let i = 0; i < range; i++) {
      const randomIndex = Math.floor(
        Math.random() * handleNestedPassword.length
      );

      newPassword += handleNestedPassword[randomIndex];
    }

    setPassword(newPassword);
  };
  return (
    <>
      <div>
        <p>{password}</p>
        <div>
          <div>
            <p>{range}</p>
            <input
              type="range"
              min="0"
              max="14"
              step="1"
              value={range}
              onChange={handleRangeChange}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div>
              <label htmlFor="checkBox1">include uppercase</label>
              <input
                onChange={handleUpperCase}
                type="checkBox"
                id="checkBox1"
              />
            </div>
            <div>
              <label htmlFor="checkBox2">include lowercase</label>
              <input
                type="checkBox"
                id="checkBox2"
                onChange={handleLowerCase}
              />
            </div>
            <div>
              <label htmlFor="checkBox3">include numbers</label>

              <input type="checkBox" id="checkBox3" onChange={handleNumber} />
            </div>
            <div>
              <label htmlFor="checkBox4">include symbols</label>
              <input type="checkBox" id="checkBox4" onChange={handleSymbol} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
