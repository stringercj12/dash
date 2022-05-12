import { FormHelperText, TextField, TextFieldProps } from "@mui/material";
import { useFormContext } from "react-hook-form";

type InputReactHookProps = TextFieldProps & {
  label: string;
};

export function InputReactHook({ label, ...rest }: InputReactHookProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <>
      <TextField
        id="outlined-basic"
        label="E-mail"
        variant="outlined"
        size="small"
        fullWidth
        autoComplete="email"
        error={errors?.email}
        autoFocus
        margin="normal"
        {...register("email")}
        {...rest}
      />
      {!!errors?.email && <FormHelperText> {errors?.email}</FormHelperText>}
    </>
  );
}
