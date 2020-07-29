import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home/App';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import CadastroVideo from './pages/Cadastro/Video'
import CadastroCategoria from './pages/Cadastro/Categoria'

ReactDOM.render(
  // Modo padrão sem router
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <BrowserRouter>
  <Switch>
    <Route path="/" component={Home} exact/>
    <Route path="/cadastro/video" component={CadastroVideo}/>
    <Route path="/cadastro/categoria" component={CadastroCategoria}/>
    <Route component={()=>(<div>Erro 404</div>)}/>
  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
