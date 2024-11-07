import { getCategories } from '@/actions/category';
import { getPostData } from '@/actions/post';
import PostForm from '@/components/forms/PostCreateForm';
import { Locale } from '@/i18n/routing';

interface Props {
  params: Promise<{
    locale: Locale;
    slug: string;
  }>;
}

export default async function Update({ params }: Props) {
  const { locale, slug } = await params;
  const categories = await getCategories(locale);
  const { postStatic, postInfo, postContent } = await getPostData(slug);
  return (
    <PostForm
      mode="update"
      categories={categories}
      initialPostStatic={postStatic}
      initialPostInfos={postInfo}
      initialPostContents={postContent}
    />
  );
}
