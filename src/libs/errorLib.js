import * as Sentry from '@sentry/browser';

const isLocal = process.env.NODE_ENV === 'development';

export function initSentry() {
  if (isLocal) {
    return;
  }

  Sentry.init({ dsn: 'https://318c2f180a404614b8141643e9f7c6c9@o453243.ingest.sentry.io/5441900' });
}

export function logError(error, errorInfo = null) {
  if (isLocal) {
    return;
  }

  Sentry.withScope((scope) => {
    errorInfo && scope.setExtra(errorInfo);
    Sentry.captureException(error);
  });
}

export function onError(error) {
  let errorInfo = {};
  let message = error.toString();

  // Auth errors
  if (!(error instanceof Error) && error.message) {
    errorInfo = error;
    message = error.message;
    error = new Error(message);
    // API errors
  } else if (error.config && error.config.url) {
    errorInfo.url = error.config.url;
  }

  logError(error, errorInfo);

  alert(message);
}
