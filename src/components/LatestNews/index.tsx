// libraries
import type { FC } from 'react';
// constants
import LatestNewsCard from 'components/LatestNews/LatestNewsCard';
import { NEWS_DATA } from 'components/LatestNews/config';

const LatestNews: FC = () => (
  <div className="latest-news">
    <h2 className="news-title">Последние новости</h2>

    <div className="news-cards">
      {NEWS_DATA.map((news) => (
        <LatestNewsCard key={news.id} description={news.description} id={news.id} link={news.link} />
      ))}
    </div>
  </div>
);

export default LatestNews;
