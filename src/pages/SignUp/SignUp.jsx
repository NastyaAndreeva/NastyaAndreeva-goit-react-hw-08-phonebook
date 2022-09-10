import { useDispatch } from 'react-redux';
import { authOperations } from 'store/auth';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';
import * as Yup from 'yup';
import { Box } from 'components/Box';
import { Button } from 'components/ui/Button';

const Label = styled.label`
  margin-bottom: 10px;
`;

const ContactErrorMessage = styled(ErrorMessage)`
  color: ${({ theme }) => theme.colors.alert};
  font-size: 10px;
`;

const Heading = styled.h1`
  text-align: center;
`;

export default function SignUp() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(authOperations.logIn(values));
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
        <Form autoComplete="off">
          <Box
            width="400px"
            margin="0 auto"
            display="flex"
            flexDirection="column"
            as="section"
          >
            <Label htmlFor="name">
              Name
              <Field type="text" name="name" />
              <ContactErrorMessage name="name" component="p" />
            </Label>
            <Label htmlFor="email">
              Email
              <Field type="text" name="email" />
              <ContactErrorMessage name="email" component="p" />
            </Label>
            <Label htmlFor="password">
              Password
              <Field type="text" name="password" />
              <ContactErrorMessage name="password" component="p" />
            </Label>
            <Button type="submit">Log in</Button>
          </Box>
        </Form>
      </Formik>
    </div>
  );
}
