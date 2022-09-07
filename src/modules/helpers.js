import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

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
