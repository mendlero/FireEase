import path from 'path';
import log from './log';
import { realpathSync } from './realPath';

export function getProjectDir(dir?: string) {
  try {
    const resolvedDir = path.resolve(dir || '.');
    const realDir = realpathSync(resolvedDir);

    if (
      resolvedDir !== realDir &&
      resolvedDir.toLowerCase() === realDir.toLowerCase()
    ) {
      log.warn(
        `Invalid casing detected for project dir, received ${resolvedDir} actual path ${realDir}, see more info here https://nextjs.org/docs/messages/invalid-project-dir-casing`
      );
    }

    return realDir;
  } catch (err: any) {
    if (err.code === 'ENOENT') {
      if (typeof dir === 'string') {
        log.error(`"fire-ease ${dir}" does not exist.`);
        process.exit(1);
      }

      log.error(
        `Invalid project directory provided, no such directory: ${path.resolve(
          dir || '.'
        )}`
      );
      process.exit(1);
    }
    throw err;
  }
}
