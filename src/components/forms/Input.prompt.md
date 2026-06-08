Input — single-line text field with an optional leading icon, label, and hint/error line.

```jsx
<Input label="Email" placeholder="you@company.com" />
<Input icon={<Search />} placeholder="Search lessons…" />
<Input label="Username" invalid hint="Already taken" />
```

Sizes `sm`/`md`/`lg`. Pass `invalid` + `hint` for validation errors.
