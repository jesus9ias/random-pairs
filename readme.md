

## File to load

You need to create a file named participants.json with a format like this:

```
[
  ["team1", "Juan"],
  ["team1", "Pako"],
  ["team2", "Pepe"],
  ["team3", "Jeff"],
  ["team3", "Josep"]
]
```

Element one of each sub-array is the team name used to group matches.
Element two of each sub-array is the participant name and can not be repeated to prevent confussion.

A member of an team can not be matched with other of same team exept if theres no more participants in any one.

