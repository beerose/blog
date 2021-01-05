---
title: "Use TypeScript instead of fighting it"
path: "/fighting-with-ts"
tags: ["typescript"]
excerpt: ""
created: 2021-01-05
updated: 2021-01-05
---

[change beginning]

So you're using TypeScript. Although there can be many reasons for it — love for static typing, hype, someone tells you to (already in a project), a hell of an autocomplete tool — if you do write your code in TypeScript, it'd be cool to get the most out of it, right?

Yet, it's not apparent how to do so. And it's relatively easy to find yourself fighting with TypeScript instead of leveraging it, and for TypeScript to feel like a burden and not something that's supposed to make developers' lives easier.

Suppose someone is used to writing JavaScript, has a lot of experience in it, and TypeScript doesn't feel that comfortable yet. Let's call this person Bob. Bob is about to write some code and feels this temptation, to "just" write new code in good 'ol JavaScript, and worry about adding types later. So they do write the code, and after the task is done, they're going to add types (maybe it's by converting .js file to .ts, or by replacing **any** with proper types). It may feel a bit like a fight. Everything is red in the editor, compiler shouts. Bob is killing one bug at the time. *Compiler, please, shut up.* Hate towards TypeScrpt escalates.


Another thing is that the code works; the job feels like it's already done. Why spend more time on it? Another temptation appears — maybe more lousy types will do the job? Do we need to be so perfect? 

It may also turn out that the code is difficult to type. A lot of dynamic things going on, narrowing the types or just writing proper types seems too complicated. 
CODE
And then the fight with TypeScript exacerbates. *Please, TypeScript, shut up, this code works, what the hell you want from me.* 


They're saying that TypeScript is so cool, but it doesn't sound like fun, does it? Well, TypeScript is great, if only we're willing to leverage it fully. 


TypeScript is a different language. It is gradually typed language built on JavaScript, and you can write JavaScript in TypeScript, but it does have its constraints. You can't write everything in TS that you would in JS. Consider the following example:

```ts
const items = [1,2,3,4];

const foo = (x: number[]) => console.log(x);

const bar = () => {
    const x = [1];

    if (items[x]) { // ❌
        console.log(items[x]); // ❌
    }

    foo(x);
}

bar();
```

JavaScript will let you write it without any complaints. In TypeScript, on the other hand, you'll see an error **Type 'number[]' cannot be used as an index type.(2538)**. And this may make you think about what this code is doing — why do I get an error? Maybe I did something weird in this code? 
Oh shit, I'm making an assumption that I'll always have one element array! Thanks TypeScript!

(react router example ??)

TypeScript is statically typed. Even though it's a gradually typed language and you decide on how much of *staticness* you want, it is a significant difference. It's a difference when it comes to thinking about the code you write, modeling the code, designing APIs. It may feel faster to write code in JS (or annotating everything with **any**), especially when you're not that familiar with TypeScript. But when you know that your code needs to end up being in TypeScript, *I'll write it in JavaScript, so it's faster and then will convert to TypeScript* is not a way to go. Why? Because you don't leverage TypeScript. You won't model your code with types to be straightforward and easy to maintain.

example of typed reducer that shows domain actions????

You won't spot lousy code quickly. How does TypeScript help with it exactly? It makes you reconsider your decisions. If something is hard to type, maybe it wasn't designed well. It's the same deal as with tests. If something is hard to be tested — it's likely to be challenging to maintain and extend. Also, If it is hard to type, won't it be hard to grasp for your colleagues?

some other example ???

Static typing makes us (at least a bit) think more about modeling data, modules, and making things "click together". You're more likely to type things better than when adding types to the existing code. [WRITE SOMETHING HERE] Same as tests, types help us recognise that something is not sufficient and make us think about code design more.

There are also plenty of other benefits that you can get from type-driven development. If you want to know more about designing with types, check out the excellent post series on [F# for Fun and Profit](https://fsharpforfunandprofit.com/posts/designing-with-types-intro/).


Yet, I'm not trying to evangelize type-driver development here (though, it's great, do try it out!). My main point is that you can make TypeScript work for you, instead of fighting it by fixing compiler errors. Writing types along with writing code, rather than leaving it for later, will make you change the perspective and write more robust and less complicated code.
