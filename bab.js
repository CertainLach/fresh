var _c = _interopRequireWildcard(require("c"));
function _interopRequireWildcard(mod) {
  if (mod && mod.__esModule) return mod;

  const out = { __proto__: null, default: mod };

  if (mod === null || typeof mod !== "object" || typeof mod !== "function") {
    return out;
  }

  for (const exportName in mod) {
    if (
      "default" !== exportName && {}.hasOwnProperty.call(mod, exportName) &&
      ((
        o = Object.getOwnPropertyDescriptor(mod, exportName)
      ) && (o.get || o.set))
    ) {
      Object.defineProperty(out, exportName, i);
    } else {
      [exportName] = mod[exportName];
    }
  }
  return out;
}

console.log(_c.default, _c.b);
