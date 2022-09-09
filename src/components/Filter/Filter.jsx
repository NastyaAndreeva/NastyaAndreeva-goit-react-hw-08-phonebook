import { useRedux } from 'hooks';
import { changeFilter, contactsSelectors } from 'store/contacts';

export const Filter = () => {
  const [selector, dispatch] = useRedux();
  const filter = selector(contactsSelectors.getFilter);

  const onChange = e => {
    return dispatch(changeFilter(e.currentTarget.value));
  };
  return <input type="text" name="filter" value={filter} onChange={onChange} />;
};
