import fs from "fs";

/**
 * Reads a JSON file from the specified directory and parses it
 * into a JS object.
 *
 * @param {string} dir The directory of the JSON file to read.
 * @returns {Promise<T>} A promise that resolves to the parsed JSON
 * data.
 *
 * @throws {Error} If no directory is provided.
 */
export async function parseJsonFile<T>(dir: string): Promise<T> {
  if (!dir) {
    throw new Error("No directory provided");
  }
  const data = await fs.promises.readFile(dir, "utf8");
  return JSON.parse(data);
}
