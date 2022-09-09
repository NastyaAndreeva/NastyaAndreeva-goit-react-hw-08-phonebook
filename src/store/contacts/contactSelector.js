import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;

const getFilter = state => state.contacts.filter;

const getAllContacts = state => state.contacts.contacts;

const getVisibleContacts = createSelector(
  [getAllContacts, getFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter(({ description }) =>
      description.toLowerCase().includes(normalizedFilter)
    );
  }
);

const contactsSelectors = {
  getLoading,
  getFilter,
  getAllContacts,
  getVisibleContacts,
};
export default contactsSelectors;
