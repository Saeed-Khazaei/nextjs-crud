/**
 * Generates a random UUID (Universally Unique Identifier) version 4.
 *
 * @returns {string} A random UUID version 4.
 *
 * @example
 * const id = uuid4();
 * console.log(id); // "1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed"
 */
export function uuid4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
