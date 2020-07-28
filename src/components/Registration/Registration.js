import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import { useRecoilState } from 'recoil';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import { FormattedMessage } from 'react-intl';
import Input from '../../common/Input';
import TelInput from '../../common/TelInput';
import FileInput from '../../common/FileInput';
import RadioGroup from '../../common/RadioGroup';
import { PREFERED_LANGUAGES } from '../../constants/language.constants';
import { REG_FORM_API } from '../../constants/config.constants';
import {
  smokingOptions,
  studentOptions,
  sexOptions,
  hasCarOptions,
} from '../../mappers/form.mappers';
import { useQuery } from '../../utils/hooks/useQuery';
import FullLoader from '../../common/FullLoader';
import { generateOptions } from '../../utils/helpers';
import { langState } from '../../recoilState';
import { registrationSchema } from './registrationSchema';

const Registration = () => {
  const [lang] = useRecoilState(langState);
  const { register, handleSubmit, errors, control, getValues } = useForm({
    resolver: yupResolver(registrationSchema),
  });
  console.log(errors, 1111111);
  const { data, error, loading } = useQuery(REG_FORM_API);

  const onSubmit = (data) => console.log(data, 5555555);

  // capitalize the first letter
  const langToShow = lang ? lang.charAt(0).toUpperCase() + lang.slice(1) : '';
  const citiesOptions = data?.cities
    ? generateOptions(data.cities, langToShow)
    : [];
  const educationOptions = data?.educations
    ? generateOptions(data.educations, langToShow)
    : [];
  const languagesOptions = data?.languages
    ? generateOptions(data.languages)
    : [];

  return (
    <>
      <div className='page page--white'>
        <div className='container container-min'>
          <h1 className='page-header'>რეგისტრაცია</h1>
          <p>
            გთხოვთ გაითვალისწინოთ - იმისთვის, რომ თქვენი პროფილი გამოჩნდეს ჩვენს
            საიტზე აუცილებელია რაც შეიძლება მეტი ინფორმაცია იყოს შევსებული.
            რეგისტრაციის გავლის შემდეგ 24 საათის განმავლობაში მოხდება შევსებული
            ინფორმაციის მოდერაცია.
          </p>
          {loading && <FullLoader />}
          {error && 'Error in fetching master data'}
          {data && (
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='input-out'>
                <label className='label' htmlFor='preferedLanguage'>
                  <FormattedMessage id='label.preferedLanguage' />*
                </label>
                <Select
                  className='select'
                  name='preferedLanguage'
                  id='preferedLanguage'
                  placeholder='აირჩიე სასურველი ენა'
                  options={PREFERED_LANGUAGES}
                  defaultValue={PREFERED_LANGUAGES[0]}
                />
                <div className='info-text info-text-box'>
                  !!! აირჩიეთ თქვენთვის სასურველი ენა, რომელზეც იქნება შევსებული
                  ინფორმაცია. დამატებითი ენებისთვის არჩევა / შევსება ხდება
                  თქვენი პირადი კაბინეტიდან რეგისტრაციის შემდგომ.
                </div>
              </div>
              <div className='input-out'>
                <label className='label' htmlFor='phone'>
                  <FormattedMessage id='label.phone' />*
                </label>
                <Controller
                  control={control}
                  name='phone'
                  render={({ onChange }) => <TelInput onChange={onChange} />}
                />
                <div className='info-text info-text-box'>
                  !!! გთხოვთ გაითვალისწინოთ, რომ თუ თქვენი ტელეფონის ნომერი უკვე
                  რეგისტრირებულია ჩვენს ბაზაში, თქვენ ვერ გაივლით რეგისტრაციას
                  ხელმეორედ
                </div>
              </div>
              <div className='input-out'>
                <label className='label' htmlFor='firstName'>
                  <FormattedMessage id='label.firstName' />*
                </label>
                <Input
                  id='firstName'
                  name='firstName'
                  register={register}
                  error={errors.firstName?.message}
                />
              </div>
              <div className='input-out'>
                <label className='label' htmlFor='lastName'>
                  *
                  <FormattedMessage id='label.lastName' />
                </label>
                <Input
                  id='lastName'
                  name='lastName'
                  register={register}
                  error={errors.lastName?.message}
                />
              </div>
              <div className='input-out'>
                <label className='label' htmlFor='personalNumber'>
                  <FormattedMessage id='label.personalNumber' />*
                </label>
                <Input
                  id='personalNumber'
                  name='personalNumber'
                  register={register}
                  error={errors.personalNumber?.message}
                />
                <div className='info-text info-text-box'>
                  !!! <FormattedMessage id='info.personalNumberWarning' />
                </div>
              </div>
              <div className='input-out'>
                <label className='label' htmlFor='email'>
                  <FormattedMessage id='label.email' />*
                </label>
                <Input id='email' name='email' register={register} />
              </div>
              <div className='input-out'>
                <label className='label' htmlFor='facebook'>
                  <FormattedMessage id='label.facebook' />
                </label>
                <Input id='facebook' name='facebook' />
              </div>
              <div className='input-out'>
                <label className='label' htmlFor='city'>
                  <FormattedMessage id='label.city' />*
                </label>
                <Select
                  className='select'
                  name='city'
                  id='city'
                  placeholder='აირჩიე ქალაქი'
                  options={citiesOptions}
                />
              </div>
              <div className='input-out'>
                <label className='label' htmlFor='birthDay'>
                  <FormattedMessage id='label.age' />*
                </label>
                <DatePicker
                  // selected={this.state.startDate}
                  onChange={(e) => console.log(e)}
                />
              </div>
              <div className='input-out'>
                <label className='label' htmlFor='sex'>
                  <FormattedMessage id='label.sex' />*
                </label>
                <RadioGroup name='sex' radioOptions={sexOptions} />
              </div>
              <div className='input-out'>
                <label className='label' htmlFor='languages'>
                  <FormattedMessage id='label.languages' />*
                </label>
                <Select
                  className='select'
                  name='languages'
                  id='languages'
                  placeholder='აირჩიე ენა'
                  options={languagesOptions}
                />
                <div className='info-text info-text-box'>
                  !!! <FormattedMessage id='info.selectLanguages' />
                </div>
              </div>
              <div className='input-out'>
                <label className='label' htmlFor='education'>
                  <FormattedMessage id='label.education' />*
                </label>
                <Select
                  className='select'
                  name='education'
                  id='education'
                  placeholder='აირჩიე განათლება'
                  options={educationOptions}
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
                  <FormattedMessage id='label.student' />*
                </label>
                <RadioGroup name='isStudent' radioOptions={studentOptions} />
              </div>
              <div className='input-out'>
                <label className='label' htmlFor='isSmoking'>
                  <FormattedMessage id='label.smoking' />*
                </label>
                <RadioGroup name='isSmoking' radioOptions={smokingOptions} />
              </div>
              <div className='input-out'>
                <label className='label' htmlFor='hasCar'>
                  <FormattedMessage id='label.hasCar' />*
                </label>
                <RadioGroup name='hasCar' radioOptions={hasCarOptions} />
              </div>
              <div className='input-out'>
                <label className='label' htmlFor='description'>
                  <FormattedMessage id='label.description' />
                </label>
                <Input isTextArea name='description' id='description' />
              </div>
              <div className='input-out'>
                <input
                  className='btn'
                  type='submit'
                  value='რეგისტრაცია'
                  onClick={() => console.log(getValues(), 66666)}
                />
              </div>
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Registration;
