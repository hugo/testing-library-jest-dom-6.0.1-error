Run `npm run test` and see the tests fail with an error:

```
Property 'toBeInTheDocument' does not exist on type 'JestMatchers<HTMLElement>'
```

Uncomment the `import` in [setupTests.ts](./setupTests.ts) to see the test(s)
pass.
