/* Name: CamelCase Method
 * Level: 6kyu
 * Instructions: Write simple .camelCase method (camel_case function in PHP,
 * CamelCase in C# or camelCase in Java) for strings. All words must have their
 * first letter capitalized without spaces.
 *
 * For instance:
 * "hello case".camelCase() => HelloCase
 * "camel case word".camelCase() => CamelCaseWord
 * Don't forget to rate this kata! Thanks :)
 */

String.prototype.camelCase = function() {
  return this
          .toString()
          .split(' ')
          .map(word => word ? word[0].toUpperCase() + word.slice(1).toLowerCase() : word)
          .join('');
}
