var participants = require('./participants.json');

var pairs = [];

while (participants.length > 0) {
  var memberPosition = Math.floor(Math.random() * participants.length);
  var memberName = participants[memberPosition][1];
  
  var pairsCount = pairs.length - 1;
  var lastMatch = pairs[pairsCount];
  
  if (lastMatch && pairs[pairsCount].length < 2) {
    pairs[pairsCount].push(memberName);
  } else {
    pairs.push([memberName]);
  }

  participants = participants
    .filter((_, i) => i !== memberPosition);
}

console.log('pairs', pairs);
