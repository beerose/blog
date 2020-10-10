---
title: "Higher Rank Types"
tags: ["types", "typescript"]
excerpt: ""
date: 2019-09-26
event: "Wrocław TypeScript Meetup"
type: "lightning talk"
duration: 5
post: ""
img: ""
recording: ""
slides: "https://www.dropbox.com/scl/fi/zebvg7dis99qcvjv9rsa6/Higher-Rank-Types.paper"
place: ""
---

#### How?

- Lecture
- Code snippets

#### What?

- What are higher rank types — semi formal definition (Rank 1 Types, Rank 2 Types)
- Possible use case
- How it's not so easily done in Haskell
- How it's easily done in TypeScript
- Why you can't do it in Haskell (strong type inference)
- Why you can in TypeScript (week type inference)

#### Why?

- More like a fun fact
- Most of you probably haven't heard about it, but the same time most of you is using them on a daily basis
- Haskell vs TS

#### Agenda

**1. Intro**

**2. Why am I talking about Higher Rank Types?**

_Or higher-N types._

**3. What is it?**

So.. here goes the definition. A recursive definition.

> Rank-N Type is a function that takes at least one Rank-(N - 1) argument (and nothing of the higher rank).

**1° N = 1**

```ts
let f: <T, U>(a: T, b: U) => U;

// forall T and U. f: T -> U -> U
```

So here we have a base of the recursion — some simple generic function that takes two arguments of some types T and U and returns something of type U. In other words we would say that _forall T and U_: function has type _T → U → T_. Remember this forall keyword, it's gonna be used later on!

**2° N = 2**

```ts
let g: (fa: <T>(a: T) => T) => <U>(b: U) => U;

// forall U. g: (forall T: T -> T) -> U -> U
```

Now we go to the further recursion step and we have function g that takes another function as the parameter. and this parameter function is very similar to the one we saw before, thus its rank is one. So, regarding the definition function g is of the rank 2.

**4. Higher ranks**

**5. Example**

**6. Haskell limitations**

#### Resources

- [https://wiki.haskell.org/Rank-N_types](https://wiki.haskell.org/Rank-N_types)
- [https://en.wikibooks.org/wiki/Haskell/Polymorphism](https://en.wikibooks.org/wiki/Haskell/Polymorphism)
- [https://softwareengineering.stackexchange.com/questions/277048/is-higher-rank-parametric-polymorphism-useful](https://softwareengineering.stackexchange.com/questions/277048/is-higher-rank-parametric-polymorphism-useful)
- [https://www.sciencedirect.com/science/article/pii/S0168007298000475](https://www.sciencedirect.com/science/article/pii/S0168007298000475)
