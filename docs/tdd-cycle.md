# Test-Driven Development (TDD) Cycle

**Test-Driven Development (TDD)** is a software development practice that emphasizes writing tests before implementing functionality. It promotes small, iterative steps that guide design and help ensure that code remains clean, modular, and well-tested.

The TDD cycle is often summarized as **Red → Green → Refactor**, but each step carries its own purpose and discipline.

1. **Write a Failing Test (Red):**  
   Start by writing a test that describes the behavior you want but doesn’t yet exist. This confirms your test setup works and provides a clear goal for the next step.

2. **Make the Test Pass (Green):**  
   Write just enough code to make the test pass. Avoid anticipating future requirements; focus only on satisfying the immediate behavior.

3. **Refactor (Improve the Design):**  
   Once the test passes, clean up your code. Simplify logic, eliminate duplication, and improve readability without changing behavior. Your test suite now acts as a safety net, allowing you to refactor confidently.

> **Tip:** Keep each cycle short - ideally just a few minutes. During coderetreats, notice how frequent cycles help keep your code clear and prevent “big bang” changes.

---

## Further Reading

- **Kent Beck** — *[Test-Driven Development: By Example (2002)](https://www.pearson.com/en-us/subject-catalog/p/test-driven-development-by-example/P200000000425/9780321146533)*  
  The foundational TDD guide introducing the Red → Green → Refactor loop and the philosophy of incremental, feedback-driven coding.

- **Steve Freeman & Nat Pryce** — *[Growing Object-Oriented Software, Guided by Tests (2009)](https://www.pearson.com/en-us/subject-catalog/p/growing-object-oriented-software-guided-by-tests/P200000009298/9780321503626)*  
  A practical exploration of building and evolving systems through tests, emphasizing design emergence and collaboration.

---
  
[← Previous: Four Rules of Simple Design](./four-rules-of-simple-design.md) | [Next: Conway's Game of Life →](./conways-game-of-life.md)