// Description:
// <description of this script's functionality>
//
// Dependencies:
//   None
//
// Configuration:
//   None
//
// Commands:
//  hubot <trigger> - <what the respond trigger does>
//  <trigger> - <what the hear trigger does>
//
// Notes:
//
//
// Author:
// <github username of the original script author>
//

// module.exports = function(robot) {
//   //  YOUR CODE HERE
//   //  Example
//    robot.hear(/kesha/i, function(msg) {
//      return msg.send("Kesha is working!");
//    });
// } 

/************************************

EXAMPLES OF THE KEY HUBOT FUNCTIONS

************************************/


/* IMPORTANT! 
You can have only one instance of module.exports in each JavaScript file. 
If you want to supplement your existing code above with any the code below, 
you need to move the contents of module.exports below into the module.exports code above. 
*/

// var squirrels;
// squirrels = ["http://img.skitch.com/20100714-d6q52xajfh4cimxr3888yb77ru.jpg", "https://img.skitch.com/20111026-r2wsngtu4jftwxmsytdke6arwd.png", "http://cl.ly/1i0s1r3t2s2G3P1N3t3M/Screen_Shot_2011-10-27_at_9.36.45_AM.png", "http://shipitsquirrel.github.com/images/squirrel.png"];

// module.exports = function(robot) {
//   // Basic example of respond / send. If the user enters hi or hello the bot responds "Howdy!" 
//   return robot.respond(/hi|hello/i, function(msg) {
//     return msg.send("Howdy!");
//   });

//   // Random Example
//   //If a user enters 'ship it' we return a random squirrel, which is popular for symbolizing shipping something with engineers
//   return robot.hear(/ship it/i, function(msg) {
//     return msg.send(msg.random(squirrels));
//   });
// };


/* Pseudocode
variables: array of URLs for zeppelin, stones, petty
variable rock: zeppelin + stones + petty

hear gimme band
respond msg: rock on!
send band youtube link
    
    if rock, send random rock
    else if zeppelin, send random zeppelin
    else if stones, send random stones
    else petty, send random petty

after video, ask: want more? (y/n)
if yes, send link
if no, respond msg: simma down now

*/

var stones;
stones = [
  // "https://www.youtube.com/watch?v=8kl6q_9qZOs&index=17&list=PL11CC59281C5FDFB3",
  // "https://www.youtube.com/watch?v=jo34VhfcetU&index=29&list=PL11CC59281C5FDFB3",
  // "https://www.youtube.com/watch?v=hic-dnps6MU&list=PL11CC59281C5FDFB3&index=2"
  "https://si.wsj.net/public/resources/images/BN-NW458_Stones_GR_20160504165415.jpg",
  "http://img.wennermedia.com/social/rs-7972-121110-rollingstones-9-rect-1352579213.jpg",
  "https://s3.amazonaws.com/rapgenius/rollingstones_2372801b.jpg",
  "https://i.ytimg.com/vi/rPFGWVKXxm0/maxresdefault.jpg",
  "http://diffuser.fm/files/2013/10/RollingStones_Keystone_Hulton.jpg"
];

module.exports = function(robot) {
   return robot.hear(/Rolling Stones/i, function(msg) {
    return msg.send(msg.random(stones));
  });
};