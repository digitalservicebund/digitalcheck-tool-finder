import classNames from "classnames";
import type { ReactNode } from "react";
import { z } from "zod";
import InputLabel from "./InputLabel";
import { ErrorMessagePropsSchema } from "./index";

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
  onChange: z.function().args(z.string()).returns(z.void()).optional(),
  errorMessages: z.array(ErrorMessagePropsSchema).optional(),
});

type SelectProps = z.infer<typeof SelectPropsSchema>;

const Select = ({
  name,
  label,
  options,
  placeholder,
  value,
  onChange,
}: SelectProps) => {
  const selectClassName = classNames("ds-select");
  return (
    <div>
      {label && <InputLabel id={name}>{label}</InputLabel>}

      <select
        id={name}
        className={selectClassName}
        value={value}
        onChange={onChange ? (e) => onChange(e.target.value) : undefined}
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
    </div>
  );
};

export default Select;
