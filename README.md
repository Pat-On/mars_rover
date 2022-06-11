# Mars Rover

The project is simulating the Mars Rover mission in a two-dimensional environment.

---
## Requirements

For development, you will only need Node.js and npm, installed in your environement.

## Main dependencies

- #### prompt-sync [prompt-sync npm page](https://www.npmjs.com/package/prompt-sync)

- #### jest [jest npm page](https://www.npmjs.com/package/jest)

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

## Install

    $ git clone https://github.com/Pat-On/mars_rover.git
    $ cd mars_rover
    $ npm install

## Configure app

    Application does not require any configuarion

## Running the project as a simple game

    $ npm run startGame

## Running the project for manual testing

    $ npm run manual

## Running the jest tests

    $ npm run tests

## Running the jest tests coverage

    $ npm run coverage