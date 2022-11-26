import "./AdoptFormPage.scss"

import React from 'react';
import { useForm } from 'react-hook-form';

function AdoptFormPage() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Tus datos</h1>
      <input type="text" placeholder="Nombre y apellidos" {...register("", { required: true})} />
      <input type="text" placeholder="Email" {...register("Email", { required: true})} />
      <input type="tel" placeholder="Teléfono" {...register("Mobile number", { required: true, minLength: 6, maxLength: 12 })} />
      <input type="text" placeholder="DNI" {...register("DNI", { required: true, minLength: 6, maxLength: 12 })} />
      <h1>Dirección</h1>
      <input type="text" placeholder="Calle,número,piso" {...register("", { required: true})} />
      <input type="text" placeholder="Código postal" {...register("", { required: true})} />
      <input type="text" placeholder="Ciudad" {...register("", { required: true})} />
      <p>Acepto los términos y condiciones de la adopción<input type="checkbox" placeholder="" {...register("", { required: true})} /></p>
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" />

    </form>
  );
}
export default AdoptFormPage