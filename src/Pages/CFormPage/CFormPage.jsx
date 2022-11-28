import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import FormNavComponent from '../../Components/FormNavComponent/FormNavComponent';
import './CFormPage.scss'
import { API } from "../../services/api";
import { getCookieUtil } from "../../utils/getCookieUtil";


const CFormPage = () => {
  const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    const stringUser = getCookieUtil('user');

    const user = JSON.parse(stringUser ? stringUser : '{}');
    // console.log(user?.user)
    
    const onSubmitAdd = formData => {
      console.log(formData)
          API.put(`'users/user/add/${user.id}'`,formData).then(res => {
              console.log("Entro al API?")         
              document.cookie = res.data.id;
                                            
              console.log(res.data.id)
          })
      }

  return (
    
      <form onSubmit={handleSubmit(onSubmit)}>
      <div className='form-adoptC'>
       {/* <FormNavComponent></FormNavComponent> */}
      <h1>Familia y hogar</h1>
      <h3>¿Dónde vives?</h3>
      <input type="text" placeholder="Piso,casa,chalet..." {...register("Piso,casa,chalet", {required: true})} />
      <div className='preguntas-sino'>
        <div>
          <p>¿Vives de alquiler?</p>
        </div>
        <div>
           <p>Si<input {...register("Si", { required: true })} type="radio" value="Yes" /></p>
           <p>No<input {...register("No", { required: true })} type="radio" value="No" /></p>
        </div>
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
       <button className="c-button-siguiente" onClick={() => {onSubmitAdd(); navigate("/CFormPage")}}>ENVIAR</button>
    </div>
    </div>
    </form>
  )

}

export default CFormPage
