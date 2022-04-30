import React, { useEffect, useState } from 'react';

export const useForm = <T extends object = any>(
  defaultValues: T,
  callback: Function,
  validate: Function
) => {
  const [values, setValues] = useState<T>(() => defaultValues as T);
  const [errors, setErrors] = useState<T>({} as T);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    e.persist();
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value
    });
  };

  const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback(values);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  return { values, errors, handleChange, handleSubmit };
};
