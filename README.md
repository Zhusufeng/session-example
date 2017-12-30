#session-example

##Summary
This repo is a simple testing ground to learn how to use express-session. Each branch in this repo explores a functionality in the express-session module. (Currently the branches continue off of each other in numeric order.)

I started out with this [YouTube Tutorial](https://youtu.be/yaeD7OCIzOg), which created my first branch. From there, I added more functionalities: logout button handling, login button handling, handling input from the client, sign up handling, session regeneration and some clean up.

##Tech
* Client-side
  * HTML
  * JavaScript (vanilla)
* Server-side
  * Node
  * Body-Parser
  * Express
  * Express-session
Note: Not all branches require each piece of tech

##Table of Contents
1. [simple-counter](#1.-simple-counter)
2. [simple-counter-logout](#2.-simple-counter-logout)
3. [simple-counter-login](#3.-simple-counter-login)
4. [simple-counter-input](#4.-simple-counter-input)
5. [simple-counter-signup](#5.-simple-counter-signup)
6. [simple-counter-regenerate](#6.-simple-counter-regenerate)
7. [simple-counter-regenerate-two](#7.-simple-counter-regenerate-two)
8. [simple-counter-redo-counting](#8.-simple-counter-redo-counting)

###[1. simple-counter](https://github.com/Zhusufeng/session-example/tree/simple-counter)
This first branch follows this [YouTube Tutorial](https://youtu.be/yaeD7OCIzOg) by [Theodore Anderson](https://thejavascriptchronicles.com).

To run the server, use node server/server.js. This sets up only a server side file that can be reached at localhost:8088. The first visit will create a session with visitCount of 1. Every time you refresh, your session's visitCount will increase by 1. If you turn off your server, the current session will be lost. 

###[2. simple-counter-logout](https://github.com/Zhusufeng/session-example/tree/simple-counter-logout)
This branch adds onto the last branch by adding a logout endpoint. To run the server, use node server/server.js. By going to localhost:8088/logout, this will destroy your session.

###[3. simple-counter-login](https://github.com/Zhusufeng/session-example/tree/simple-counter-login)
This branch adds a client side in HTML with a login and a logout button. To run the server, use node index.js. This branch serves up on localhost:8088 the index.html, and when the 'logout' button is pushed, the server handles the request to the logout endpoint. When the 'login' button is pushed, the server handles the request to the login endpoint instead of the '/' endpoint.

###[4. simple-counter-input](https://github.com/Zhusufeng/session-example/tree/simple-counter-input)

###[5. simple-counter-signup](https://github.com/Zhusufeng/session-example/tree/simple-counter-signup)

###[6. simple-counter-regenerate](https://github.com/Zhusufeng/session-example/tree/simple-counter-regenerate)

###[7. simple-counter-regenerate-two](https://github.com/Zhusufeng/session-example/tree/simple-counter-regenerate-two)

###[8. simple-counter-redo-counting](https://github.com/Zhusufeng/session-example/tree/simple-counter-redo-counting)