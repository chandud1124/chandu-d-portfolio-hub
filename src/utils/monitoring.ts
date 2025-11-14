import * as Sentry from "@sentry/react";

export const initSentry = () => {
  const dsn = import.meta.env.VITE_SENTRY_DSN;
  const environment = import.meta.env.VITE_APP_ENV || 'development';

  if (dsn && environment === 'production') {
    Sentry.init({
      dsn,
      environment,
      integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration({
          maskAllText: false,
          blockAllMedia: false,
        }),
      ],
      // Performance Monitoring
      tracesSampleRate: 1.0, // Capture 100% of transactions in production
      // Session Replay
      replaysSessionSampleRate: 0.1, // Sample 10% of sessions
      replaysOnErrorSampleRate: 1.0, // Sample 100% of sessions with errors
    });
  }
};

export const captureError = (error: Error, context?: Record<string, any>) => {
  if (import.meta.env.VITE_APP_ENV === 'production') {
    Sentry.captureException(error, { extra: context });
  } else {
    console.error('Error captured:', error, context);
  }
};

export const captureMessage = (message: string, level: Sentry.SeverityLevel = 'info') => {
  if (import.meta.env.VITE_APP_ENV === 'production') {
    Sentry.captureMessage(message, level);
  } else {
    console.log(`[${level}] ${message}`);
  }
};