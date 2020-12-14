import React, { useState } from "react";
import firebase from "../lib/firebase";
import { Button } from "@material-ui/core";

type Props = {};

export const CurrentUser: React.FC<Props> = () => {
  const [user, setUser] = useState<firebase.User | null>(null);

  const fetchCurrentUser = () => {
    try {
      const user = firebase.auth().currentUser;
      setUser(user);
      console.log(user);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      await firebase.auth().signOut();
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div>ユーザー：{user ? user.email : "ログインしていません"}</div>
      <Button
        variant="contained"
        color="primary"
        onClick={() => fetchCurrentUser()}
      >
        確認
      </Button>
      <Button variant="contained" color="primary" onClick={() => logout()}>
        ログアウト
      </Button>
    </div>
  );
};
