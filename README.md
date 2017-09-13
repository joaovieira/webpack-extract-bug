```bash
http-server ./dist
```

```bash
npx webpack -w
```

* Open browser on `https://localhost:8080` (or the default port provided by http-server)
** Should see correct `test` output in console
* Change `main.scss`
* Reload
* Modules have been reordered, causing our `test` function to be called with something else and crash


I've provided snapshots with before and after the change where the module reorder is visible.
