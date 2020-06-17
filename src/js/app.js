import '../scss/styles.scss';

const initApp = () => {
  // iniitialize app here
};

document.onreadystatechange = () => {
  if (document.readyState === 'interactive') {
    initApp();
  }
};
