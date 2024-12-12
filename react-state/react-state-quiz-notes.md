# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?
  Hooks are functions that let us use React state and lifecycle features in functional components, such as useState for state management or useEffect for side effects.
- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))
  The function name must start with use followed by an uppercase letter such as useState and useCallback.
  Hooks can only be called by React components and other hooks.
  All hooks in a component must always be called at the top level of a component, and in the same order.
- What is the purpose of state in React?
  State allows components to manage and update dynamic data that influences their rendering.
- Why can't we just maintain state in a local variable?
  Local variables don't persist between renders, whereas state ensures React re-renders the component when its value changes.
- What two actions happen when you call a `state setter` function?
  React schedules a re-render of the component.
  The updated state value is saved and replaces the previous value in the next render.
- When does the local `state variable` get updated with the new value?
  The local state variable is updated during the next render after the state setter function is called.

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
