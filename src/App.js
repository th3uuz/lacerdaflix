import React from 'react';

import Menu from './components/Menu'
import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel'
import dadosIniciais from './data/dados_iniciais.json'
import Footer from './components/Footer'

import './app.css'

function App() {
  return (
    <div style={{ background: '#141414' }}>
      <Menu />

      <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].tiulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Escute só essa música."}
      />

      <Carousel 
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel 
        category={dadosIniciais.categorias[1]}
      />

      <Footer />
    </div>
  );
}

export default App;
