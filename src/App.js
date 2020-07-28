import React from 'react';
import Menu from './Components/Menu';
import BannerMain from './Components/BannerMain';
import dadosIniciais from './data/dados_iniciais.json';
import Carousel from './Components/Carousel';
import Footer from './Components/Footer'

function App() {
  return (
    <div style={{backgroundColor: "#141414"}}>
      <Menu />
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
      <Footer />
    </div>
  );
}

export default App;
