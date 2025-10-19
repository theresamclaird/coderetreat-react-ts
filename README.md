<!--
  NOTE: This file is generated. Do not edit README.md directly.
  Edit README.template.md and shared fragments in vendor/coderetreat-docs/.
-->

# Coderetreat Starter: React, TypeScript, Jest

A minimal React + TypeScript + Jest starter for coderetreats.

## Getting Started

If you're participating in a coderetreat, **fork this repository** as your personal starting point for a React + TypeScript + Jest project.

<!-- begin-include: docs/readme-parts/what-to-expect.md -->
## What to Expect

A coderetreat is a day dedicated to practicing software design and teamwork, free from deadlines or deliverables. You’ll work in short iterations (typically 45–60 minutes), pair with different people, and reset the code between rounds. The focus is on **learning**, **exploration**, and **improvement** - not finishing a project. Expect to experiment, make mistakes, and discuss ideas openly with other participants. Each round is a fresh opportunity to try new techniques and refine your approach.
<!-- end-include: docs/readme-parts/what-to-expect.md -->

<!-- begin-include: docs/readme-parts/goals.md -->
## Goals of a Coderetreat

A coderetreat is about *deliberate practice* - improving the craft of software development through repetition, feedback, and collaboration. There’s no pressure to finish or to keep your code.

The goals are:

- Write tests first and practice incremental design.
- Explore different ways to model the same problem.
- Pair with others and share perspectives.
- Reflect after each round to identify new insights.

Focus on learning, not outcomes. The value comes from the conversations, experiments, and refactoring you do along the way.
<!-- end-include: docs/readme-parts/goals.md -->

<!-- begin-include: docs/readme-parts/pairing-and-collaboration.md -->
## Pairing and Collaboration

Coderetreats are best experienced through **pair programming**. You’ll switch partners throughout the day, which helps you learn new perspectives and ways of thinking.

There’s no single “correct” way to pair. Each style emphasizes different dynamics of thinking, speaking, and typing. Try out a few styles throughout the day, especially ones you don’t normally use.

### Common Pair Programming Styles

#### 🧭 Driver / Navigator

The most familiar style.

One person (“Driver”) types; the other (“Navigator”) guides the direction, reviews, and thinks ahead. Switch roles often - every few minutes or after a test passes to stay balanced.

**Good for:** steady rhythm, communication, and shared understanding.

#### 🏓 Ping-Pong Pairing

A natural fit for TDD.

One person writes a failing test (**Red**), the other writes just enough code to make it pass (**Green**), then you switch roles for the next test.

**Good for:** keeping both partners equally engaged and reinforcing the Red-Green-Refactor rhythm.

#### 💪 Strong-Style Pairing

From Llewellyn Falco: *“For an idea to go from your head into the computer, it must go through someone else’s hands.”*

The person with the idea explains it; their partner does the typing. This style emphasizes clear communication and shared decision-making.

**Good for:** mentoring, deep collaboration, and learning to articulate ideas clearly.

#### 🔄 Remote / Distributed Pairing

When pairing remotely, use tools like VS Code Live Share or Tuple, and switch control regularly. Narrate your thoughts as you go to stay in sync.

**Good for:** distributed teams and hybrid sessions.

### Tips for Effective Pairing

  - **Agree on a style** before you start each session; try switching it up between rounds.
  - **Talk before you type.** Discuss the next step before diving in.
  - **Work in small steps.** Test, code, refactor, repeat.
  - **Stay curious.** Ask questions, try new techniques, and reflect afterward.
  - **Reset together.** After each round, clear the code and start fresh.

### Try Something New

Coderetreats are a safe space to experiment.

If you usually default to Driver/Navigator, try Ping-Pong or Strong-Style pairing for a session. You may discover new insights—not just about the problem, but about how you collaborate.

### Further Reading
- [Llewellyn Falco – Strong-Style Pairing](https://llewellynfalco.blogspot.com/2014/06/strong-style-pairing.html)
- [Martin Fowler – Pair Programming](https://martinfowler.com/articles/on-pair-programming.html)
- [Emily Bache – Effective Pair Programming](https://coding-is-like-cooking.info/2013/07/effective-pair-programming/)
- [Agile Alliance – Pair Programming Definition](https://www.agilealliance.org/glossary/pairing/)
<!-- end-include: docs/readme-parts/pairing-and-collaboration.md -->

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

<!-- begin-include: docs/readme-parts/retro-between-rounds.md -->
## Retro Between Rounds

After each round, we take a few minutes to reflect as a group:

- What did you learn?
- What surprised you?
- What would you try differently next time?

Reflection is where the real learning happens; it turns coding exercises into insight.
<!-- end-include: docs/readme-parts/retro-between-rounds.md -->

<!-- begin-include: docs/readme-parts/documentation.md -->
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
<!-- end-include: docs/readme-parts/documentation.md -->

<!-- begin-include: docs/readme-parts/other-katas.md -->
## Other Katas

While the **Game of Life** is a popular choice for coderetreats, you can use this project as a starting point for any problem that encourages incremental design and refactoring. Choose exercises that are small, testable, and open-ended enough to spark discussion about design choices and collaboration.

Here are a few classic examples:

- **FizzBuzz**: A simple introduction to test-driven thinking and refactoring loops and conditions.  
- **String Calculator**: Focuses on incremental test discovery and handling edge cases gracefully.  
- **Roman Numerals**: Encourages thinking about data transformations and algorithmic clarity.  
- **Bowling Game**: A slightly larger kata involving cumulative state and scoring rules.  
- **Prime Factors**: Reinforces small-step problem solving and function composition.  

Each kata presents different opportunities to explore **clean code**, **TDD**, and **pair programming** skills in a safe, time-boxed setting.
<!-- end-include: docs/readme-parts/other-katas.md -->

<!-- begin-include: docs/readme-parts/license.md -->
## License

This project is open for educational use. Feel free to fork, modify, and share it for your own coderetreats.
<!-- end-include: docs/readme-parts/license.md -->