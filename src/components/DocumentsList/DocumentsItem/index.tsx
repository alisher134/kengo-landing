// libraries
import type { FC } from 'react';
import { Link } from 'react-router-dom';
// constants
import { ROUTES } from 'constants/routes';
// assets
import documentImage from 'assets/images/document.png';
// types
import type { DocumentItem } from 'components/DocumentsList/types';

type DocumentsItemProps = DocumentItem;

const DocumentsItem: FC<DocumentsItemProps> = ({ id, title }) => (
  <li className="documents-item">
    <Link className="documents-item-link" to={ROUTES.DOCUMENT.page(String(id))}>
      <img alt={`${title} document img`} className="documents-item-img" src={documentImage} />
      {title}
    </Link>
  </li>
);

export default DocumentsItem;
