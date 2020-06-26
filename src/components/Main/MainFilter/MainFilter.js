import React from 'react';
import Select from 'react-select';
import './mainFilter.scss';
import categories from '../../../mockups/categories.json';
import cities from '../../../mockups/cities.json';

const MainFilter = () => {
  const categoriesOptions =
    categories &&
    categories.map((category) => ({
      value: category.code,
      label: category.name,
    }));

  const citiesOptions =
    cities &&
    cities.map((city) => ({
      value: city.code,
      label: city.name,
    }));

  return (
    <div className='main_filter'>
      <div className='main_filter--inner'>
        <h2 className='main_filter--title'>მე ვეძებ</h2>
        <div className='input-out'>
          <Select
            className='select'
            name='category'
            id='category'
            placeholder='აირჩიე კატეგორია'
            options={categoriesOptions}
          />
        </div>
        <div className='input-out'>
          <Select
            className='select'
            name='city'
            id='city'
            placeholder='აირჩიე ქალაქი'
            options={citiesOptions}
          />
        </div>
        <div className='input-out flex'>
          <button className='btn btn-yellow main_filter--button'>ძებნა</button>
        </div>
      </div>
    </div>
  );
};

export default MainFilter;
