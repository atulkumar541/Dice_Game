import styled from "styled-components";
export const Button = styled.button`
  padding: 10px 18px;
  border-radius: 5px;
  background: #000;
  color: #fff;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s background ease-in;

  &:hover {
    background-color: #fff;
    border: 1px solid #000;
    color: #000;
    transition: 0.3s background ease-in;
  }
`;
