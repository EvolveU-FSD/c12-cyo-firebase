import { useContext, useState } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const LoginForm = () => {
  const authContext = useContext(AuthContext);
  const loginFn = authContext.login;
  const logoutFn = authContext.logout;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <input
        name='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input
        name='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button onClick={() => loginFn(email, password)}>LOGIN</button>
      <br /> <button onClick={() => logoutFn()}>LOG OUT</button>
    </div>
  );
};

export default LoginForm;
