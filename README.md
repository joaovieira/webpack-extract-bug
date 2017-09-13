```bash
http-server ./dist
```

```bash
npx webpack -w
```

* Open browser on `https://localhost:8080/index.html` (or the default port provided by http-server)
  * Should see correct `test` output in console
* Change `main.scss`
* Reload
* Modules have been reordered, causing our `test` function to be called with something else and crash


I've provided snapshots with before and after the change where the module reorder is visible.

![screen shot 2017-09-13 at 01 49 10](https://user-images.githubusercontent.com/474603/30354945-e3ad1e8e-9827-11e7-9417-83712248cd36.png)
