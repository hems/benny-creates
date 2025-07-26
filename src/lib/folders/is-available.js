import { existsSync } from 'fs';

/**
 * Returns true if a folder does not exist on a given path
 * @param path - The path to the folder
 * @returns true if the folder is available, false otherwise
 */
export function isFolderAvailable(path) {
  return !existsSync(path);
}