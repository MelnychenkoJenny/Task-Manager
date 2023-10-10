import { object, string } from 'yup';

export const registerSchema = object({
  name: string()
    .matches(
      /^[0-9a-zA-Zа-яА-ЯёЁіІїЇєЄґҐ!@#$%^&* .\\/-]{2,32}$/,
      'Type in correct name. For example Jacob Mercer2,'
    )
    .trim()
    .required('Name is required'),
  email: string()
    .matches(
      /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
      'Type in correct email. For example: email@gmail.com'
    )
    .trim()
    .required('Email is required'),
  password: string()
    .matches(
      /^[a-zA-Z0-9\-!@#$%^&*()_+,.:;'"?/]{6,64}$/,
      'Type in correct password, at least 6 Latin characters'
    )
    .required('Password is required'),
});
