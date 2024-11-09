"use server";

import { Locale } from "@/i18n/routing";
import prisma from "@/libs/prisma";

export async function getCategories(locale?: Locale) {
  const categories = await prisma.post_category.findMany({
    orderBy: {
      id: "asc",
    },
    where: {
      active: true,
      locale: locale,
    },
  });
  return categories;
}

export async function getCategory(locale: Locale, slug: string) {
  const categories = await prisma.post_category.findFirst({
    orderBy: {
      id: "asc",
    },
    where: {
      active: true,
      locale: locale,
      slug: slug,
    },
  });
  return categories;
}
