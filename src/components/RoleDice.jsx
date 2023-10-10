import styled from "styled-components";

const RoleDice = ({ currentDice, roleDice }) => {
  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/dice/dice_${currentDice}.png`} alt="Dice 1" />
      </div>
      <p>Click on dice to role.</p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .dice {
    cursor: pointer;
  }
  p {
    margin: 5px 0;
    font-size: 20px;
  }
`;
