import { Box } from 'components/ui/Box';
import { Button } from 'components/ui/Button';
import {
  ContactErrorMessage,
  FieldStyled,
  FormStyled,
  Label,
} from './common/AuthForm.styled';

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
          <FieldStyled type="text" name="email" />
          <ContactErrorMessage name="email" component="p" />
        </Label>
        <Label htmlFor="password">
          Password
          <FieldStyled type="password" name="password" />
          <ContactErrorMessage name="password" component="p" />
        </Label>
      </div>
      <Button type="submit">Log in</Button>
    </Box>
  </FormStyled>
);
