import React from "react";
import { Text } from "native-base";
import PropTypes from "prop-types";
import { defaultProps } from "../interface/Saludar";

const Saludar = (props: defaultProps) => {
  const { firstname, lastname } = props;
  return (
    <Text>
      {firstname} {lastname}
    </Text>
  );
};

Saludar.prototype = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string,
};

export default Saludar;
