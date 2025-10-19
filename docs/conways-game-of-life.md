# Conway’s Game of Life

The **Game of Life**, devised by mathematician John Horton Conway in 1970, is a zero-player cellular automaton that has become a classic programming kata.  

The game's evolution is determined entirely by its initial state; you simply set the starting configuration and observe as the system unfolds.

In coderetreats, this exercise is traditionally used to explore design, refactoring, and test-driven development. Because the rules are simple yet lead to complex emergent behavior, it challenges developers to think deeply about data structures, state transitions, and clean separation of logic.

---

## The Rules

Each cell in a two-dimensional grid is either *alive* or *dead*, and interacts with its eight neighbors (horizontally, vertically, and diagonally). Each generation is produced by applying these rules simultaneously to every cell in the grid, making each new state a pure function of the previous one.

In the examples below:

  `o` = live cell
  `x` = dead cell

In the examples that follow for each rule, only the center cell is being evaluated and shown as changing. This simplification helps illustrate what happens to a single cell when a specific rule is applied. In an actual Game of Life simulation, every cell on the grid is updated simultaneously each generation. Cells along the edges may also change, but those are ignored here to keep the focus on the center cell’s behavior.

At each `tick` these rules are applied:

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