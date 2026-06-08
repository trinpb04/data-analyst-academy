Card — the base white surface (border, soft shadow, 12px radius) that holds nearly all content. Use `interactive` for clickable lesson cards.

```jsx
<Card>Static content</Card>
<Card interactive onClick={open}>
  <h4>Window Functions</h4>
</Card>
<Card accent="var(--mod-sql)">Module-accented card</Card>
```

Props: `interactive` (hover-lift), `padding` (default 24), `accent` (top stripe color).
