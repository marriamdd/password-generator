import { useState, ChangeEvent } from "react";
import styled from "styled-components";
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
    }
  };
  const handleLowerCase = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      passwordArray.push(lowercaseChars);
    }
  };
  const handleNumber = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      passwordArray.push(numbers);
    }
  };
  const handleSymbol = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      passwordArray.push(symbols);
    }
  };

  const generatePassword = () => {
    let newPassword = "";
    let handleNestedPassword = passwordArray.flat();
    if (passwordArray.length > 0) {
      for (let i = 0; i < range; i++) {
        const randomIndex = Math.floor(
          Math.random() * handleNestedPassword.length
        );

        newPassword += handleNestedPassword[randomIndex];
      }

      setPassword(newPassword);
    }
  };

  return (
    <>
      <PasswordGraph>
        <p>{password}</p>
      </PasswordGraph>
      <Main>
        <div>
          <ChangeLength>
            <p>Character Length</p>
            <span>{range}</span>
          </ChangeLength>
          <RangeDiv>
            <input
              type="range"
              min="0"
              max="14"
              step="1"
              value={range}
              onChange={handleRangeChange}
            />
          </RangeDiv>

          <GeneratorContainer>
            <CheckBoxDiv>
              <input
                onChange={handleUpperCase}
                type="checkBox"
                id="checkBox1"
              />
              <label htmlFor="checkBox1">Include Uppercase Letters</label>
            </CheckBoxDiv>
            <CheckBoxDiv>
              <input
                type="checkBox"
                id="checkBox2"
                onChange={handleLowerCase}
              />
              <label htmlFor="checkBox2">Include Lowercase Letters</label>
            </CheckBoxDiv>
            <CheckBoxDiv>
              <input type="checkBox" id="checkBox3" onChange={handleNumber} />
              <label htmlFor="checkBox3">Include Numbers</label>
            </CheckBoxDiv>
            <CheckBoxDiv>
              <input type="checkBox" id="checkBox4" onChange={handleSymbol} />
              <label htmlFor="checkBox4">Include Symbols</label>
            </CheckBoxDiv>
          </GeneratorContainer>
        </div>
        <Button onClick={generatePassword}>GENERATE</Button>
      </Main>
    </>
  );
}

const Main = styled.div`
  background: var(--Dark-Grey, #24232c);
  width: 343px;
  height: 423px;
`;
const PasswordGraph = styled.div`
  background: var(--Dark-Grey, #24232c);
  width: 343px;
  height: 64px;
  color: var(--Almost-White, #e6e5ea);
  margin-bottom: 2rem;
  font-family: "JetBrains Mono";
  font-size: 24px;
  display: flex;
  align-items: center;
  font-weight: 700;
  line-height: normal;
  & > p {
    padding: 1rem;
  }
`;
const CheckBoxDiv = styled.div`
  color: var(--Almost-White, #e6e5ea);
  font-family: "JetBrains Mono";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding: 1rem 2rem 0rem 2rem;
`;

const GeneratorContainer = styled.div``;
const ChangeLength = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3rem 1rem 3rem;
  & > p {
    color: var(--Almost-White, #e6e5ea);
    font-family: "JetBrains Mono";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  & > span {
    color: var(--Neon-Green, #a4ffaf);
    font-family: "JetBrains Mono";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
const RangeDiv = styled.div`
  width: 100%;
  height: 20px;
  flex-shrink: 0;
  display: flex;

  justify-content: center;
  & > input {
    width: 311px;
    height: 8px;
  }
`;
const Button = styled.button`
  width: 311px;
  height: 56px;
  flex-shrink: 0;
  background: var(--Neon-Green, #a4ffaf);
  margin-top: 90px;
  margin-left: 15px;
  color: var(--Dark-Grey, #24232c);
  text-align: center;
  font-family: "JetBrains Mono";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
export default App;
