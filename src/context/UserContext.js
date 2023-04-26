import { createContext } from 'react';

const userContext = createContext({
  userData: null,
  setUserData: () => {}
});

export default userContext;