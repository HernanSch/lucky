import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import FormNavComponent from '../../Components/FormNavComponent/FormNavComponent';


const CFormPage = () => {
  const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
  return (
    
      <form onSubmit={handleSubmit(onSubmit)}>
      <div>  <FormNavComponent></FormNavComponent></div>
      <h1>Familia y hogar</h1>
      <h3>¿Dónde vives?</h3>
      <input type="text" placeholder="Piso,casa,chalet..." {...register("Piso,casa,chalet", {required: true})} />
      <div>
      <p>¿Vives de alquiler?</p>
      <p>Si<input {...register("Si", { required: true })} type="radio" value="Yes" /></p>
      <p>No<input {...register("No", { required: true })} type="radio" value="No" /></p>
      </div>
      <div>
      <p>¿Tu casero permite animales?</p>
      <p>Si<input {...register("Si", { required: true })} type="radio" value="Yes" /></p>
      <p>No<input {...register("No", { required: true })} type="radio" value="No" /></p>
      </div>
      <div>
      <p>¿Crees que podrías mudarte pronto?</p>
      <p>Si<input {...register("Si", { required: true })} type="radio" value="Yes" /></p>
      <p>No<input {...register("No", { required: true })} type="radio" value="No" /></p>
      </div>
      <div>
      <p>¿Tiene jardín?</p>
      <p>Si<input {...register("Si", { required: true })} type="radio" value="Yes" /></p>
      <p>No<input {...register("No", { required: true })} type="radio" value="No" /></p>
      </div>
      <div>
      <p>¿Vives con otras personas?</p>
      <p>Si<input {...register("Si", { required: true })} type="radio" value="Yes" /></p>
      <p>No<input {...register("No", { required: true })} type="radio" value="No" /></p>
      </div>
      <div>
      <p>¿Tu casero permite animales?</p>
      <p>Si<input {...register("Si", { required: true })} type="radio" value="Yes" /></p>
      <p>No<input {...register("No", { required: true })} type="radio" value="No" /></p>
      </div>
      <div>
      <p>¿Estan todos de acuerdo con la adopción?</p>
      <p>Si<input {...register("Si", { required: true })} type="radio" value="Yes" /></p>
      <p>No<input {...register("No", { required: true })} type="radio" value="No" /></p>
      </div>
      <div>
      <p>¿Estan todos de acuerdo con la adopción?</p>
      <p>Si<input {...register("Si", { required: true })} type="radio" value="Yes" /></p>
      <p>No<input {...register("No", { required: true })} type="radio" value="No" /></p>
      </div>
      <div>
      <p>¿Estas de acuerdo con que visitemos tu casa?</p>
      <p>Si<input {...register("Si", { required: true })} type="radio" value="Yes" /></p>
      <p>No<input {...register("No", { required: true })} type="radio" value="No" /></p>
      </div>
      <div>
       <button className="c-button-siguiente" onClick={() => navigate("/CFormPage")}>ENVIAR</button>
    </div>

    </form>
  )

}

export default CFormPage
