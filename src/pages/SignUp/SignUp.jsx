import { useDispatch } from 'react-redux';
import { authOperations } from 'store/auth';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Box } from 'components/Box';
import { Button } from 'components/ui/Button';
import {
  ContactErrorMessage,
  FieldEmail,
  FieldName,
  FieldPassword,
  FormStyled,
  Heading,
  Label,
} from './SignUp.styled';

export default function SignUp() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(authOperations.register(values));
    resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string().max(16).required('Please, enter your name.'),
    email: Yup.string().max(16).required('Please, enter your email.'),
    password: Yup.string().min(7).required('Please, enter your password.'),
  });

  return (
    <div>
      <Heading>SignUp Page</Heading>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
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
                <FieldPassword type="text" name="password" />
                <ContactErrorMessage name="password" component="p" />
              </Label>
            </div>
            <Button type="submit">Log in</Button>
          </Box>
        </FormStyled>
      </Formik>
    </div>
  );
}
