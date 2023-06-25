import * as yup from 'yup';
export const initialValues = {
  writeTask: '',
};

export const TODO_SCHEMA = yup.object({
  writeTask: yup
    .string()
    .matches(/^[a-zA-z]{3,}$/, 'The first character must be a letter')
    .required(false),
});
