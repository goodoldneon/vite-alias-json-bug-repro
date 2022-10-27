Reproduction of a Vite bug.

When importing a JSON file, using an alias (directly or indirectly) results in the following browser console error:

```
Failed to load module script: Expected a JavaScript module script but the server responded with a MIME type of "application/json". Strict MIME type checking is enforced for module scripts per HTML spec.
```

To reproduce this issue, change the import to `import config from "@/anotherFile.js";` in `App.jsx`.
