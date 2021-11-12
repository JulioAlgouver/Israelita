import React, { ChangeEvent, useEffect, useState } from "react";

//API
import apiRadio from "../../services/api";

interface Data{
  descricao:string;
}

const descricaoMidia: React.FC=()=>{

  const[track, setTrack] = useState<Data[]>([]);

  const data = new FormData();

  useEffect(() =>{
    apiRadio.get('currentTrack').then(response =>{
      setTrack(response.data)
      console.log(data);
    })
  },[]);

  return(
    <>
      <div>

      </div>
    </>
  )
}

export default descricaoMidia;