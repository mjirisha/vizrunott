import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import RadioGroup from '../../../common/RadioGroup';
import categories from '../../../mockups/categories.json';
import cities from '../../../mockups/cities.json';
import {
  typeOptions,
  ageOptions,
  experienceOptions,
  scheduleOptions,
  smokingOptions,
} from './mapper';
import './filter.scss';

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

const Filter = () => {
  const { register, handleSubmit, setValue, watch, errors } = useForm();
  const [selectValues, setSelectValues] = useState({
    city: null,
    category: null,
    profileAge: null,
    experience: null,
  });

  useEffect(() => {
    register({ name: 'category' });
    register({ name: 'type' });
    register({ name: 'city' });
    register({ name: 'profileAge' });
    register({ name: 'experience' });
    register({ name: 'schedule' });
  }, [register]);

  const onSubmit = (data) => console.log(data);

  const handleSelectChange = (option, selectObject) => {
    setValue(selectObject.name, option);
    setSelectValues((oldValues) => ({
      ...oldValues,
      [selectObject.name]: option,
    }));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='filter__grid'>
        <div className='input-out'>
          <label htmlFor='category'>კატეგორია</label>
          <Select
            className='select'
            name='category'
            id='category'
            placeholder='აირჩიე კატეგორია'
            options={categoriesOptions}
            value={selectValues.category}
            onChange={handleSelectChange}
          />
        </div>
        <div className='input-out'>
          <label htmlFor='type'>ტიპი</label>
          <Select
            className='select'
            name='type'
            id='type'
            placeholder='აირჩიე ტიპი'
            options={typeOptions}
            value={selectValues.type}
            onChange={handleSelectChange}
          />
        </div>
        <div className='input-out'>
          <label htmlFor='city'>ქალაქი</label>
          <Select
            className='select'
            name='city'
            id='city'
            placeholder='აირჩიე ქალაქი'
            options={citiesOptions}
            value={selectValues.city}
            onChange={handleSelectChange}
          />
        </div>
      </div>
      <div className='filter__grid'>
        <div className='input-out'>
          <label htmlFor='profileAge'>ასაკი</label>
          <Select
            className='select'
            name='profileAge'
            id='profileAge'
            placeholder='აირჩიე ასაკი'
            options={ageOptions}
            value={selectValues.profileAge}
            onChange={handleSelectChange}
          />
        </div>
        <div className='input-out'>
          <label htmlFor='experience'>გამოცდილება</label>
          <Select
            className='select'
            name='experience'
            id='experience'
            placeholder='აირჩიე'
            options={experienceOptions}
            value={selectValues.experience}
            onChange={handleSelectChange}
          />
        </div>
        <div className='input-out'>
          <label htmlFor='schedule'>სამუშაო გრაფიკი</label>
          <Select
            className='select'
            name='schedule'
            id='schedule'
            placeholder='აირჩიე'
            options={scheduleOptions}
            value={selectValues.schedule}
            onChange={handleSelectChange}
          />
        </div>
        <div className='input-out'>
          <label>მწეველი</label>
          <RadioGroup name='smoking' radioOptions={smokingOptions} />
        </div>
      </div>
      <div className='input-out flex'>
        <input
          type='submit'
          className='btn btn-yellow main_filter--button'
          value='ძებნა'
        />
      </div>
    </form>
  );
};

export default Filter;
