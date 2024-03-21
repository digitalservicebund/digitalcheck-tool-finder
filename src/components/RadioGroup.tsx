import { ChangeEvent } from "react";
import { FieldValues, GlobalError, UseFormRegister } from "react-hook-form";
import { z } from "zod";
import InputError from "./InputError";

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
  selectedValue: z.string().optional(),
  onChange: z
    .function()
    .args(z.custom<ChangeEvent<HTMLInputElement>>())
    .returns(z.void())
    .optional(),
  formRegister: z.custom<UseFormRegister<FieldValues>>(),
  error: z.custom<GlobalError | undefined>(),
});

type RadioGroupProps = z.infer<typeof RadioGroupPropsSchema>;

const RadioGroup = ({
  name,
  options,
  selectedValue,
  onChange,
  formRegister,
  error,
}: RadioGroupProps) => {
  const hasError = !!error;
  const errorId = hasError ? `${name}-error` : undefined;

  return (
    <>
      <ul
        className="ds-stack-16 border-0 p-0 m-0"
        role="radiogroup"
        aria-invalid={!!error}
      >
        {options.map(({ value, text, subText }) => {
          const id = `${name}-${value}`;
          const checked = selectedValue === value;

          return (
            <li className="flex items-center">
              <input
                type={"radio"}
                id={id}
                value={value}
                className="ds-radio"
                checked={checked}
                {...formRegister(name, {
                  required: "Bitte wählen Sie eine Option aus.",
                  onChange: onChange,
                })}
                aria-describedby={errorId}
                aria-errormessage={errorId}
              />
              <label htmlFor={id}>
                {text}
                <div className={"text-gray-800 ds-body-02-reg"}>{subText}</div>
              </label>
            </li>
          );
        })}
      </ul>

      {error && errorId && (
        <InputError id={errorId}>{error.message}</InputError>
      )}
    </>
  );
};

export default RadioGroup;
