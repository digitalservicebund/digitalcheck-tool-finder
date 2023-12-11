import classNames from "classnames";
import { z } from "zod";
import Button, { ButtonLinkProps, ButtonProps } from "./Button";
import ButtonContainer from "./ButtonContainer";
import Heading, { HeadingPropsSchema } from "./Heading";
import RichText, { RichTextPropsSchema } from "./RichText";

export const BoxPropsSchema = z.object({
  identifier: z.string().optional(),
  label: HeadingPropsSchema.optional(),
  heading: HeadingPropsSchema.optional(),
  content: RichTextPropsSchema.optional(),
  additionalClassNames: z.string().optional(),
  buttons: z
    .array(z.custom<ButtonLinkProps>().or(z.custom<ButtonProps>()))
    .optional(),
});

type BoxProps = z.infer<typeof BoxPropsSchema>;

const Box = ({
  identifier,
  label,
  heading,
  content,
  buttons,
  additionalClassNames,
}: BoxProps) => {
  return (
    <div
      className={classNames(
        additionalClassNames ?? "",
        "ds-stack-16 scroll-my-40",
      )}
      id={identifier}
    >
      <div className="ds-stack-8">
        {label && <Heading {...label} />}
        {heading && <Heading {...heading} />}
        {content && (
          <div>
            <RichText {...content} />
          </div>
        )}
      </div>
      {buttons && buttons.length > 0 && (
        <ButtonContainer>
          {buttons.map((button) => (
            <Button key={button.text ?? button.href} {...button} />
          ))}
        </ButtonContainer>
      )}
    </div>
  );
};

export default Box;
