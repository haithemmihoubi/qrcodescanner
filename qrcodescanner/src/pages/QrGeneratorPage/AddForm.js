import React from 'react';
import { useFormik } from 'formik';

// A custom validation function. This must return an object
// which keys are symmetrical to our values/initialValues
const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  } else if (!/^[A-Za-z]*$/i.test(values.firstName)) {
    errors.firstName = 'Must be only characters';
  } else if (!(values.firstName[0] === values.firstName[0].toUpperCase())) {
    errors.firstName = 'Must start with uppercase characters';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  } else if (!/^[A-Za-z]*$/i.test(values.lastName)) {
    errors.lastName = 'Must be only characters';
  } else if (!(values.lastName[0] === values.lastName[0].toUpperCase())) {
    errors.lastName = 'Must start with uppercase characters';
  }

  if (!values.orderId) {
    errors.orderId = 'Required';
  } else if (!/^[A-Za-z0-9-]*$/i.test(values.orderId)) {
    errors.orderId = 'Must be characters, number and/or -';
  }

  return errors;
};

export const AddForm = props => {
  // Pass the useFormik() hook initial form values, a validate function that will be called when
  // form values change or fields are blurred, and a submit function that will
  // be called when the form is submitted
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      orderId: '',
    },
    validate,
    onSubmit: values => {
      const userInputJson = JSON.stringify(values, null, 2);
      props.onSubmit(userInputJson);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className='field mb-4'>
          <label htmlFor="firstName" className='block text-gray-700 text-base font-bold mb-2'>
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {formik.errors.firstName ? <div className="text-xs text-red-600 font-bold">{formik.errors.firstName}</div> : null}
        </div>

        <div className='field mb-4'>
          <label htmlFor="lastName" className='block text-gray-700 text-base font-bold mb-2'>
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
            className="shadow appearance-none border rounded w-80 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {formik.errors.lastName ? <div className="text-xs text-red-600 font-bold">{formik.errors.lastName}</div> : null}
        </div>

        <div className='field mb-6'>
          <label htmlFor="orderId" className='block text-gray-700 text-base font-bold mb-2'>
            Order ID
          </label>
          <input
            id="orderId"
            name="orderId"
            type="orderId"
            onChange={formik.handleChange}
            value={formik.values.orderId}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {formik.errors.orderId ? <div className="text-xs text-red-600 font-bold">{formik.errors.orderId}</div> : null}
        </div>

        <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
          Generate
        </button>
    </form>
  );
};