import React from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from '../../../general/buttonIcon';
import './styles.scss';

const IMG_DEFAULT =
  'https://mir-s3-cdn-cf.behance.net/project_modules/disp/bb3a8833850498.56ba69ac33f26.png';

const ProfileCard = ({ img, name, onClick, edit }) => {
  return (
    <div onClick={onClick} className='profile-card'>
      <img className='avatar' src={img || IMG_DEFAULT} alt='' />
      <h6 className='name'>{name}</h6>
      {edit && (
        <div className='update-wrapper'>
          <ButtonIcon icon='edit' />
        </div>
      )}
    </div>
  );
};

ProfileCard.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  edit: PropTypes.bool,
};

export default ProfileCard;
