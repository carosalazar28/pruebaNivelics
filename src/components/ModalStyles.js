import styled from 'styled-components';

export const ContainerModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-out;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  background-color: gray;
  border-radius: 7px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 20px;
  color: white;
`;

export const LabelForm = styled.label`
  margin: 15px 0;
`;

export const InputForm = styled.input`
  margin: 15px 0;
  padding: 7px;
`;

export const InputArea = styled.textarea`
  margin: 15px 0;
  padding: 7px;
`;

export const ButtonClose = styled.button`
  width: 50px;
  border: 0;
  padding: 0.5rem 1rem;
  border-radius: 4px;
`;