SegmentedTabs — the pill view-switcher used in the app header (Atlas · Paths · Lessons · Revise). Controlled.

```jsx
const [tab, setTab] = React.useState('atlas');
<SegmentedTabs
  value={tab}
  onChange={setTab}
  items={[
    { id: 'atlas', label: 'Atlas', icon: <Map /> },
    { id: 'paths', label: 'Paths', icon: <Route /> },
    { id: 'lessons', label: 'Lessons' },
  ]}
/>
```
