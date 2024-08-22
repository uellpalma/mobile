import { Controller, FieldValues } from "react-hook-form";
import {
  FormControl,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from "@/components/ui/form-control";
import { Input, InputField } from "@/components/ui/input";
import { type InputControlProps } from "./types";
import { AlertCircleIcon } from "@/components/ui/icon";

export const InputControl = <T extends FieldValues>({
  control,
  formState,
  label,
  name,
  ...rest
}: InputControlProps<T>) => {
  const errorInput = formState?.errors[name];
  const isInvalid = !!errorInput;

  return (
    <Controller
      control={control}
      render={({ field: { onChange, onBlur, value } }) => (
        <FormControl isInvalid={isInvalid}>
          <FormControlLabel className="mb-1">
            <FormControlLabelText>{label}</FormControlLabelText>
          </FormControlLabel>
          <Input isInvalid={isInvalid}>
            <InputField
              {...rest}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </Input>

          <FormControlError>
            <FormControlErrorIcon size="md" as={AlertCircleIcon} />
            <FormControlErrorText>{errorInput?.message}</FormControlErrorText>
          </FormControlError>
        </FormControl>
      )}
      name={name}
    />
  );
};
