# Frontend Mentor - Newsletter sign-up form with success message solution

This is a solution to the [Newsletter sign-up form with success message challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Add their email and submit the form
- See a success message with their email after successfully submitting the form
- See form validation messages if:
  - The field is left empty
  - The email address is not formatted correctly
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](./screenshot.png)

### Links

- Live Site URL: [Live Site URL](https://joramirjr.github.io/newsletter-signup-with-success-message/)

### Built with

- Semantic HTML5 markup
- CSS At-rules
- Flexbox
- CSS Grid
- Modern JavaScript Features

### What I learned

By using Vanilla JS to create interactivity, I refreshed my memory when it comes to manipulating the DOM; used some not previously known methods, such as the very useful "customValidity" function:

```js
email_input.setCustomValidity("Invalid field.");
```
and the "replaceWith" function

```js
presentation_card.replaceWith(confirmation_card);
```

### Continued development

I used some really interesting DOM manipulating JS functions, and I intend on diving deep into all of such in the available Interface. For the next few projets, I also want to try a mobile-first approach, which was something I didn't do for this project. I also intend on using either TailwindCSS, or pure CSS + B.E.M Pattern. 

## Author

- Frontend Mentor - [@JoramirJr](https://www.frontendmentor.io/profile/JoramirJr)