import styled from 'styled-components';

export const CheckBoxWrapper = styled.div`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-top: 5px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 18px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  &:hover input ~ .checkmark {
    background-color: #ccc;
  }
  label {
     text-transform: capitalize;
  }
  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    &:checked ~ .checkmark {
        background-color: #2196F3;
    }
    &:checked ~ .checkmark:after {
         display: block;
    }
  }
  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: #eee;
    &:after {
        content: "";
        position: absolute;
        display: none;
        left: 9px;
        top: 5px;
        width: 5px;
        height: 10px;
        border: solid white;
        border-width: 0 3px 3px 0;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
    }
   }
`;