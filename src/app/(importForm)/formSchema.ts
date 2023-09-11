"use client";

import * as z from "zod";

export const importSchema = z.object({
  importLink: z.string().max(500, "max 500"),
});

export type ImportSchemaType = z.input<typeof importSchema>;
