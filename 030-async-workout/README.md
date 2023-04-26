## Week 14

### Ideas for asynchronous functions

I see what you mean about doing both updateDOMs in a callback now, I didn't realize you meant the same callback.

I've used asynchronous code in game development and api calls before. Game development is a bit of a broad subject, so more specifically handling input with event listeners, keeping track of power-up timers, loading the images / sounds, etc.

### Refactor with promises

I still wanted to update the created element rather than creating a new stop element, so I needed to make an anonymous arrow function to be able to pass in that element along with the other variables I needed.

### Updates to code

I think I got a bit hung up on thinking I needed to use the promise chain. I needed the updateDOM in a promise with my last implementation so that I could get the promise and send it down the chain, but I can put that above the promise now and just use it as synchronous code now.