import styled from 'styled-components';

export const Title = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin: 10px 0px 40px;

  h2 {
    display: flex;
    text-align: center;
    align-items: center;
    position: relative;
    white-space: nowrap;
    font-size: clamp(2.1rem, 8vw, 3.5rem);
    color: rgb(242, 242, 242);

    &:after {
      content: "";
      display: block;
      position: relative;
      top: 0px;
      left: 15px;
      width: 900px;
      height: 1px;
      background-color: rgb(104, 104, 104);
    }

    span {
      color: #b5dde3;
    }
  }
`;
