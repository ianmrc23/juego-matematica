import * as React from "react";

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
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export function CardWithForm() {
  async function createExercise(formData: FormData) {
    "use server";
    const statement = formData.get("statement")?.toString();
    const answer = formData.get("answer")?.toString();
    const difficulty = formData.get("difficulty")?.toString();

    if (!(statement && answer && difficulty)) {
        return;
    }

    try {
        const newExercise = await prisma.exercise.create({
            data: {
                statement: statement,
                answer: answer,
                difficulty: difficulty
            }
        });
        console.log("Exercise created:", newExercise);
        return newExercise;
    } catch (error) {
        console.error("Error creating exercise:", error);
        throw error;
    } finally {
        await prisma.$disconnect();
    }

    redirect('/')
}

  return (
    <form action={createExercise}>
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Create Exercise</CardTitle>
          <CardDescription>
            Fill our the form below to create a new exercise.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="statement">Statement</Label>
              <Textarea
                name="statement"
                id="statement"
                placeholder="Type your statement here."
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="answer">Correct Answer</Label>
              <Input
                name="answer"
                id="answer"
                placeholder="Type your correct answer here."
              />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="difficulty">Difficulty</Label>
              <Select name="difficulty">
                <SelectTrigger id="difficulty">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="s">S</SelectItem>
                  <SelectItem value="a">A</SelectItem>
                  <SelectItem value="b">B</SelectItem>
                  <SelectItem value="c">C</SelectItem>
                  <SelectItem value="d">D</SelectItem>
                  <SelectItem value="e">E</SelectItem>
                  <SelectItem value="f">F</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button type="submit">Save</Button>
        </CardFooter>
      </Card>
    </form>
  );
}
