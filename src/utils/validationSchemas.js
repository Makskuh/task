import * as yup from 'yup';

export const TODO_SCHEMA = yup.object({
  writeTask: yup.string().matches(/^[a-zA-z]{0,}$/, 'The first character must be a letter').required('Write someone task'),
});