import React, { useState } from "react";
import { Input, Tooltip } from "antd";
import { useIntl } from "react-intl";

const formatNumber = (value) => new Intl.NumberFormat().format(value);

const NumericInput = (props) => {
  const { value, onChange } = props;
  const intl = useIntl();
  const placeholderText = intl.formatMessage({ id: "Input price ($)" });
  const handleChange = (e) => {
    const { value: inputValue } = e.target;
    const reg = /^-?\d*(\.\d*)?$/;
    if (reg.test(inputValue) || inputValue === "" || inputValue === "-") {
      onChange(inputValue);
    }
  };

  const handleBlur = () => {
    let valueTemp = value;
    if (value.charAt(value.length - 1) === "." || value === "-") {
      valueTemp = value.slice(0, -1);
    }
    onChange(valueTemp.replace(/0*(\d+)/, "$1"));
  };

  const title = value ? (
    <span className="numeric-input-title">
      {value !== "-" ? formatNumber(Number(value)) : "-"}
    </span>
  ) : (
    placeholderText
  );

  return (
    <Tooltip
      trigger={["focus"]}
      title={title}
      placement="topLeft"
      overlayClassName="numeric-input"
    >
      <Input
        {...props}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholderText}
        maxLength={16}
      />
    </Tooltip>
  );
};

const InputChangePrice = ({ defaultValue, onChange }) => {
  const [value, setValue] = useState(defaultValue);

  const handleChange = (val) => {
    setValue(val);
    onChange(val);
  };

  return (
    <NumericInput
      style={{
        width: 120,
      }}
      value={value}
      onChange={handleChange}
    />
  );
};

export default InputChangePrice;
