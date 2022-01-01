import React, {useState} from 'react';

//CSS
import './index.css';

const NovoTestemunho: React.FC = () => {

  const [campos, setCampos] = useState({
      nome: '',
      email: '',
      phone: '',
      testemunho: ''
  });

  function handleInputChange(event:any){
    if(event.target.name === "anexo")
      campos[event.target.name] = event.target.files[0];
    else
      campos[event.target.name] = event.target.value;
    setCampos(campos);
}

  function handleFormSubmit(event:any){
    event.preventDefault();
    console.log(campos);
  }

  return(
    <>
      <div id='novoTestemunhoContainer'>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="nome">Nome</label>
          <input type='text' className='nome' name='nome' placeholder='Informe seu nome' onChange={handleInputChange}></input>

          <label htmlFor="email">Email</label>
          <input type='email' className='email' name='email' placeholder='Seu email' onChange={handleInputChange}></input>

          <label htmlFor="telefone">Telefone</label>
          <input type='tel' className='phone' name='phone' placeholder='Seu telefone' onChange={handleInputChange}></input>

          <label htmlFor="testemunho">Seu Testemunho</label>
          <textarea className='testemunho' name='testemunho' placeholder='Nos conte seu testemunho' onChange={handleInputChange}></textarea>

          <input type="submit" value="Enviar" className='btn_enviar'/>
        </form>
      </div>
    </>
  )
}

export default NovoTestemunho;