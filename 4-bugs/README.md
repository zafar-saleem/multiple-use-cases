We are making asynchronous call therefore, `server_echo` is `undefined` at the bottom of the code.

```
var server_echo;
var json = {
	// We don't need to use JSON.stringify().
  json: JSON.stringify({
    a: 1,
    b: 2
  }),
  delay: 3
};
fetch("/echo/", {
  method: "post",
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/json"
  },
  // Pass a json object or object literal as body because we are making POST request.
  body:
    "json=" +
    encodeURIComponent(JSON.stringify(json.json)) +
    "&delay=" +
    json.delay
})
  .then(function (response) {
    server_echo = response.json().echo;
    return response.json(); // we have already used .json() on Response. This will trigger .catch block.
  })
  .then(function (result) {
  	// This won't run due to above issue in .then block.
    alert(result);
  })
  .catch(function (error) {
  	// This will be executed.
    console.log("Request failed", error);
  });

// `server_echo` is undefined as above block of code is async.
server_echo.forEach(
	element => console.log(element)
)
```