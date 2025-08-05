export const ROUTES = {
  HOME: {
    route: '/',
    page: '/',
  },
  NEWS: {
    route: 'news',
    page: '/news',
  },
  DOCUMENTS: {
    route: 'documents',
    page: '/documents',
  },
  DOCUMENT: {
    route: 'documents/:documentId',
    page: (documentId: string) => `/documents/${documentId}`,
  },
  AUTH: {
    LOGIN: {
      page: '/login',
    },
  },
  NOT_FOUND: {
    route: '*',
  },
};
