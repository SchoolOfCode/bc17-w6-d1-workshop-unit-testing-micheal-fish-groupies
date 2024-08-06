//rename app.txt to app.js Y
//use prettier to format the code Y
// look through app.js for functions Y
// create an app.test.js file Y

// import the functions from app.js Y
import { calculateRoundResult, calculateNewScores, generateComputerMove } from './app';

// create a bare bones test
import { test, expect } from 'vitest';

test('bare bones test', () => {
  expect(true).toBe(true);
});

// write test cases/scenarios for calculateRoundResult
test('calculation round result ROCK and ROCK = DRAW', () => {
    expect(()=> calculateRoundResult("rock", ROCK)).toBe(DRAW);
  });
  
test('calculation round result PAPER and PAPER = DRAW', () => {
  expect(() => calculateRoundResult("paper", PAPER)).toBe({outcome: "draw", message: "Player chose rock and computer chose paper. Player wins."})
});

