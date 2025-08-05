// libraries
import type { FC } from 'react';
import { Link } from 'react-router-dom';
// components
import NewsArticleItem from 'components/NewsArticleList/NewsArticleItem';
// constants
import { ROUTES } from 'constants/routes';
// config
import { NEWS_ARTICLES } from 'components/NewsArticleList/config';

const NewsArticleList: FC = () => (
  <ul className="news-article-list">
    {NEWS_ARTICLES.map((item) => (
      <NewsArticleItem key={item.id} contents={item.contents} id={item.id} title={item.title} />
    ))}
    <li className="news-article-list-source">
      <p className="news-article-list-source-text">
        Источник: Взять быстрый онлайн займ на карту мгновенно круглосуточно в MoneyMan
      </p>
      <Link className="news-article-list-link" to={ROUTES.HOME.page}>© MoneyMan.kz</Link>
    </li>
  </ul>
);

export default NewsArticleList;
