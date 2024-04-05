import { useState, ChangeEvent } from "react";
import styled from "styled-components";
import "./App.css";
import StrengthContainer from "./components/StrengthContainer";
import PasswordGraph from "./components/PasswordGraph";

const allType = [
  [
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
  ],
  [
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
  ],
  ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  [
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
  ],
];

let passwordArray: string[][] = [];

function App() {
  const [gradient, setGradient] = useState(50);
  const [range, setRange] = useState<string>("8");
  const [password, setPassword] = useState<string>("");
  const [strength, setStrength] = useState<number>(0);

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRange(event.target.value);
    const value = parseInt(event.target.value);
    const newMiddlePoint =
      ((value - +event.target.min) / (+event.target.max - +event.target.min)) *
      100;
    setGradient(newMiddlePoint);
  };

  const generatePassword = () => {
    let newPassword = "";
    let handleNestedPassword = passwordArray.flat();
    if (passwordArray.length > 0) {
      for (let i = 0; i < +range; i++) {
        const randomIndex = Math.floor(
          Math.random() * handleNestedPassword.length
        );

        newPassword += handleNestedPassword[randomIndex];
      }

      setPassword(newPassword);
    }
    setStrength(passwordArray.length);
  };

  const collectChosenType = (
    event: ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    if (event.target.checked) {
      allType.forEach((item, index) => {
        if (index === +id) {
          passwordArray.push(item);
        }
      });
    } else {
      allType.forEach((_, index) => {
        if (index === +id) {
          passwordArray.splice(index, 1);
        }
      });
    }
  };

  return (
    <>
      <Title>Password Generator</Title>
      <PasswordGraph password={password} />

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
              max="16"
              step="1"
              value={range}
              onChange={handleRangeChange}
              style={{
                appearance: "none",
                background: `linear-gradient(to right, #A4FFAF 0%, #A4FFAF ${gradient}%, #18171F ${gradient}%, #18171F 100%)`,
              }}
            />
          </RangeDiv>

          <GeneratorContainer>
            <CheckBoxDiv>
              <input
                type="checkBox"
                id="1"
                onChange={(event) => collectChosenType(event, "0")}
              />
              <label htmlFor="1">Include Uppercase Letters</label>
            </CheckBoxDiv>
            <CheckBoxDiv>
              <input
                type="checkBox"
                id="2"
                onChange={(event) => collectChosenType(event, "1")}
              />
              <label htmlFor="2">Include Lowercase Letters</label>
            </CheckBoxDiv>
            <CheckBoxDiv>
              <input
                type="checkBox"
                id="3"
                onChange={(event) => collectChosenType(event, "2")}
              />
              <label htmlFor="3">Include Numbers</label>
            </CheckBoxDiv>
            <CheckBoxDiv>
              <input
                type="checkBox"
                id="4"
                onChange={(event) => collectChosenType(event, "3")}
              />
              <label htmlFor="4">Include Symbols</label>
            </CheckBoxDiv>
          </GeneratorContainer>
        </div>
        <StrengthContainer strength={strength} />
        <Button onClick={generatePassword}>GENERATE</Button>
      </Main>
    </>
  );
}

const Main = styled.div`
  background: var(--Dark-Grey, #24232c);
`;

const CheckBoxDiv = styled.div`
  color: var(--Almost-White, #e6e5ea);
  font-family: "JetBrains Mono";
  font-size: 1.6rem;

  font-weight: 700;

  padding: 1rem 2rem 0rem 2rem;
`;
const GeneratorContainer = styled.div`
  margin-top: 1.5rem;
  margin-bottom: 2rem;
  & > div {
    display: flex;
    align-items: center;
    gap: 1.2rem;

    input[type="checkbox"] {
      appearance: none;
      width: 2rem;
      height: 2rem;
      flex-shrink: 0;
      border: 2px solid #ccc;
      border-radius: 4px;
      outline: none;
      position: relative;
      cursor: pointer;
    }
    input[type="checkbox"]::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 1rem;
      height: 1rem;
      background: var(--Neon-Green, #a4ffaf);
      border-radius: 2px;
      display: none;
    }
    input[type="checkbox"]:checked::before {
      display: block;
    }
  }
`;
const ChangeLength = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 3rem 1rem 3rem;
  & > p {
    color: var(--Almost-White, #e6e5ea);

    font-size: 1.6rem;

    font-weight: 700;
  }
  & > span {
    color: var(--Neon-Green, #a4ffaf);

    font-size: 2.4rem;

    font-weight: 700;
  }
`;
const RangeDiv = styled.div`
  width: 100%;
  height: 2rem;

  display: flex;

  justify-content: center;
  & > input[type="range"] {
    width: 31.1rem;
    height: 0.8rem;

    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
    margin: auto;
  }

  & > input[type="range"]::-webkit-slider-thumb {
    background-color: white;

    width: 2.8rem;
    height: 2.8rem;
    border-radius: 50%;
    margin-top: -0.7rem;
    -webkit-appearance: none;
  }

  & > input[type="range"]::-webkit-slider-runnable-track {
    height: 8px;
    -webkit-appearance: none;
  }
`;
const Button = styled.button`
  width: 31.1rem;
  height: 5.6rem;
  flex-shrink: 0;
  background: var(--Neon-Green, #a4ffaf);
  margin: 1rem 1.5rem 1.5rem 1.5rem;

  color: var(--Dark-Grey, #24232c);
  text-align: center;
  font-family: "JetBrains Mono";
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  cursor: pointer;
`;

const Title = styled.p`
  color: #817d92;
  text-align: center;

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export default App;
