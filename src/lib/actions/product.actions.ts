"use server";
import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCT_LIMIT } from "../constants";
import { prisma } from "@/db/prisma";

export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCT_LIMIT,
    orderBy: {
      createdAt: "desc",
    },
  });

  return convertToPlainObject(data);
}

export async function getProductBySlug(slug: string) {
  const data = await prisma.product.findFirst({
    where: {
      slug,
    },
  });

  return convertToPlainObject(data);
}
