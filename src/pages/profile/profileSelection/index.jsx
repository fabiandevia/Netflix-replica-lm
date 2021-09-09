import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { profileUpdate, catalog } from '../../../routes/routes';
import ProfileCard from '../../../components/profile/profileCard';
import UserContext from '../../../context/userContext';
import './styles.scss';

const ProfileSelection = () => {
  const [edit, setEdit] = useState(false);
  const { users, updateCurrentUser } = useContext(UserContext);
  const history = useHistory();

  const handleUserClick = user => {
    updateCurrentUser(user);
    if (edit) history.push(profileUpdate);
    else history.push(catalog);
  };

  const handleUpdateUsers = () => setEdit(!edit);

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
            edit={edit}
          />
        ))}
      </div>
      <button className='update-btn' onClick={handleUpdateUsers}>
        {edit ? 'Cancelar' : 'Administrar perfiles'}
      </button>
    </section>
  );
};

export default ProfileSelection;
