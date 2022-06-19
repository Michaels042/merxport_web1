const isProduction = process.env.mode === 'production';

const log = (...message) => {
  if (!isProduction) {
    console.log(...message);
  }
};

export default {
  log
};
