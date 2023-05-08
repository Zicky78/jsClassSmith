## Week 17

Since my project was set up with modules from the start, all that was left was to add in the pagination feature.

I changed my render function from displaying all entries in a forEach to taking an entry as an argument and just displaying that one, and then added navigation functions to the nav buttons.

Thankfully it wasn't a big adjustment due to how I had written everything else prior.

I also made sure to test with the addTestEntry() function enabled and disabled to make sure both versions still worked fine. It's enabled by default, but can be commented out on line 156 of log.js.

All in all though, I enjoyed this project a lot. Hindsight is 20/20 and using a linked list of objects from the start would have probably been a better implementation. I might refactor this in my own time to implement that rather than searching entries by date all the time. 










