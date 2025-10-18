# Coderetreat React (TypeScript)

A minimal React + TypeScript starter for coderetreats.

## Quick Start
```bash
npm install
npm start
npm test
```

## Reset
```bash
npm run reset:baseline   # restore src/ to the baseline starter
```

or
```bash
npm run reset:git        # hard reset the repo (⚠ destructive)
```

## Four Rules of Simple Design

1. Tests Pass: Tests help identify problems early. Run them continuously so that breaking changes are detected immediately.

2. Express Intent: Make your code easy to read so you don’t have to guess what it does later.

3. DRY Knowledge (Don't Repeat Yourself): Every piece of knowledge should have one and only one representation.

4. Small/Minimal: Look for vestigial code that’s no longer used and remove it. Eliminate duplicate abstractions.

## Red -> Green -> Refactor

1. Red: Write a unit test which must initially fail.
2. Green: Make the test pass - write the simplest code that works.
3. Refactor: Clean up the implementation while keeping tests green.

## Conway's Game of Life

The Game of Life, devised by mathematician John Horton Conway in 1970, is a zero-player cellular automaton. Its evolution is determined entirely by its initial state — you simply set the starting configuration and observe.

Each cell in a two-dimensional grid is alive or dead, and interacts with its eight neighbors (horizontally, vertically, and diagonally). At each tick:

- Any live cell with fewer than two live neighbors dies (underpopulation).
- Any live cell with more than three live neighbors dies (overpopulation).
- Any live cell with two or three live neighbors lives on.
- Any dead cell with exactly three live neighbors becomes a live cell.

Each generation is produced by applying these rules simultaneously across the grid — a pure function of the previous state.
