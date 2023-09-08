import fs from 'fs';

const isWindows = process.platform === 'win32';

export const realpathSync = isWindows
  ? fs.realpathSync
  : fs.realpathSync.native;
