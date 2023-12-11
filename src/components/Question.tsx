import { z } from "zod";
import Box from "./Box";
import Container from "./Container";
import Select, { DropdownPropsSchema } from "./Select";

export const QuestionPropsSchema = z.object({
  heading: z.string(),
  description: z.string(),
  select: DropdownPropsSchema,
});

type QuestionProps = z.infer<typeof QuestionPropsSchema>;

export default function Question({
  heading,
  description,
  select,
}: QuestionProps) {
  return (
    <Container paddingTop="48" paddingBottom="0">
      <Box
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
        <Select placeholder={"Bitte auswählen"} {...select} />
      </div>
    </Container>
  );
}
