import React from 'react'
import { useForm } from 'react-hook-form';
// import { Navigate, useNavigate } from 'react-router-dom';
import { API } from "../../services/api";

const AddPetsToUser = () => {
    // const navigate = useNavigate();
    const { add, handleSubmit } = useForm();

    const onSubmit = formData => {
        console.log(formData)
            API.put('users/user/add', formData).then(res => {
                console.log("Entro al API?")         
                document.cookie = res.data.id;
                                
                console.log(res.data.id)
            })
        }

  return (
    <div>AddPetsToUser

        <div onSubmit={handleSubmit(onSubmit)}>             
            <input  id="id" className='c-input'
                {...add("id",{ required: true })}
            />             
        </div>
        <div>             
            {/* <button type="submit" onClick={() => navigate("/AdoptPage")}>Adoptar</button> */}
        </div>
    </div>
  )
}

export default AddPetsToUser