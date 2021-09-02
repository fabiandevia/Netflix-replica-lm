import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const IMG_DEFAULT =
  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/bb3a8833850498.56ba69ac33f26.png';

const ProfileCard = ({ img, name, onClick }) => {
  return (
    <div onClick={onClick} className='profile-card'>
      <img className='avatar' src={img || IMG_DEFAULT} alt='' />
      <h6 className='name'>{name}</h6>
    </div>
  );
};

ProfileCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
};

export default ProfileCard;
