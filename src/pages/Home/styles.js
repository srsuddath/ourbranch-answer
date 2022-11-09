import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .button-oversized {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    width: 400px;
    border-radius: 4px;
    font-size: 24px;
    margin-top: 80px;
    text-decoration: none;
    background-color: #41de7d;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.15) 1px 1px 1.3px;

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    }
  }
`;
