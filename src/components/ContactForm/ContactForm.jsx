import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import { Box } from 'components/Box';
import { Button } from 'components/ui/Button';
import { toast } from 'react-toastify';
import { useRedux } from 'hooks';
import { contactsOperations, contactsSelectors } from 'store/contacts';
import { useFormik } from 'formik';

const Label = styled.label`
  margin-bottom: 10px;
`;

export const ContactForm = () => {
  const [selector, dispatch] = useRedux();
  const contacts = selector(contactsSelectors.getAllContacts);

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '380',
    },
    onSubmit: (values, { resetForm, setFieldValue }) => {
      const isAlreadyAdded = dataValidation(values);

      if (isAlreadyAdded) {
        toast.error(`${values.name} is already in your contacts`);
        return;
      }

      const contact = {
        id: nanoid(),
        name: values.name,
        number: values.number,
      };

      dispatch(contactsOperations.addContact(contact));
      resetForm();
    },
  });

  const dataValidation = data =>
    contacts.find(
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );

  return (
    <form onSubmit={formik.handleSubmit}>
      <Box
        width="400px"
        margin="0 auto"
        display="flex"
        flexDirection="column"
        as="section"
      >
        <Label htmlFor="name">
          Name
          <input
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </Label>
        <Label htmlFor="test">
          Number
          <PhoneInput
            country={'ua'}
            formik={formik}
            onChange={e => formik.setFieldValue('number', e)}
            name="number"
            value={formik.values.number}
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </Box>
    </form>
  );
};
