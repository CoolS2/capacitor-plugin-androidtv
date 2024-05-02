import { WebPlugin } from '@capacitor/core';

import type { AndroidTvPlugin } from './definitions';

export class AndroidTvWeb extends WebPlugin implements AndroidTvPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
