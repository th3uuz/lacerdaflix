import React from 'react';
import { FooterBase } from './styles';
import Logo from '../../assets/img/Logo.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <FooterBase>
      <Link to="/">
        <img style={{ height: '40px' }} src={Logo} alt="Logo LacerdaFlix" />
      </Link>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
