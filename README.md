# React Native Basics

This is a course material for learning how to make a mobile app for Android and iOS with React Native, writing only JavaScript.

The sample app in the `/app` directory is based on Facebook's [`create-react-native-app`](https://github.com/react-community/create-react-native-app). It's meant to work as a boilerplate for developing your own app. It has ready examples of all the sections featured in the course.

See the [course slides](https://docs.google.com/presentation/d/1Pg7XiojNrS2ZhnOnr0CSG9EV-Oewu1YkLF9KVNGkAWU/edit?usp=sharing) for more detailed information.

## Goals
During the course you will learn how to:

* Develop a mobile app for both Android and iOS in [React Native](https://facebook.github.io/react-native/).
* Build a robust navigation with [React Navigation](https://reactnavigation.org/docs/hello-react-navigation.html).
* Connect to APIs with [Fetch](https://facebook.github.io/react-native/docs/network.html).
* Handle app state with [Redux](https://redux.js.org/).
* Write modern functional ES2015/ES6+ version JavaScript.
* Maintain a good project structure for a scalable app.

Writing tests, bridging native Android/iOS modules and releasing apps to AppStore and Play Store are out of the scope of this course.

## Structure
The course is divided into five sections. We'll go through each section of the course together in class. There will be plenty of time to write your own code on top of it.

1. Setting up
2. [React Native Components](https://facebook.github.io/react-native/docs/components-and-apis.html) (Including [props](https://facebook.github.io/react-native/docs/props.html), [state](https://facebook.github.io/react-native/docs/state.html), [styles](https://facebook.github.io/react-native/docs/style.html) and [lifecycle](https://reactjs.org/docs/state-and-lifecycle.html#adding-lifecycle-methods-to-a-class).)
3. [React Navigation](https://reactnavigation.org/docs/hello-react-navigation.html)
4. [Fetch](https://facebook.github.io/react-native/docs/network.html) & [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
5. [Redux](https://redux.js.org/)

## Prerequisites
You will need to install [node](https://nodejs.org/en/download/) and [yarn](https://yarnpkg.com/en/docs/install). See their respective links for installation instructions.

If you're using a physical iOS or Android device to test, also install [Expo](https://expo.io/) from AppStore or Play Store on that device.

_Downloading tools like Android Studio or Xcode isn't necessary. However, if you have them installed, you can use the typically included Android Emulator and iOS Simulator to run your app._

## Assignment
**At the end of the course, you should have a functional app that you have developed yourself**. The app doesn't have to be complete but it should include the features taught during the course: reusable components (React Native), navigation (React Navigation), API integration (Fetch) and centralized state handling (Redux).

We'll develop an example app together in class using the [Hacker News API](https://github.com/HackerNews/API). You're welcome to follow development of the example app and add your own touch to it.

If you're confident, you can build the app around any API. You could use, for example, the [Foreign exchange rates API](https://exchangeratesapi.io/), the [Magic: the Gathering API](https://docs.magicthegathering.io/) or the [PokéAPI](https://pokeapi.co/). None of these require authentication via OAuth or API keys.

Here's a long list of publicly available APIs for the brave and inspired: https://github.com/toddmotto/public-apis.

## Usage
1. Make sure you have `node` and `yarn` installed.
2. Go to `/app` directory on your CLI of choice.
3. Run `yarn install`.
4. Run `yarn start`.
5. Follow the instructions to get the app running on your device, simulator or emulator.

You can access the debug mode by shaking the physical device, pressing `CMD (or CTRL) + M` on Android Emulator, or pressing `CTRL + ALT + Z` on iOS Simulator.

Toggle `Debug JS Remotely` from the debug menu and a tab should opne in your browser (`http://localhost:19000/debugger-ui/` or similar). If you're using Chrome, you can use the console and breakpoints to debug your code.

See more info on running the `create-react-native-app` bootstrap from `./app/README.md`. For any scripts, just replace `npm` with `yarn`.

## Contents
The repository has been initialised [eslint](https://eslint.org/) with a JavaScript linter. It's configured for React, React Native and React Navigation so you don't have to. You can lint your code and make sure it's compatible with the rules by running `yarn lint`.

`App.js` is the entry point to the app, `.eslintrc` has all the linting rules, and `package.json` documents basic metadata and the packages required to build the app.

Redux will be initialised in a `configure-store.js` file.

### Directories
Directories help segment a scaling codebase. Each section/branch will expand upon the directories and their content as needed. Below is an explanation on each directory and their purpose:

* `/actions` hosts Redux action creators.
* `/api` will have files for API integrations.
* `/constants` has files like `colors.js`, `config.js`, `prop-types.js` and `action-types.js` that contain global variables that are constant throughout the app.
* `/components` has the meat of the app, everything that is rendered in a neatly organised manner. `components` should rarely, if ever, have their own state or business logic.
* `/containers` has screens used by `react-navigation`. Containers, or screens, should not have any static content rendered, only imported `components`.
* `/fixtures` has raw data for development and testing.
* `/navigators` will have code handling the navigation engine of the app.
* `/reducers` has Redux reducers that update the store.
* `/util` contains utility scripts that can be used anywhere within the app.

---

With ♥️ by [Ville Pelkonen](https://www.linkedin.com/in/vpelkonen/) & [Samuli Laine](https://www.linkedin.com/in/samuli-laine-2a5bb880/)
