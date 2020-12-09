import React, { ReactChildren } from "react";
import { Redirect } from "react-router-dom";

type Props = {
  children: ReactChildren | Element;
  currentUser: {
    isLogin: boolean;
  };
};

export const Auth = ({ children, currentUser }: Props) => {
  return currentUser.isLogin ? (
    <div>{children}</div>
  ) : (
    <Redirect to={"/login"} />
  );
};
