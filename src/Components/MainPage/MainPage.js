import React from 'react'
import { MainContainer, Form, Input } from './styles'
import { useForm } from "../../hooks/useForm"

function MainPage() {
  const [form, onChangeForm] = useForm({nome: "", 
  modulos: "", 
  tecnologias: "", 
  responsavel:""
 });
 
  const handleClick = (event) => {
    event.preventDefault();
  }

  return (
    <MainContainer>
      <h2>Cadastro de novo curso</h2>

      <Form onSubmit={handleClick}>
        <label for="nome">Nome do Curso:</label>
        <Input 
          id="nome"
          name="nome"
          value={form.nome}
          onChange={onChangeForm}
          required
        />

        <label for="modulos">Número de Módulos: </label>
        <Input 
          pattern="[^01]"
          title="Somente modulos igual ou maiores que 2"
          id="modulos"
          name="modulos"
          value={form.modulos}
          onChange={onChangeForm}
          required
        />

        <label for="tecnologias">Tecnologias abordadas: </label>
        <Input 
          id="tecnologias"
          name="tecnologias"
          value={form.tecnologias}
          onChange={onChangeForm}
          required
        />
        
        <label for="responsavel">Responsável: </label>
        <Input 
          pattern="[A-Za-z]{5,}"
          title="Aceito somente com 5 caracteres ou mais"
          id="responsavel"
          name="responsavel"
          value={form.responsavel}
          onChange={onChangeForm}
          required
        />
      <button type="submit">Criar curso</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage