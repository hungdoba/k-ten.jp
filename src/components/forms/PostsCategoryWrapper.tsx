'use client';

import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import PostThumbnail from '../ui/PostThumbnail';
import { Locale } from '@/i18n/routing';
import { useGetPostsByCategory } from '@/hooks/useGetPosts';
import { TranslatedPost } from '@/types/TranslatedPost';
import { useTranslations } from 'next-intl';
import { post_category } from '@prisma/client';

type Props = {
  locale: Locale;
  category: post_category;
  posts: TranslatedPost[];
};

const PostsCategoryWrapper = ({ locale, category, posts }: Props) => {
  const tp = useTranslations('FullPost');

  const { ref, inView } = useInView();
  const { data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useGetPostsByCategory(locale, category.slug, posts);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return (
    <div className="container mx-auto w-full mt-4 md:max-w-5xl">
      <div className="mx-4 md:mx-8">
        <div className="space-y-2 pb-8 md:pt-6 md:space-y-5">
          <h1 className="text-2xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-4xl md:leading-14">
            {category.title}
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {category.describe}
          </p>
        </div>
        <hr />
        <div className="divide-y divide-gray-300 dark:divide-gray-600">
          <div className="grid gap-x-4 gap-y-8 grid-cols-1 md:grid-cols-1">
            {data?.pages.map((group, i) => (
              <React.Fragment key={i}>
                {group?.map((post) => (
                  <PostThumbnail post={post} key={post.id} />
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <div ref={ref} />
      <div className="flex items-center justify-center mb-8">
        {isFetchingNextPage && hasNextPage ? (
          <p className="text-center">{tp('loadingMore')}</p>
        ) : (
          <p className="text-center text-gray-400 dark:text-gray-500 px-8 pt-4">
            {tp('noMorePost')}
          </p>
        )}
      </div>
    </div>
  );
};

export default PostsCategoryWrapper;
