# Social Network Api

## Table of Content

- [Description](#description)
- [User Story](#User-Story)
- [Node Packages](#node-packages)
- [Relational Entity Diagram](relational-entity-diagram)
- [Start Application](#To-start-application)
- [Video Demonstration](#video-demonstration)
- [Questions](#questions)

## Description

Building the backend for a social network platform using express and connecting the server to a mongoDB database. This network enables users to share their thoughts, react to friends’ thoughts, and create a friend list.

## User Story

```md
AS A social media startup
I WANT an API for my social network that uses a NoSQL database
SO THAT my website can handle large amounts of unstructured data
```

```md
GIVEN a social network API
WHEN I enter the command to invoke the application
THEN my server is started and the Mongoose models are synced to the MongoDB database
WHEN I open API GET routes in Insomnia for users and thoughts
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete users and thoughts in my database
WHEN I test API POST and DELETE routes in Insomnia
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list
```

## Node Dependencies Packages

- [Mongoose](https://www.npmjs.com/package/mongoose)
- [express](https://www.npmjs.com/package/express)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [date-fns](https://www.npmjs.com/package/date-fns)

#### DevDependencies package

- [Nodemon](https://www.npmjs.com/package/nodemon)

## Relational Entity Diagram

![diagram](https://user-images.githubusercontent.com/102627226/184246725-191107d8-cc59-477e-8be3-181b804bd1f6.png)

## To Start Application

### Step 1 : Installation

- To run application follow the installation process of cloning this repository

```
git@github.com:zahrahaji10/social-network-api.git
```

- Change directory into the new cloned repository

```
cd social-network-api
```

- install the required packages for the application

```
npm install

```

### step 2: Create .env file

To connect to the database first set up the environment variables, to do this in the root src folder create a .env file. There is an .env.SAMPLE file which you will need to copy the empty template. Then enter the following;

```
DB_NAME='network_api'
```

### step 2: Connect database

To successfully connect to the database and start the serve, in your terminal enter the following;

```
npm run dev
```

## Postman Queries

To test the application's API routes, you can use postman. This platform enables the interaction with the API by sending requests to the API server and receives the response. Import the social-network-api file to help get all the requests and carry out the requests.

![test-api](https://user-images.githubusercontent.com/102627226/184348073-6346b3da-20d2-48fe-83da-fd1fb02fd2c0.png)

## Video Demonstration

This video walkthrough demonstrates the main functionalities of this social network API.

[Click Here](https://watch.screencastify.com/v/cTy1329YvzJSAE46AJCx)

## Questions

For any questions about this application, you can contact me on the following;

Personal E-mail : zahrahhaji10@gmail.com

GitHub profile Click Here
