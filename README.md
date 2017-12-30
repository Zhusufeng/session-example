# session-example

## Summary
This repo is a simple testing ground to learn how to use [express-session](https://www.npmjs.com/package/express-session). Each branch in this repo explores a functionality in the express-session module. (Currently the branches continue off of each other in numeric order.)

I started out with this [YouTube Tutorial](https://youtu.be/yaeD7OCIzOg), which created my first branch. From there, I added more functionalities: logout button handling, login button handling, handling input from the client, sign up handling, session regeneration and some clean up.

## Tech
* Client-side
  * HTML
  * JavaScript (vanilla)
* Server-side
  * Node
  * Body-Parser
  * Express
  * Express-session
Note: Not all branches require each piece of tech

## Table of Contents
1. [simple-counter](#1.-simple-counter)
2. [simple-counter-logout](#2.-simple-counter-logout)
3. [simple-counter-login](#3.-simple-counter-login)
4. [simple-counter-input](#4.-simple-counter-input)
5. [simple-counter-signup](#5.-simple-counter-signup)
6. [simple-counter-regenerate](#6.-simple-counter-regenerate)
7. [simple-counter-regenerate-two](#7.-simple-counter-regenerate-two)
8. [simple-counter-redo-counting](#8.-simple-counter-redo-counting)

### [1. simple-counter](https://github.com/Zhusufeng/session-example/tree/simple-counter)
This first branch follows this [YouTube Tutorial](https://youtu.be/yaeD7OCIzOg) by [Theodore Anderson](https://thejavascriptchronicles.com).

To run the server, use node server/server.js. This sets up only a server side file that can be reached at localhost:8088. The first visit will create a session with visitCount of 1. Every time you refresh, your session's visitCount will increase by 1. If you turn off your server, the current session will be lost. 

### [2. simple-counter-logout](https://github.com/Zhusufeng/session-example/tree/simple-counter-logout)
This branch adds onto the last branch by adding a logout endpoint. To run the server, use node server/server.js. By going to localhost:8088/logout, this will destroy your session.

### [3. simple-counter-login](https://github.com/Zhusufeng/session-example/tree/simple-counter-login)
This branch adds a client side in HTML with a login and a logout button. To run the server, use node index.js. This branch serves up on localhost:8088 the index.html, and when the 'logout' button is pushed, the server handles the request to the logout endpoint. When the 'login' button is pushed, the server handles the request to the login endpoint instead of the '/' endpoint.

### [4. simple-counter-input](https://github.com/Zhusufeng/session-example/tree/simple-counter-input)
This branch adds an input box for clients to enter a username. To run the server, use node index.js. The server has a users object (if it weren't for this being a testing ground, you would probably use a [session store](https://www.npmjs.com/package/express-session#compatible-session-stores) instead). This branch serves up on localhost:8088 the index.html, and clients can enter a username. There will be a user's total visitCounts and a session visitCounts to keep track of. By clicking the login button repeatedly, your session visit counts will grow (currently all users will use the same session unless you logout).

### [5. simple-counter-signup](https://github.com/Zhusufeng/session-example/tree/simple-counter-signup)
A signup input box and button have been added to the client side. To run the server, use node index.js. Signup and Login endpoints bundle user's total visitCounts and session visitCounts in an object called 'info', which is sent to the client. Signup catches if the username has already been created, and login catches if the username has not been created.

### [6. simple-counter-regenerate](https://github.com/Zhusufeng/session-example/tree/simple-counter-regenerate)
This branch refactors the above branch to use req.session instead of the 'info' object. It also checks if someone is logged in already, and someone tries to click 'signup' or 'login'. To run the server, use node index.js.

### [7. simple-counter-regenerate-two](https://github.com/Zhusufeng/session-example/tree/simple-counter-regenerate-two)
This removes the check on if someone is logged in already when someone clicks 'signup' or 'login'. Instead, if someone is already logged in, it uses req.session.regenerate, which makes a new cookie even if it's already in session. It sets the req.session.user to the person who most recently logged in/signed up. To run the server, use node index.js.

### [8. simple-counter-redo-counting](https://github.com/Zhusufeng/session-example/tree/simple-counter-redo-counting)
To run the server, use node index.js. This branch fixes the last branch. If you played around with the last branch, visitCount is only ever 1 because of session regeneration.

So on the client side, a visit button has been added to be able to increase the visitCount.

Once that was added, I noticed visitCounts are not the same when I checked the console logs for the client versus the server. It seems that req.session.user = users[name] saves a shallow copy of users[name] object for the cookie/req.session (aka req.session does not reference the same object in users). So on the client side, it receives this cookie and the total visitCounts have not changed. So when I added  req.session.user.visitCount++ to the visit endpoint, that did not update the users object but rather it updates the session's own shallow copy. 

If you logout and login again, it will replace the copy with a new one, so the totalCount has been updated.

## Conclusion
That's it for now!

If you have any questions, suggestions, insight or any other parting words, please comment below! 