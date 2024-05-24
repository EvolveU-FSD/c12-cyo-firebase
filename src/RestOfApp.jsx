import { useContext } from 'react';
import { FirebaseContext } from './providers/FirebaseProvider';

const RestOfApp = () => {
  const fbContext = useContext(FirebaseContext);
  const app = fbContext.app;

  return (
    <div>
      Firebase app info:
      <br />
      <br />
      {JSON.stringify(app)}
    </div>
  );
};

export default RestOfApp;
