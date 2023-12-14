import { z } from "zod";
import Heading, { HeadingPropsSchema } from "./Heading";
import Image, { ImagePropsSchema } from "./Image";
import RichText, { RichTextPropsSchema } from "./RichText";

export const BoxWithImagePropsSchema = z.object({
  identifier: z.string().optional(),
  label: z.string().optional(),
  heading: HeadingPropsSchema.optional(),
  image: ImagePropsSchema.optional(),
  imageLabel: z.string().optional(),
  content: RichTextPropsSchema.optional(),
});

export type BoxWithImageProps = z.infer<typeof BoxWithImagePropsSchema>;

const BoxWithImage = ({
  identifier,
  label,
  heading,
  image,
  content,
}: BoxWithImageProps) => {
  return (
    <div
      id={identifier}
      className="flex flex-row items-start gap-32 max-[499px]:flex-col"
    >
      <div className={"ds-stack-8 break-words w-full"}>
        {label && (
          <p className="ds-label-section pt-4 text-gray-900">{label}</p>
        )}
        {heading && <Heading {...heading} />}
        {content && <RichText {...content} />}
      </div>
      {image && (
        <div className="ds-stack-16 w-full self-center">
          <Image
            {...image}
            {...{
              className: content ? "" : "max-w-none",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default BoxWithImage;
