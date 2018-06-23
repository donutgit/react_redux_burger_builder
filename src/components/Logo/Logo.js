import React from 'react';
import logoImg from '../../assets/images/android-icon-192x192.png';
import classes from './Logo.css';

const logo = (props) => (
  <div className={classes.Logo}>
    <img src={logoImg} alt="logo" />
  </div>
);

export default logo;
