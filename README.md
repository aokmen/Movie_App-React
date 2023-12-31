# Movie_App-React

<h3>Visit: https://movie-app-react-firebase-api.netlify.app/</h3>

<img alt="alt_text" src="./movie.gif"/>
## Description

Project aims to create a Movie App.

 
## Project Skeleton

```
009 - Movie App (folder)
|
|----readme.md 
SOLUTION
├── public
│     └── index.html
├── src
│    ├── auth
│    │     └── firebase.js
│    ├── components
│    │     ├── MovieCard.js
│    │     └── Navbar.js
│    ├── context
│    │     └── AuthContext.js
│    ├── pages
│    │     ├── Login.js
│    │     ├── Register.js
│    │     ├── Main.js
│    │     └── MovieDetail.js
│    ├── router
│    │     └── Router.js
│    ├── App.js
│    ├── App.css
│    ├── index.js
│    └── index.css
├── package.json
├── .env
└── yarn.lock

```



# React Movie App

## Project Description

This is a web application developed using React for browsing and exploring movies. Users can search for movies, view movie details, and log in or register to access additional features. The app also offers a dark mode for enhanced user experience.

## Features

### Authentication:

- Users can create accounts and log in using their email and password.
- Alternatively, users can log in using their Google accounts.
- Password reset functionality is available for registered users.

### Dark Mode:

- Users can easily switch between light and dark modes for a personalized viewing experience.

### Movie Browser:

- The app provides a search feature, allowing users to search for movies by title.
- Search results are displayed as movie cards, complete with images and basic information.
- Each movie card includes a rating badge based on the movie's average vote.

### Movie Details:

- Users can click on a movie card to access detailed information about a movie.
- Detailed information includes the movie's title, release date, overview, and average vote.
- An embedded video trailer enhances the movie details page.

### Navigation:

- The navigation bar facilitates easy movement between different pages.
- Available navigation options include Home, Register, and Login pages.
- Registered users can also log out using the navigation bar.

### Responsive Design:

- The application offers a responsive design that adjusts to different screen sizes.

## Tech Stack

- React (Frontend)
- Tailwind CSS (Styling)
- Firebase (Authentication)
- The Movie Database (TMDb) API (Movie Data)
- YouTube API (Movie Trailers)

## Getting Started

To run this project locally, follow these steps:

### At the end of the project

- improve coding skills within HTML & CSS & JS & ReactJS.

- use git commands (push, pull, commit, add etc.) and Github as Version Control System.

## Steps to Solution


- Step 1 : Create React App using `npx create-react-app movie-app` and install firebase `npm i firebase` / `yarn add firebase`

- Step 2 : Signup `https://firebase.google.com/` and create new app in firebase. 
  Firebase is a backed application development software that enables developers to develop iOS, Android and Web apps. It provides developers with a variety of tools and services to help them develop quality apps, grow their user base, and earn profit. It is built on Google’s infrastructure. Firebase offers a number of services, including: analytics,authentication, cloud messaging, realtime database, performance and test lab. Firebase is categorized as a NoSQL database program, which stores data in JSON-like documents.

![Project 005 Snapshot](firebase-create-app.gif)

- Step 3 : Use `https://firebase.google.com/docs/auth/web/start` and create `Authentication` operations.
  - Add the Firebase Authentication JS codes in your `firebase.js` file and initialize Firebase Authentication:

```jsx
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration at project settings part
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
```

- Use this method to `Sign up new users` :

```jsx
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
  })
  .catch((error) => {
    console.log(error);
  });
```

- Go to https://console.firebase.google.com => Authentication => sign-in-method => `enable Email/password`
- Use this method to `Sign in existing users` :

```jsx
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
  })
  .catch((error) => {
    console.log(error);
  });
```

- Use this method to `Set an authentication state observer and get user data` :

```jsx
import { getAuth, onAuthStateChanged } from "firebase/auth";

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
  } else {
    // User is signed out
  }
});
```

- Go to https://console.firebase.google.com => Authentication => sign-in-method => `enable Google`
- Use this method to `Authenticate Using Google with Popup` :

```jsx
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

signInWithPopup(auth, provider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;
  })
  .catch((error) => {
    // Handle Errors here.
    console.log(error);
  });
```

- Use this method to `Sign Out` :

```jsx
import { getAuth, signOut } from "firebase/auth";

signOut(auth)
  .then(() => {
    // Sign-out successful.
  })
  .catch((error) => {
    // An error happened.
  });
```

- Use this method to `Send a password reset email` :

```jsx
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

sendPasswordResetEmail(auth, email)
  .then(() => {
    // Password reset email sent!
  })
  .catch((error) => {
    const errorMessage = error.message;
    // ..
  });
```



