// libraries
import type { FC } from 'react';
// components
import DocumentsItem from 'components/DocumentsList/DocumentsItem';
// config
import { DOCUMENTS_DATA } from 'components/DocumentsList/config';

const DocumentsList: FC = () => (
  <ul className="documents-list">
    {DOCUMENTS_DATA.map((item) => (
      <DocumentsItem key={item.id} id={item.id} title={item.title} />
    ))}
  </ul>
);

export default DocumentsList;
