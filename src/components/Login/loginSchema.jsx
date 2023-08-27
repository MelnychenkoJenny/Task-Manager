import { object, string } from 'yup';

export const loginSchema = object({
    email: string()
      .matches(
        /^([a-zA-Z0-9_-]+\.)*[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
        'Type in correct email'
      )
      .required('Email is required'),
    password: string()
      .matches(/^[0-9a-zA-Z!@#$%^&*]{6,64}$/, 'Type in correct password, at least 6 characters')
      .required('Password is required'),
  });
  