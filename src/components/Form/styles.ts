import styled from 'styled-components';

export const Container = styled.section`
  min-height: 100vh;
  padding: 8rem 1rem;
  width: 100%;
  background: #f8f8f8;
`;

export const Main = styled.main`
  height: 100%;
  max-width: 1200px;
  margin-inline: auto;
`;

export const Form = styled.form`
  /* max-width: 900px;
  margin-inline: auto; */

  display: flex;
  flex-direction: column;
  gap: 2rem;

`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid #9d9d9d;

  transition: all 0.2s ease-in-out;

  &:focus {
    border-color:var(--black);
  }
`;

export const Select = styled.select`
  background: transparent;
  color: #252525;
  font-size: 1rem;
  background: var(--white);
  padding: 1rem;
  border: 1px solid #9d9d9d;
  border-radius: 5px;

  transition: all 0.2s ease-in-out;

  &:focus {
    box-shadow: 0 0 0 0.6pt #9d9d9d;
  }
`;

export const TextArea = styled.textarea`
  resize: none;
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid #9d9d9d;

  &:focus {
    border-color: var(--black);
  }
`;

export const WrappButton = styled.div`
  display: block;
  text-align: center;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
`;

export const Button = styled.a`
  background: #f8f8f8;
  background: var(--black);
  color: var(--white);
  text-align: center;
  border: 1px solid var(--black);

  font-size: 1rem;
  border-radius: 2rem;
  padding: .7rem 1.5rem;
  overflow: hidden;
  font-weight: bold;
  z-index: 1;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: #f8f8f8;
    color: #252525;
    border-color: var(--black);
  }
`;