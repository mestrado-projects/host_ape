import { InputLabel, OutlinedInput } from "@mui/material";
import { ChangeEvent } from "react";

interface CommonInputProps {
  setValues: (field: string, value: any) => void;
  values: { [key: string]: any };
  inputLabel: string;
  inputState: string;
}

export default function CommonInput({
  setValues,
  values,
  inputLabel,
  inputState,
}: CommonInputProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues(inputState, event.target.value);
  };

  return (
    <>
      <InputLabel htmlFor={`outlined-adornment-${inputLabel}`}>
        {inputLabel}
      </InputLabel>
      <OutlinedInput
        id={`input${inputState}`}
        value={values[inputState] || ""}
        onChange={handleChange}
        label={inputLabel}
      />
    </>
  );
}
