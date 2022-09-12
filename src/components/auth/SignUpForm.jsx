import { Box } from 'components/ui/Box';
import { Button } from 'components/ui/Button';
import {
  ContactErrorMessage,
  FieldEmail,
  FieldName,
  FieldPassword,
  FormStyled,
  Label,
} from './common/AuthForm.styled';

export const SignUpForm = () => (
  <FormStyled autoComplete="off">
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      as="section"
    >
      <div>
        <Label htmlFor="name">
          Name
          <FieldName type="text" name="name" />
          <ContactErrorMessage name="name" component="p" />
        </Label>
        <Label htmlFor="email">
          Email
          <FieldEmail type="text" name="email" />
          <ContactErrorMessage name="email" component="p" />
        </Label>
        <Label htmlFor="password">
          Password
          <FieldPassword type="password" name="password" />
          <ContactErrorMessage name="password" component="p" />
        </Label>
      </div>
      <Button type="submit">Log in</Button>
    </Box>
  </FormStyled>
);
