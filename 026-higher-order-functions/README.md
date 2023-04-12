## Week 12

## Higher Order Functions

Right off the bat i probably need to watch this whole series. I don't know what I don't know.

Higher order functions accepts a function as a parameter, or returns a function

Higher order functions can help reduce repetition and save space

Function factories are neat and I haven't seen them before. I asked chatGPT about some of the use cases to get a little more insight on how I could apply them in the future. I also asked it for a basic example and it gave me this which really cleared things up:

```
function createCounter() {
  let count = 0;

  return function() {
    count++;
    console.log(count);
  }
}

const counter1 = createCounter();
const counter2 = createCounter();

counter1(); // logs 1
counter1(); // logs 2
counter2(); // logs 1
counter2(); // logs 2

When createCounter() is called, it returns a new function that has access to the count variable.
The returned function can be assigned to a variable, such as counter1 or counter2, and called
multiple times to increment and log the count.

Each time the returned function is called, it increments the count variable and logs the new value.
The count variable is maintained separately for each instance of the returned function, so counter1
and counter2 have their own separate counts.
```

## Implement Reduce for Sum

While I had this done, I decided to implement your solution as practice since I'm still pretty new to higher order functions. I couldn't figure out why sum was an object, and chatGPT told me that the initial value needs to match the structure of the final value, and not setting an initial value like I did for mine makes sum an object with the same properties as MY_DATA by default.

I think I still prefer my solution a bit more in this instance, but for bigger projects this would be really helpful

## My attempt at fixing avg and render avg

No changes since I jumped the gun slightly on the last commit (by two lines) and I had the render issue already fixed
