import React, { useState } from "react";
import {
  TextField,
  FormControl,
  InputAdornment,
  Button,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import firebase from "../lib/firebase";

type Props = {};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      alignItems: "center",
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  })
);

interface State {
  email: string;
  password: string;
  showPassword: boolean;
}

export const FormArea: React.FC<Props> = () => {
  const [state, setState] = useState<State>({
    email: "",
    password: "",
    showPassword: false,
  });

  const classes = useStyles();

  const handleChange = (prop: keyof State) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setState({
      ...state,
      [prop]: event.target.value,
    });
  };

  const login = async () => {
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(state.email, state.password);
      // 成功時の処理
      alert("ログインに成功しました😊");
    } catch (error) {
      console.error(error);
      // 失敗時の処理
      alert("メールアドレスまたはパスワードが正しくありません！🥷");
    }
  };

  return (
    <div className={classes.root}>
      <TextField
        id="email"
        label="メールアドレス"
        value={state.email}
        variant="outlined"
        type="email"
        onChange={handleChange("email")}
      />
      <TextField
        id="password"
        label="パスワード"
        value={state.password}
        variant="outlined"
        type="password"
        onChange={handleChange("password")}
      />
      <Button variant="contained" color="primary" onClick={() => login()}>
        ログイン
      </Button>
    </div>
  );
};
