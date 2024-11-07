import getPosts from "@/actions/post";
import PostsWrapper from "@/components/forms/PostsWrapper";
import { Locale } from "@/i18n/routing";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const posts = await getPosts({ locale, pageParam: 1 });
  return <PostsWrapper locale={locale} posts={posts} />;
}
