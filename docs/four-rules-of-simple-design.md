# Four Rules of Simple Design

The **Four Rules of Simple Design** are time-tested principles for creating code that is clean, maintainable, and adaptable. These rules emphasize feedback through tests, clarity of intent, the elimination of duplication, and the pursuit of simplicity through continuous refactoring. By applying them consistently, developers can build systems that evolve gracefully, remain easy to change, and clearly express their purpose.

1. **Tests Pass:**  
   Tests help identify problems early. Run them continuously so that breaking changes are detected immediately.

2. **Express Intent:**  
   Make your code easy to read so you don’t have to guess what it does later.

3. **DRY Knowledge (Don’t Repeat Yourself):**  
   Every piece of knowledge should have one and only one representation.

4. **Small and Focused:**  
   Look for vestigial code that’s no longer used and remove it. Eliminate duplicate abstractions.

> **Tip:** During coderetreats, reflect on how each rule influences your design decisions. Ask yourself:  
> - Does my code clearly express its purpose?  
> - Am I repeating logic unnecessarily?  
> - What’s the simplest version that still passes the tests?

---

## Further Reading

- **Kent Beck** — *[Extreme Programming Explained: Embrace Change (1st Edition, 1999)](https://www.pearson.com/en-us/subject-catalog/p/extreme-programming-explained-embrace-change/P200000000118/9780134051994)*  
  Introduces the Four Rules of Simple Design within the context of Extreme Programming and iterative feedback.

- **Corey Haines** — *[Understanding the Four Rules of Simple Design (2014)](https://leanpub.com/4rulesofsimpledesign)*  
  A deep, hands-on exploration of how to apply these rules during TDD and refactoring exercises.