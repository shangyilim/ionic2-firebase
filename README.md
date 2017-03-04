# Ionic 2 with Firebase
An introductory course to Ionic2 with a Firebase backend

## Prerequisite
1. Install [node](https://nodejs.org/en/) 
> Take note if you are on OSX, I recommend using homebrew to install node to avoid permission issues. [Guide](https://changelog.com/posts/install-node-js-with-homebrew-on-os-x)

2. Install code editor of your choice. Recommended [Visual Studio Code](https://code.visualstudio.com/).

3. Install Ionic 2:

  ```
  $ npm install -g ionic
  ```
4. Verify installation of ionic:

  ```
  $ ionic -v
  2.2.1
  ```
5. Install Cordova:

  ```
  $ npm install -g cordova
  ```
6. Verify installation of Cordova:

  ```
  $ cordova -v
  6.5.0
  ```

## Getting Started
1. Start by creating a blank ionic app. This will create an empty ionic2 app at your current directory 

  ```
  $ ionic start ionic2-firebase blank --v2
  ```
2. Navigate into the ionic2-firebase folder:

  ```
  $ cd ionic2-firebase
  ```
3. Start the app!

  ```
  $ ionic serve
  ```
  
  ## Deploy to Device
  1. create platform that you like android/ios
  ```
  $ ionic platform add android
  ```
  2. build your platform
  ```
  $ ionic build android
  ```
