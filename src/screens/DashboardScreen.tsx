import React, { useEffect } from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import styles from "../styles/DashboardScreen.module.css";
import ReactPlayer from "react-player/lazy";

type Props = {};

export const DashboardScreen: React.FC<Props> = () => {
  useEffect(() => {
    console.log(process.env.REACT_APP_VIMEO_CLIENT_SECRETS);
  }, []);

  let theme = createMuiTheme({
    palette: {
      primary: {
        light: "#63ccff",
        main: "#009be5",
        dark: "#006db3",
      },
    },
    typography: {
      h5: {
        fontWeight: 500,
        fontSize: 26,
        letterSpacing: 0.5,
      },
    },
    shape: {
      borderRadius: 8,
    },
    props: {
      MuiTab: {
        disableRipple: true,
      },
    },
    mixins: {
      toolbar: {
        minHeight: 48,
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.root}>
        <div className={styles.app}>
          <main className={styles.main}>
            <h1>Dashboard</h1>
            <ReactPlayer
              url="https://vimeo.com/388389795"
              controls={true}
              config={{
                vimeo: {
                  playerOptions: {
                    autoplay: true,
                  },
                },
              }}
            />
          </main>
        </div>
      </div>
    </ThemeProvider>
  );
};
