!(function (e, t) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = t())
    : "function" == typeof define && define.amd
    ? define("vuex-sync", [], t)
    : "object" == typeof exports
    ? (exports["vuex-sync"] = t())
    : (e["vuex-sync"] = t());
})(self, function () {
  return (() => {
    "use strict";
    var e = {
        d: (t, o) => {
          for (var r in o)
            e.o(o, r) &&
              !e.o(t, r) &&
              Object.defineProperty(t, r, { enumerable: !0, get: o[r] });
        },
        o: (e, t) => Object.prototype.hasOwnProperty.call(e, t),
        r: (e) => {
          "undefined" != typeof Symbol &&
            Symbol.toStringTag &&
            Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
            Object.defineProperty(e, "__esModule", { value: !0 });
        },
      },
      t = {};
    e.r(t), e.d(t, { default: () => r });
    const o = { key: "vuex", storage: localStorage, reducer: (e) => e },
      r = (e) => {
        const t = Object.assign(o, e),
          r = t.storage.getItem(t.key);
        return (e) => {
          if (r) {
            const t = Object.entries(JSON.parse(r));
            for (const [o, r] of t) e.commit(o, r);
          }
          e.subscribe((e, o) => {
            const r = t.reducer(o);
            t.storage.setItem(t.key, JSON.stringify(r));
          });
        };
      };
    return t;
  })();
});
//# sourceMappingURL=index.js.map
