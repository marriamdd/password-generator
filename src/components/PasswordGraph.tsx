import { useState } from "react";
import styled from "styled-components";

export default function PasswordGraph({ password }: { password: string }) {
  const [copy, setCopy] = useState<boolean>(false);
  const copyPasswordToClipboard = () => {
    navigator.clipboard
      .writeText(password)
      .then(() => {
        setCopy(!copy);
      })
      .catch((error) => {
        console.error("Failed to copy password: ", error);
        alert("Failed to copy password. Please try again.");
      });
  };
  return (
    <PassGraph>
      <p style={{ width: "29.5rem" }}>{password}</p>
      {copy && (
        <p
          style={{
            color: "#A4FFAF",
            fontSize: "18px",
            fontWeight: "700",
            width: "10rem",
          }}
        >
          COPIED
        </p>
      )}
      <picture>
        <img
          style={{ width: "2rem", marginRight: "1rem" }}
          src="/fa-regular_copy.svg"
          alt="Copy Password"
          onClick={copyPasswordToClipboard}
        />
      </picture>
    </PassGraph>
  );
}

const PassGraph = styled.div`
  background: var(--Dark-Grey, #24232c);
  width: 34.3rem;
  height: 6.4rem;
  color: var(--Almost-White, #e6e5ea);
  margin-bottom: 2rem;
  font-family: "JetBrains Mono";
  font-size: 2rem;
  display: flex;
  align-items: center;
  font-weight: 700;
  line-height: normal;
  display: flex;
  justify-content: space-between;
  & > p {
    padding: 1rem;
  }
`;
