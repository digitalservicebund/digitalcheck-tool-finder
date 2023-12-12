import { z } from "zod";
import Box from "./Box";
import Container from "./Container";
import RadioGroup, { RadioGroupPropsSchema } from "./RadioGroup";
import Select, { DropdownPropsSchema } from "./Select";

export const QuestionPropsSchema = z.object({
  heading: z.string(),
  label: z.string(),
  description: z.string(),
  select: DropdownPropsSchema.optional(),
  radio: RadioGroupPropsSchema.optional(),
});

type QuestionProps = z.infer<typeof QuestionPropsSchema>;

export default function Question({
  heading,
  label,
  description,
  select,
  radio,
}: QuestionProps) {
  return (
    <Container paddingTop="48" paddingBottom="0">
      <Box
        label={{
          tagName: "p",
          look: "ds-label-02-reg",
          text: label,
        }}
        heading={{
          tagName: "h2",
          look: "ds-heading-02-reg",
          text: heading,
        }}
        content={{
          markdown: description,
        }}
      ></Box>
      <div className={"pt-16"}>
        {select && <Select placeholder={"Bitte auswählen"} {...select} />}
        {radio && <RadioGroup {...radio} />}
      </div>
    </Container>
  );
}
