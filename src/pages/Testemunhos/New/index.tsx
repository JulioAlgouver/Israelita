import React, {useState} from 'react';

//CSS
import './index.css';

function sendMail() {
  var link = "mailto:me@example.com"
          + "?cc=myCCaddress@example.com"
          + "&subject=" + escape("This is my subject")
          + "&body=" + 'teste';

  window.location.href = link;
}

const NovoTestemunho: React.FC = () => {
  return(
    <>
      <div id='novoTestemunhoContainer'>
        <form onSubmit={sendMail}>
          <label htmlFor="nome">Nome</label>
          <input type='text' className='nome' name='nome' placeholder='Informe seu nome'></input>

          <label htmlFor="email">Email</label>
          <input type='email' className='email' name='email' placeholder='Seu email'></input>

          <label htmlFor="telefone">Telefone</label>
          <input type='tel' className='phone' name='phone' placeholder='Seu telefone'></input>

          <label htmlFor="testemunho">Seu Testemunho</label>
          <textarea className='testemunho' name='testemunho' placeholder='Nos conte seu testemunho'></textarea>

          <input type="submit" value="Enviar" className='btn_enviar'/>
        </form>
      </div>
    </>
  )
}

export default NovoTestemunho;