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

  .delete-button {
    width: 78px;
    height: 30px;
    border-radius: 4px;
    background-color: transparent;
    color: #b8b8b8;
    border: solid 1px #b8b8b8;
  }

  .delete-button.active {
    color: #ee0000;
    border: solid 1px #ee0000;
    &:hover {
      cursor: pointer;
    }
  }

  table {
    width: 854px;
    border-collapse: collapse;
  }

  thead {
    tr {
      border-top: solid 1px #e5e5e5;
      height: 30px;

      &:hover {
        background-color: transparent;
      }
    }
  }

  tr {
    height: 45px;
    border-bottom: solid 1px #e5e5e5;

    &:hover {
      background-color: #fafafa;

      .user-email {
        color: #0070c9;
      }
    }
  }

  td {
    font-size: 13px;
    letter-spacing: 0.14px;
    color: #333;
  }

  .checkbox-container {
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
  }

  .header {
    font-size: 12px;
    font-weight: 500;
    color: #777;
    letter-spacing: 0.13px;
  }

  .checkbox {
    width: 14px;
    height: 14px;
    border-radius: 3px;
    box-shadow: inset 0 0.5px 1.5px 0 rgba(0, 0, 0, 0.38);
    border: solid 0.5px rgba(0, 0, 0, 0.2);
    background-color: #fff;
  }

  .reset-button {
    width: 160px;
    height: 40px;
    border-radius: 4px;
    color: black;
    border: solid 1px black;
    margin-top: 30px;
    &:hover {
      cursor: pointer;
    }
  }
`;
