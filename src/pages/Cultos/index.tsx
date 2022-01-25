import React from "react";
import Menu from "../../components/menu/menu";

//CSS
import './index.css';

const Cultos: React.FC = () => {
  return(
    <>
    <Menu/>
    <div id='content_cultos'>
    <strong>Cultos</strong>
    <div className='cultos_geral'>
      <div className='cultos_sede'>
        <span>Sede</span>
          <div className='domingo'>
            <strong>Domingo</strong>
            <h6>
              EBD (Escola Bíblica Dominical) - 9h30min 
              <p/><br/>

              1º Domingo - Culto de Primícias  - 19h<p/>
              2º Domingo - Culto de Ceia do Senhor - 19h<p/>
              3º Domingo - Culto com a Família - 19h<p/>
              4º Domingo - Domingo Profético - 19h
            </h6>
          </div>
          <div className='quinta'>
            <strong>Quinta</strong>
            <h6>
              Culto da Vitória - 20h
            </h6>
          </div>
          <div className='terca'>
            <strong>Sexta</strong>
            <h6>
              Oração e Estudo da Palavra - 20h
            </h6>
          </div>
          <div className='sabado'>
            <strong>Sábado</strong>
            <h6>
              1º Sábado - (Sem Culto)<p/>
              <p/><br/>

              2º Sábado - Jovens & Orquestra - 20h<p/>
              3º Sábado - Circulo de Oração - 20h<p/>
              4º Sábado - Evangelismo - 20h<p/>
              5º Sábado - Culto Infantil / Varões - 20h
            </h6>
          </div>
        </div>
        <div className='cultos_vilaSandra'>
        <span>Vila Sandra</span>
          <div className='domingo'>
            <strong>Domingo</strong>
            <h6>
              Culto da Família - 19h
            </h6>
          </div>
          <div className='quarta'>
            <strong>Quarta</strong>
            <h6>
              Culto da Vitória - 20h
            </h6>
          </div>
          <div className='sabado'>
            <strong>Sábado</strong>
            <h6>
              Cultos com Departamentos - 19h30min
            </h6>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cultos;