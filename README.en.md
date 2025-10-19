# Ant Simulation

## Introduction

I started this project because I wanted to implement the process of ants finding food by secreting pheromones.

**Each ant leaves a trail to find food, and when it finds food, it creates a path connecting the food and the nest through the trail, which other ants can then use.** I have implemented this behavior.

### Demo

Ants searching for food:

![Searching for food](https://github.com/iai6203/ant-simulation/blob/main/docs/assets/path-find.gif?raw=true)

Ants following a path:

![Following a path](https://github.com/iai6203/ant-simulation/blob/main/docs/assets/path-follow.gif?raw=true)

Ants following multiple paths:

![Following multiple paths](https://github.com/iai6203/ant-simulation/blob/main/docs/assets/multiple-path.gif?raw=true)

## Tech Stack

- **HTMLCanvas**
- TypeScript
- Webpack

## Getting Started

Build:

 ```shell
 npm run build:dev
 # or
 npm run build:prod
 ```

Run:

You can check the demo by opening the `./dist/index.html` file in your browser.
