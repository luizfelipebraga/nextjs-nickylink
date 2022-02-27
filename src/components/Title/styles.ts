import styled from 'styled-components';

export const Title = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin: 10px 0px 40px;

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    white-space: nowrap;
    gap: 10px;
    font-size: 2rem;
    color: rgb(242, 242, 242);
  
    &:after {
      content: "";
      display: block;
      position: relative;
      top: 0px;
      left: 15px;
      width: 650px;
      height: 1px;
      background-color: rgb(104, 104, 104);
    }
  }

`;
