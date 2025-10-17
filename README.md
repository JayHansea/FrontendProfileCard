# FrontendProfileCard

HNG Internship - A small, accessible, responsive Profile Card component/page using semantic HTML and modern frontend patterns using plain HTML/CSS/vanilla JS

## 🚀 Run locally

```bash
git clone https://github.com/JayHansea/FrontendProfileCard.git

cd FrontendProfileCard

open index.html
```

## ✅ Explanation of Core Requirements Met

### 🧩 data-testid Attributes

Every required element in `index.html` includes the specified `data-testid` attribute, ensuring all elements are easily discoverable by automated tests.

---

### 🏗️ HTML Semantics

- The entire card is wrapped in an `<article>` tag (`data-testid="test-profile-card"`).
- The user's name is in an `<h1>` inside a `<header>` (`data-testid="test-user-name"`).
- The biography is inside a `<p>` tag (`data-testid="test-user-bio"`).
- The avatar image is an `<img>` element inside a `<figure>` (`data-testid="test-user-avatar"`).
- Social links, hobbies, and dislikes are all structured as `<ul>` lists.
- Hobbies and Dislikes sections are grouped inside `<section>` elements for semantic clarity.

---

### 📱 Responsiveness

- **Mobile-First Design:**  
  The default CSS layout (`flex-direction: column`) stacks all elements vertically, creating a clean and readable mobile view.
- **Tablet/Desktop View:**  
  A media query at `768px` switches the layout to `flex-direction: row`, positioning the avatar on the left and text content on the right for a traditional profile layout.

- **Flexbox Layout:**  
  Flexbox is used to maintain a flexible, robust structure that gracefully adapts to varying content lengths and screen sizes.

---

### ⚙️ Behavior & Implementation

- **Current Time:**  
  The `script.js` file retrieves the current UTC time in milliseconds using `Date.now()` and updates it every 100ms via `setInterval`, ensuring accurate real-time display.

- **Avatar:**  
  The `<img>` tag includes a valid `src` (placeholder image), a descriptive `alt` attribute for accessibility, and the required `data-testid`.

- **Social Links:**  
  Each `<a>` tag in the social section includes `target="_blank"` and `rel="noopener noreferrer"` to securely open in a new browser tab.

---

### ♿ Accessibility

- **Keyboard Focus:**  
  All interactive links are naturally keyboard-focusable.

- **Visible Focus Styles:**  
  CSS includes an `a:focus-visible` rule to provide a clear, high-contrast outline for keyboard users, making focus states easy to see.

- **Semantic HTML:**  
  Using elements like `<article>`, `<section>`, `<header>`, and `<figure>` improves screen reader comprehension and overall accessibility.

---
