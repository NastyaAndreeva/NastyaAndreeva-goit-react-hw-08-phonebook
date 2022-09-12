import { Box } from 'components/ui/Box';
import { Button } from 'components/ui/Button';
import {
  ContactErrorMessage,
  FieldEmail,
  FieldPassword,
  FormStyled,
  Label,
} from './LoginForm.styled';

export const LoginForm = () => (
  <FormStyled autoComplete="off">
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      as="section"
    >
      <div>
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
