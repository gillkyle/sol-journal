<p align="center">
  <img alt="logomark" width="50%" src="https://raw.githubusercontent.com/gillkyle/images/master/sol-journal-logo.png" />
</p>
<h2 align="center">
  Personal Journaling Platform
</h2>

Sol Journal is a simple, minimal, journaling platform that works offline and across all devices. It can be hosted yourself on Firebase and then installed as a PWA, on mobile devices for easy access on a phone, or on Desktops.

<p align="center">
  <img
    alt="preview of page"
    src="https://raw.githubusercontent.com/gillkyle/images/master/hero-mixed.png"
  />
</p>

## Introduction

<a href="https://www.producthunt.com/posts/sol-journal?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-sol-journal" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=157146&theme=light" alt="Sol Journal - A simple, open-source personal journaling platform | Product Hunt Embed" style="width: 250px; height: 54px;" width="250px" height="54px" /></a>

Journaling is a keystone habit that can improve your happiness and [overall health](https://psycnet.apa.org/record/2004-16777-010). Writing in a journal with pen and paper is effective, but not as easily accessible, maintained, or preserved as taking advantage of digital platforms.

Having a journal that is available on any device makes journaling easier. Being tailored specifically to journaling makes it less cumbersome than trying to utilize a note taking app or document for recording thoughts and impressions.

## Getting Started

There are 2 ways to get started using Sol Journal:

1. You can develop it locally after hooking it up to your own Firebase project by following the instructions below
2. You can host your own version and manage it yourself by following the [setup docs](https://github.com/gillkyle/sol-journal/blob/master/SETUP.md)

Sol Journal uses firebase to support offline functionality and authentication, meaning a new Firebase app will need to be setup with Firestore as a database if you wish to host it yourself. Be sure to add documents for `users` and `entries`, as well as enabling email for user authentication.

## Features

In the spirit of minimalism, a few key features are in place for a quick, lightweight journaling experience that can work across devices, including:

- 🔥 Authentication: Cloud firestore persists registered users to a users document and saved journal entries to an entries document
- 🎨 Theming: the `src/styles/theme.js` file contains a set of colors and default styles that are applied to components with Emotion. A default light and dark theme are already in the file (adding [theme-ui](https://theme-ui.com/) support would be a great future addition)
- 🔍 Search: full-text search of a user's entries stored in Firestore for quick access to past entries
- 🖥 Mobile Friendly: designed to look great on mobile as well as desktop, with easy navigation on both
- 💡 PWA: being a progressive web app makes it installable from Chrome/Safari on desktop, or be added to the homescreen on iOS/Android
- 🔌 Offline Support: read/write when you're offline and let the updates happen when your connection is restored
- 🗄 Export: backup all of your entries at any time to save your data

## Project setup

Files are organized into these folders:

`/components`: user interface pieces to construct the design and layout of the site  
`/data`: local data transformed by Gatsby to become queryable by Gatsby's GraphQL data layer  
`/img`: images used by places like landing pages that are optimized by gatsby-image and then queryable in the GraphQL layer  
`/pages`: public pages that can be seen by unauthenticated users and are completely server side rendered by Gatsby during `gatsby build`  
`/routes`: private, client only routes only visible to authenticated users that are used by the app section of the journal  
`/styles`: role based design tokens and theme definitions  
`/util`: simple utility functions, for things like formatting dates

## Developing

Clone the project:

```bash
git clone https://github.com/gillkyle/sol-journal
```

Install dependencies:

```bash
npm install
```

or

```bash
yarn
```

Then configure a file in a new `.env` file (using the `.env.sample` file as a reference) with the following keys from the firebase console:

```env
GATSBY_FIREBASE_API_KEY=<BUNCHofRandomNumbersAndChars>
GATSBY_DEV_AUTH_DOMAIN=<name>.firebaseapp.com
GATSBY_DEV_DATABASE_URL=https://<name>.firebaseio.com
GATSBY_DEV_PROJECT_ID=<name>
GATSBY_DEV_STORAGE_BUCKET=<name>.appspot.com
GATSBY_DEV_MESSAGING_SENDER_ID=############

GATSBY_CONFIRMATION_EMAIL_REDIRECT=https://<name>.firebaseapp.com
```

Again, be sure to add documents for `users` and `entries`, as well as enabling email for user authentication.

Navigate into the project directory, and then launch the site with this command:

```bash
gatsby develop
```

The site will be opened up in your default browser on http://localhost:8000

Edit code in the `/src`, save your changes, and they'll reload instantly in the browser.

## Deploy

To create an optimized build of the site run this command:

```bash
gatsby build
```

A `/public` folder will be assembled that can be deployed to any static file hosting service like Netlify or surge.

It can be deployed to firebase with this command:

```bash
firebase deploy -p public
```

## Inspiration and Other Projects

Sol Journal is inspired by [JournalBook](https://github.com/trys/JournalBook) and borrows much of its design and navigation.

If you're interested in a comparable version of the project, you can check out [this fork that adds rich text support](https://github.com/garrowp/sol-journal) to the journaling block.
