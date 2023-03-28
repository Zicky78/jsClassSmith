## What I know about JSON

JSON is a format for storing data and is commonly used for sending data over the web. It is stored as a string which makes it quick to transfer.

You can use built in methods parse(JSON) and stringify(Object) to convert to and from JSON

Somehow I've never seen that bracket notation to access object properties, so that was interesting to learn about. Not entirely sure how useful it is, I haven't really encountered a situation where I needed the object property name stored in a variable, but I'll keep it in mind

## Week 11 Refactor

Firstly, just a little about my solution (probably should have included this part on the previous commit). I moved the updateDOM function into render.js since it seemed to belong there more. I also made data.js, which holds MY_DATA, and the functions that use said data to get more data (calcAvg). I exported MY_DATA and took out occurrences of passing MY_DATA as a function argument. I kept the form validation with the form event listener in main.js since they were both form related, though I was tempted to throw that into it's own module.

I think the code looks much better, and is a lot more manageable / readable. I've always wondered why modularization / division of code in general is taught so late in programming classes. In just about all of the intro courses (Java, JS, Python, even C++ for CSCI 40), dividing code up into separate files seems to be addressed later on in the course. I know that importing / exporting adds a layer of complexity, but I think that it could be a good analogy to scope and function arguments / reinforce those concepts if taught earlier. Also I think that so much of coding is abstracting your problem into smaller parts that can be codified, which only becomes more intuitive after practice. I don't think it's a really big issue or anything, but I digress. 