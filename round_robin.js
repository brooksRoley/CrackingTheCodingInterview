// Hi Howard, it took me a little while to wrap my head around that problem but I was
// frustrated at the end of our meeting and I couldn't let this problem get the better
// of me. I wanted to forward you my solution for my own peace of mind. Thanks for taking
// the time to meet with me. Sorry that I missed that 1 team should stay static during
// The array rotations. I was nervous.
// I've made the algorithm work for any sized team. If the number of teams is odd, then one
// team per week gets a bye and is not printed in the list of scheduled games.


// This was a phone screen interview from Lyft. May 18th 2016.
function matchups(n) {
  var games_per_round = n/2,
      purple_side=[],
      blue_side=[],
      teams=n,
      bye=false,
      move;

  if(n%2 !== 0){
    teams+=1;
    bye=true;
  }

  for (var i= 0; i < games_per_round; i++) {
    purple_side.push(i+1);
    blue_side.push(teams-i);
  };

  for (var i = 1; i < teams; i++) {
    console.log("Round " + i + ", Fight!");
    for (var game=0; game < games_per_round; game++) {
      var team1 = purple_side[game];
      var team2 = blue_side[game];
      if (team1 !== teams && team2 !== teams) {
        console.log(team1 + " vs " + team2);
      };
    };
    move = blue_side.shift();
    purple_side.splice(1,0,move);
    blue_side.push(purple_side.pop());
  };
}

// matchups(4);
matchups(9);
// matchups(16);
