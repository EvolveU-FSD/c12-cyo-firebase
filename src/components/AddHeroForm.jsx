import { useContext, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { FirebaseContext } from '../providers/FirebaseProvider';

const AddHeroForm = () => {
  const fbContext = useContext(FirebaseContext);
  const db = fbContext.db;

  const [name, setName] = useState('');
  const [vehicle, setVehicle] = useState('');

  const addHero = async (heroName, heroVehicle) => {
    try {
      let collectionRef = collection(db, 'heroes');
      await addDoc(collectionRef, { name: heroName, vehicle: heroVehicle });
      setName('');
      setVehicle('');
    } catch (ex) {
      console.log('FIRESTORE ADD FAILURE!', ex.message);
    }
  };
  return (
    <div>
      <input
        name='name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <input
        name='vehicle'
        value={vehicle}
        onChange={(e) => setVehicle(e.target.value)}
      />
      <br />
      <button onClick={() => addHero(name, vehicle)}>ADD HERO</button>
    </div>
  );
};

export default AddHeroForm;
