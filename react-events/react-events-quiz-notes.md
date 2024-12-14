# react-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is an "event" in React?
  An event in React is an interaction or action triggered by a user, such as a click, input change, or form submission, which React handles using event listeners.
- What is an "event handler"? Which component declares the handler?
  An event handler is a function that responds to an event when it occurs. The component that needs to respond to the event declares the handler.
- How do you pass an event handler to a React component?
  as a prop to a React component
- What is the naming convention for event handlers?
  typically start with the prefix handle followed by the event, such as handleClick or handleSubmit.
- What is an "event handler prop"? Which component declares the prop?
  An event handler prop is a custom prop passed to a child component that allows it to trigger an event defined in the parent component. The parent declares the prop and provides the handler function.
- What are some custom event handler props a component may wish to define?
  onItemSelect
  onImageLoad
  onFormSubmit
- What is the naming convention for custom event handler props?
  The naming convention is onXxx, where Xxx represents the event or action (e.g., onUserClick, onTaskComplete).

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
