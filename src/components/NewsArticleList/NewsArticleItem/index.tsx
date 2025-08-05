// libraries
import type { FC } from 'react';
// types
import type { NewsArticle } from 'components/NewsArticleList/types';

type NewsArticleItemProps = NewsArticle;

const NewsArticleItem: FC<NewsArticleItemProps> = ({ title, contents }) => (
  <li className="news-article-item">
    <h3 className="news-article-item-title">{title}</h3>
    <div className="news-article-content">
      {contents.map((content) => (
        <p key={content} className="news-article-item-text">{content}</p>
      ))}
    </div>
  </li>
);

export default NewsArticleItem;
