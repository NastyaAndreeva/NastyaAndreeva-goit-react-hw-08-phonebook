import styled from 'styled-components';
import PhoneInput from 'react-phone-input-2';

export const Input = styled.input`
  color: darkblue;
  font-size: 16px;
  margin-left: 10px;
  background: #ffffff;
  border: 1px solid #cacaca;
  border-radius: 5px;
  line-height: 25px;
  height: 35px;
  width: 300px;
  outline: none;
`;

export const PhoneInputStyled = styled(PhoneInput)`
  width: 300px !important;
`;
