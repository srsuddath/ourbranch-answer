import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .title-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 854px;
    margin: 80px 0 15px 0;
  }

  .title {
    height: 40px;
    font-size: 34px;
    font-weight: bold;
    color: #000;
    letter-spacing: 0.37px;
  }

  .save-button {
    width: 78px;
    height: 30px;
    border-radius: 4px;
    background-color: #0070c9;
    color: #ffffff;
    border: none;
    &:hover {
      cursor: pointer;
    }
  }

  .line {
    width: 854px;
    height: 1px;
    border-bottom: solid 1px #e5e5e5;
  }

  .edit-row {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 854px;
    margin: 15px 0 15px 0;

    .column {
      height: 254px;
      width: 426px;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
    }
    .name-label {
      width: 37px;
      height: 15px;
      font-size: 13px;
      font-weight: 500;
      letter-spacing: 0.14px;
      color: #333;
      margin-bottom: 7px;
    }
    .name-input {
      width: 240px;
      height: 21px;
      font-size: 13px;
      letter-spacing: -0.08px;
      color: #252525;
      border-radius: 4px;
      border: none;
      box-shadow: 0 0 0 3.5px rgba(59, 153, 252, 0.5), inset 0 0 0 0.5px #b9b9b9,
        inset 0 0 0 1px rgba(0, 0, 0, 0.05);
    }
  }

  .vertical-line {
    height: 254px;
    width: 1px;
    border-right: solid 1px #e5e5e5;
  }

  .role-radio-input {
    display: flex;
    height: 15px;
    justify-content: flex-start;
    align-items: center;
    margin: 5px 0 5px 15px;
    font-size: 13px;
    letter-spacing: -0.08px;
    color: #252525;

    .radio-button {
      width: 16px;
      height: 16px;
      border: solid 0.5px rgba(0, 0, 0, 0.2);
      background-color: #ffffff;
    }
  }

  .return-button {
    width: 160px;
    height: 40px;
    border-radius: 4px;
    color: black;
    border: solid 1px black;
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background-color: buttonface;
    &:hover {
      cursor: pointer;
    }
  }
`;
