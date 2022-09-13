import 'react-phone-input-2/lib/style.css';
import { nanoid } from 'nanoid';
import styled from 'styled-components';
import { Box } from 'components/ui/Box';
import { toast } from 'react-toastify';
import { useRedux } from 'hooks';
import { contactsOperations, contactsSelectors } from 'store/contacts';
import { useFormik } from 'formik';
import { Input, PhoneInputStyled } from 'components/ui/Input';
import { Span } from 'components/ui/Span';
import { Label } from 'components/ui/Label';
import { AddButton } from 'components/ui/AddButton';

const FormStyled = styled.form`
  margin-bottom: 30px;
`;

export const ContactForm = () => {
  const [selector, dispatch] = useRedux();
  const contacts = selector(contactsSelectors.getAllContacts);

  const formik = useFormik({
    initialValues: {
      name: '',
      number: '+380',
    },
    onSubmit: (values, { resetForm }) => {
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
    <FormStyled onSubmit={formik.handleSubmit}>
      <Box
        width="480px"
        margin="0 auto"
        display="flex"
        flexDirection="column"
        as="section"
      >
        <Label htmlFor="name">
          <Span>Name</Span>
          <Input
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </Label>
        <Label htmlFor="test">
          <Span>Number</Span>
          <PhoneInputStyled
            country={'ua'}
            formik={formik}
            onChange={e => formik.setFieldValue('number', e)}
            name="number"
            value={formik.values.number}
          />
        </Label>
        <AddButton type="submit">Add contact</AddButton>
      </Box>
    </FormStyled>
  );
};
