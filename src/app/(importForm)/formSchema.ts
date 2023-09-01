"use client";

import * as z from "zod";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const formSchema = z.object({
  importLink: z.string().max(500, "max 500"),
});
