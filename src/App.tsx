import { useState, ChangeEvent } from "react";
import styled, { css } from "styled-components";
import "./App.css";
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

let passwordArray: string[] = [];

function App() {
  const [gradient, setGradient] = useState(50);
  const [range, setRange] = useState<string>("8");
  const [password, setPassword] = useState<string>("");
  const [background, setBackground] = useState<number | null>(null);

  const handleRangeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRange(event.target.value);
    const value = parseInt(event.target.value);
    const newMiddlePoint =
      ((value - +event.target.min) / (+event.target.max - +event.target.min)) *
      100;
    setGradient(newMiddlePoint);
  };
  let generated: string[] = [];
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
    console.log(passwordArray);
  };

  const collectChosenType = (
    event: React.ChangeEvent<HTMLInputElement>,
    id: string
  ) => {
    if (event.target.checked) {
      const collect = allType.map((item, index) => {
        if (index === +id) {
          passwordArray.push(...item);
          console.log(passwordArray);
        }
      });

      // for (let i = 0; i < +range; i++) {
      //   const randomIndex = Math.floor(Math.random() * +passwordArray.length);
      //   generated.push(passwordArray[randomIndex]);
      //   console.log(passwordArray[randomIndex]);
      // }

      // generated.splice(0, passwordArray.length);
    }
  };

  return (
    <>
      <Title>Password Generator</Title>
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
                onChange={() => collectChosenType(event, "0")}
              />
              <label htmlFor="1">Include Uppercase Letters</label>
            </CheckBoxDiv>
            <CheckBoxDiv>
              <input
                type="checkBox"
                id="2"
                onChange={() => collectChosenType(event, "1")}
              />
              <label htmlFor="2">Include Lowercase Letters</label>
            </CheckBoxDiv>
            <CheckBoxDiv>
              <input
                type="checkBox"
                id="3"
                onChange={() => collectChosenType(event, "2")}
              />
              <label htmlFor="3">Include Numbers</label>
            </CheckBoxDiv>
            <CheckBoxDiv>
              <input
                type="checkBox"
                id="4"
                onChange={() => collectChosenType(event, "3")}
              />
              <label htmlFor="4">Include Symbols</label>
            </CheckBoxDiv>
          </GeneratorContainer>
        </div>
        <StrengthContainer $background={background}>
          <div>
            <h2>STRENGTH</h2>
            <h3>MEDIUM</h3>
          </div>
          <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </StrengthContainer>
        <Button onClick={generatePassword}>GENERATE</Button>
      </Main>
    </>
  );
}

const Main = styled.div`
  background: var(--Dark-Grey, #24232c);
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

const GeneratorContainer = styled.div`
  & > div {
    display: flex;
    align-items: center;
    gap: 1rem;
    input[type="checkbox"] {
      appearance: none;
      width: 20px;
      height: 20px;
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
      width: 10px;
      height: 10px;
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
  & > input[type="range"] {
    width: 311px;
    height: 8px;

    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
    margin: auto;
  }

  & > input[type="range"]::-webkit-slider-thumb {
    background-color: white;

    width: 28px;
    height: 28px;
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
  width: 311px;
  height: 56px;
  flex-shrink: 0;
  background: var(--Neon-Green, #a4ffaf);
  margin: 0rem 1rem 1rem;

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

  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const StrengthContainer = styled.div`
  width: 311px;
  height: 56px;
  margin: 1rem 1rem 1rem;
  background: #18171f;
  display: flex;

  & > :nth-of-type(1) {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1rem;
    & > h3 {
      color: var(--Almost-White, #e6e5ea);
      text-align: right;

      font-size: 18px;

      font-weight: 700;
    }
    & > h2 {
      color: var(--Grey, #817d92);
      text-align: center;

      font-size: 16px;

      font-weight: 700;
    }
  }
  & > :nth-of-type(2) {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-left: 1rem;

    & > span {
      width: 10px;
      height: 28px;

      background-color: #e6e5ea;
    }
  }
`;
export default App;
