import * as z from "zod";

const newRssFeedSchemaConfig = {
  rssName: {
    min: 3,
    max: 30,
  },
};

export const newRssFeedSchema = z.object({
  rssName: z
    .string()
    .min(
      newRssFeedSchemaConfig.rssName.min,
      `RSS name must be at least ${newRssFeedSchemaConfig.rssName.min} characters`,
    )
    .max(
      newRssFeedSchemaConfig.rssName.max,
      `RSS name must be at most ${newRssFeedSchemaConfig.rssName.max} characters`,
    ),
});

export type newRssFeedValues = z.infer<typeof newRssFeedSchema>;
