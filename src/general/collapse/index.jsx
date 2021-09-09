import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const Collapse = ({ title, description, active, onClick }) => {
  const [open, setOpen] = useState(active);

  useEffect(() => {
    setOpen(active);
  }, [active]);

  const handleOpen = () => {
    setOpen(!open);
    onClick();
  };

  return (
    <div className='collapse'>
      <div className='title' onClick={handleOpen}>
        {title}
      </div>
      <p className={`description ${open ? 'open' : ''}`}>{description}</p>
    </div>
  );
};

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  active: PropTypes.bool,
  onClick: PropTypes.func,
};

Collapse.defaultProps = {
  active: false,
  onClick: () => {},
};

export const CollapseGroup = ({ items }) => {
  const [active, setActive] = useState(-1);

  const handleClick = index => {
    setActive(index);
  };

  return (
    <>
      {items.map(({ title, description }, index) => (
        <Collapse
          key={`collapse-${index}`}
          title={title}
          description={description}
          active={active === index}
          onClick={() => handleClick(index)}
        />
      ))}
    </>
  );
};

CollapseGroup.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
    }),
  ),
};

export default Collapse;
