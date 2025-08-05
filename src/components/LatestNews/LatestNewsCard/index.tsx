// libraries
import type { FC } from 'react';
import { Link } from 'react-router-dom';
// assets
import ArrowIcon from 'assets/icons/arrow_icon.svg?react';
// types
import type { NewsItem } from 'components/LatestNews/types';

// external libraries
import clsx from 'clsx';

type LatestNewsCardProps = NewsItem & {
  className?: string;
};

const LatestNewsCard: FC<LatestNewsCardProps> = ({ description, link, className = '' }) => (
  <div className={clsx('news-card', className)}>
    <p className="news-card-description">{description}</p>
    <Link className="news-card-link" to={link}>
      Читать подробнее
      <ArrowIcon className="news-card-icon" />
    </Link>
  </div>
);

export default LatestNewsCard;
