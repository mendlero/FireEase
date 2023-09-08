export function warn(message: string) {
  console.warn(message);
}

export function error(message: string) {
  console.error(message);
}

export default { warn: warn, error: error };
