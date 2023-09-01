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
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="p-10">
      <h1 className="text-center text-xl font-extrabold">Fill you board</h1>
      <h3 className="text-center font-sans">add new set of links</h3>
      <div className="flex flex-col items-center gap-2 p-2 pt-5">
        <Card className="w-[20rem]">
          <CardHeader>
            <CardTitle></CardTitle>
            <CardDescription></CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2">
            <Input placeholder="Link" />
            <Button asChild>
              <Link href="https://go.peach.me/" target="_blank">
                PROD Peach GO
              </Link>
            </Button>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button>Add</Button>
          </CardFooter>
        </Card>
      </div>
      <h3 className="text-center">or import your Project Board</h3>
    </main>
  );
}
