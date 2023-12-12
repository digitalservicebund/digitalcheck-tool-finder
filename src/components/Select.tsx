import classNames from "classnames";
import type { ReactNode } from "react";
import { ChangeEvent } from "react";
import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";
import { z } from "zod";
import InputError from "./InputError";
import InputLabel from "./InputLabel";

export const SelectOptionsPropsSchema = z.array(
  z.object({ value: z.string(), text: z.string() }),
);

export type SelectOptionsProps = z.infer<typeof SelectOptionsPropsSchema>;

export const SelectPropsSchema = z.object({
  name: z.string(),
  options: SelectOptionsPropsSchema,
  label: z.custom<ReactNode>().optional(),
  altLabel: z.string().optional(),
  placeholder: z.string().optional(),
  value: z.string().optional(),
  onChange: z
    .function()
    .args(z.custom<ChangeEvent<HTMLInputElement>>())
    .returns(z.void())
    .optional(),
  formRegister: z.custom<UseFormRegister<FieldValues>>().optional(),
  error: z.custom<FieldError>().optional(),
});

type SelectProps = z.infer<typeof SelectPropsSchema>;

const Select = ({
  name,
  label,
  options,
  placeholder,
  value,
  onChange,
  formRegister,
  error,
}: SelectProps) => {
  const selectClassName = classNames("ds-select", {
    "has-error": error,
  });
  const errorId = `${name}-error`;
  const registeredFormProps =
    formRegister !== undefined
      ? formRegister("ressort", {
          required: "Bitte wählen Sie eine Option aus.",
          onChange: onChange,
        })
      : {};

  return (
    <div>
      {label && <InputLabel id={name}>{label}</InputLabel>}

      <select
        id={name}
        className={selectClassName}
        value={value}
        {...registeredFormProps}
        aria-invalid={error !== undefined}
        aria-describedby={error?.message && errorId}
        aria-errormessage={error?.message && errorId}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => {
          return (
            <option value={option.value} key={option.value}>
              {option.text}
            </option>
          );
        })}
      </select>
      {error?.message && <InputError id={errorId}>{error.message}</InputError>}
    </div>
  );
};

export default Select;
