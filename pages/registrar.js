import { useForm } from "react-hook-form";
import { CopyOutlined,Input} from "antd";
import Swal from "sweetalert2";
import {  UserOutlined } from '@ant-design/icons';

export default function Index() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  function onSubmit(data) {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Su registro se ha guardado con exito",
      showConfirmButton: false,
      timer: 1500,
    });
  } // Su funcion de envio de formulario que invoca despues de una validacion exitosa

  console.log(watch("example")); // puede ver la entrada individual omitir el nombre de la entrada

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      
      <h2>Iniciar Sesion</h2>
      
    {/* <label>Nombre</label>
    
    

    
    <input
    
        {...register("firstName", {
        
        required: true,
        minLength: 5,
        pattern: /^[A-Za-z]+$/i,
        
        })}
    
    />
    
    
    {errors?.firstName?.type === "required" && <p>This field is required</p>}

    {errors?.firstName?.type === "pattern" && (
        <p>Alphabetical characters only</p>
    )}
    <label>Apellidos</label>

    <input
        {...register("lastName", {
        required: true,
        minLength: 5,
        pattern: /^[A-Za-z]+/s,
        })}
    />
    {errors?.lastName?.type === "required" && <p>This field is required</p>}

    {errors?.lastName?.type === "pattern" && (
        <p>Alphabetical characters only</p>
    )} */}

      <label>Correo Electronico</label>

      <input {...register("Email", { min: 8, max: 180 })} />
      {errors.age && <p></p>}
      <label>Contraseña</label>
      <input {...register("Password", { min: 5, max: 150 })} type="password" />
      
      {errors.age && <p></p>}
      <input type="submit"/>
      
    </form>
  );
}

