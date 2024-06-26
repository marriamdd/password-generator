import styled from "styled-components";
export default function StrengthContainer({ strength }: { strength: number }) {
  const getColor = (strength: number) => {
    const colors = ["#F64A4A", "#FB7C58", "#F8CD65", "#A4FFAF"];
    return colors[strength - 1] || "#E6E5EA";
  };
  return (
    <Container strength={strength}>
      {" "}
      <div>
        <h2>STRENGTH</h2>
      </div>
      <div>
        <h3>MEDIUM</h3>
        {[1, 2, 3, 4].map((index) => (
          <span
            key={`span${index}`}
            id={`span${index}`}
            style={{
              background: strength >= index ? getColor(strength) : "#E6E5EA",
            }}
          ></span>
        ))}
      </div>
    </Container>
  );
}

const Container = styled.div<{ strength: number }>`
  width: 31.1rem;
  height: 5.6rem;
  margin: 1rem 1.5rem 1rem;
  background: #18171f;
  display: flex;
  justify-content: space-around;
  @media screen and (min-width: 768px) {
    width: 476px;
    height: 72px;
    margin-left: 3rem;
  }
  & > :nth-of-type(1) {
    display: flex;
    align-items: center;
    gap: 5rem;
    padding: 1rem;

    & > h2 {
      color: var(--Grey, #817d92);
      text-align: center;

      font-size: 1.6rem;

      font-weight: 700;
    }
  }
  & > :nth-of-type(2) {
    display: flex;
    gap: 1rem;
    align-items: center;
    margin-left: 1rem;
    & > h3 {
      color: var(--Almost-White, #e6e5ea);
      text-align: right;

      font-size: 1.8rem;

      font-weight: 700;
    }
    & > span {
      width: 1rem;
      height: 2.8rem;
    }
  }
`;
