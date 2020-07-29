import React from 'react';
import BannerMain from '../../Components/BannerMain';
import dadosIniciais from '../../data/dados_iniciais.json';
import Carousel from '../../Components/Carousel';
import MasterPage from '../../Components/MasterPage'


function Home() {
  return (
    <MasterPage style={{backgroundColor: "#141414"}}>
      <BannerMain videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
      url={dadosIniciais.categorias[0].videos[0].url}
      videoDescription={"O que é Front-End? Trabalhando na área!"}
      />
      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      <Carousel 
        category={dadosIniciais.categorias[1]}
      />
      <Carousel 
        category={dadosIniciais.categorias[2]}
      />
      <Carousel 
        category={dadosIniciais.categorias[3]}
      />
      <Carousel 
        category={dadosIniciais.categorias[4]}
      />
      <Carousel 
        category={dadosIniciais.categorias[5]}
      />
    </MasterPage>
  );
}

export default Home;
