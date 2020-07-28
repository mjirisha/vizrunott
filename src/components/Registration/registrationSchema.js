import * as yup from 'yup';
import { isValid } from 'date-fns';
import { isValidPhoneNumber } from 'react-phone-number-input';
import VALIDATION from '../../constants/validation.constants';

export const initialValues = {
  firstName: '',
  lastName: '',
  email: '',
  personalNumber: '',
  phone: '',
  facebook: '',
  city: {},
  languages: [],
  // birthday is string type, but datepicker returns null when empty
  birthday: null,
  sex: null,
  educationId: {},
  isStudent: null,
  isSmoking: null,
  hasCar: null,
  description: '',
  password: '',
  repassword: '',
};

const lower = /[a-z]/;
const number = /[0-9]/;

export const registrationSchema = (intl) =>
  yup.object().shape({
    firstName: yup
      .string()
      .min(
        VALIDATION.NAME_MIN,
        intl.formatMessage(
          {
            id: 'error.min',
          },
          {
            min: VALIDATION.NAME_MIN,
          }
        )
      )
      .max(
        VALIDATION.NAME_MAX,
        intl.formatMessage(
          {
            id: 'error.max',
          },
          { min: VALIDATION.NAME_MAX }
        )
      )
      .required(
        intl.formatMessage({
          id: 'error.required',
        })
      ),
    lastName: yup
      .string()
      .min(
        VALIDATION.NAME_MIN,
        intl.formatMessage(
          {
            id: 'error.min',
          },
          {
            min: VALIDATION.NAME_MIN,
          }
        )
      )
      .max(
        VALIDATION.NAME_MAX,
        intl.formatMessage(
          {
            id: 'error.max',
          },
          { min: VALIDATION.NAME_MAX }
        )
      )
      .required(
        intl.formatMessage({
          id: 'error.required',
        })
      ),
    email: yup
      .string()
      .email(
        intl.formatMessage({
          id: 'error.emailInvalid',
        })
      )
      .min(
        VALIDATION.EMAIL_MIN,
        intl.formatMessage(
          {
            id: 'error.min',
          },
          {
            min: VALIDATION.EMAIL_MIN,
          }
        )
      )
      .max(
        VALIDATION.EMAIL_MAX,
        intl.formatMessage(
          {
            id: 'error.max',
          },
          { min: VALIDATION.EMAIL_MAX }
        )
      )
      .required(
        intl.formatMessage({
          id: 'error.required',
        })
      ),
    personalNumber: yup
      .string()
      .test(
        'isPersonalNumberValid',
        intl.formatMessage({
          id: 'error.personalNumber',
        }),
        (value) => value?.length === VALIDATION.PERSONAL_NUMBER_LENGHT
      )
      .required(
        intl.formatMessage({
          id: 'error.required',
        })
      ),
    phone: yup
      .string()
      .test(
        'isPhoneValid',
        intl.formatMessage({
          id: 'error.phone',
        }),
        (phoneValue) => isValidPhoneNumber(phoneValue)
      )
      .required(
        intl.formatMessage({
          id: 'error.required',
        })
      ),
    facebook: yup
      .string()
      .test(
        'isFacebookValid',
        intl.formatMessage({
          id: 'error.facebook',
        }),
        (value) => value && value.includes('www.facebook.com/')
      )
      .notRequired(),
    cityId: yup.object().required(
      intl.formatMessage({
        id: 'error.required',
      })
    ),
    languages: yup
      .array()
      .min(
        1,
        intl.formatMessage({
          id: 'error.minLanguage',
        })
      )
      .required(
        intl.formatMessage({
          id: 'error.required',
        })
      ),
    birthday: yup
      .string()
      .test(
        'isDateValid',
        intl.formatMessage({
          id: 'error.date',
        }),
        (value) => {
          const date = value && new Date(value);
          return date && isValid(date);
        }
      )
      .nullable()
      .required(
        intl.formatMessage({
          id: 'error.required',
        })
      ),
    sex: yup
      .number()
      .nullable()
      .required(
        intl.formatMessage({
          id: 'error.required',
        })
      ),
    educationId: yup
      .object()
      .nullable()
      .required(
        intl.formatMessage({
          id: 'error.required',
        })
      ),
    isStudent: yup
      .boolean()
      .nullable()
      .required(
        intl.formatMessage({
          id: 'error.required',
        })
      ),
    isSmoking: yup
      .boolean()
      .nullable()
      .required(
        intl.formatMessage({
          id: 'error.required',
        })
      ),
    hasCar: yup
      .boolean()
      .nullable()
      .required(
        intl.formatMessage({
          id: 'error.required',
        })
      ),
    description: yup
      .string()
      .max(
        VALIDATION.DESCRIPTION_MAX_LENGTH,
        intl.formatMessage(
          {
            id: 'error.max',
          },
          { min: VALIDATION.DESCRIPTION_MAX_LENGTH }
        )
      )
      .notRequired(),
    password: yup
      .string()
      .min(
        VALIDATION.PASSWORD_MIN_LENGTH,
        intl.formatMessage(
          {
            id: 'error.passwordMin',
          },
          { min: VALIDATION.PASSWORD_MIN_LENGTH }
        )
      )
      .max(
        VALIDATION.PASSWORD_MAX_LENGTH,
        intl.formatMessage(
          {
            id: 'error.passwordMax',
          },
          { min: VALIDATION.PASSWORD_MAX_LENGTH }
        )
      )
      .test(
        'PasswordPattern',
        intl.formatMessage({
          id: 'error.passwordInvalid',
        }),
        (val) => val && number.test(val) && lower.test(val)
      )
      .required(
        intl.formatMessage({
          id: 'error.required',
        })
      ),
    repassword: yup
      .string()
      .oneOf(
        [yup.ref('password'), null],
        intl.formatMessage({
          id: 'error.passwordMatch',
        })
      )
      .required(
        intl.formatMessage({
          id: 'error.required',
        })
      ),
  });
