import * as yup from 'yup';
import VALIDATION from '../../constants/validation.constants';

export const registrationSchema = yup.object().shape({
  firstName: yup
    .string()
    // .min(VALIDATION.NAME_MIN, 'min')
    // .max(VALIDATION.NAME_MAX, 'max')
    .required(),
  lastName: yup
    .string()
    // .min(VALIDATION.NAME_MIN, 'min')
    // .max(VALIDATION.NAME_MAX, 'max')
    .required(),
});
