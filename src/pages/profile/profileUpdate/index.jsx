import React, { useContext, useState, useEffect, useMemo } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { profileSelection } from '../../../routes/routes';
import UserContext from '../../../context/userContext';
import { PROFILE_IMAGES } from '../../../constants/assets';
import SaveButton from '../../../general/saveButton';
import { ErrorMessage } from '../../../general/input';
import { REQUIRED } from '../../../constants/error_messages';
import './styles.scss';

const ProfileUpdate = () => {
  const [name, setName] = useState('');
  const [picture, setPicture] = useState('');
  const { currentUser, updateUser } = useContext(UserContext);
  const history = useHistory();

  const isEmptyName = name?.length === 0;

  const availablePictures = useMemo(() => {
    return PROFILE_IMAGES.filter(img => img !== picture);
  }, [picture]);

  useEffect(() => {
    setName(currentUser?.name);
    setPicture(currentUser?.img);
  }, [currentUser]);

  const handleNameChange = e => setName(e.target.value);

  const handlePictureChange = img => setPicture(img);

  const handleCancel = () => history.push(profileSelection);

  const handleSave = () => {
    updateUser({ ...currentUser, name, img: picture });
    history.push(profileSelection);
  };

  if (!currentUser) return <Redirect to={profileSelection} />;

  return (
    <section className='profile-update'>
      <div className='wrapper'>
        <h1 className='title'>Editar perfil</h1>
        <hr className='divider' />
        <div className='user-form'>
          <img src={picture} alt='' />
          <div className='input-wrapper'>
            <input value={name} onChange={handleNameChange} />
            <ErrorMessage visible={isEmptyName} message={REQUIRED} />
          </div>
        </div>
        <hr className='divider' />
        <div className='profile-images'>
          {availablePictures.map((img, index) => (
            <img
              key={`profile-img-${index}`}
              src={img}
              alt=''
              onClick={() => handlePictureChange(img)}
            />
          ))}
        </div>
        <hr className='divider' />
        <br />
        <div className='actions'>
          <SaveButton onClick={handleSave} disabled={isEmptyName} />
          <SaveButton text='Cancelar' type='default' onClick={handleCancel} />
        </div>
      </div>
    </section>
  );
};

export default ProfileUpdate;
