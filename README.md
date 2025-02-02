# Express.js Route Missing Error Handling for Invalid User ID

This repository demonstrates a common error in Express.js applications: a route handler that lacks error handling for invalid input.  Specifically, the `/users/:id` route attempts to use the `userId` parameter without first validating it. This can lead to unexpected behavior or crashes if the `userId` is not in the expected format or does not exist.

The `bug.js` file contains the buggy code. The `bugSolution.js` file shows how to fix the bug using proper error handling.