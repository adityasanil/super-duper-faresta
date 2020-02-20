import React, { Fragment } from "react";
import Switch from "react-switch";

const SwitchExample = ({ onChangeHandler, checked }) => {
  return (
    <Fragment>
      <Switch onChange={onChangeHandler} checked={checked} />
    </Fragment>
  );
};

export default SwitchExample;
