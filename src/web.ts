import { WebPlugin } from '@capacitor/core';

import type { AndroidTvPlugin } from './definitions';

export class AndroidTvWeb extends WebPlugin implements AndroidTvPlugin {
  async isAndroidTv(): Promise<boolean> {
    return false;
  }
}
