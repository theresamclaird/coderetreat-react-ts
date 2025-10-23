# Conway’s Game of Life

The **Game of Life**, devised by mathematician John Horton Conway in 1970, is a zero-player cellular automaton that has become a classic programming kata.  

The game's evolution is determined entirely by its initial state; you simply set the starting configuration and observe as the system unfolds.

The game can be described as follows:

- The universe of the Game of Life consists of an infinite two-dimensional orthogonal grid.
- Each cell can be in one of two states: alive or dead.
- At each step in time, a set of 4 rules is applied to every cell in the grid simultaneously.

And that's really all there is to it. It is a simple system consisting of a grid, two possible states, and 4 rules. As the game progresses through time, some cells die, and some cells become alive. The patterns resulting from such a simple system can be surprising, and even model concepts like emergence and self-organization.

## Why this Kata?

Conway's Game of Life is the *traditional* kata used for coderetreats for a few reasons:

- The problem is simple, yet challenging enough to take more than 45 minutes to complete.
- The requirements (especially the 4 rules, which are a great starting point) can be expressed as discrete unit tests.
- This problem/kata presents some surprising challenges, for example:
  - What does it mean that a grid is infinite?
  - How can a program maintain state for an infinite number of cells?
  - How do you apply rules to all cells simultaneously?

In summary, the problem is easy to describe, while challenging enough to make for a great 45-minute coding exercise. If/when you become familiar enough with the problem that you might complete the kata within a round, you can incorporate *constraints* that will challenge you in new ways.

---

## The Rules

Each cell in the two-dimensional grid is either *alive* or *dead*, and interacts with its eight neighbors (horizontally, vertically, and diagonally). Each generation is produced by applying these rules simultaneously to every cell in the grid, making each new state a pure function of the previous one.

In the examples below, `o` = live cell, and `x` = dead cell.

In the examples that follow for each rule, only the center cell is being evaluated and shown as changing. This simplification helps illustrate what happens to a single cell when a specific rule is applied. In an actual Game of Life simulation, every cell on the grid is updated simultaneously each generation. Cells along the edges may also change, but those are ignored here to keep the focus on the center cell’s behavior.

At each generation (tick) these rules are applied to every cell simultaneously:

1. **Underpopulation**: Any live cell with fewer than two live neighbors dies.

```
x x x      x x x
x o x  ->  x x x
x x o      x x o
```

In the first generation the middle cell is alive and has exactly one live neighbor (bottom-right). It dies in the next generation due to underpopulation.

2. **Overpopulation**: Any live cell with more than three live neighbors dies.

```
o x o      o x o
x o o  ->  x x o
x o x      x o x
```

The middle cell is alive and has four live neighbors. It dies in the next generation due to overpopulation.

3. **Survival**: Any live cell with two or three live neighbors lives on.

```
o x x      o x x
x o x  ->  x o x
x x o      x x o
```

The middle cell remains alive in the next generation because it has two live neighbors.

4. **Reproduction**: Any dead cell with exactly three live neighbors becomes a live cell.

```
o x o      o x o
x x x  ->  x o x
x x o      x x o
```

The middle cell is dead in the first generation but becomes alive in the next due to reproduction.

---

## Example Pattern: The “Blinker”

A simple oscillator pattern that alternates between vertical and horizontal states every generation.

**Generation 1**

```
x o x
x o x
x o x
```

**Generation 2**

```
x x x
o o o
x x x
```

---

> **Tip:**  
> This kata is less about implementing a perfect simulation and more about exploring *how design evolves*.  
> Focus on writing small, testable functions that model rules clearly, refactoring as patterns emerge.  

---

## Further Reading

- **Martin Gardner** — *[Mathematical Games: The Fantastic Combinations of John Conway’s New Solitaire Game “Life”](https://www.ibiblio.org/lifepatterns/october1970.html)*  
  Gardner’s seminal article explaining the Game of Life and its cultural impact.

- **Wikipedia** — *[Conway’s Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life)*  
  A comprehensive overview of the Game of Life, common patterns, and its influence on computer science.

  ---
    
[← Previous: The TDD Cycle](./tdd-cycle.md) | [Next: Other Katas →](./other-katas.md)