import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'toolkit',
  globalStyle: 'src/global/variables.css',
  outputTargets:[
    { type: 'dist' },
    { type: 'docs' },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  testing: {
    collectCoverage: true,
    coverageReporters: [ 'cobertura', 'html' ],
    reporters: ['jest-junit']
  }
};
