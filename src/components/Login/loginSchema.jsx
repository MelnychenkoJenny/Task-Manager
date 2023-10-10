import { object, string } from 'yup';

export const loginSchema = object({
    email: string()
    .matches(
      /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
      'Type in correct email. For example: email@gmail.com'
    )
    .trim()
    .required('Email is required'),
  password: string()
    .matches(
      /^[a-zA-Z0-9\-!@#$%^&*()_+,.:;'"?/]+$/,
      'Type in correct password, at least 6 Latin characters'
    )
    .required('Password is required'),
  });
  