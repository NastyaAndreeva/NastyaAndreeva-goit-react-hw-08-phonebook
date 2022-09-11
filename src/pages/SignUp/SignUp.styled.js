import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const Label = styled.label`
  margin-bottom: 10px;
  display: block;
  color: white;
  font-weight: 600;
`;

export const ContactErrorMessage = styled(ErrorMessage)`
  color: ${({ theme }) => theme.colors.alert};
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

export const FieldName = styled(Field)`
  margin-left: 34px;
  border-radius: 3px;
`;

export const FieldEmail = styled(Field)`
  margin-left: 38px;
  border-radius: 3px;
`;

export const FieldPassword = styled(Field)`
  margin-left: 10px;
  border-radius: 3px;
`;
