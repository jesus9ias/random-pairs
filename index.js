var participants = require('./participants.json');

var pairs = [];

while (participants.length > 0) {
  var firstMemberPosition = Math.floor(Math.random() * participants.length);
  var firstMember = participants[firstMemberPosition];
  pairs.push([firstMember]);

  participants = participants
    .filter((p) => p[1] !== firstMember[1]);

  var otherParticipants = participants
    .filter((p) => firstMember[0] !== p[0]);

  var secondMemberPosition;
  var secondMember;

  // Neither participant in other teams nor self team
  if (otherParticipants.length === 0 && participants.length === 0) {
    pairs[pairs.length - 1][1] = ['', ''];
    break;
  }

  // No participants in other teams but yes in self team
  if (otherParticipants.length === 0 && participants.length > 0) {
    otherParticipants = [...participants];
  }

  secondMemberPosition = Math.floor(Math.random() * otherParticipants.length);
  secondMember = otherParticipants[secondMemberPosition];

  pairs[pairs.length - 1][1] = secondMember;

  participants = participants
    .filter((p) => p[1] !== secondMember[1]);
}

console.log('pairs', pairs);
