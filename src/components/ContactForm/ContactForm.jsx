import { Formik, Form, Field, ErrorMessage } from 'formik';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import * as Yup from 'yup';
import { Box } from 'components/Box';
import { Button } from 'components/ui/Button';
import { toast } from 'react-toastify';
import { useRedux } from 'hooks';
import { contactsOperations, contactsSelectors } from 'store/contacts';
import { useState } from 'react';

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
  const [number, setNumber] = useState(null);

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
      number,
    };

    dispatch(contactsOperations.addContact(contact));
  };

  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
    setNumber('380');
  };

  const validationSchema = Yup.object({
    name: Yup.string().max(16).required('Please, enter your name.'),
  });

  return (
    <Formik
      initialValues={{
        name: '',
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
          <Label htmlFor="test">
            Number
            <PhoneInput
              country={'ua'}
              value={number}
              onChange={phone => setNumber(phone)}
            />
          </Label>
          <Button type="submit">Add contact</Button>
        </Box>
      </Form>
    </Formik>
  );
};
