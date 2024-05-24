import './App.css';
import RestOfApp from './RestOfApp';
import AuthProvider from './providers/AuthProvider';
import FirebaseProvider from './providers/FirebaseProvider';

function App() {
  return (
    <FirebaseProvider>
      <AuthProvider>
        <RestOfApp />
      </AuthProvider>
    </FirebaseProvider>
  );
}

export default App;
