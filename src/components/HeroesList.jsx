import { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../providers/FirebaseProvider';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';

const HeroesList = () => {
  const fbContext = useContext(FirebaseContext);
  const db = fbContext.db;

  const [heroes, setHeroes] = useState([]);
  
  useEffect(() => {
    let collectionRef = collection(db, 'heroes');
    let queryRef = query(collectionRef, orderBy('name'));
    const unsubscribe = onSnapshot(queryRef, (querySnap) => {
      if (querySnap.empty) {
        console.log('No docs found');
      } else {
        let heroesData = querySnap.docs.map((doc) => ({...doc.data(), DOC_ID: doc.id}));
        setHeroes(heroesData);
      }
    });
    return unsubscribe;
  }, []);

  return (
    <div>
      <br />
      {heroes.map((hero) => {
        return (
          <ul key={hero.DOC_ID}>
            <li>name: {hero.name}</li>
            <li>vehicle: {hero.vehicle}</li>
            <li>docId: {hero.DOC_ID}</li>
            <hr />
          </ul>
        );
      })}
    </div>
  );
};

export default HeroesList;
