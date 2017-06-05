[![Build Status](https://travis-ci.org/srvance/git-time-machine.svg?branch=master)](https://travis-ci.org/srvance/git-time-machine)
[![Dependency Status](https://david-dm.org/srvance/git-time-machine/status.svg)](https://david-dm.org/srvance/git-time-machine) 
[![devDependency Status](https://david-dm.org/srvance/git-time-machine/dev-status.svg)](https://david-dm.org/srvance/git-time-machine?type=dev)
[![Greenkeeper badge](https://badges.greenkeeper.io/srvance/git-time-machine.svg)](https://greenkeeper.io/)

# Git Time Machine

![Git Time Machine](./images/Time%20Machine.jpg)

This application takes a different approach to browsing git history. Rather than
browsing through commit logs or using `git bisect` to find where particular
source of behavior changed, just slide your way through a timeline while
watching the area of interest.

Inspired by [Perforce](https://www.perforce.com/)'s Time-Lapse View in their
Visual Client, this project will bring a useful tool to the `git` ecosystem.

Initial support is only for GitHub, but the eventual intent is to support
any git implementations with an API.

## Contributors

* Development: [Stephen Vance](https://github.com/srvance)
* UX and Design: [Zoe Ouyang](https://github.com/orzoe)

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone https://github.com/srvance/git-time-machine` this repository
* `cd git-time-machine`
* `npm install`
* `bower install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

TBD

### Contributing

Please log pull requests and issues using GitHub. This project will be closed to
general contributors until it reaches 0.1 release.
