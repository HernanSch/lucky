import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import FormNavComponent from '../../Components/FormNavComponent/FormNavComponent'

const AdoptFormPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (

      <form onSubmit={handleSubmit(onSubmit)}>
      <FormNavComponent></FormNavComponent>
      
      <h3>Tus datos</h3>
      <input type="text" placeholder="Nombre y Apellidos" {...register("First name", {required: true, maxLength: 80})} />
      <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
      <input type="tel" placeholder="Teléfono" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />
      <input type="DNI" placeholder="DNI" {...register("First name", {required: true})} />

      <h3>Diección</h3>
      <input type="text" placeholder="Calle,número,piso" {...register("First name", {required: true})} />
      <input type="text" placeholder="Código postal" {...register("First name", {required: true})} />
      <input type="text" placeholder="Ciudad" {...register("First name", {required: true})} />
      <div>
      <input type="Checkbox" placeholder="..." {...register("First name", {required: true})} />
      <span>Acepto los términos y condiciones de la adopción</span>
      </div>
      <input type="submit" />
      <div>
       <button className="c-button-siguiente" onClick={() => navigate("/BFormPage")}>SIGUIENTE</button>
    </div>
    </form>
    
  )
}

export default AdoptFormPage