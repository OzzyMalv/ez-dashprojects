"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { importSchema, ImportSchemaType } from "../(importForm)/formSchema";

export default function ProjectBoard() {
  const form = useForm<ImportSchemaType>({
    resolver: zodResolver(importSchema),
    defaultValues: {
      importLink: "",
    },
  });
  console.log(123, form);
  return (
    <main className="p-10">
      <h1 className="text-center text-xl font-extrabold">Peach 1</h1>
      <div className="flex flex-col items-center gap-2  p-2 sm:flex-row sm:items-baseline sm:justify-between">
        <Card className="w-[20rem]">
          <CardHeader>
            <CardTitle>App</CardTitle>
            <CardDescription>Peach GO application links</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Button asChild>
              <Link href="https://uat.express.peach.me/" target="_blank">
                UAT Peach GO
              </Link>
            </Button>
            <Button asChild>
              <Link href="https://go.peach.me/" target="_blank">
                PROD Peach GO
              </Link>
            </Button>
          </CardContent>
          <CardFooter>
            <Button variant="outline">Edit</Button>
          </CardFooter>
        </Card>
        <Card className="w-[20rem]">
          <CardHeader>
            <CardTitle>Deploy</CardTitle>
            <CardDescription>Boards & Tools</CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild>
              <Link
                href="https://deploy.imdcloud.net/app#/Spaces-82"
                target="_blank"
              >
                OCTOPUS Builds
              </Link>
            </Button>
          </CardContent>
          <CardFooter>
            <Button variant="outline">Edit</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
