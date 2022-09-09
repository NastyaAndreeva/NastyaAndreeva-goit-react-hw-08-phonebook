import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import * as Yup from 'yup';
import { Box } from 'components/Box';
import { Button } from 'components/ui/Button';
import { toast } from 'react-toastify';
import { useRedux } from 'hooks';
import { contactsOperations, contactsSelectors } from 'store/contacts';

const Label = styled.label`
  margin-bottom: 10px;
`;

const ContactErrorMessage = styled(ErrorMessage)`
  color: ${({ theme }) => theme.colors.alert};
  font-size: 10px;
`;

export const ContactForm = () => {
  const [selector, dispatch] = useRedux();
  const contacts = selector(contactsSelectors.getAllContacts);

  const dataValidation = data =>
    contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

  const onSubmit = data => {
    const isAlreadyAdded = dataValidation(data);

    if (isAlreadyAdded) {
      toast.error(`${data.name} is already in your contacts`);
      return;
    }

    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };

    dispatch(contactsOperations.addContact(contact));
  };

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string().max(16).required('Please, enter your name.'),
    number: Yup.number().positive().required('Please, enter your number.'),
  });

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
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
          <Label htmlFor="number">
            Number
            <Field type="tel" name="number" />
            <ContactErrorMessage name="number" component="p" />
          </Label>
          <Button type="submit">Add contact</Button>
        </Box>
      </Form>
    </Formik>
  );
};
