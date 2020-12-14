import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  Input,
  InputAdornment,
  IconButton,
  Button,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import firebase from "../lib/firebase";

type Props = {};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // display: "flex",
      // alignItems: "center",
      "& > *": {
        margin: theme.spacing(1.5),
        // width: "25ch",
      },
    },
  })
);

interface State {
  email: string;
  password: string;
  showPassword: boolean;
}

export const UpdatePasswordForm: React.FC<Props> = () => {
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

  const handleClickShowPassword = () => {
    setState({ ...state, showPassword: !state.showPassword });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  // 新規ユーザの作成
  const createAccount = async () => {
    try {
      const result = await firebase
        .auth()
        .createUserWithEmailAndPassword(state.email, state.password);
      // 成功時の処理
      alert(`ユーザーの作成に成功しました😊 ${result.user?.email}`);
    } catch (error) {
      console.error(error);
      // 失敗時の処理
      alert(
        "ユーザーの作成に失敗しました！🚫すでに登録済みのメールアドレスです"
      );
    }
  };

  const resetPassword = async () => {
    try {
      const result = await firebase.auth().sendPasswordResetEmail(state.email);
      // 成功時の処理
      alert(`パスワード再発行のリンクを送りました。メールをご確認ください。✉️`);
      console.log(result);
    } catch (error) {
      console.error(error);
      // 失敗時の処理
      alert("メールアドレスが正しくありません！🚫");
    }
  };

  return (
    <div className={classes.root}>
      <FormControl fullWidth>
        <InputLabel htmlFor="email">メールアドレス</InputLabel>
        <Input
          id="email"
          value={state.email}
          type="email"
          onChange={handleChange("email")}
        />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel htmlFor="password">パスワード</InputLabel>
        <Input
          id="password"
          value={state.password}
          type={state.showPassword ? "text" : "password"}
          onChange={handleChange("password")}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {state.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>
      <Button
        variant="contained"
        color="primary"
        onClick={() => resetPassword()}
      >
        パスワードのリセット
      </Button>
    </div>
  );
};
