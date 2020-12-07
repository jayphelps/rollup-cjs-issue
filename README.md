### Steps to reproduce

```
# Setup
git clone git@github.com:jayphelps/rollup-cjs-issue.git
cd rollup-cjs-issue
npm install

# Build
node build.mjs        # note the .mjs extension

# Run the results
node output.js
```

### The Error

```
link$1();
^

TypeError: link$1 is not a function
    at Object.<anonymous> (/Users/jayphelps/Projects/jayphelps/rollup-cjs-issue/output.js:3663:1)
    at Module._compile (node:internal/modules/cjs/loader:1083:30)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1112:10)
    at Module.load (node:internal/modules/cjs/loader:948:32)
    at Function.Module._load (node:internal/modules/cjs/loader:789:14)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:72:12)
    at node:internal/main/run_main_module:17:47
```

#### Notes

Likely the most notable place in the resulting bundle is here:

```js
var link = createCommonjsModule(function (module, exports) {
  exports.__esModule = true;
  exports.default = void 0;
  // ...code omitted for brevity here...
  var _default = Link;
  exports.default = _default;
});

var link$1 = link;

// TypeError: link$1 is not a function
link$1();
```

I tried to reproduce this with my own CJS file in `src/example.cjs` but rollup detects `exports.__esModule` and handles default imports of it correctly.
