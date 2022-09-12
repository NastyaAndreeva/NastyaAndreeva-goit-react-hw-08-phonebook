import { useDispatch } from 'react-redux';
import { authOperations } from 'store/auth';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { SignUpForm } from 'components/auth/SignUpForm';
import { Heading } from 'components/ui/Heading';

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
        <SignUpForm />
      </Formik>
    </div>
  );
}
