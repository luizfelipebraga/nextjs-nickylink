import TitleComponent from "../Title"
import { Container, Main, Form, Input, TextArea, WrappButton, Button, Select } from "./styles"

import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

export function FormComponent() {
  const [fullname, setFullName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [telefone, setTelefone] = useState<string>('');
  const [select, setSelect] = useState<string>('type');
  const [message, setMessage] = useState<string>('');

  const sendEmail = (event: any) => {
    event.preventDefault();

    emailjs.sendForm('service_beg4kfb', 'gmail', event.target, 'user_WRCVefRiFlT2Ki4K4A3tR')
      .then(() => {
        const functionThatReturnPromise = () => new Promise(resolve => setTimeout(resolve, 2000));
        toast.promise(functionThatReturnPromise, {
          pending: 'Loading',
          success: 'Email has sent, thank you!',
          error: 'Something happened, try again.'
        })
      }, (error) => {
        toast.error("Something happened, try again.");
        console.error(error.text);
      });
  };


  const options = [
    {
      disabled: true,
      defaultValue: 'type',
      label: 'Qual serviço você quer contratar?',
      value: 'type',
    },
    {
      label: 'Edição',
      value: 'EDICAO',
    },

    {
      label: 'Produção',
      value: 'PRODUCAO',
    },

    {
      label: 'Modelagem',
      value: 'MODELAGEM',
    },

    {
      label: 'Fotografia',
      value: 'FOTOGRAFIA',
    },

    {
      label: 'Rede Social',
      value: 'REDESOCIAL',
    },

    {
      label: 'Outros',
      value: 'OUTROS',
    }
  ]

  const getServices = options.map((op, index) => (
    <option key={index} value={op.value} disabled={op.disabled} defaultValue={op.defaultValue}>{op.label}</option>
  ))


  return (
    <Container id="form">
      <Main>
        <TitleComponent name="Formul&aacute;rio" style={{ color: '#000' }} />
        <Form onSubmit={sendEmail}>
          <Input id="fullname" type="text" placeholder="Nome Completo" value={fullname} onChange={event => setFullName(event.target.value)} required />
          <Input id="email" type="email" placeholder="Email" value={email} onChange={event => setEmail(event.target.value)}required />
          <Input id="tel" type="text" placeholder="Telefone" value={telefone} onChange={event => setTelefone(event.target.value)} required />

          <Select
            required
            name="type"
            id="type"
            placeholder="Select your Message"
            value={select}
            onChange={event => setSelect(event.target.value)}>

            {getServices}
          </Select>

          <TextArea id="about" placeholder="Observações" rows={3} cols={50} value={message} onChange={event => setMessage(event.target.value)} />
          <Button type="submit" value="Enviar"/>
        </Form>
      </Main>
    </Container>
  )
}
