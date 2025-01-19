"use server";

import { prisma } from "@/utils/prisma";
import { revalidatePath } from "next/cache";

export async function create(formData: FormData) {
  const input = formData.get("input") as string;

  if (!input.trim()) {
    return;
  }

  await prisma.todo.create({
    data: {
      title: input,
    },
  });

  revalidatePath("/");
}

export async function edit(formData: FormData) {
  const input = formData.get("newTitle") as string;
  const inputId = formData.get("inputId") as string;

  const id = parseInt(inputId);

  await prisma.todo.update({
    where: {
      id: id,
    },
    data: {
      title: input,
    },
  });

  revalidatePath("/");
}
