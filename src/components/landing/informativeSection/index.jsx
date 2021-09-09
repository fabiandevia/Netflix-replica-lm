import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const InformativeSection = ({ img, title, description, align }) => (
  <article className={`informative-section ${align === 'left' ? 'left' : ''}`}>
    <div className='content'>
      <h1 className='title'>{title}</h1>
      <p className='description'>{description}</p>
    </div>
    <img className='img' src={img} alt='' />
  </article>
);

InformativeSection.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  align: PropTypes.oneOf(['left', 'right']),
};

InformativeSection.defaultProps = {
  align: 'right',
};

export default InformativeSection;
