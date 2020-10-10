---
title: "Static Typing: Which Language to Choose? (Extended version)"
tags: ["static typing", "typescript", "reason", "elm", "purescript"]
excerpt: ""
date: 2020-06-24
event: "HolyJS Piter"
type: "lecture"
duration: 70
post: ""
img: ""
recording: "https://www.youtube.com/watch?v=oQFkvEoh1BA"
slides: "https://slides.com/aleksandrasikora/static-typing-which-language-to-choose"
place: "online"
---

#### CFP

**Elevator pitch**

Statically typed language? Sounds cool! Statically typed language and large JavaScript codebase? Sounds like a lot of work... Learn how we evaluated our options in Hasura and made the decision on which language to choose!

**Short summary**

We wanted to introduce a statically typed frontend language to the Hasura Console for quite some time now. Recently we evaluated some options such as PureScript, TypeScript, ReasonML, and Elm. We had the following points to consider:

- We use React extensively, so we need something that goes with React well.
- Hasura Console has a pretty big codebase already, migration cost really matters.
- We want to enhance developer experience for us and for the external contributors.

During this talk, I'm going to show the pros and cons of the languages we analyzed. I'll present how their adoption would look like and what catches we would face along the way. I will also tell what we finally chose and which aspects affected our decision the most.

**Talk description and abstracts**

As I wrote in the summary, I will go through the common statically typed front-end languages: PureScript, TypeScript, ReasonML, and Elm (for Elm, I will skip the details, and I'll just talk briefly about its pros and cons). For each of these languages I'll talk about the following aspects:

- A bit about the language — history, how does it look like, etc.
- Why it was considered,
- Its pros and cons,
- How it works with React,
- How its setup would look like in our codebase.

I will also talk about the goals we had with statically typed languages adoption.

My agenda would like somehow as follow (just a draft):

1. Intro — why we wanted to adopt statically typed language, a bit about Hasura Console codebase.
2. PureScript
3. TypeScript
4. ReasonML
5. Elm
6. Languages comparison
7. What did we choose? And why?
8. Summary

#### Notes

**How will I deliver the talk?**

- Lecture
- Code snippets
- Charts, flowcharts

**What will I show?**

- Briefly what is Hasura. It's important for people to know that it's a big project, that it's open-source, so that they can more familiarise with the problems we were facing in the frontend codebase.
- Why bother about static typing. All the pros and cons of statically typed languages that need to be considered. In general. I won't focus on Hasura here.
- Why we considered statically typed language? (not sure about this point)
- ReasonML — what, why, how to integrate this?
- TypeScript — what, why, how to integrate this?
- PureScript — what, why, how to integrate this?
- Elm — what, why, how to integrate this?
- Comparison between these languages — some charts DX vs. Safety, from different perspectives, etc.
- Summary — what did we chose and why.

**What is the one thing I want people to learn?**

How to make the decision whether to adopt statically typed language or not. And which one.

**Why?**

The decision is hard. I'd like to present what aspects are crucial and need to be considered. I'll also show that you can give up on something to get something else. There's no one best choice for each project.
