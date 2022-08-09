(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7385],
    {
        42886: function (t, e, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/liquidity",
                function () {
                    return n(11557);
                },
            ]);
        },
        58513: function (t, e, n) {
            "use strict";
            var r = n(54739),
                i = n(57247);
            function o() {
                var t,
                    e,
                    n = ((t = ["\n  border-top: 1px solid ", ";\n  ", "\n"]), e || (e = t.slice(0)), Object.freeze(Object.defineProperties(t, { raw: { value: Object.freeze(e) } })));
                return (
                    (o = function () {
                        return n;
                    }),
                    n
                );
            }
            var u = r.ZP.div.withConfig({ componentId: "sc-5ed8a823-0" })(
                o(),
                function (t) {
                    return t.theme.colors.cardBorder;
                },
                i.Dh
            );
            (u.defaultProps = { p: "24px" }), (e.Z = u);
        },
        11557: function (t, e, n) {
            "use strict";
            n.r(e),
                n.d(e, {
                    default: function () {
                        return Z;
                    },
                });
            var r = n(85893),
                i = n(67294),
                o = n(67602),
                u = n(69649),
                l = n(19532),
                c = n(31289),
                a = n(58513),
                d = n(81064),
                s = n(41664),
                f = n.n(s),
                h = n(7867),
                p = n(20316),
                x = n(69993),
                v = n(29121),
                y = n(54941),
                m = n(59808),
                b = n(41029),
                g = n(84866),
                j = n(13766);
            function k(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r;
            }
            function w(t, e) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return t;
                    })(t) ||
                    (function (t, e) {
                        var n = null == t ? null : ("undefined" !== typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
                        if (null != n) {
                            var r,
                                i,
                                o = [],
                                u = !0,
                                l = !1;
                            try {
                                for (n = n.call(t); !(u = (r = n.next()).done) && (o.push(r.value), !e || o.length !== e); u = !0);
                            } catch (c) {
                                (l = !0), (i = c);
                            } finally {
                                try {
                                    u || null == n.return || n.return();
                                } finally {
                                    if (l) throw i;
                                }
                            }
                            return o;
                        }
                    })(t, e) ||
                    (function (t, e) {
                        if (!t) return;
                        if ("string" === typeof t) return k(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        "Object" === n && t.constructor && (n = t.constructor.name);
                        if ("Map" === n || "Set" === n) return Array.from(n);
                        if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return k(t, e);
                    })(t, e) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            var Z = function () {
                var t = (0, p.Z)().account,
                    e = (0, h.$G)().t,
                    n = (0, m.B3)(),
                    s = (0, i.useMemo)(
                        function () {
                            return n.map(function (t) {
                                return { liquidityToken: (0, m.Ce)(t), tokens: t };
                            });
                        },
                        [n]
                    ),
                    k = (0, i.useMemo)(
                        function () {
                            return s.map(function (t) {
                                return t.liquidityToken;
                            });
                        },
                        [s]
                    ),
                    Z = w((0, v.v2)(null !== t && void 0 !== t ? t : void 0, k), 2),
                    S = Z[0],
                    _ = Z[1],
                    A = (0, i.useMemo)(
                        function () {
                            return s.filter(function (t) {
                                var e,
                                    n = t.liquidityToken;
                                return null === (e = S[n.address]) || void 0 === e ? void 0 : e.greaterThan("0");
                            });
                        },
                        [s, S]
                    ),
                    q = (0, y.z$)(
                        A.map(function (t) {
                            return t.tokens;
                        })
                    ),
                    T =
                        _ ||
                        (null === q || void 0 === q ? void 0 : q.length) < A.length ||
                        (null === q || void 0 === q
                            ? void 0
                            : q.some(function (t) {
                                  return !t;
                              })),
                    C = q
                        .map(function (t) {
                            return w(t, 2)[1];
                        })
                        .filter(function (t) {
                            return Boolean(t);
                        });
                return (0, r.jsx)(j.Z, {
                    removePadding: !0,
                    style: { backgroundImage: "url(images/background.png)", backgroundColor: "#040404", backgroundPosition: "center bottom", backgroundSize: "100% cover" },
                    children: (0, r.jsxs)("div", {
                        style: { position: "relative", maxWidth: "455px", width: "100%", marginTop: "32px" },
                        children: [
                            (0, r.jsx)("div", {
                                style: { position: "absolute", background: "linear-gradient(to right, #E357FE, #902ADF, #3E01BF)", opacity: "0.25", filter: "blur(15px)", height: "100%", width: "100%", borderRadius: "16px" },
                            }),
                            (0, r.jsx)("div", {
                                style: { margin: 4 },
                                children: (0, r.jsxs)(g.j, {
                                    children: [
                                        (0, r.jsx)(g.t, { title: e("Your Liquidity"), subtitle: e("Remove liquidity to receive tokens back") }),
                                        (0, r.jsxs)(u.Z, {
                                            children: [
                                                t
                                                    ? T
                                                        ? (0, r.jsx)(o.Z, { color: "textSubtle", textAlign: "center", children: (0, r.jsx)(b.Z, { children: e("Loading") }) })
                                                        : (null === C || void 0 === C ? void 0 : C.length) > 0
                                                        ? C.map(function (t, e) {
                                                              return (0, r.jsx)(x.Z, { pair: t, mb: e < C.length - 1 ? "16px" : 0 }, t.liquidityToken.address);
                                                          })
                                                        : (0, r.jsx)(o.Z, { color: "textSubtle", textAlign: "center", children: e("No liquidity found.") })
                                                    : (0, r.jsx)(o.Z, { color: "textSubtle", textAlign: "center", children: e("Connect to a wallet to view your liquidity.") }),
                                                t &&
                                                    !T &&
                                                    (0, r.jsxs)(l.Z, {
                                                        flexDirection: "column",
                                                        alignItems: "center",
                                                        mt: "24px",
                                                        children: [
                                                            (0, r.jsx)(o.Z, { color: "textSubtle", fontSize: "12px", mb: "8px", children: e("Don't see a pool you joined?") }),
                                                            (0, r.jsx)(f(), {
                                                                href: "/find",
                                                                passHref: !0,
                                                                children: (0, r.jsx)(c.Z, { id: "import-pool-link", variant: "text", style: { fontSize: "20px" }, as: "a", children: e("Find other LP tokens > ") }),
                                                            }),
                                                        ],
                                                    }),
                                            ],
                                        }),
                                        (0, r.jsx)(a.Z, {
                                            style: { textAlign: "center" },
                                            children: (0, r.jsx)(f(), {
                                                href: "/add",
                                                passHref: !0,
                                                children: (0, r.jsx)(c.Z, { id: "join-pool-button", width: "100%", startIcon: (0, r.jsx)(d.Z, { color: "white" }), children: e("Add Liquidity") }),
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                });
            };
        },
    },
    function (t) {
        t.O(0, [9539, 1843, 2949, 5115, 9993, 9774, 2888, 179], function () {
            return (e = 42886), t((t.s = e));
            var e;
        });
        var e = t.O();
        _N_E = e;
    },
]);
