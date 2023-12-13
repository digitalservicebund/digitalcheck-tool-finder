import { ChangeEvent } from "react";
import { FieldError, FieldValues, UseFormRegister } from "react-hook-form";
import { z } from "zod";
import InputError from "./InputError";
import Radio from "./Radio";

export const RadioOptionsPropsSchema = z.array(
  z.object({
    value: z.string(),
    text: z.string(),
    subText: z.string().optional(),
  }),
);

export type RadioOptionsProps = z.infer<typeof RadioOptionsPropsSchema>;

export const RadioGroupPropsSchema = z.object({
  name: z.string(),
  options: RadioOptionsPropsSchema,
  label: z.string().optional(),
  altLabel: z.string().optional(),
  value: z.string().optional(),
  onChange: z
    .function()
    .args(z.custom<ChangeEvent<HTMLInputElement>>())
    .returns(z.void())
    .optional(),
  formRegister: z.custom<UseFormRegister<FieldValues>>().optional(),
  error: z.custom<FieldError>().optional(),
});

type RadioGroupProps = z.infer<typeof RadioGroupPropsSchema>;

const RadioGroup = ({
  name,
  options,
  label,
  altLabel,
  value,
  onChange,
  formRegister,
  error,
}: RadioGroupProps) => {
  const errorId = `${name}-error`;

  return (
    <fieldset
      className="border-0 p-0 m-0"
      aria-invalid={error !== undefined}
      aria-describedby={error?.message && errorId}
      aria-errormessage={error?.message && errorId}
    >
      {altLabel && <legend className="sr-only">{altLabel}</legend>}
      <div className="ds-stack-16">
        {label && <legend>{label}</legend>}
        {options.map((o) => {
          return (
            <Radio
              key={o.value}
              name={name}
              value={o.value}
              text={o.text}
              subText={o.subText}
              onChange={onChange}
              checked={value === o.value}
              formRegister={formRegister}
            />
          );
        })}
        {error?.message && (
          <InputError id={errorId}>{error.message}</InputError>
        )}
      </div>
    </fieldset>
  );
};

export default RadioGroup;
