(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7966],
    {
        682: function (n, e, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/account",
                function () {
                    return t(40897);
                },
            ]);
        },
        40897: function (n, e, t) {
            "use strict";
            t.r(e),
                t.d(e, {
                    default: function () {
                        return _;
                    },
                });
            var r = t(85893),
                i = t(14141),
                o = t(19532),
                c = t(16108),
                a = t(13766),
                d = t(67602),
                s = t(42755),
                u = t(87177);
            function l() {
                var n,
                    e,
                    t =
                        ((n = ["\n  padding: 16px 24px;\n  border: 1px solid #f2f2f2;\n  border-radius: 16px;\n  box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.5);\n"]),
                        e || (e = n.slice(0)),
                        Object.freeze(Object.defineProperties(n, { raw: { value: Object.freeze(e) } })));
                return (
                    (l = function () {
                        return t;
                    }),
                    t
                );
            }
            var f = (0, i.ZP)("div").withConfig({ componentId: "sc-78dddc0f-0" })(l()),
                x = function (n) {
                    var e = n.children;
                    return (0, r.jsx)(f, { children: e });
                },
                p = t(46230),
                g = function () {
                    var n = (0, p.C)(function (n) {
                            var e;
                            return null === (e = n.app.loading) || void 0 === e || e;
                        }),
                        e = (0, p.C)(function (n) {
                            return n.app.marketPrice;
                        }),
                        t = (0, p.C)(function (n) {
                            return n.account.loading;
                        }),
                        i = (0, p.C)(function (n) {
                            return n.account.balances.tmf;
                        }),
                        o = (0, p.C)(function (n) {
                            return n.account.reflected;
                        });
                    return (0, r.jsxs)(x, {
                        children: [
                            (0, r.jsx)(d.Z, { marginBottom: "20px", style: { fontWeight: "700" }, children: "Total Earned" }),
                            (0, r.jsx)(s.Z, {
                                scale: "lg",
                                color: "success",
                                style: { fontWeight: "700", fontSize: 32 },
                                children:
                                    t || n
                                        ? (0, r.jsx)(u.Z, {})
                                        : "$".concat(
                                              (Math.abs(i - o) * e)
                                                  .toFixed(2)
                                                  .toString()
                                                  .replace(/\B(?=(\d{3})+(?!\d))/g, " "),
                                              " USD"
                                          ),
                            }),
                            (0, r.jsxs)(d.Z, {
                                marginTop: "16px",
                                marginBottom: "12px",
                                style: { fontWeight: "700" },
                                children: [
                                    t || n
                                        ? (0, r.jsx)(u.Z, {})
                                        : "".concat(
                                              Math.abs(i - o)
                                                  .toFixed(2)
                                                  .toString()
                                                  .replace(/\B(?=(\d{3})+(?!\d))/g, " "),
                                              " TMF"
                                          ),
                                    " ",
                                    t || n
                                        ? (0, r.jsx)(u.Z, {})
                                        : "(".concat(
                                              ((Math.abs(i - o) / i) * 100)
                                                  .toFixed(2)
                                                  .toString()
                                                  .replace(/\B(?=(\d{3})+(?!\d))/g, " "),
                                              "% Increase)"
                                          ),
                                ],
                            }),
                        ],
                    });
                },
                h = function () {
                    return (0, r.jsxs)(x, {
                        children: [
                            (0, r.jsx)(d.Z, { marginBottom: "20px", style: { fontWeight: "700" }, children: "APY" }),
                            (0, r.jsx)(s.Z, { scale: "lg", style: { fontWeight: "700", fontSize: 32 }, children: "204 967.16%" }),
                            (0, r.jsx)(d.Z, { marginTop: "16px", marginBottom: "12px", style: { fontWeight: "700" }, children: "Daily ROI 3.82%" }),
                        ],
                    });
                },
                j = function () {
                    var n = (0, p.C)(function (n) {
                            var e;
                            return null === (e = n.app.loading) || void 0 === e || e;
                        }),
                        e = (0, p.C)(function (n) {
                            return n.app.marketPrice;
                        }),
                        t = (0, p.C)(function (n) {
                            return n.account.loading;
                        }),
                        i = (0, p.C)(function (n) {
                            return n.account.balances.tmf;
                        });
                    return (0, r.jsxs)(x, {
                        children: [
                            (0, r.jsx)(d.Z, { marginBottom: "12px", style: { fontWeight: "700" }, children: "Your Balance" }),
                            (0, r.jsx)(s.Z, {
                                as: "h2",
                                style: { fontWeight: "700", fontSize: 32 },
                                children:
                                    n || t
                                        ? (0, r.jsx)(u.Z, {})
                                        : "$".concat(
                                              (e * i)
                                                  .toFixed(2)
                                                  .toString()
                                                  .replace(/\B(?=(\d{3})+(?!\d))/g, " "),
                                              " USD"
                                          ),
                            }),
                            (0, r.jsx)(d.Z, {
                                marginTop: "6px",
                                marginBottom: "12px",
                                style: { fontWeight: "700" },
                                children:
                                    n || t
                                        ? (0, r.jsx)(u.Z, {})
                                        : "".concat(
                                              (+i)
                                                  .toFixed(2)
                                                  .toString()
                                                  .replace(/\B(?=(\d{3})+(?!\d))/g, " "),
                                              " TMF"
                                          ),
                            }),
                        ],
                    });
                },
                m = function () {
                    var n = (0, p.C)(function (n) {
                            var e;
                            return null === (e = n.app.loading) || void 0 === e || e;
                        }),
                        e = (0, p.C)(function (n) {
                            return n.app.marketPrice;
                        }),
                        t = (0, p.C)(function (n) {
                            return n.account.loading;
                        }),
                        i = (0, p.C)(function (n) {
                            return parseFloat(n.account.balances.tmf);
                        });
                    return (0, r.jsxs)(x, {
                        children: [
                            (0, r.jsx)(d.Z, { marginBottom: "12px", style: { fontWeight: "700" }, children: "Your Daily Earnings" }),
                            (0, r.jsx)(s.Z, {
                                as: "h2",
                                style: { fontWeight: "700", fontSize: 32 },
                                children:
                                    n || t
                                        ? (0, r.jsx)(u.Z, {})
                                        : "$".concat(
                                              (e * i * 0.038352)
                                                  .toFixed(2)
                                                  .toString()
                                                  .replace(/\B(?=(\d{3})+(?!\d))/g, " "),
                                              " USD"
                                          ),
                            }),
                            (0, r.jsx)(d.Z, {
                                marginTop: "6px",
                                marginBottom: "12px",
                                style: { fontWeight: "700" },
                                children:
                                    n || t
                                        ? (0, r.jsx)(u.Z, {})
                                        : "".concat(
                                              (0.038352 * i)
                                                  .toFixed(2)
                                                  .toString()
                                                  .replace(/\B(?=(\d{3})+(?!\d))/g, " "),
                                              " TMF"
                                          ),
                            }),
                        ],
                    });
                },
                b = t(98130),
                Z = t(71982),
                v = t(22794),
                w = t(82169),
                y = t(20316),
                O = t(25617),
                C = t(67294),
                S = function () {
                    var n = (0, y.Z)(),
                        e = n.account,
                        t = n.chainId,
                        i = n.library,
                        a = (0, O.I0)(),
                        s = (0, p.C)(function (n) {
                            var e;
                            return null === (e = n.app.loading) || void 0 === e || e;
                        }),
                        l = (0, p.C)(function (n) {
                            return n.app.marketPrice;
                        }),
                        f = (0, p.C)(function (n) {
                            return n.account.loading;
                        }),
                        g = (0, p.C)(function (n) {
                            return n.account.balances.tmf;
                        }),
                        h = (0, p.C)(function (n) {
                            return n.app.nextRebase;
                        }),
                        j = function (n) {
                            return n.toString().padStart(2, "0");
                        };
                    (0, C.useEffect)(
                        function () {
                            e && a((0, Z.xC)({ networkID: 56, address: e, provider: new w.r("https://bsc-dataseed.binance.org") }));
                        },
                        [e]
                    );
                    return (0, r.jsx)(x, {
                        children: (0, r.jsxs)(c.Z, {
                            flex: "1",
                            gridRowGap: "20px",
                            children: [
                                (0, r.jsxs)(o.Z, {
                                    justifyContent: "space-between",
                                    children: [
                                        (0, r.jsx)(d.Z, { style: { fontWeight: "700" }, children: "Next Reward Amount:" }),
                                        s || f
                                            ? (0, r.jsx)(u.Z, { width: "100px" })
                                            : (0, r.jsxs)(d.Z, {
                                                  color: "textSubtle",
                                                  children: [
                                                      (0.000791625 * g)
                                                          .toFixed(2)
                                                          .toString()
                                                          .replace(/\B(?=(\d{3})+(?!\d))/g, " "),
                                                      " TMF",
                                                  ],
                                              }),
                                    ],
                                }),
                                (0, r.jsxs)(o.Z, {
                                    justifyContent: "space-between",
                                    children: [
                                        (0, r.jsx)(d.Z, { style: { fontWeight: "700" }, children: "Next Rebase in:" }),
                                        s || f
                                            ? (0, r.jsx)(u.Z, { width: "100px" })
                                            : (0, r.jsx)(b.ZP, {
                                                  date: 1e3 * h,
                                                  renderer: function (n) {
                                                      var o = n.hours,
                                                          c = n.minutes,
                                                          s = n.seconds;
                                                      return n.completed
                                                          ? (e && a((0, Z.h2)({ networkID: t, address: e, provider: i })), a((0, v.kc)({ networkID: 56, provider: new w.r("https://bsc-dataseed4.ninicoin.io/") })), null)
                                                          : (0, r.jsxs)(d.Z, { color: "textSubtle", children: [j(o), ":", j(c), ":", j(s)] });
                                                  },
                                              }),
                                    ],
                                }),
                                (0, r.jsxs)(o.Z, {
                                    justifyContent: "space-between",
                                    children: [
                                        (0, r.jsx)(d.Z, { style: { fontWeight: "700" }, children: "Next Reward:" }),
                                        s || f
                                            ? (0, r.jsx)(u.Z, { width: "100px" })
                                            : (0, r.jsxs)(d.Z, {
                                                  color: "success",
                                                  children: [
                                                      "$",
                                                      (l * g * 0.000791625)
                                                          .toFixed(2)
                                                          .toString()
                                                          .replace(/\B(?=(\d{3})+(?!\d))/g, " "),
                                                      " USD",
                                                  ],
                                              }),
                                    ],
                                }),
                                (0, r.jsxs)(o.Z, {
                                    justifyContent: "space-between",
                                    children: [(0, r.jsx)(d.Z, { style: { fontWeight: "700" }, children: "Next Reward Yield:" }), (0, r.jsx)(d.Z, { color: "textSubtle", children: "0.079164%" })],
                                }),
                                (0, r.jsxs)(o.Z, {
                                    justifyContent: "space-between",
                                    children: [(0, r.jsx)(d.Z, { style: { fontWeight: "700" }, children: "ROI % (30-Day Rate)" }), (0, r.jsx)(d.Z, { color: "success", children: "157.82%" })],
                                }),
                                (0, r.jsxs)(o.Z, {
                                    justifyContent: "space-between",
                                    children: [
                                        (0, r.jsx)(d.Z, { style: { fontWeight: "700" }, children: "ROI $ (30-day Rate)" }),
                                        s || f
                                            ? (0, r.jsx)(u.Z, { width: "100px" })
                                            : (0, r.jsxs)(d.Z, {
                                                  color: "success",
                                                  children: [
                                                      "$",
                                                      (l * g * 1.5782)
                                                          .toFixed(2)
                                                          .toString()
                                                          .replace(/\B(?=(\d{3})+(?!\d))/g, " "),
                                                      " USD",
                                                  ],
                                              }),
                                    ],
                                }),
                            ],
                        }),
                    });
                };
            function P(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, { raw: { value: Object.freeze(e) } }));
            }
            function k() {
                var n = P(['\n  max-width: 1200px;width: calc(100% - 16px);\n  max-width: 980px;\n  position="relative";\n']);
                return (
                    (k = function () {
                        return n;
                    }),
                    n
                );
            }
            function B() {
                var n = P(["\n  @media screen and (max-width: 768px) {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n    grid-row-gap: 30px;\n  }\n"]);
                return (
                    (B = function () {
                        return n;
                    }),
                    n
                );
            }
            function I() {
                var n = P(["\n  background-image: url(", ");\n"]);
                return (
                    (I = function () {
                        return n;
                    }),
                    n
                );
            }
            var W = (0, i.ZP)(o.Z).withConfig({ componentId: "sc-e277bd5a-0" })(k()),
                T = (0, i.ZP)(c.Z).withConfig({ componentId: "sc-e277bd5a-1" })(B()),
                D = (0, i.ZP)(a.Z).withConfig({ componentId: "sc-e277bd5a-2" })(I(), "/_next/static/media/background-light.b9434d5d.png");
            function F() {
                return (0, r.jsx)(D, {
                    children: (0, r.jsx)(W, {
                        children: (0, r.jsxs)(c.Z, {
                            flex: "1",
                            gridRowGap: "32px",
                            children: [
                                (0, r.jsxs)(T, { flex: "1", gridTemplateColumns: "1fr 1fr", gridColumnGap: "40px", children: [(0, r.jsx)(g, {}), (0, r.jsx)(j, {})] }),
                                (0, r.jsxs)(T, { flex: "1", gridTemplateColumns: "1fr 1fr", gridColumnGap: "40px", children: [(0, r.jsx)(h, {}), (0, r.jsx)(m, {})] }),
                                (0, r.jsx)(c.Z, { flex: "1", children: (0, r.jsx)(S, {}) }),
                            ],
                        }),
                    }),
                });
            }
            var _ = function () {
                return (0, r.jsx)(F, {});
            };
        },
        13766: function (n, e, t) {
            "use strict";
            t.d(e, {
                Z: function () {
                    return x;
                },
            });
            var r = t(85893),
                i = t(14141),
                o = t(19532),
                c = t(64690),
                a = t(81313);
            function d(n, e, t) {
                return e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (n[e] = t), n;
            }
            function s(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {},
                        r = Object.keys(t);
                    "function" === typeof Object.getOwnPropertySymbols &&
                        (r = r.concat(
                            Object.getOwnPropertySymbols(t).filter(function (n) {
                                return Object.getOwnPropertyDescriptor(t, n).enumerable;
                            })
                        )),
                        r.forEach(function (e) {
                            d(n, e, t[e]);
                        });
                }
                return n;
            }
            function u(n, e) {
                if (null == n) return {};
                var t,
                    r,
                    i = (function (n, e) {
                        if (null == n) return {};
                        var t,
                            r,
                            i = {},
                            o = Object.keys(n);
                        for (r = 0; r < o.length; r++) (t = o[r]), e.indexOf(t) >= 0 || (i[t] = n[t]);
                        return i;
                    })(n, e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(n);
                    for (r = 0; r < o.length; r++) (t = o[r]), e.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(n, t) && (i[t] = n[t]));
                }
                return i;
            }
            function l() {
                var n,
                    e,
                    t =
                        ((n = [
                            "\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n  padding: ",
                            ";\n  padding-bottom: 0;\n  min-height: ",
                            ";\n  background: ",
                            ";\n  background-image: url(",
                            ");\n  background-repeat: no-repeat;\n  background-position: top center;\n\n  ",
                            " {\n    background-size: 100% auto;\n  }\n\n  ",
                            " {\n    padding: ",
                            ";\n    padding-bottom: 0;\n  }\n\n  ",
                            " {\n    padding: ",
                            ";\n    padding-bottom: 0;\n    min-height: ",
                            ";\n  }\n",
                        ]),
                        e || (e = n.slice(0)),
                        Object.freeze(Object.defineProperties(n, { raw: { value: Object.freeze(e) } })));
                return (
                    (l = function () {
                        return t;
                    }),
                    t
                );
            }
            var f = i.ZP.div.withConfig({ componentId: "sc-808467fc-0" })(
                    l(),
                    function (n) {
                        return n.$removePadding ? "0" : "16px";
                    },
                    function (n) {
                        return n.$noMinHeight ? "initial" : "calc(100vh - 64px)";
                    },
                    function (n) {
                        return n.theme.colors.background;
                    },
                    "/_next/static/media/background-home.8302fe55.svg",
                    function (n) {
                        return n.theme.mediaQueries.xs;
                    },
                    function (n) {
                        return n.theme.mediaQueries.sm;
                    },
                    function (n) {
                        return n.$removePadding ? "0" : "24px";
                    },
                    function (n) {
                        return n.theme.mediaQueries.lg;
                    },
                    function (n) {
                        return n.$removePadding ? "0" : "32px";
                    },
                    function (n) {
                        return n.$noMinHeight ? "initial" : "calc(100vh - 100px)";
                    }
                ),
                x = function (n) {
                    var e = n.children,
                        t = n.removePadding,
                        i = void 0 !== t && t,
                        d = (n.hideFooterOnDesktop, n.noMinHeight),
                        l = void 0 !== d && d,
                        x = n.helpUrl,
                        p = (void 0 === x && a.SO, u(n, ["children", "removePadding", "hideFooterOnDesktop", "noMinHeight", "helpUrl"]));
                    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(c.V, {}), (0, r.jsxs)(f, s({ $removePadding: i, $noMinHeight: l }, p, { children: [e, (0, r.jsx)(o.Z, { flexGrow: 1 })] }))] });
                };
        },
    },
    function (n) {
        n.O(0, [8130, 9774, 2888, 179], function () {
            return (e = 682), n((n.s = e));
            var e;
        });
        var e = n.O();
        _N_E = e;
    },
]);
//# sourceMappingURL=account-c4d0f840d8c9da50.js.map
