import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { register } from 'register-service-worker';
// import { resetData } from './local-storage';

export function initIcons() {
  library.add(
    faGithub, faQuoteRight, faQuoteLeft,
  );
}

export function isDev() {
  if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
    return true;
  }
  return false;
}

export function apiUrl() {
  if (isDev()) {
    return 'http://localhost:9000';
  }
  return `https://${window.location.hostname}/.netlify/functions`;
}

export function handleError(error) {
  console.error(error);
}

export function initServiceWorker() {
  register('/service-worker.js', {
    updated(registration) {
      console.log(`Updated to the latest version.\n${registration}`);
      // resetData();
      window.location.reload(true);
    },
    offline() {
      console.info('No internet connection found. App is currently offline.');
    },
    error(error) {
      console.error('Error during service worker registration:', error);
    },
  });
}
