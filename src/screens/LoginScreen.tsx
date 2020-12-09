import React from "react";
import logo from "../logo.svg";
import styles from "../styles/LoginScreen.module.css";
// components
import { LoginForm } from "../components/LoginForm";
// material
import { Container } from "@material-ui/core";

export const LoginScreen: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <img src={logo} className={styles.logo} alt="logo" />
      </header>
      <div className={styles.container}>
        <Container>
          <h2 className={styles.headline}>ログイン</h2>
          <LoginForm />
        </Container>
      </div>
    </div>
  );
};
