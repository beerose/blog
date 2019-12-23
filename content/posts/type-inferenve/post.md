---
title: "Type inference under the hood"
path: "/type-inference"
tags: ["haskell"]
excerpt:
created: 2019-12-09
updated: 2019-12-09
---

If you're into functional programming, you might have heard about Hindley-Milner. If not, it's a type system that is the basis for most of the statically typed functional languages like Haskell, OCaml, SML, or F#.
[Here](https://en.wikipedia.org/wiki/Hindley%E2%80%93Milner_type_system#An_inference_algorithm) you can read some more about it, because in this article I won't go into the details of H-M itself; I'll focus on the type inference algorithm for H-M based type systems.

Nevertheless, it would be a pity if I blew my chance telling you my take on its most compelling aspects.

One of them is its completeness. Meaning it won't go easy on you if you'd try to bypass it. You can't tell it: _shut up, I really want to do this typecast_. It would yell, break your program at the compile-time, and make you want to stay away from it. But what it doesn't kill it makes it stronger. You can gain confidence — if your program finally compiles, it probably works. (It's what I was saying to myself back when I was coding in Haskell). It not only allows you to catch errors earlier but often prevents them.

Another great feature is being able to infer the type of expression without explicit declarations. That's pretty much what's this article is going to be about. I'll do some overview of how type inference works for Hindley Milner type systems. Some of the examples are going to be in Haskell, but they are straightforward enough that no prior knowledge of Haskell is required. I aim to explain how type inference algorithm for Hindley-Milner based type systems work under the hood without diving into in-depth details and formal definitions.

## A word on functions

Some examples in the article are in Haskell, so here comes a wrapping up about Haskell's functions.

In Haskell functions are first-class citizens, meaning that they don't thumb their noses at the other data types. There's nothing special about them. We treat them just as we treat variables.
All functions in Haskell take one argument. So if you have a function that takes more than one argument, it's a curried function then — it takes one argument at the time. Look at the possibly most common example one could get:

```hs
add :: Integer -> Integer -> Integer
add x y = x + y
```

How to read it in _Haskellish_?

> Add is a function that takes an integer and returns the function that takes an integer and returns an integer.

Let's put the brackets for more readability.

> Add is a function that takes an integer and returns the (function that takes an integer and returns integer).

```hs
add :: Integer -> (Integer -> Integer)
```

Currying converts function that takes n arguments into n functions that take one argument each. It allows us to pass less argument to the function that it expects. It's called partial application.

```hs
increment :: Integer -> Integer
increment x = add 1
```

Since all functions take exactly one argument you can think about
`fun a b c = ...` as the syntactic sugar for binding a lambda functions to **fun**: `fun = \a -> \b -> \c -> ...`.

## Type inference

Type inference means that types in a program can be deduced without explicit type annotations. The idea is that some information may be not specified, but the type inference algorithm can fill the gaps by determining the types from their usage.

<div style="text-align: center; max-width: 100%">
<img style="max-width: 100%" alt="dancing" src="https://media.giphy.com/media/12NUbkX6p4xOO4/giphy.gif" />
</div>

Type inference was first invented by Haskell Curry and Robert Feys (for some lambda calculus stuff). Then J. Roger Hindley extended this algorithm, and couples years later, Robin Milner independently developed an equivalent algorithm — for the ML programming languages. Although practical type inference was developed for ML, it applies to other languages.

There is a broad spectrum to what degree a language can infer types, and in practice, almost no language supports full type inference. Core ML is very close, but it has some limitations when it comes to higher rank types.

Type inference supports polymorphism. The algorithm uses type variables as placeholders for types that are not known. Sometimes the type-inference algorithm may resolve all type variables and determine that they must be equal to specific types. Still, in other cases, the type of a function may not be constrained by the way the function is defined. In these cases, the function may be applied to any arguments whose types match the form given by a type expression containing type variable.

### The idea behind type inference

Let's say we have some simple function:

```hs
inc x = x + 1
```

We know that the type of **(+)** is **Int -> Int -> Int**. And we also know that **1** has type **Int**. Having that knowledge we can deduce that type of **x** _must_ be **Int**. That implies that the type of **inc** is **Int -> Int**.

Now let's take a look at another example and following reasoning:

```hs
f (g, h) = g(h(0))
```

- **h** is applied to **0 :: Int**
- Based on ☝️ we can deduce type of **h**: **h :: Int -> a**, where **a** is some unknown type (_type variable_).
- **g** is a function that takes what **h** returns and return another thingy of the unknown type: **g :: a -> b**.
- Putting it altogether the first argument of **f** is going to be **a -> b** and the second **Int -> a**.
- Hence, function **f** takes the pair of **(f, g)** returns the same type the function **g** does which leads us to its final type:

```hs
f :: (a -> b, Int -> a) -> b
```

## Type inference vs type-checking

### Standard type checking

These terms are sometimes confused, so I'd like to clarify what's the difference before we go further.

```js
int f(int x) { return x * x }
int g(int x) { return x * f(x) }
```

What type of checker does is examining the body of each function and then using declared types by the programmer is they match. Take a look at the above example. It would go through every usage of **f** and **g** functions and check two things:

- If the parameter is always of an integer type,
- If the functions return integers.

### Type inference

```js
i̶n̶t̶ f(i̶n̶t̶ x) { return x * x }
i̶n̶t̶ g(i̶n̶t̶ x) { return x * f(x) }
```

What the type inference algorithm does is different. It goes through the program, examines the code without type information, and tries to infer the most general types that could have been declared.

## Type inference algorithm

The algorithm consists of three steps:

1. Assign a type or type variable to the expression and each subexpression. For known expressions, like **+**, **-** and so on, use the types known for these expressions. Otherwise, use type variables — placeholders for not known types.
2. Generate a set of constraints on types, using the parse tree of the expression. These constraints are something like this:
   > _if a function is applied to an integer, then the type of its first argument is integer_.
3. Solve these constraints by unification. It's an algorithm for solving equations based on substitutions.

Now, let's see this algorithm in action 🚀

## Examples

### #1

### #2

## Limitations

## Summary
