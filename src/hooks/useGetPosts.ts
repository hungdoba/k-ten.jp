'use client';

import { useInfiniteQuery } from '@tanstack/react-query';

import getPosts, { getPostsWithCategory } from '@/actions/post';
import { Locale } from '@/i18n/routing';
import { TranslatedPost } from '@/types/TranslatedPost';

export default function useGetPosts(
  locale: Locale,
  initialData: TranslatedPost[]
) {
  return useInfiniteQuery<TranslatedPost[]>({
    queryKey: ['posts', locale],
    queryFn: ({ pageParam = 1 }) => getPosts({ locale, pageParam }),
    initialData: { pages: [initialData], pageParams: [1] },
    initialPageParam: 1,
    getNextPageParam(lastPage, allPages) {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
}

export function useGetPostsWithCategory(
  locale: Locale,
  category: string,
  initialData: TranslatedPost[]
) {
  return useInfiniteQuery<TranslatedPost[]>({
    queryKey: ['posts', locale, category],
    queryFn: ({ pageParam = 1 }) =>
      getPostsWithCategory({ locale, category, pageParam }),
    initialData: { pages: [initialData], pageParams: [1] },
    initialPageParam: 1,
    getNextPageParam(lastPage, allPages) {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
    refetchOnWindowFocus: false,
    staleTime: Infinity,
  });
}
