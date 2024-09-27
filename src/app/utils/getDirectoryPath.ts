import path from "path";

/**
 * Returns the full path to a file in a subdirectory of the src/app/db directory.
 *
 * @param {string} subdirectory - The name of the subdirectory to search in.
 * @param {string} filename - The name of the file to search for.
 * @return {string} - The full path to the file.
 */
export function getDirectoryPath(filename: string) {
  const DB_DIRECTORY = path.join(process.cwd(), "src/app/db");
  return path.join(DB_DIRECTORY, filename);
}
