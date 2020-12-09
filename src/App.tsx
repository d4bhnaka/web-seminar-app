import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
// components
import { FormArea } from './components/FormArea';
// material
import { Container } from '@material-ui/core';

function App() {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
      </header>
      <div className={styles.container}>
        <Container>
          <h2 className={styles.headline}>ログイン</h2>
          <FormArea />
        </Container>
      </div>
    </div>
  );
}

export default App;
