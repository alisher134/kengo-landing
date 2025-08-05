// libraries
import type { FC } from 'react';
import { useParams } from 'react-router-dom';
// components
import ButtonLink from 'components/shared/ButtonLink';
import { ROUTES } from 'constants/routes';
// types
import { ButtonVariants } from 'types/buttonTypes';

const DocumentPage: FC = () => {
  const { documentId } = useParams<{ documentId: string }>();

  return (
    <section className="document">
      <h2 className="document-title">
        Документ с id -
        {' '}
        { documentId }
      </h2>
      <ButtonLink to={ROUTES.DOCUMENTS.page} variant={ButtonVariants.Secondary}>Документы</ButtonLink>
    </section>
  );
};

export default DocumentPage;
