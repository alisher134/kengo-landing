// libraries
import type { FC } from 'react';
// components
import NewsArticleList from 'components/NewsArticleList';
import CallToAction from 'components/shared/CallToAction';
// types
import { ButtonVariants } from 'types/buttonTypes';

const NewsPage: FC = () => (
  <div className="news-page">
    <NewsArticleList />
    <CallToAction variant={ButtonVariants.Secondary} />
  </div>
);

export default NewsPage;
