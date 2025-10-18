# Coderetreat React (TypeScript)

A minimal React + TypeScript starter for coderetreats.

## Getting Started

If you're participating in a coderetreat or planning to run one, you can **fork this repository** as your personal starting point for a React + TypeScript project. Forking allows you to experiment freely, make commits, and track your progress without affecting the original template.

## What to Expect

A coderetreat is a day dedicated to practicing software design and teamwork, free from deadlines or deliverables. You’ll work in short iterations (typically 45–60 minutes), pair with different people, and reset the code between rounds. The focus is on **learning**, **exploration**, and **improvement** — not finishing a project. Expect to experiment, make mistakes, and discuss ideas openly with your pairs. Each round is a fresh opportunity to try new techniques and refine your approach.

## Quick Start
```bash
npm install
npm start
npm test
```

## Reset

During a coderetreat, it’s essential to reset after each round. Remember — the goal is to practice, not to produce code that needs to be reviewed or deployed. Resetting gives you the freedom to experiment, make mistakes, and learn from them without consequence. Each new round is a chance to start fresh, try a different approach, and explore new design ideas with a clean slate.

This script will restore your `src/` folder to its clean, starting state. Do this at the end of each round.

```bash
npm run reset:baseline
```

## Documentation

This project includes additional reference material in the [`/docs`](./docs) folder to support coderetreat sessions and TDD practice:

- [Four Rules of Simple Design](./docs/four-rules-of-simple-design.md)  
  Guiding principles for writing clean, maintainable, and expressive code.

- [Test-Driven Development Cycle](./docs/tdd-cycle.md)  
  An overview of the TDD process and how each step shapes design decisions.

- [Conway’s Game of Life](./docs/conways-game-of-life.md)  
  A classic kata for exploring state transitions, refactoring, and emergent design.

---

> **Tip:**  
> During coderetreats, use these documents as prompts for discussion, reflection, and iteration.  
> They’re meant to inspire experimentation — not prescribe a single approach.

## Other Katas

While the **Game of Life** is a popular choice for coderetreats, you can use this project as a starting point for any problem that encourages incremental design and refactoring. Choose exercises that are small, testable, and open-ended enough to spark discussion about design choices and collaboration.

Here are a few classic examples:

- **FizzBuzz** — A simple introduction to test-driven thinking and refactoring loops and conditions.  
- **String Calculator** — Focuses on incremental test discovery and handling edge cases gracefully.  
- **Roman Numerals** — Encourages thinking about data transformations and algorithmic clarity.  
- **Bowling Game** — A slightly larger kata involving cumulative state and scoring rules.  
- **Prime Factors** — Reinforces small-step problem solving and function composition.  

Each kata presents different opportunities to explore **clean code**, **TDD**, and **pair programming** skills in a safe, time-boxed setting.