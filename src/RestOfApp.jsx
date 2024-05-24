import { useContext } from 'react';
import { AuthContext } from './providers/AuthProvider';
import LoginForm from './components/LoginForm';

const RestOfApp = () => {
  const authContext = useContext(AuthContext);

  const user = authContext.user;

  return (
    <div className='App'>
      {user ? 'you are logged in!' : 'not logged in 😔'}

      <LoginForm />
    </div>
  );
};

export default RestOfApp;
