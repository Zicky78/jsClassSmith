## Week 13

### My attempt

I made a TripData class in data.js and imported into main.js to use in the event listener where we are creating the object

### What broke and how can we fix it?

Firstly, I appreciate the shout out haha.

Well, since I didn't use the encapsulation syntax, nothing originally. However, unlike Humpty Dumpty, if we break it we can put it back together again.

Calc Avg breaks because of the references and because of the reduce function's return needing to match the input. I made getters for the the TripData class and changed the naming conventions when creating sums for the averages.

Edit buttons broke and it was simple to just add in the getter in place of the values, though I forgot to clear local storage so it was still breaking until I remembered to do that like 5 minutes later

Other than that I don't see any other issues right now.

### Oops

I didn't know local storage removes the context, and I apparently didn't test things well enough last commit because immediately upon seeing your second video I refreshed and everything did indeed break haha. Is there a benefit to using the encapsulation syntax in this case if we aren't using getters and setters? 

