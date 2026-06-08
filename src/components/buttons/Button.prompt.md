Button — the primary action control; the default `brand` (teal) is the main action, `ink` (slate-950) is a dark alternative, `ghost`/`outline` for secondary actions.

```jsx
<Button>Start the roadmap</Button>
<Button variant="ink" icon={<ArrowRight />}>Open lesson</Button>
<Button variant="ghost" size="sm">← Back to Lessons</Button>
```

Variants: `brand` (teal, default), `ink` (slate-950), `secondary` (slate-100), `outline`, `ghost`, `danger`. Sizes: `sm` 32px · `md` 38px · `lg` 44px. Pass `icon` / `iconRight` as 16px nodes, `fullWidth` to stretch.
