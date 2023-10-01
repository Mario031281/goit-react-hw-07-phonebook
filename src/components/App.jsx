import { ContactsList } from './ContactsList/ContactsList';
import { FormContact } from './Form/Form';
import toast, { Toaster } from 'react-hot-toast';
import { Sections } from './Sections/Sections';
import { FilterContact } from './Filter/Filter';

import { GlobalStyle } from './GlobalStyled';
import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/selectors';
import { useEffect } from 'react';
export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    if (!error) return;
    toast.error(error);
  }, [error]);
  return (
    <div>
      {isLoading && <div>...loading</div>}
      <FormContact />
      <Sections />
      <FilterContact />
      <ContactsList />
      <GlobalStyle />
      <Toaster />
    </div>
  );
};
