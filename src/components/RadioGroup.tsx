import { z } from "zod";
import Radio from "./Radio";
import { ErrorMessagePropsSchema } from "./index";

export const RadioGroupPropsSchema = z.object({
  name: z.string(),
  options: z.array(
    z.object({ value: z.string(), text: z.string().optional() }),
  ),
  label: z.string().optional(),
  altLabel: z.string().optional(),
  value: z.string().optional(),
  errorMessages: z.array(ErrorMessagePropsSchema).optional(),
  onChange: z.function().args(z.string()).returns(z.void()).optional(),
});

type RadioGroupProps = z.infer<typeof RadioGroupPropsSchema>;

const RadioGroup = ({
  name,
  options,
  label,
  altLabel,
  value,
  onChange,
}: RadioGroupProps) => {
  return (
    <fieldset className="border-0 p-0 m-0">
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
              onChange={onChange}
              checked={value === o.value}
            />
          );
        })}
      </div>
    </fieldset>
  );
};

export default RadioGroup;
