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
    e: React.ChangeEvent<
      | HTMLInputElement
      | HTMLSelectElement
      | { value?: unknown; name?: any; type?: unknown }
    >
  ) => {
    e?.persist();

    let { name, value, type } = e.target;

    if (type === 'file') {
      //@ts-ignore
      value = e.target.files[0];
    }

    if (type === 'number') {
      //@ts-ignore
      if (value === '') {
        value = '';
      } else {
        //@ts-ignore
        value = +value;
      }
    }

    setValues({
      ...values,
      [name]: value
    });
  };

  const handleCheckboxChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    e.persist();
    const { name } = e.target;

    setValues({
      ...values,
      // We are toggling the state of the checkbox.
      // @ts-ignore
      [name]: !values[`${name}`]
    });
  };

  const handleSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    e?.preventDefault();
    setErrors(validate(values));

    setIsSubmitting(true);
  };

  const resetValues = () => {
    setValues(() => defaultValues as T);
    setIsSubmitting(false);
  };

  const resetErrors = () => {
    setErrors({} as T);
    setIsSubmitting(false);
  };

  const setValue = (key: string, value: any) => {
    setValues({
      ...values,
      [key]: value
    });
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback(values);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [errors]);

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    handleCheckboxChange,
    resetValues,
    resetErrors,
    setValue
  };
};
