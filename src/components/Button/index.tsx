import React, { ReactFragment } from "react";

import style from "./Button.module.scss";

type Params = {
  type?: "button" | "submit" | "reset" | undefined;
  children?: ReactFragment | undefined;
};

const Button: React.FC<Params> = (props: Params) => {
  const { type = "button" } = props;
  return (
    <button type={type} className={style.button}>
      {props.children}
    </button>
  );
};

export default Button;
