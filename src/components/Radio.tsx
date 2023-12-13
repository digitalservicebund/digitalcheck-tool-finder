import type { ReactNode } from "react";
import { ChangeEvent } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { z } from "zod";

export const RadioPropsSchema = z.object({
  name: z.string(),
  value: z.string(),
  onChange: z
    .function()
    .args(z.custom<ChangeEvent<HTMLInputElement>>())
    .returns(z.void())
    .optional(),
  text: z.custom<ReactNode>().optional(),
  subText: z.custom<ReactNode>().optional(),
  checked: z.boolean().optional(),
  formRegister: z.custom<UseFormRegister<FieldValues>>().optional(),
});

type RadioProps = z.infer<typeof RadioPropsSchema>;

const Radio = ({
  name,
  value,
  onChange,
  text,
  subText,
  checked,
  formRegister,
}: RadioProps) => {
  const id = `${name}-${value}`;
  const registeredFormProps =
    formRegister !== undefined
      ? formRegister(name, {
          required: "Bitte wählen Sie eine Option aus.",
          onChange: onChange,
        })
      : {};

  return (
    <div className="flex items-center">
      <input
        type={"radio"}
        id={id}
        name={name}
        value={value}
        className="ds-radio"
        checked={checked}
        {...registeredFormProps}
      />
      {
        <label htmlFor={id}>
          {text}
          <div className={"text-gray-800 ds-body-02-reg"}>{subText}</div>
        </label>
      }
    </div>
  );
};

export default Radio;
