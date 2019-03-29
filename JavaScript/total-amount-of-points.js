/* Name: Total amount of points
 * Level: 8kyu
 * Instructions: Our football team finished the championship. The result of each match look
 * like "x:y". Results of all matches are recorded in the collection.
 * For example: ["3:1", "2:2", "0:1", ...]
 *
 * Write a function that takes such collection and counts the points of our team in the
 * championship. Rules for counting points for each match:
 * if x>y - 3 points
 * if x<y - 0 point
 * if x=y - 1 point
 *
 * Notes:
 * there are 10 matches in the championship
 * 0 <= x <= 4
 * 0 <= y <= 4
 */

const points = games => games.map(result => result.split(':').map(Number))
                             .filter(result => result[0] >= result[1])
                             .reduce((points, result) => points + (result[0] > result[1] ? 3 : 1), 0);
