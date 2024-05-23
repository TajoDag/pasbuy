import { Tooltip } from "antd";
import React, { Fragment, useEffect, useState } from "react";

const ToolTipLongText = (props) => {
  const { value, textLength = 35 } = props;
  const [textValue, setTextValue] = useState(value);
  useEffect(() => {
    if ((value?.length || 0) > textLength) {
      setTextValue(`${value.slice(0, textLength - 3)}...`);
    } else {
      setTextValue(value);
    }
  }, [value, textLength]);

  return (value?.length || 0) > textLength ? (
    <Tooltip title={value} placement="top">
      <div>{textValue}</div>
    </Tooltip>
  ) : (
    <Fragment>{value}</Fragment>
  );
};

export default ToolTipLongText;
