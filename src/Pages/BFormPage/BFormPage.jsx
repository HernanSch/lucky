import React from 'react'
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import FormNavComponent from '../../Components/FormNavComponent/FormNavComponent';

const BFormPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div> <FormNavComponent></FormNavComponent></div>
      <div>
      <h1>Sobre las mascotas</h1>
      <input type="text" placeholder="¿Cuáles?" {...register("Piso,casa,chalet", {required: true})} />
      <input type="text" placeholder="¿Se lleva bien con otros animales?" {...register("Piso,casa,chalet", {required: true})} />
      </div>
      <div>
        <p>¿Porqué has elegido adoptar?</p>
        <input type="text" placeholder="" {...register("¿Porqué has elegido adoptar?", {required: true, maxLength: 80})} />
      </div>
      <div>
        <p>¿Conoces las necesidades del animal?</p>
        <input type="text" placeholder="" {...register("¿Conoces las necesidades del animal?", {required: true, maxLength: 80})} />
      </div>
      <div>
        <p>¿Conoces sus gastos?</p>
        <input type="text" placeholder="" {...register("¿Conoces sus gastos?", {required: true, maxLength: 80})} />
      </div>
      <div>
        <p>¿Conoces su alimentación?</p>
        <input type="text" placeholder="" {...register("¿Conoces su alimentación?", {required: true, maxLength: 80})} />
      </div>
    <input type="submit" />
    <div>
       <button className="c-button-siguiente" onClick={() => navigate("/CFormPage")}>SIGUIENTE</button>
    </div>
  </form>

  )
}

export default BFormPage