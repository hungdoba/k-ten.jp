'use server';
import prisma from '@/libs/db/prisma';
import { Locale } from '@/i18n/routing';
import { TranslatedPost } from '@/types/TranslatedPost';
import { post, post_translation } from '@prisma/client';

type FullPost = post & { post_translation: post_translation[] };

function convertFullPostToTranslatedPost(post: FullPost): TranslatedPost {
  const translation = post.post_translation[0] || {};
  return {
    id: post.id,
    slug: post.slug,
    post_category: post.post_category,
    tags: post.tags,
    header_image: post.header_image,
    created_at: post.created_at,
    updated_at: post.updated_at,
    active: post.active ?? undefined,
    language_code: translation.language_code || '',
    post_title: translation.post_title || '',
    post_brief: translation.post_brief || '',
    table_of_contents: translation.table_of_contents || '',
    post_content: translation.post_content || '',
  };
}

function mapPostsToTranslatedPosts(posts: FullPost[]): TranslatedPost[] {
  return posts.map(convertFullPostToTranslatedPost);
}

async function fetchPosts({
  locale,
  pageParam = 1,
  category,
}: {
  locale: Locale;
  pageParam?: number;
  category?: string;
}): Promise<TranslatedPost[]> {
  const filters: { active: boolean; post_category?: string } = { active: true };
  if (category) {
    filters.post_category = category;
  }

  const posts = await prisma.post.findMany({
    where: filters,
    orderBy: { updated_at: 'desc' },
    include: {
      post_translation: { where: { language_code: locale } },
    },
    skip: (pageParam - 1) * 5,
    take: 5,
  });

  return mapPostsToTranslatedPosts(posts);
}

export default async function getPosts({
  locale,
  pageParam,
}: {
  locale: Locale;
  pageParam: unknown;
}) {
  return fetchPosts({ locale, pageParam: pageParam as number });
}

export async function getPostsWithCategory({
  locale,
  category,
  pageParam,
}: {
  locale: Locale;
  category: string;
  pageParam: unknown;
}) {
  return fetchPosts({ locale, category, pageParam: pageParam as number });
}

export async function getFullPost(
  locale: Locale,
  category: string,
  slug: string
): Promise<TranslatedPost | null> {
  const post = await prisma.post.findFirst({
    where: { post_category: category, slug },
    include: {
      post_translation: { where: { language_code: locale } },
    },
  });

  return post ? convertFullPostToTranslatedPost(post) : null;
}
