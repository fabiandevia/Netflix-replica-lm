import React, { useState, useEffect } from 'react';
import ProfileCard from '../../../components/profile/profileCard';
import userData from './users.json';
import './styles.scss';

const ProfileSelection = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(userData);
  }, []);

  const handleUserClick = user => {
    console.log(user);
  };

  return (
    <section className='profile-selection'>
      <h1 className='title'>¿Quién está viendo ahora?</h1>
      <div className='users'>
        {users.map(({ id, name, img }) => (
          <ProfileCard
            key={`user-${id}`}
            img={img}
            name={name}
            onClick={() => handleUserClick({ img, name, id })}
          />
        ))}
      </div>
    </section>
  );
};

export default ProfileSelection;
