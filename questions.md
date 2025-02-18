# Answers to Technical Questions

## How long did you spend on the coding test?
I spent around **4 hours** working on the coding test. The time was mainly used for planning, implementing, debugging, and testing to ensure the solution met the requirements effectively.

## What was the most useful feature that was added to the latest version of your chosen language?
One of the most useful features in the latest version of **JavaScript (ES6+ or later)** is the **optional chaining (`?.`) operator**. This feature helps in handling nested object properties safely without explicitly checking for their existence.

### Example Usage:
```js
const user = {
  profile: {
    name: "Abhishek",
    address: { city: "Delhi" }
  }
};

console.log(user.profile?.address?.city); // Output: "Delhi"
console.log(user.profile?.contact?.phone); // Output: undefined (No error)
```

## How would you track down a performance issue in production? Have you ever had to do this?
To track down a performance issue in production, I would:
1. **Use Browser DevTools** – Check for bottlenecks in the **Performance** and **Network** tabs.
2. **Monitor Console Logs & Errors** – Identify any JavaScript errors or warnings.
3. **Use Profiling Tools** – Such as **Lighthouse, WebPageTest, or Google PageSpeed Insights**.
4. **Optimize Code & Assets** – Minimize DOM manipulation, optimize loops, use caching.
5. **Check Server Logs** – If applicable, inspect backend performance metrics.

Yes, I have troubleshooted performance issues before, mainly related to JavaScript execution time and slow DOM rendering in large-scale web applications.

## If you had more time, what additional features or improvements would you consider adding to the task management application?
If I had more time, I would consider adding:
- **Persistent Storage** – Use a database (e.g., Firebase) instead of local storage.
- **User Authentication** – Allow users to log in and sync tasks across devices.
- **Dark Mode** – A toggleable dark mode for better UI/UX.
- **Progress Tracking** – Analytics on completed vs. pending tasks.

These improvements would enhance user experience and functionality significantly.
