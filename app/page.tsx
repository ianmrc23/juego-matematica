import { Card, CardContent, CardHeader } from "@/components/ui/card";
import prisma from "@/lib/prisma";
import KatexSpan from "@/components/KatexSpan";

export default async function Home() {
  const exercise = await prisma.exercise.findMany();

  return (
    <main className="container mx-auto">
      <div>
        {exercise.map((exercise) => (
          <Card key={exercise.id}>
            <CardHeader>
              <p>Statement:</p>
              <KatexSpan
                text={exercise.statement}
              />
            </CardHeader>

            <CardContent>
              <KatexSpan
                text={exercise.answer}
              />

              <p>Difficulty: {exercise.difficulty.toUpperCase()}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
