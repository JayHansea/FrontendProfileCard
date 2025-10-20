# 🌐 HNG Multi-Page Frontend Project

**HNG Internship** — A multi-page, accessible, and responsive web application built with **plain HTML**, **CSS**, and **vanilla JavaScript**.  
This project includes:

- A **personal profile card**
- An **About Me** page
- A **Contact Us** page with form validation

---

## 🚀 Run Locally

```bash
git clone https://github.com/JayHansea/FrontendProfileCard.git
cd FrontendProfileCard
open index.html
```

## ✅ Features & Core Requirements Met

This project successfully implements all requirements across **three distinct pages**, focusing on **semantics**, **responsiveness**, **accessibility**, and **behavior**.

---

### 🧩 `data-testid` Attributes

Every required element across `index.html`, `about.html`, and `contact.html` includes the specified **`data-testid`** attribute, ensuring all components are easily discoverable and verifiable by automated tests.

---

### 🏗️ Multi-Page Structure & Semantics

The application is structured into **three interconnected pages** with a consistent navigation header for a seamless user experience.

#### 🏠 Home Page (`index.html`)

- The original profile card, wrapped in a semantic `<article>` tag.
- Uses `<header>`, `<h1>`, `<figure>`, and `<ul>` for a well-structured and accessible layout.
- Displays a **real-time UTC clock** updated dynamically with JavaScript.

#### 👤 About Me Page (`about.html`)

- A reflective page containing personal and professional information.
- The main content is wrapped in `<main data-testid="test-about-page">`.
- Each distinct area (Bio, Goals, etc.) is organized into its own `<section>` with a proper `<h2>` heading for clarity.

#### ✉️ Contact Us Page (`contact.html`)

- Features a comprehensive and accessible contact form.
- Built using a semantic `<form>` element, with each input correctly paired with a `<label>`.

---

### 📱 Responsiveness

The entire application is built with a **mobile-first approach** and is fully responsive across all devices.

- **General Layout:** A main page container ensures content is beautifully centered and constrained on larger screens.
- **Profile Card:** Stacks vertically on mobile and transitions to a two-column layout on desktops (`flex-direction: row`).
- **Contact Form:** Utilizes a **CSS Grid layout** that intelligently switches from a single-column view on mobile to a two-column layout on tablets and desktops for an optimal user experience.

---

### ⚙️ Behavior & Implementation

#### 🕒 Live Time Display

- The `script.js` file on the home page fetches the current time using `Date.now()` and updates the display every 100ms via `setInterval()`.

#### 🧾 Form Validation (JavaScript)

- All fields are **required**.
- The **Email field** is validated against a standard email format (`name@example.com`).
- The **Message field** must contain at least **10 characters**.
- **Submission is prevented** if any validation rule fails.

#### 💬 User Feedback

- On invalid submission, **clear and specific error messages** appear directly below the relevant fields.
- On successful submission:
  - A **confirmation message** is displayed.
  - The **form fields are cleared**.

#### 🔁 Reset Functionality

- A **“Reset” button** allows users to clear all form inputs and any visible error messages at any time.

---

### ♿ Accessibility

Accessibility was a **primary focus** throughout development.

#### 🧱 Semantic HTML

Proper use of tags like `<main>`, `<article>`, `<section>`, `<nav>`, and `<header>` provides a clear structure for screen readers.

#### 📋 Form Accessibility

- Every `<input>` and `<textarea>` has a corresponding `<label>` linked with the `for` attribute.
- Error messages are programmatically associated with their inputs using `aria-describedby`, ensuring screen reader users are aware of validation errors.
- Status messages (success and errors) use `aria-live` attributes to announce updates to users dynamically.

#### ⌨️ Keyboard Navigation

All interactive elements — including navigation links, social links, and form fields/buttons — are **fully keyboard-navigable**.

#### 🎯 Visible Focus Styles

A clear and **high-contrast outline** (`a:focus-visible`, `button:focus-visible`) is provided for all focusable elements, ensuring keyboard users can easily track their position on the page.

---

#### Author

[JayHansea](https://github.com/jayhansea)
