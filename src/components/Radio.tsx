import type { ReactNode } from "react";
import { z } from "zod";

export const RadioPropsSchema = z.object({
  name: z.string(),
  value: z.string(),
  onChange: z.function().args(z.string()).returns(z.void()).optional(),
  text: z.custom<ReactNode>().optional(),
  subText: z.custom<ReactNode>().optional(),
  checked: z.boolean().optional(),
});

type RadioProps = z.infer<typeof RadioPropsSchema>;

const Radio = ({
  name,
  value,
  onChange,
  text,
  subText,
  checked,
}: RadioProps) => {
  const id = `${name}-${value}`;

  return (
    <div className="flex items-center">
      <input
        type={"radio"}
        id={id}
        name={name}
        value={value}
        className="ds-radio"
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
        checked={checked}
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
