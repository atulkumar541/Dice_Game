import { useState } from "react";
import styled from "styled-components";

const NumberSelector = ({
  setError,
  error,
  isSelectedNumber,
  setIsSelectedNumber,
}) => {
  const arrayNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (value) => {
    setIsSelectedNumber(value);
    setError("");
  };
  return (
    <SelectNumber>
      <span>{error}</span>
      <div className="flex">
        {arrayNumber.map((value, i) => (
          <Box
            isSelected={value === isSelectedNumber}
            key={i}
            onClick={() => numberSelectorHandler(value)}
          >
            {value}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </SelectNumber>
  );
};

export default NumberSelector;

const SelectNumber = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }
  span {
    color: red;
  }
  p {
    margin-top: 5px;
    font-size: 16px;
    font-weight: 700;
  }
`;

const Box = styled.div`
  height: 55px;
  cursor: pointer;
  width: 55px;
  border: 1px solid #000;
  display: grid;
  place-items: center;
  font-size: 20px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? "#000" : "#fff")};
  color: ${(props) => (props.isSelected ? "#fff" : "#000")};
`;
