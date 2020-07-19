import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Select from 'react-select';
import { FormattedMessage } from 'react-intl';
import Input from '../../common/Input';
import TelInput from '../../common/TelInput';
import FileInput from '../../common/FileInput';
import RadioGroup from '../../common/RadioGroup';
import { sexOptions } from './mapper';
import { REG_FORM_API } from '../../constants/config.constants';
import { useQuery } from '../../utils/hooks/useQuery';
import FullLoader from '../../common/FullLoader';

const Registration = () => {
  const { data, error, loading } = useQuery(REG_FORM_API);
  
  return (
    <>
      <div className='page page--white'>
        <div className='container container-min'>
          <h1 className='page-header'>რეგისტრაცია</h1>
          {loading && <FullLoader />}
          {error && 'Error in fetching master data'}
          {data && (
            <form>
              <div className='input-out'>
                <label className='label' htmlFor='phone'>
                  <FormattedMessage id='label.phone' />
                </label>
                <TelInput id='phone' name='phone' />
                <div className='info-text info-text-box'>
                  !!! გთხოვთ გაითვალისწინოთ, რომ თუ თქვენი ტელეფონის ნომერი უკვე
                  რეგისტრირებულია ჩვენს ბაზაში, თქვენ ვერ გაივლით რეგისტრაციას
                  ხელმეორედ
                </div>
              </div>
              <div className='input-out'>
                <label className='label' htmlFor='firsName'>
                  <FormattedMessage id='label.firstName' />
                </label>
                <Input id='firsName' name='firsName' />
              </div>
              <div className='input-out'>
                <label className='label' htmlFor='lastName'>
                  <FormattedMessage id='label.lastName' />
                </label>
                <Input id='lastName' name='lastName' />
              </div>
              <div className='input-out'>
                <label className='label' htmlFor='personalNumber'>
                  <FormattedMessage id='label.personalNumber' />
                </label>
                <Input id='personalNumber' name='personalNumber' />
                <div className='info-text info-text-box'>
                  !!! <FormattedMessage id='info.personalNumberWarning' />
                </div>
              </div>
              <div className='input-out'>
                <label className='label' htmlFor='facebook'>
                  <FormattedMessage id='label.facebook' />
                </label>
                <Input id='facebook' name='facebook' />
              </div>
              <div className='input-out'>
                <label className='label' htmlFor='city'>
                  <FormattedMessage id='label.city' />
                </label>
                <Select
                  className='select'
                  name='city'
                  id='city'
                  placeholder='აირჩიე ქალაქი'
                  options={[]}
                />
              </div>
              <div className='input-out'>
                <label className='label' htmlFor='age'>
                  <FormattedMessage id='label.age' />
                </label>
                <Select
                  className='select'
                  name='age'
                  id='age'
                  placeholder='აირჩიე ასაკი'
                  options={[]}
                />
              </div>
              <div className='input-out'>
                <label className='label' htmlFor='sex'>
                  <FormattedMessage id='label.sex' />
                </label>
                <RadioGroup name='sex' radioOptions={sexOptions} />
              </div>
              <div className='input-out'>
                <label className='label' htmlFor='languages'>
                  <FormattedMessage id='label.languages' />
                </label>
                <Select
                  className='select'
                  name='languages'
                  id='languages'
                  placeholder='აირჩიე ენა'
                  options={[]}
                />
                <div className='info-text info-text-box'>
                  !!! <FormattedMessage id='info.selectLanguages' />
                </div>
              </div>
              <div className='input-out'>
                <label className='label' htmlFor='education'>
                  <FormattedMessage id='label.education' />
                </label>
                <Select
                  className='select'
                  name='education'
                  id='education'
                  placeholder='აირჩიე განათლება'
                  options={[]}
                />
              </div>
              <div className='input-out'>
                <label className='label' htmlFor='diploma-file'>
                  <FormattedMessage id='label.diplomaUpload' />
                </label>
                <FileInput id='diploma-file' name='diploma-file' />
                <div className='info-text info-text-box'>
                  !!! <FormattedMessage id='info.diplomaUpload' />
                </div>
              </div>
              <div className='input-out'>
                <label className='label' htmlFor='isStudent'>
                  <FormattedMessage id='label.student' />
                </label>
                <RadioGroup name='isStudent' radioOptions={sexOptions} />
              </div>
              <div className='input-out'>
                <label className='label' htmlFor='isSmoking'>
                  <FormattedMessage id='label.smoking' />
                </label>
                <RadioGroup name='isSmoking' radioOptions={sexOptions} />
              </div>
              <div className='input-out'>
                <input className='btn' type='submit' value='რეგისტრაცია' />
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Registration;
