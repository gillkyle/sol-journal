<p align="center">
  <img alt="preview of page" src="https://raw.githubusercontent.com/gillkyle/images/master/Dark-Light.png" />
</p>
<h1 align="center">
  Sol Journal
</h1>

A simple, minimal, journaling platform that works offline and across all devices. Installable as a PWA on mobile devices for easy access on a phone, inspired by [JournalBook](https://github.com/trys/JournalBook)

## 🚀 Getting Started

Sol Journal uses firebase to support offline functionality and authentication, a new Firebase app will need to be setup with Firestore as a database, be sure to add documents for `users` and `entries`, as well as enabling email for user authentication.

Install dependencies:

```bash
npm install
```

or

```bash
yarn
```

Then configure a file in `.env` with the following keys from firebase:
```env
REACT_APP_FIREBASE_API_KEY=<BUNCHofRandomNumbersAndChars>
REACT_APP_DEV_AUTH_DOMAIN=<your-id.firebaseapp.com>
REACT_APP_DEV_DATABASE_URL=<https://your-id.firebaseapp.com>
REACT_APP_DEV_PROJECT_ID=<your-id>
```

Navigate into the project directory, and then launch the site with this command:

```bash
yarn develop
```

The site will be opened up in your default browser on http://localhost:3000

Edit code in the `/src`, save your changes, and they'll reload instantly in the browser.

## 🧐 What's inside?

The minimal landing page starter comes with a few plugins installed already, but it's main focus is on staying simple and looking clean. These things are included by default:

- 🔥 Firestore: Cloud firestore persists registered users to a users document and saved journal entries to an entries document
- 🎨 Dark Theme: the `src/styles/theme.js` file contains a set of colors and default styles that are applied to components with Emotion. A default light and dark theme are already in the file.
- 🔍 Search: Full-text search of a user's entries stored in Firestore for quick access
- ➗ Functions: Firebase functions are initialized in the `functions` directory, serverless functions managed by Firebase can be setup here (note: with the free Spark plan, functions can't make requests to external API's like Algolia)

## 💫 Deploy

To create an optimized build of the site run this command:

```bash
yarn build
```

A `/build` folder will be assembled that can be deployed with this command:

```bash
firebase deploy
```
