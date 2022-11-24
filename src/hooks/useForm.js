import { useState } from "react";

export const useForm = (estadoInicial) => {
 const [form, setForm] = useState(estadoInicial)

 const onChangeForm = (event) => {
  console.log(event.target);
  const { name, value } = event.target;
  console.log(name,value);
  const novoForm ={
    ...form,
    [name]: value
   };
  setForm(novoForm);
  };
  return [form, onChangeForm];
};