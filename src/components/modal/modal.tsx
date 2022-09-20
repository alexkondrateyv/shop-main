import React from 'react';

import { Field, Form, Formik, FormikHelpers } from 'formik';

import { BASE_URL } from '../../constants/URL';
import { useActions } from '../../hooks/useAction';
import { IProduct } from '../../types/product';

import { axiosPost } from '../../services/axios';
import './modal.scss';

export const Modal: React.FC = () => {
  const { fetchProducts } = useActions()
  const { turnOffModal } = useActions()

  return (
    <div className="bg">
      <Formik
        initialValues={{
          imageUrl: '',
          name: '',
          count: '',
          width: '',
          height: '',
          weight: ''
        }}
        onSubmit={(
          values: IProduct,
          { setSubmitting }: FormikHelpers<IProduct>
        ) => {
          axiosPost(BASE_URL, {
            imageUrl: values.imageUrl,
            name: values.name,
            count: +values.count,
            size: {
              width: +values.width,
              height: +values.height
            },
            weight: values.weight,
            comments: []
          })
          setTimeout(() => {
            fetchProducts('/');
            turnOffModal()
          }, 500)
          setSubmitting(false);
        }}
      >
        <Form className="form">
          <label htmlFor="imageUrl" className="form__label">Image URL:*</label>
          <Field id="imageUrl" name="imageUrl" placeholder="http://www.your-image.com" required className="form__input" />
          <label htmlFor="name" className="form__label">Name:*</label>
          <Field id="name" name="name" placeholder="Gaming mouse" required className="form__input" />
          <label htmlFor="count" className="form__label">Count:*</label>
          <Field id="count" name="count" placeholder="5" required className="form__input" />
          <label htmlFor="width" className="form__label">Width:*</label>
          <Field id="width" name="width" placeholder="200" required className="form__input" />
          <label htmlFor="height" className="form__label">Height:*</label>
          <Field id="height" name="height" placeholder="50" required className="form__input" />
          <label htmlFor="weight" className="form__label">Weight:*</label>
          <Field id="weight" name="weight" placeholder="200g" required className="form__input" />
          <button type="submit" className="form__submit">Submit</button>
          <button type="button" className="form__cancel" onClick={turnOffModal}>Cancel</button>
        </Form>
      </Formik>
    </div>
  )
}