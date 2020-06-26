import React from 'react';
import { Link } from 'react-router-dom';
import categories from '../../mockups/categories.json';
import './stickyFilter.scss';

const StickyFilter = () => {
  return (
    <div className='sticky'>
      <div className='btns'>
        {categories.map((category) => (
          <Link
            key={`link-${category.id}`}
            className='btn btn-transparent'
            to={{
              pathname: '/profiles',
              state: { category: category.code },
            }}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default StickyFilter;
