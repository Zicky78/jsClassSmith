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


