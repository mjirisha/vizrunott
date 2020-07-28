import * as yup from 'yup';
import { isValidPhoneNumber } from 'react-phone-number-input';
import VALIDATION from '../../constants/validation.constants';

export const registrationSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(VALIDATION.NAME_MIN, 'min')
    .max(VALIDATION.NAME_MAX, 'max')
    .required(),
  lastName: yup
    .string()
    .min(VALIDATION.NAME_MIN, 'min')
    .max(VALIDATION.NAME_MAX, 'max')
    .required(),
  email: yup
    .string()
    .email()
    .min(VALIDATION.EMAIL_MIN, 'min')
    .max(VALIDATION.EMAIL_MAX, 'max')
    .required(),
  personalNumber: yup
    .string()
    .test(
      'isPersonalNumberValid',
      'Invalid Personal number',
      (value) => value?.length !== VALIDATION.PERSONAL_NUMBER_LENGHT
    )
    .required(),
  phone: yup
    .string()
    .test('isPhoneValid', 'Invalid Phone', (phoneValue) =>
      isValidPhoneNumber(phoneValue)
    )
    .required('Phone is required'),
});
