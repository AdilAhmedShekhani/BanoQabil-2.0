### What are Promises in JS:

To manage asynchronous actions in JavaScript, promises are used. It is an assurance that something will be done. The promise is used to keep track of whether the asynchronous event has been executed or not and determines what happens after the event has occurred.

### A Promise has four states:

- fulfilled: Action related to the promise succeeded
- rejected: Action related to the promise failed
- pending: Promise is still pending i.e. not fulfilled or rejected yet
- settled: Promise has fulfilled or rejected

### Parameters::

- Promise constructor takes only one argument which is a callback function (and that callback function is also referred as an anonymous function too).
- Callback function takes two arguments, resolve and reject
- Perform operations inside the callback function and if everything went well then call resolve.
- If desired operations do not go well then call reject.

#### Benefits of Promises:

- Improves Code Readability
- Better handling of asynchronous operations
- Better flow of control definition in asynchronous logic
- Better Error Handling

### What is Callback in JS

Callbacks are a great approach to dealing with something once another task has been finished. Here, “something” refers to the execution of a function. Callbacks can be utilized if we wish to run a function immediately following the return of another function.

The type of JavaScript function is objects. They may therefore be supplied as an argument to any other function when calling them, just like any other objects (Strings, Arrays, etc.).

### The benefit of Callback:

- You can run another function call after waiting for the outcome of a prior function call.
- You can call the parent function from the child function and can also pass data from child to parent.
