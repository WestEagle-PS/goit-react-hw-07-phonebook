import { Provider } from 'react-redux';
import store from 'redux/store';
import PhoneBook from './PhoneBook/PhoneBook';

export const App = () => {
  return (
    <Provider store={store}>
      <PhoneBook />
    </Provider>
  );
};
