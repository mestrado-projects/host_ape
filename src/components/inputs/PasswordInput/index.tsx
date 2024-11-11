import {
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { ChangeEvent, MouseEvent } from "react";

interface PasswordInputProps {
  setValues: (field: string, value: any) => void;
  values: { [key: string]: any };
  inputLabel: string;
  inputState: string;
}

export default function PasswordInput({
  setValues,
  values,
  inputLabel,
  inputState,
}: PasswordInputProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues(inputState, event.target.value);
  };

  const handleClickShowPassword = () => {
    setValues("showPassword", !values.showPassword);
  };

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <InputLabel htmlFor={`input${inputState}`}>{inputLabel}</InputLabel>
      <OutlinedInput
        id={`input${inputState}`}
        type={values.showPassword ? "text" : "password"}
        value={values[inputState] || ""}
        onChange={handleChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {values.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label={inputLabel}
      />
    </>
  );
}
