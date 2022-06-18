# GrowwBot

Team Members: Anindya Sadhukhan &amp; Manish Kumar

> Groww is an online investment platform where users can invest in stocks, mututal funds, fixed deposits etc. \
> This web app smoothens user experience by providing integrated chat bot that has FAQs and other functionalities. \
> Users can access features like completion of KYC, check investment history along with other FAQs based on the page they are browsing all through the chat bot.
 
## [Demo](https://youtu.be/q7-mkxzhY9Q)

## Features

1. Login using Google Oauth.
2. Chat bot to help with FAQs.
3. Different set of questions for different pages.
4. Questions in chatbot are relatable to user's current page.
5. KYC completion through chat bot.
6. Investment in stocks, mutual funds and fixed deposits.
7. Dynamic answers in chat bot based on user's investmentments. 
8. This web app is a basic clone of actual [Groww](https://groww.in/) website. 

## Installation and Usage

Make sure you have Nodejs and react scripts installed globally in your system.
And if you want to use a local database then install mongodb as well in your system.

### Backend

```sh
$ cd backend
$ cp .env.template .env
# Now fill all the env variables inside .env file.
$ npm install
$ npm run server
```
Backend server runs at http://localhost:5000

### Frontend

```sh
$ cd frontend
$ cp .env.template .env
# Now fill all the env variables inside .env file.
$ npm install
$ npm start
```
Now you can access the site locally at http://localhost:3000

To run frontend and backend concurrently -
```sh
$ cd backend
$ npm run dev
```
If you change the backend server port make sure to change it in setupProxy.js located at frontend/src


## Screenshots

![Dashboard](/screenshots/1.png)
![Dashboard](/screenshots/2.png)
![Dashboard](/screenshots/3.png)
![Dashboard](/screenshots/4.png)
![Dashboard](/screenshots/5.png)
![Dashboard](/screenshots/6.png)
![Dashboard](/screenshots/7.png)
![Dashboard](/screenshots/8.png)

## Developers

**[Anindya Sadhukhan](https://github.com/Anindya99)** \
**[Manish Kumar](https://gitlab.crio.do/manishgiri562)**
