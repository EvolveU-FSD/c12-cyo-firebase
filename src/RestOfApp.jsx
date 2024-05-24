import { useContext } from 'react';
import { AuthContext } from './providers/AuthProvider';
import LoginForm from './components/LoginForm';
import HeroesList from './components/HeroesList';
import AddHeroForm from './components/AddHeroForm';

const RestOfApp = () => {
  const authContext = useContext(AuthContext);

  const user = authContext.user;

  return (
    <div className='App'>
      {user
        ? 'you are logged in! as ' + user.email + ` (${user.uid})`
        : 'not logged in 😔'}

      <LoginForm />
      <AddHeroForm />
      <HeroesList />
    </div>
  );
};

export default RestOfApp;
