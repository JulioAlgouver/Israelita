import React from "react";
import Menu from "../../components/menu/menu";

//IMAGES
import sede from '../../images/sede_fachada.jpg';
import pastores from '../../images/pastores.jpg';
import cremos from '../../images/cremos.png';

//CSS
import './index.css';

const Sobre: React.FC = () =>{
  return(
  <>
  <Menu/>
  <div id='main_label_sobre'>
    <div className='content'>
      <div className='pastores'>
        <strong>Nossos pastores</strong>
        <p/>
        <div className='foto'>
          <img src={pastores}/>
        </div>
        <br/>
        <div className="text-description">
          <p>
          <p>Em 03 de Outubro de 1947, nasce Genes Loureiro de Melo, em Faxinal-PR, filho de uma família cristã que residiam em 
          Faxinal, foi batizado em meados de Julho de 1959, chamado pelo pastor e tio Dinarte Corrêa de Melo no rio água fria 
          na cidade de Arapuã-PR, em 1976 foi separado para o diaconato pelo Pr. Miguel Pereira dos Santos.</p>

          <p>No ano de 1983, foi indicado pelo Pr. Darcy Ribeiro para dirigir a congregação Marco de Pedra por 3 anos, exercendo 
          a vice-presidência do campo na gestão do Pr. Manoel Caetano da Costa.</p>

          <p>Sempre assíduos na obra de Deus, em 1985 foi chamado pelo Pr. Darcy Ribeiro ao presbitério, exercendo diversas funções
          no campo de trabalho como porteiro, professor da EBD jovens, adultos, líder de cozinha, entre outros.</p>

          <p>Em 1990 o Pr. Miguel Pereira dos Santos esteve em sua residência no vista alegre e o convidou para dirigir aquela sofrida 
            congregação, o mesmo aceitou o trabalho e começou a desbravar e motivar os irmãos a construir uma congregação que depois de 
            muito trabalho conseguiram finalizar, ficaram por 4 anos, em setembro de 1994 decidiram ir embora para Curitiba-PR, precisamente 
            no Bairro Alto a fim de fugir do chamado para pastoral, chegando na igreja Assembleia de Deus Missão Congregação Copel, congregou
            por poucos meses com o Pr. João de Matos, este o chamou para dirigir a mesma congregação, mas a resposta foi negativa, ficando 
            como professor da EBD, permaneceu na congregação por 1 ano e 6 meses, se mudando para Araucária-PR em 20 junho de 1996.</p>
            
          <p>Em sua chegada, imediatamente, o Pastor Presidente da Assembléia de Deus Missão (in memorian) Sudslande Farago de Andrade,
            o convidou para dirigir uma congregação e o mesmo não aceitou no momento, mas em 1998 após uma nova conversa pediu para que 
            aceitasse dirigir a congregação do Jardim Beira Rio, na qual pastoreou até 27 de novembro 2005 para cumprir o chamado e o
            propósito de Deus em sua vida.</p>

          <p>No dia 03 de Dezembro de 2005 foi empossado como Pastor Presidente Regional do Ministério Madureira, assim trabalhando na 
            obra de Deus foi indicado pelo então Pr. Edivanildo de Lima para a função de evangelista em 15 de Novembro de 2006 e o 
            trabalho continuou prosperando, saíram de um salão pequeno para um maior para agregar os irmãos, no ano de 2008 foi indicado
            mais uma vez pelo então Pr. Edivanildo para ocupar a função pastoral recebendo a ordenação ao pastorado pela CONAMAD-DF, 
            trabalhando ao longo de 9 anos como Pastor Presidente Regional da Assembleia de Deus Ministério de Madureira em Araucária.</p>
          </p>
        </div>
      </div>

      <div className='sobre'>
        <strong>Nossa história</strong>
        <div className='foto'>
          <img src={sede}/>
        </div>
        <br/>
        <div className="text-description">
          <p>
          <p>Tendo colhido muitos frutos, por ordem divina e depois de ter orado por muitos dias, Deus confirmou ao Pr. Genes este ministério
            que deu o nome de Assembleia de Deus Ministério Israelita, seu nome veio em confirmação pelo Senhor quando adentrou na igreja no 
            momento em que as irmãs do círculo de oração estavam ensaiando o hino "Gideão e os Trezentos" da cantora Eliã Oliveira para uma 
            festividade, logo ardeu em seu coração a confirmação do nome do ministério a qual se chama até hoje, em junho de 2014 nasce este 
            ministério no qual está há 8 anos à frente deste trabalho, sobre tudo sempre com integridade e fidelidade a Deus, assim deixando
            um legado de muito orgulho e temor a Deus.</p>
          </p>
        </div>
      </div>

      <div className='cremos'>
        <strong>No que cremos</strong>
        <p/>
        <img src={cremos}/>
      </div>
    </div>
  </div>
  </>
  )
}

export default Sobre;