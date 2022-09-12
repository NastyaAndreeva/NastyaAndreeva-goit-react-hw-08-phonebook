import { useDispatch } from 'react-redux';
import { authOperations } from 'store/auth';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { LoginForm } from 'components/auth/LoginForm';
import { Heading } from 'components/ui/Heading';

export default function Login() {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(authOperations.logIn(values));
    resetForm();
  };

  const validationSchema = Yup.object({
    email: Yup.string().max(16).required('Please, enter your email.'),
    password: Yup.string().min(7).required('Please, enter your password.'),
  });

  return (
    <div>
      <Heading>Login Page</Heading>

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <LoginForm />
      </Formik>
    </div>
  );
}
