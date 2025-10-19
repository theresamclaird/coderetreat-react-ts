# Coderetreat React (TypeScript)

A minimal React + TypeScript starter for coderetreats.

## Getting Started

If you're participating in a coderetreat, **fork this repository** as your personal starting point for a React + TypeScript project. Forking allows you to experiment freely, make commits, and track your progress without affecting the original template.

## What to Expect

A coderetreat is a day dedicated to practicing software design and teamwork, free from deadlines or deliverables. You’ll work in short iterations (typically 45–60 minutes), pair with different people, and reset the code between rounds. The focus is on **learning**, **exploration**, and **improvement** — not finishing a project. Expect to experiment, make mistakes, and discuss ideas openly with your pairs. Each round is a fresh opportunity to try new techniques and refine your approach.

## Goals of a Coderetreat

A coderetreat is about *deliberate practice* — improving the craft of software development through repetition, feedback, and collaboration. There’s no pressure to finish or to keep your code.

The goal is to:

- Write tests first and practice incremental design.
- Explore different ways to model the same problem.
- Pair with others and share perspectives.
- Reflect after each round to identify new insights.

Focus on learning — not outcomes. The value comes from the conversations, experiments, and refactoring you do along the way.

## Pairing and Collaboration

Coderetreats are best experienced through **pair programming**. You’ll rotate partners between sessions, which helps you see different problem-solving styles and coding habits.  

There are several ways to pair — such as *driver/navigator*, *ping-pong pairing* (test/code switch), or *strong-style pairing* (where the idea must be spoken aloud before the other types it). Feel free to experiment and see which style fits your rhythm.

A few tips:

- Talk about your approach before you start typing.  
- Take small steps and commit frequently.  
- Switch roles often to stay engaged and balanced.  
- Focus on communication over correctness — every pairing is a chance to learn.

## Quick Start

```bash
npm install
npm start
npm test
```

## Requirements

- Node.js 18 or newer
- npm 8 or newer
- A modern code editor
- Git

## Reset

During a coderetreat, it’s essential to reset after each round. Remember — the goal is to practice, not to produce code that needs to be reviewed or deployed. Resetting gives you the freedom to experiment, make mistakes and learn from them without consequence. Each new round is a chance to start fresh, try a different approach, and explore new design ideas with a clean slate.

This script will restore your `src/` folder to its clean, starting state. Do this at the end of each round.

```bash
npm run reset:baseline
```

## Retro Between Rounds

After each round, we take a few minutes to reflect as a group:

- What did you learn?
- What surprised you?
- What would you try differently next time?

Reflection is where the real learning happens; it turns coding exercises into insight.

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

## License

This project is open for educational use. Feel free to fork, modify, and share it for your own coderetreats.