import { registerPlugin } from '@capacitor/core';

import type { AndroidTvPlugin } from './definitions';

const AndroidTv = registerPlugin<AndroidTvPlugin>('AndroidTv', {
  web: () => import('./web').then(m => new m.AndroidTvWeb()),
});

export * from './definitions';
export { AndroidTv };
