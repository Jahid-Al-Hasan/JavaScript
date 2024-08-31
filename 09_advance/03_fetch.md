# Fetch API

### basic syntex
```javascript
fetch(file)
.then(x => x.text())
.then(y => myDisplay(y));
```
Fetch is based on async and await.
```javascript
async function getText(file) {
  let x = await fetch(file);
  let y = await x.text();
  myDisplay(y);
}
```

## History
* [click here](https://blog.logrocket.com/fetch-api-node-js/)
<----Try to note from this site.
* [mdn doc](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
* [fetch()](https://developer.mozilla.org/en-US/docs/Web/API/Window/fetch)



## Fetch API
The Fetch API is a modern interface in JavaScript that allows you to make network requests to servers. It is built on promises and provides a more powerful and flexible feature set than the older XMLHttpRequest.

Here’s a basic example of how to use the Fetch API in JavaScript:

### Basic Fetch Request
```javascript
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parses JSON response into native JavaScript objects
  })
  .then(data => {
    console.log(data); // Handle the response data
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
```
##### Explanation
1. fetch(url, options):
    * The "fetch" function takes a URL as a parameter and optionally an options object to configure the request (e.g., method, headers, body).
2. Response Handling:
    * The first ".then(response => ...)" checks if the response was successful (status code 200-299). If not, it throws an error.
    * "response.json()" parses the response body as JSON.
3. Error Handling:
    * The ".catch(error => ...)" handles any network errors or errors thrown during the fetch operation.
### Making a POST Request
To send data to a server (like form submissions), you use the POST method. Here’s how you can do it with the Fetch API:

```javascript
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

##### Explanation
* method: 'POST': Specifies that this request will send data to the server.
* headers: Includes headers such as Content-Type to tell the server the type of data being sent.
* body: Contains the data being sent, typically serialized to JSON with JSON.stringify().
### Using Async/Await with Fetch
Using async/await makes the code more readable and easier to handle for asynchronous operations:

```javascript
async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('There was a problem with the fetch operation:', error);
  }
}

fetchData();
```
### Conclusion
The Fetch API provides a clean and modern way to make network requests. It handles promises for easier syntax and supports all HTTP methods (GET, POST, PUT, DELETE, etc.). Using async/await further simplifies the syntax, making it more readable and manageable.
