---
title: "TS-in-CSS"
tags: ["css-in-js", "typescript"]
excerpt: ""
date: 2019-11-27
event: "Wrocław TypeScript"
type: "Lecture"
duration: 30
post: ""
img: ""
recording: ""
slides: "https://www.dropbox.com/scl/fi/oonwjhmlly58w3ri7f8un/TS-in-CSS.paper"
place: "Wrocław"
---

#### Description

How to harness the power of TypeScript in your styles.
Time to change the perspective and instead of thinking how to put CSS in your app, let's start thinking about how to exploit TypeScript in your styles.

**How I deliver the talk?**

- Lecture
- Demos
- Code snippets

**What I will show to the people?**

- Pros of using CSS-in-JS
- How are some modern solutions built and why that way?
- How to leverage TypeScript?
- Different CSS-in-JS solutions comparison

**What is the one thing I want people to learn?**

You can use TypeScript to implement hard stuff and enhance you developer experience.

**Why?**

You can write more TypeScript and less CSS.

#### Agenda

1. Why TS in CSS?
2. Benefits of CSS-in-JS
3. How to leverage TypeScript in styles?
4. Popular libraries comparison
5. Summary

#### Notes

1. [https://johno.com/styling-themes](https://johno.com/styling-themes)
   - In a lot of ways CSS in JS is a better fit for React’s compositional model since it abstracts away the <style> tag and class name.
   - Styled system helps push towards the pit of success by promoting “styling as a function”. In a nutshell, this means that your styling is a function of props and theme.
2. [https://jxnblk.com/blog/the-three-tenets-of-styled-system/](https://jxnblk.com/blog/the-three-tenets-of-styled-system/) — why Styled System looks how it looks

   - it is focused on some of the issues I've noticed over the years for diverse teams working on codebases where developers and designers may have varying levels of expertise with CSS and other technologies
   - it's far more likely that developers are focused on other parts of the Web stack and generally know just enough CSS to be dangerous
   - but I do think there is opportunity for creating powerful abstractions that make it easy to do the right thing.

   Mobile-first:

   - While Responsive Web Design4 is nearly a decade old, and we've been designing for mobile devices for some time now, there still aren't clear best practices for how developers should approach these design concepts.

3. [https://jxnblk.com/blog/themeability/](https://jxnblk.com/blog/themeability/)
   - when you stop spending energy on lower-level problems, you can start exploring higher level abstractions in design
4. [https://jxnblk.com/blog/iterations-on-a-theme/](https://jxnblk.com/blog/iterations-on-a-theme/)

#### Resources

- https://medium.com/seek-blog/a-unified-styling-language-d0c208de2660
- https://objectpartners.com/2017/11/03/css-in-js-benefits-drawbacks-and-tooling/
- https://mxstbr.blog/2016/11/inline-styles-vs-css-in-js/
- https://reactarmory.com/answers/how-can-i-use-css-in-js-securely
- https://2019.stateofcss.com/technologies/css-in-js/
- https://github.com/Thoughtscript/x_team_css_in_js
