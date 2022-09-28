---
title: "How not to contribute to open source"
path: "/hacktoberfest"
tags: ["others"]
excerpt: TBD
created: 2022-09-26
updated: 2022-09-26
---

Hacktoberfest is coming and you’re probably looking into a way to get a nice free t-shirt (though I recommend getting a tree planted in your name! Less harm for the planet). Contributing to open source is great and it can give you much more than a fancy swag. You can learn things that will elevate your career in many ways. You can improve software for tons of people (including yourself), meet new people. You can gain new ways to show off to your colleagues. Who doesn’t like throwing “ah yeah, I know this project, contributed there last month” in a random tech related conversations? 

What’s more — you can learn how to communicate with other developers and teams, that may have a completely different communication styles than what you’re used to. Sometimes you may struggle with miscommunication or get annoyed if someone doesn’t get what you’re saying. I believe that communication is the key and by avoiding certain things you can eliminate many struggles.

There are plenty of articles covering how to contribute to open source, how to find projects to contribute and how to communicate. (I’ll link some of them below.) I want to cover the opposite — how not to contribute to open source.

1. No one cares about typo fixes. Unless it’s harmful or misleading in any way.  The harm of one typo is probably much less than the time potentially spent on creating and merging a PR. Respect your and maintainers’ time. After all, most typos go unnoitced.

<div style="display: flex; justify-content: center; width: 100%">
  <div style="text-align: center; width: 300px">
    <img src="./Orignal.jpeg" />
  </div>
</div>

2. Don’t post “X not working” kind of issues. Don’t assume maintainers will guess things. If you post something like “X doesn’t work” how do we know what that means? Doesn’t it work at all? Or partially? Is there an error or a warning? Is this a bug or a feature change request? You can help maintainers a lot by providing clear context on what problems you’re facing and what is the ideal behaviour. When you’re facing a certain issue, the context may be obvious to you (e.g. how to reproduce, what is expected, etc.) but in 99% cases it’s not obvious at all to others. Explain your issue as if you were talking to a five years old. It’s much better to write too many “obvious” stuff than accidentally leaving something out and having multiple back and forth with maintainers or other contributors.

Copy paste if needed:

```
## Current behaviour

Describe what's happening. Include screenshots or logs.

## Expected behaviur

Describe what should be happening. If it's a regression, mention the previous behaviour.

## Steps to reproduce

All of them!!

## Version used

Tool's version and everything else that could be related, e.g. OS, Node, package managers.
```

3. Don’t contribute code for the sake of contributing code. It’s okay not to contribute to open source in October and it’s definitely better not to contribute than contribute shitty PRs. You see a project you’d like to be a part of but you’re not ready to contribute code? Don’t do it. Don’t fix typos or do redundant work. Find a different way to contribute. Reach out to maintainers and ask if they need anything. Maybe they need a help organising a meet-up? Or looking for someone who would test their product? Maybe they need feedback on a new design? 

4. Don’t start work before confirming implementation details.

5. Don’t be a seasoned OSS contributor. October is over and you’re gone? Not cool. If maintainers review your PR after the month is gone, it would be very nice to deliver it from start to finish.

6. Don’t change wording. Changing `I’m` to `I am` or replacing words with synonyms may get you an easy way to submit a PR but won’t bring much value to anyone (apart from expanding one’s dictionary with synonyms). Only change things that don’t make sense and could actually use a rewording. (Hint below).
￼
￼<div style="display: flex; justify-content: center; width: 100%">
  <div style="text-align: center; width: 600px">
    <img src="./imagine.jpeg" />
  </div>
</div>

7. Don’t be harsh. We all do our best even if our best is not what you think it could be. (Almost) no one intentionally wants to do wrong things and write bad code. And if they did write bad code, assume lack of knowledge or context. Consider this an opportunity to show a better way of doing something rather than to take it out on someone.

8. Don’t assume that your changes will always be accepted and merged. If there are minor differences between what maintainers want and your proposed changes, you should get a proper review when someone requests changes and explains why they do so. Yet, sometimes your PRs will be closed almost right away. There are some reasons when that can happen:

  1. Maintainers changed their mind. That sucks, but that happens. 
	2. Someone else accidentally fixed an issue along with another PR. That also sucks, I know.
	3. Your changes are too far from a desired solution. Ideally it shouldn’t happen and issues should be written in a way to avoid this kind of miscommunication. And if that happens, maintainers should follow up and descrive what is a desired solution. 
	4. Someone forgot about your PR, and the changes became irrelevant over time. Ok, that really sucks. But maintainers are only humans and if they get a lot of PRs in October, it’s not that uncommon to accidentally miss some of them. You can always try pinging them if you see no response after a week or two.

9. Don’t leave unfinished work. It’s totally fine if you start working on a PR, and then realise you don’t know how to proceed or stumble upon some problems. Yet, you can always try to ask for help and some guidance before abandoning a PR with assumption that someone else will finish it. “But you’re the maintainer, finish it” is never a way to go about it.

10. Don’t disregard project’s guidelines. You prefer a different prettier config or TypeScript settings? Cool, but if you want to contribute you need to respect project’s style guide. After all, print with or whether or not use semicolons in JavaScript, is not a determinant of a project’s success. 

11. Don’t duplicate work. Always make sure that no one else is working on an issue. If you notice that someone else expressed an interest in working on an issue, but they never started, ask how it’s going. Maybe someone wanted to work on it, but didn’t have time. If there’s no reply after a while, you can ask maintainers to reassign the issue to you.

12. Don’t spam maintainers asking for a review. It’s annoying and a lot of maintainers already feel like they are falling behind. Don’t add more pressure. Although, it’s totally fine to ask for an update if you see no action on your PR. 

  Ok: Hey, I wanted to ask if you had a chance to take a look at my PR? Is there 			something I can do to improve it? It’s okay if you’re currently busy — take 			your time and have a good day! (Copy paste if needed)

  Not ok: when are you going to review this? This is unacceptable. 

