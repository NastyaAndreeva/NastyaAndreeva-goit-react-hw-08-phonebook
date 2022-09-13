import { useRedux } from 'hooks';
import { changeFilter, contactsSelectors } from 'store/contacts';
import { Input } from 'components/ui/Input';

export const Filter = () => {
  const [selector, dispatch] = useRedux();
  const filter = selector(contactsSelectors.getFilter);

  const onChange = e => {
    return dispatch(changeFilter(e.currentTarget.value));
  };
  return <Input type="text" name="filter" value={filter} onChange={onChange} />;
};
