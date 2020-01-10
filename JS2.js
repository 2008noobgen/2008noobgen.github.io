var things = ['Oh no zombies!', 'super ez obstacle course!', 'HARDEST OBBY EVER', 'BETTER PAINTBALL!', 'Clockwork Obsticle Course', 'Travel Through The Windows 98 pc!'];
var thing = things[Math.floor(Math.random()*things.length)];
 
document.getElementById("myHeader").innerHTML = [thing];