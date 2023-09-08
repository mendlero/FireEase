#!/usr/bin/env node

try {
  require.resolve('firebase');
} catch (e) {
  console.warn(
    `The module 'firebase' was not found. Next.js requires that you include it in 'dependencies' of your 'package.json'. To add it, run 'npm install firebase'`
  );
}
