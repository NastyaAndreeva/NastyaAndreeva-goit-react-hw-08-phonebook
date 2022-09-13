import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const Label = styled.label`
  margin-bottom: 10px;
  margin-left: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-weight: 600;
  width: 300px;
`;

export const ContactErrorMessage = styled(ErrorMessage)`
  color: ${({ theme }) => theme.colors.white};
  font-size: 10px;
`;

export const Heading = styled.h1`
  text-align: center;
`;

export const FormStyled = styled(Form)`
  margin: 0 auto;
  width: 400px;
  background-color: orangered;
  padding: 20px;
  border-radius: 10px;
`;

export const FieldStyled = styled(Field)`
  color: darkblue;
  font-size: 16px;
  margin-left: 10px;
  background: #ffffff;
  border: 1px solid #cacaca;
  border-radius: 5px;
  line-height: 25px;
  height: 35px;
  width: 200px;
  outline: none;
`;
