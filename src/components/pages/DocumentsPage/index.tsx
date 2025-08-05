// libraries
import type { FC } from 'react';
// components
import DocumentsList from 'components/DocumentsList';

const DocumentsPage: FC = () => (
  <div className="documents">
    <h2 className="documents-title">Документы</h2>

    <div className="documents-wrapper">
      <DocumentsList />
    </div>
  </div>
);

export default DocumentsPage;
