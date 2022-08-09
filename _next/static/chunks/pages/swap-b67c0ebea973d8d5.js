(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8503],
    {
        98229: function (e, n, r) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/swap",
                function () {
                    return r(36770);
                },
            ]);
        },
        47768: function (e, n, r) {
            "use strict";
            r.d(n, {
                Z: function () {
                    return C;
                },
            });
            var t = r(85893),
                o = r(17796),
                i = r(67602),
                a = r(96939),
                c = r(6744),
                l = r(31289),
                s = r(7867),
                u = r(54739),
                d = r(41149),
                f = r(45932),
                p = r(93861),
                m = r(20316),
                h = r(11156),
                x = r(54543),
                g = r(94133);
            function b(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t;
            }
            function v(e, n) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, n) {
                        var r = null == e ? null : ("undefined" !== typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                        if (null != r) {
                            var t,
                                o,
                                i = [],
                                a = !0,
                                c = !1;
                            try {
                                for (r = r.call(e); !(a = (t = r.next()).done) && (i.push(t.value), !n || i.length !== n); a = !0);
                            } catch (l) {
                                (c = !0), (o = l);
                            } finally {
                                try {
                                    a || null == r.return || r.return();
                                } finally {
                                    if (c) throw o;
                                }
                            }
                            return i;
                        }
                    })(e, n) ||
                    (function (e, n) {
                        if (!e) return;
                        if ("string" === typeof e) return b(e, n);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === r && e.constructor && (r = e.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(r);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return b(e, n);
                    })(e, n) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function y() {
                var e,
                    n,
                    r =
                        ((e = ["\n  padding: 8px 0;\n  width: 100%;\n  max-width: 400px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  color: ", ";\n  background-color: ", ";\n  text-align: center;\n"]),
                        n || (n = e.slice(0)),
                        Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(n) } })));
                return (
                    (y = function () {
                        return r;
                    }),
                    r
                );
            }
            var j = u.ZP.div.withConfig({ componentId: "sc-76b79dc-0" })(
                    y(),
                    function (e) {
                        return e.theme.colors.text;
                    },
                    function (e) {
                        return e.theme.colors.invertedContrast;
                    }
                ),
                w = function (e) {
                    var n = e.currencies,
                        r = e.onDismiss,
                        c = (0, m.Z)().chainId,
                        l = (0, s.$G)().t,
                        u =
                            c && n
                                ? n.map(function (e) {
                                      return (0, x.pu)(e, c);
                                  })
                                : [],
                        b = (0, g.l6)();
                    return (0, t.jsx)(o.Z, {
                        title: l("Unsupported Assets"),
                        maxWidth: "420px",
                        onDismiss: r,
                        children: (0, t.jsxs)(f.Tz, {
                            gap: "lg",
                            children: [
                                u.map(function (e) {
                                    var n;
                                    return (
                                        e &&
                                        b &&
                                        Object.keys(b).includes(e.address) &&
                                        (0, t.jsxs)(
                                            f.Tz,
                                            {
                                                gap: "10px",
                                                children: [
                                                    (0, t.jsxs)(d.BA, { gap: "5px", align: "center", children: [(0, t.jsx)(p.Xw, { currency: e, size: "24px" }), (0, t.jsx)(i.Z, { children: e.symbol })] }),
                                                    c && (0, t.jsx)(a.Z, { external: !0, small: !0, color: "primaryDark", href: (0, h.s6)(e.address, "address", c), children: e.address }),
                                                ],
                                            },
                                            null === (n = e.address) || void 0 === n ? void 0 : n.concat("not-supported")
                                        )
                                    );
                                }),
                                (0, t.jsx)(f.Tz, {
                                    gap: "lg",
                                    children: (0, t.jsx)(i.Z, {
                                        children: l("Some assets are not available through this interface because they may not work well with our smart contract or we are unable to allow trading for legal reasons."),
                                    }),
                                }),
                            ],
                        }),
                    });
                };
            function C(e) {
                var n = e.currencies,
                    r = (0, s.$G)().t,
                    o = v((0, c.Z)((0, t.jsx)(w, { currencies: n })), 1)[0];
                return (0, t.jsx)(j, { children: (0, t.jsx)(l.Z, { variant: "text", onClick: o, children: r("Read more about unsupported assets") }) });
            }
        },
        17849: function (e, n, r) {
            "use strict";
            r.d(n, {
                Z: function () {
                    return c;
                },
            });
            var t = r(67294),
                o = r(25617),
                i = r(12737),
                a = r(38373);
            function c() {
                var e = (0, o.v9)(function (e) {
                        return e.user.userDeadline;
                    }),
                    n = (function () {
                        var e,
                            n,
                            r = (0, a.gq)();
                        return null === (e = (0, i.Wk)(r, "getCurrentBlockTimestamp")) || void 0 === e || null === (n = e.result) || void 0 === n ? void 0 : n[0];
                    })();
                return (0, t.useMemo)(
                    function () {
                        if (n && e) return n.add(e);
                    },
                    [n, e]
                );
            }
        },
        36770: function (e, n, r) {
            "use strict";
            r.r(n),
                r.d(n, {
                    default: function () {
                        return jr;
                    },
                });
            var t = r(85893),
                o = r(67294),
                i = r(54739),
                a = r(12609),
                c = r(67602),
                l = r(47851),
                s = r(6744),
                u = r(47708),
                d = r(47227),
                f = r(31289),
                p = r(87177),
                m = r(23526),
                h = r(77905),
                x = r(47768),
                g = r(11163),
                b = r(7867),
                v = r(52353),
                y = v.ZP.bondly,
                j = { safemoon: v.ZP.safemoon, bondly: y, itam: v.ZP.itam, ccar: v.ZP.ccar, bttold: v.ZP.bttold },
                w = r(8100),
                C = function () {
                    var e = (0, o.useState)(!1),
                        n = e[0],
                        r = e[1],
                        t = (0, o.useCallback)(
                            function () {
                                n || r(!0);
                            },
                            [n]
                        ),
                        i = (0, w.kY)().mutate;
                    return (
                        (0, o.useEffect)(
                            function () {
                                n &&
                                    (i("blockNumber"),
                                    setTimeout(function () {
                                        return r(!1);
                                    }, 500));
                            },
                            [i, n]
                        ),
                        { refreshBlockNumber: t, isLoading: n }
                    );
                },
                T = r(96939),
                P = r(11762),
                A = r(20316),
                Z = r(45932),
                I = r(41149),
                S = r(11156);
            function k(e, n) {
                return n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(n) } }));
            }
            function O() {
                var e = k(["\n  display: flex;\n  flex-flow: column nowrap;\n  position: relative;\n  border-radius: 1.25rem;\n  background-color: ", ";\n  z-index: 1;\n  width: 100%;\n"]);
                return (
                    (O = function () {
                        return e;
                    }),
                    e
                );
            }
            function N() {
                var e = k([
                    "\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 1.25rem;\n  border: 1px solid ",
                    ";\n  transition: border-color 300ms ",
                    ",\n    color 500ms ",
                    ";\n  background-color: ",
                    ";\n",
                ]);
                return (
                    (N = function () {
                        return e;
                    }),
                    e
                );
            }
            function U() {
                var e = k(["\n  flex: 1;\n  padding: 1rem;\n"]);
                return (
                    (U = function () {
                        return e;
                    }),
                    e
                );
            }
            function E() {
                var e = k([
                    "\n  font-size: 1.25rem;\n  outline: none;\n  border: none;\n  flex: 1 1 auto;\n  background-color: ",
                    ";\n  transition: color 300ms ",
                    ";\n  color: ",
                    ";\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 500;\n  width: 100%;\n  ::placeholder {\n    color: ",
                    ";\n  }\n  padding: 0px;\n  -webkit-appearance: textfield;\n\n  ::-webkit-search-decoration {\n    -webkit-appearance: none;\n  }\n\n  ::-webkit-outer-spin-button,\n  ::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n  }\n\n  ::placeholder {\n    color: ",
                    ";\n  }\n",
                ]);
                return (
                    (E = function () {
                        return e;
                    }),
                    e
                );
            }
            var L = i.ZP.div.withConfig({ componentId: "sc-5dfe55ef-0" })(O(), function (e) {
                    return e.theme.colors.backgroundAlt;
                }),
                D = i.ZP.div.withConfig({ componentId: "sc-5dfe55ef-1" })(
                    N(),
                    function (e) {
                        var n = e.error,
                            r = e.theme;
                        return n ? r.colors.failure : r.colors.background;
                    },
                    function (e) {
                        return e.error ? "step-end" : "step-start";
                    },
                    function (e) {
                        return e.error ? "step-end" : "step-start";
                    },
                    function (e) {
                        return e.theme.colors.backgroundAlt;
                    }
                ),
                z = i.ZP.div.withConfig({ componentId: "sc-5dfe55ef-2" })(U()),
                B = i.ZP.input.withConfig({ componentId: "sc-5dfe55ef-3" })(
                    E(),
                    function (e) {
                        return e.theme.colors.backgroundAlt;
                    },
                    function (e) {
                        return e.error ? "step-end" : "step-start";
                    },
                    function (e) {
                        var n = e.error,
                            r = e.theme;
                        return n ? r.colors.failure : r.colors.primary;
                    },
                    function (e) {
                        return e.theme.colors.textDisabled;
                    },
                    function (e) {
                        return e.theme.colors.textDisabled;
                    }
                );
            function M(e) {
                var n = e.id,
                    r = e.value,
                    i = e.onChange,
                    a = (0, A.Z)().chainId,
                    l = (0, b.$G)().t,
                    s = (0, P.Z)(r),
                    u = s.address,
                    d = s.loading,
                    f = s.name,
                    p = (0, o.useCallback)(
                        function (e) {
                            var n = e.target.value.replace(/\s+/g, "");
                            i(n);
                        },
                        [i]
                    ),
                    m = Boolean(r.length > 0 && !d && !u);
                return (0, t.jsx)(L, {
                    id: n,
                    children: (0, t.jsx)(D, {
                        error: m,
                        children: (0, t.jsx)(z, {
                            children: (0, t.jsxs)(Z.Tz, {
                                gap: "md",
                                children: [
                                    (0, t.jsxs)(I.m0, {
                                        children: [
                                            (0, t.jsx)(c.Z, { children: l("Recipient") }),
                                            u && a && (0, t.jsxs)(T.Z, { external: !0, small: !0, href: (0, S.s6)(null !== f && void 0 !== f ? f : u, "address", a), children: ["(", l("View on BscScan"), ")"] }),
                                        ],
                                    }),
                                    (0, t.jsx)(B, {
                                        className: "recipient-address-input",
                                        type: "text",
                                        autoComplete: "off",
                                        autoCorrect: "off",
                                        autoCapitalize: "off",
                                        spellCheck: "false",
                                        placeholder: l("Wallet Address or ENS name"),
                                        error: m,
                                        pattern: "^(0x[a-fA-F0-9]{40})$",
                                        onChange: p,
                                        value: r,
                                    }),
                                ],
                            }),
                        }),
                    }),
                });
            }
            var _ = r(21730),
                F = r(23599),
                R = r(14667),
                G = r(52394),
                W = r(10608),
                $ = r(4717),
                H = r(81313),
                X = r(19532),
                V = r(49766);
            function q(e, n) {
                return n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(n) } }));
            }
            function K() {
                var e = q(["\n  position: relative;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 0 25px 30px;\n"]);
                return (
                    (K = function () {
                        return e;
                    }),
                    e
                );
            }
            function Y() {
                var e = q(["\n          :hover {\n            cursor: pointer;\n            opacity: 0.8;\n          }\n        "]);
                return (
                    (Y = function () {
                        return e;
                    }),
                    e
                );
            }
            function J() {
                var e = q(["\n  padding: 2px;\n\n  ", "\n"]);
                return (
                    (J = function () {
                        return e;
                    }),
                    e
                );
            }
            function Q() {
                var e = q(["\n  color: ", ";\n"]);
                return (
                    (Q = function () {
                        return e;
                    }),
                    e
                );
            }
            function ee() {
                var e = q([
                    "\n  height: 22px;\n  width: 22px;\n  background-color: ",
                    ";\n  border: none;\n  border-radius: 50%;\n  padding: 0.2rem;\n  font-size: 0.875rem;\n  font-weight: 400;\n  margin-left: 0.4rem;\n  cursor: pointer;\n  color: ",
                    ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  float: right;\n\n  :hover {\n    background-color: ",
                    ";\n  }\n  :focus {\n    background-color: ",
                    ";\n    outline: none;\n  }\n",
                ]);
                return (
                    (ee = function () {
                        return e;
                    }),
                    e
                );
            }
            function ne() {
                var e = q(["\n  width: 220px;\n"]);
                return (
                    (ne = function () {
                        return e;
                    }),
                    e
                );
            }
            function re() {
                var e = q([
                    "\n  background-color: ",
                    ";\n  border-radius: 1rem;\n  display: flex;\n  align-items: center;\n  font-size: 0.825rem;\n  width: 100%;\n  padding: 3rem 1.25rem 1rem 1rem;\n  margin-top: -2rem;\n  color: ",
                    ";\n  z-index: -1;\n  p {\n    padding: 0;\n    margin: 0;\n    font-weight: 500;\n  }\n",
                ]);
                return (
                    (re = function () {
                        return e;
                    }),
                    e
                );
            }
            function te() {
                var e = q(["\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  border-radius: 12px;\n  min-width: 48px;\n  height: 48px;\n"]);
                return (
                    (te = function () {
                        return e;
                    }),
                    e
                );
            }
            function oe() {
                var e = q(["\n  background-color: ", ";\n  padding: 0.5rem;\n  border-radius: 12px;\n  margin-top: 8px;\n"]);
                return (
                    (oe = function () {
                        return e;
                    }),
                    e
                );
            }
            var ie = (0, i.ZP)(X.Z).withConfig({ componentId: "sc-38713282-0" })(K()),
                ae = i.ZP.div.withConfig({ componentId: "sc-38713282-1" })(J(), function (e) {
                    return e.clickable ? (0, i.iv)(Y()) : null;
                }),
                ce = (0, i.ZP)(c.Z).withConfig({ componentId: "sc-38713282-2" })(Q(), function (e) {
                    var n = e.theme,
                        r = e.severity;
                    return 3 === r || 4 === r ? n.colors.failure : 2 === r ? n.colors.warning : 1 === r ? n.colors.text : n.colors.success;
                }),
                le = i.ZP.button.withConfig({ componentId: "sc-38713282-3" })(
                    ee(),
                    function (e) {
                        return e.theme.colors.background;
                    },
                    function (e) {
                        return e.theme.colors.text;
                    },
                    function (e) {
                        return e.theme.colors.dropdown;
                    },
                    function (e) {
                        return e.theme.colors.dropdown;
                    }
                ),
                se = (0, i.ZP)(c.Z).attrs({ ellipsis: !0 }).withConfig({ componentId: "sc-38713282-4" })(ne()),
                ue = i.ZP.div.withConfig({ componentId: "sc-38713282-5" })(
                    re(),
                    function (e) {
                        var n = e.theme;
                        return "".concat(n.colors.failure, "33");
                    },
                    function (e) {
                        return e.theme.colors.failure;
                    }
                ),
                de = i.ZP.div.withConfig({ componentId: "sc-38713282-6" })(te(), function (e) {
                    var n = e.theme;
                    return "".concat(n.colors.failure, "33");
                });
            function fe(e) {
                var n = e.error;
                return (0, t.jsxs)(ue, { children: [(0, t.jsx)(de, { children: (0, t.jsx)(V.Z, { width: "24px" }) }), (0, t.jsx)("p", { children: n })] });
            }
            var pe = (0, i.ZP)(Z.Tz).withConfig({ componentId: "sc-38713282-7" })(oe(), function (e) {
                var n = e.theme;
                return "".concat(n.colors.warning, "33");
            });
            function me(e) {
                var n = e.priceImpact;
                return (0, t.jsx)(ce, { fontSize: "14px", severity: (0, W.oX)(n), children: n ? (n.lessThan(H.IS) ? "<0.01%" : "".concat(n.toFixed(2), "%")) : "-" });
            }
            function he() {
                var e,
                    n,
                    r =
                        ((e = ["\n  margin-top: 24px;\n  padding: 16px;\n  border-radius: ", ";\n  border: 1px solid ", ";\n  background-color: ", ";\n"]),
                        n || (n = e.slice(0)),
                        Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(n) } })));
                return (
                    (he = function () {
                        return r;
                    }),
                    r
                );
            }
            var xe = (0, i.ZP)(Z.Tz).withConfig({ componentId: "sc-13c4be17-0" })(
                he(),
                function (e) {
                    return e.theme.radii.default;
                },
                function (e) {
                    return e.theme.colors.cardBorder;
                },
                function (e) {
                    return e.theme.colors.background;
                }
            );
            function ge(e) {
                var n,
                    r,
                    i,
                    l,
                    s = e.trade,
                    u = e.onConfirm,
                    d = e.allowedSlippage,
                    p = e.swapErrorMessage,
                    m = e.disabledConfirm,
                    h = (0, b.$G)().t,
                    x = (0, o.useState)(!1),
                    g = x[0],
                    v = x[1],
                    y = (0, o.useMemo)(
                        function () {
                            return (0, W.b5)(s, d);
                        },
                        [d, s]
                    ),
                    j = (0, o.useMemo)(
                        function () {
                            return (0, W.U7)(s);
                        },
                        [s]
                    ),
                    w = j.priceImpactWithoutFee,
                    C = j.realizedLPFee,
                    T = (0, W.oX)(w);
                return (0, t.jsxs)(t.Fragment, {
                    children: [
                        (0, t.jsxs)(xe, {
                            children: [
                                (0, t.jsxs)(I.m0, {
                                    align: "center",
                                    children: [
                                        (0, t.jsx)(c.Z, { fontSize: "14px", children: h("Price") }),
                                        (0, t.jsxs)(c.Z, {
                                            fontSize: "14px",
                                            style: { justifyContent: "center", alignItems: "center", display: "flex", textAlign: "right", paddingLeft: "10px" },
                                            children: [
                                                (0, W.Kh)(s, g),
                                                (0, t.jsx)(le, {
                                                    onClick: function () {
                                                        return v(!g);
                                                    },
                                                    children: (0, t.jsx)(R.Z, { width: "14px" }),
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, t.jsxs)(I.m0, {
                                    children: [
                                        (0, t.jsxs)(I.DA, {
                                            children: [
                                                (0, t.jsx)(c.Z, { fontSize: "14px", children: s.tradeType === a.TradeType.EXACT_INPUT ? h("Minimum received") : h("Maximum sold") }),
                                                (0, t.jsx)($.Z, { text: h("Your transaction will revert if there is a large, unfavorable price movement before it is confirmed."), ml: "4px" }),
                                            ],
                                        }),
                                        (0, t.jsxs)(I.DA, {
                                            children: [
                                                (0, t.jsx)(c.Z, {
                                                    fontSize: "14px",
                                                    children:
                                                        s.tradeType === a.TradeType.EXACT_INPUT
                                                            ? null !== (i = null === (n = y[G.gN.OUTPUT]) || void 0 === n ? void 0 : n.toSignificant(4)) && void 0 !== i
                                                                ? i
                                                                : "-"
                                                            : null !== (l = null === (r = y[G.gN.INPUT]) || void 0 === r ? void 0 : r.toSignificant(4)) && void 0 !== l
                                                            ? l
                                                            : "-",
                                                }),
                                                (0, t.jsx)(c.Z, { fontSize: "14px", marginLeft: "4px", children: s.tradeType === a.TradeType.EXACT_INPUT ? s.outputAmount.currency.symbol : s.inputAmount.currency.symbol }),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, t.jsxs)(I.m0, {
                                    children: [
                                        (0, t.jsxs)(I.DA, {
                                            children: [
                                                (0, t.jsx)(c.Z, { fontSize: "14px", children: h("Price Impact") }),
                                                (0, t.jsx)($.Z, { text: h("The difference between the market price and your price due to trade size."), ml: "4px" }),
                                            ],
                                        }),
                                        (0, t.jsx)(me, { priceImpact: w }),
                                    ],
                                }),
                                (0, t.jsxs)(I.m0, {
                                    children: [
                                        (0, t.jsxs)(I.DA, {
                                            children: [
                                                (0, t.jsx)(c.Z, { fontSize: "14px", children: h("Liquidity Provider Fee") }),
                                                (0, t.jsx)($.Z, {
                                                    text: (0, t.jsxs)(t.Fragment, {
                                                        children: [
                                                            (0, t.jsx)(c.Z, { mb: "12px", children: h("For each trade a %amount% fee is paid", { amount: "0.25%" }) }),
                                                            (0, t.jsxs)(c.Z, { children: ["- ", h("%amount% to LP token holders", { amount: "0.17%" })] }),
                                                            (0, t.jsxs)(c.Z, { children: ["- ", h("%amount% to the Treasury", { amount: "0.08%" })] }),
                                                        ],
                                                    }),
                                                    ml: "4px",
                                                }),
                                            ],
                                        }),
                                        (0, t.jsx)(c.Z, { fontSize: "14px", children: C ? "".concat(null === C || void 0 === C ? void 0 : C.toSignificant(6), " ").concat(s.inputAmount.currency.symbol) : "-" }),
                                    ],
                                }),
                            ],
                        }),
                        (0, t.jsxs)(I.BA, {
                            children: [
                                (0, t.jsx)(f.Z, { variant: T > 2 ? "danger" : "primary", onClick: u, disabled: m, mt: "12px", id: "confirm-swap-or-send", width: "100%", children: h(T > 2 ? "Swap Anyway" : "Confirm Swap") }),
                                p ? (0, t.jsx)(fe, { error: p }) : null,
                            ],
                        }),
                    ],
                });
            }
            var be = r(93861),
                ve = r(2349);
            function ye(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t;
            }
            function je(e, n) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, n) {
                        var r = null == e ? null : ("undefined" !== typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                        if (null != r) {
                            var t,
                                o,
                                i = [],
                                a = !0,
                                c = !1;
                            try {
                                for (r = r.call(e); !(a = (t = r.next()).done) && (i.push(t.value), !n || i.length !== n); a = !0);
                            } catch (l) {
                                (c = !0), (o = l);
                            } finally {
                                try {
                                    a || null == r.return || r.return();
                                } finally {
                                    if (c) throw o;
                                }
                            }
                            return i;
                        }
                    })(e, n) ||
                    (function (e, n) {
                        if (!e) return;
                        if ("string" === typeof e) return ye(e, n);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === r && e.constructor && (r = e.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(r);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return ye(e, n);
                    })(e, n) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function we(e) {
                var n,
                    r,
                    i = e.trade,
                    l = e.allowedSlippage,
                    s = e.recipient,
                    d = e.showAcceptChanges,
                    p = e.onAcceptChanges,
                    m = (0, b.$G)().t,
                    h = (0, o.useMemo)(
                        function () {
                            return (0, W.b5)(i, l);
                        },
                        [i, l]
                    ),
                    x = (0, o.useMemo)(
                        function () {
                            return (0, W.U7)(i);
                        },
                        [i]
                    ).priceImpactWithoutFee,
                    g = (0, W.oX)(x),
                    v = i.tradeType === a.TradeType.EXACT_INPUT ? (null === (n = h[G.gN.OUTPUT]) || void 0 === n ? void 0 : n.toSignificant(6)) : null === (r = h[G.gN.INPUT]) || void 0 === r ? void 0 : r.toSignificant(6),
                    y = i.tradeType === a.TradeType.EXACT_INPUT ? i.outputAmount.currency.symbol : i.inputAmount.currency.symbol,
                    j = je(
                        (i.tradeType === a.TradeType.EXACT_INPUT
                            ? m("Output is estimated. You will receive at least %amount% %symbol% or the transaction will revert.", { amount: v, symbol: y })
                            : m("Input is estimated. You will sell at most %amount% %symbol% or the transaction will revert.", { amount: v, symbol: y })
                        ).split("".concat(v, " ").concat(y)),
                        2
                    ),
                    w = j[0],
                    C = j[1],
                    T = s ? (0, ve.Z)(s) : "",
                    P = je(m("Output will be sent to %recipient%", { recipient: T }).split(T), 2),
                    A = P[0],
                    S = P[1];
                return (0, t.jsxs)(Z.Tz, {
                    gap: "md",
                    children: [
                        (0, t.jsxs)(I.m0, {
                            align: "flex-end",
                            children: [
                                (0, t.jsxs)(I.DA, {
                                    gap: "0px",
                                    children: [
                                        (0, t.jsx)(be.Xw, { currency: i.inputAmount.currency, size: "24px", style: { marginRight: "12px" } }),
                                        (0, t.jsx)(se, { fontSize: "24px", color: d && i.tradeType === a.TradeType.EXACT_OUTPUT ? "primary" : "text", children: i.inputAmount.toSignificant(6) }),
                                    ],
                                }),
                                (0, t.jsx)(I.DA, { gap: "0px", children: (0, t.jsx)(c.Z, { fontSize: "24px", ml: "10px", children: i.inputAmount.currency.symbol }) }),
                            ],
                        }),
                        (0, t.jsx)(I.DA, { children: (0, t.jsx)(u.Z, { width: "16px", ml: "4px" }) }),
                        (0, t.jsxs)(I.m0, {
                            align: "flex-end",
                            children: [
                                (0, t.jsxs)(I.DA, {
                                    gap: "0px",
                                    children: [
                                        (0, t.jsx)(be.Xw, { currency: i.outputAmount.currency, size: "24px", style: { marginRight: "12px" } }),
                                        (0, t.jsx)(se, { fontSize: "24px", color: g > 2 ? "failure" : d && i.tradeType === a.TradeType.EXACT_INPUT ? "primary" : "text", children: i.outputAmount.toSignificant(6) }),
                                    ],
                                }),
                                (0, t.jsx)(I.DA, { gap: "0px", children: (0, t.jsx)(c.Z, { fontSize: "24px", ml: "10px", children: i.outputAmount.currency.symbol }) }),
                            ],
                        }),
                        d
                            ? (0, t.jsx)(pe, {
                                  justify: "flex-start",
                                  gap: "0px",
                                  children: (0, t.jsxs)(I.m0, {
                                      children: [
                                          (0, t.jsxs)(I.DA, { children: [(0, t.jsx)(V.Z, { mr: "8px" }), (0, t.jsxs)(c.Z, { bold: !0, children: [" ", m("Price Updated")] })] }),
                                          (0, t.jsx)(f.Z, { onClick: p, children: m("Accept") }),
                                      ],
                                  }),
                              })
                            : null,
                        (0, t.jsx)(Z.Tz, {
                            justify: "flex-start",
                            gap: "sm",
                            style: { padding: "24px 0 0 0px" },
                            children: (0, t.jsxs)(c.Z, { small: !0, color: "textSubtle", textAlign: "left", style: { width: "100%" }, children: [w, (0, t.jsxs)("b", { children: [v, " ", y] }), C] }),
                        }),
                        null !== s
                            ? (0, t.jsx)(Z.Tz, { justify: "flex-start", gap: "sm", style: { padding: "12px 0 0 0px" }, children: (0, t.jsxs)(c.Z, { color: "textSubtle", children: [A, (0, t.jsx)("b", { title: s, children: T }), S] }) })
                            : null,
                    ],
                });
            }
            var Ce = function (e) {
                    var n,
                        r,
                        i,
                        c,
                        l,
                        s,
                        u,
                        d,
                        f,
                        p,
                        m = e.trade,
                        h = e.originalTrade,
                        x = e.onAcceptChanges,
                        g = e.allowedSlippage,
                        v = e.onConfirm,
                        y = e.onDismiss,
                        j = e.customOnDismiss,
                        w = e.recipient,
                        C = e.swapErrorMessage,
                        T = e.attemptingTxn,
                        P = e.txHash,
                        A = (0, o.useMemo)(
                            function () {
                                return Boolean(
                                    m &&
                                        h &&
                                        ((n = h),
                                        (e = m).tradeType !== n.tradeType ||
                                            !(0, a.currencyEquals)(e.inputAmount.currency, n.inputAmount.currency) ||
                                            !e.inputAmount.equalTo(n.inputAmount) ||
                                            !(0, a.currencyEquals)(e.outputAmount.currency, n.outputAmount.currency) ||
                                            !e.outputAmount.equalTo(n.outputAmount))
                                );
                                var e, n;
                            },
                            [h, m]
                        ),
                        Z = (0, b.$G)().t,
                        I = (0, o.useCallback)(
                            function () {
                                return m ? (0, t.jsx)(we, { trade: m, allowedSlippage: g, recipient: w, showAcceptChanges: A, onAcceptChanges: x }) : null;
                            },
                            [g, x, w, A, m]
                        ),
                        S = (0, o.useCallback)(
                            function () {
                                return m ? (0, t.jsx)(ge, { onConfirm: v, trade: m, disabledConfirm: A, swapErrorMessage: C, allowedSlippage: g }) : null;
                            },
                            [g, v, A, C, m]
                        ),
                        k = Z("Swapping %amountA% %symbolA% for %amountB% %symbolB%", {
                            amountA: null !== (u = null === m || void 0 === m || null === (n = m.inputAmount) || void 0 === n ? void 0 : n.toSignificant(6)) && void 0 !== u ? u : "",
                            symbolA: null !== (d = null === m || void 0 === m || null === (r = m.inputAmount) || void 0 === r || null === (i = r.currency) || void 0 === i ? void 0 : i.symbol) && void 0 !== d ? d : "",
                            amountB: null !== (f = null === m || void 0 === m || null === (c = m.outputAmount) || void 0 === c ? void 0 : c.toSignificant(6)) && void 0 !== f ? f : "",
                            symbolB: null !== (p = null === m || void 0 === m || null === (l = m.outputAmount) || void 0 === l || null === (s = l.currency) || void 0 === s ? void 0 : s.symbol) && void 0 !== p ? p : "",
                        }),
                        O = (0, o.useCallback)(
                            function () {
                                return C ? (0, t.jsx)(F.ht, { onDismiss: y, message: C }) : (0, t.jsx)(F.pM, { topContent: I, bottomContent: S });
                            },
                            [y, S, I, C]
                        );
                    return (0, t.jsx)(F.ZP, {
                        title: Z("Confirm Swap"),
                        onDismiss: y,
                        customOnDismiss: j,
                        attemptingTxn: T,
                        hash: P,
                        content: O,
                        pendingText: k,
                        currencyToAdd: null === m || void 0 === m ? void 0 : m.outputAmount.currency,
                    });
                },
                Te = r(12436);
            function Pe(e) {
                return null !== e && void 0 !== e;
            }
            var Ae = function (e) {
                    return (function (e, n) {
                        var r = (0, o.useState)(n && n(e) ? e : void 0),
                            t = r[0],
                            i = r[1];
                        return (
                            (0, o.useEffect)(
                                function () {
                                    i(function (r) {
                                        return !n || n(e) ? e : r;
                                    });
                                },
                                [n, e]
                            ),
                            t
                        );
                    })(e, Pe);
                },
                Ze = r(59808),
                Ie = r(25836),
                Se = r(54543),
                ke = (0, o.memo)(function (e) {
                    var n = e.trade;
                    return (0, t.jsx)(X.Z, {
                        flexWrap: "wrap",
                        width: "100%",
                        justifyContent: "flex-end",
                        alignItems: "center",
                        children: n.route.path.map(function (e, n, r) {
                            var i = n === r.length - 1,
                                a = (0, Se.Bv)(e);
                            return (0,
                            t.jsxs)(o.Fragment, { children: [(0, t.jsx)(X.Z, { alignItems: "end", children: (0, t.jsx)(c.Z, { fontSize: "14px", ml: "0.125rem", mr: "0.125rem", children: a.symbol }) }), !i && (0, t.jsx)(Ie.Z, { width: "12px" })] }, n);
                        }),
                    });
                });
            function Oe(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t;
            }
            function Ne(e, n) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, n) {
                        var r = null == e ? null : ("undefined" !== typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                        if (null != r) {
                            var t,
                                o,
                                i = [],
                                a = !0,
                                c = !1;
                            try {
                                for (r = r.call(e); !(a = (t = r.next()).done) && (i.push(t.value), !n || i.length !== n); a = !0);
                            } catch (l) {
                                (c = !0), (o = l);
                            } finally {
                                try {
                                    a || null == r.return || r.return();
                                } finally {
                                    if (c) throw o;
                                }
                            }
                            return i;
                        }
                    })(e, n) ||
                    (function (e, n) {
                        if (!e) return;
                        if ("string" === typeof e) return Oe(e, n);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === r && e.constructor && (r = e.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(r);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return Oe(e, n);
                    })(e, n) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function Ue(e) {
                var n,
                    r,
                    o,
                    i,
                    l = e.trade,
                    s = e.allowedSlippage,
                    u = (0, b.$G)().t,
                    d = (0, W.U7)(l),
                    f = d.priceImpactWithoutFee,
                    p = d.realizedLPFee,
                    m = l.tradeType === a.TradeType.EXACT_INPUT,
                    h = (0, W.b5)(l, s);
                return (0, t.jsxs)(Z.Tz, {
                    style: { padding: "0 16px" },
                    children: [
                        (0, t.jsxs)(I.m0, {
                            children: [
                                (0, t.jsxs)(I.DA, {
                                    children: [
                                        (0, t.jsx)(c.Z, { fontSize: "14px", color: "textSubtle", children: u(m ? "Minimum received" : "Maximum sold") }),
                                        (0, t.jsx)($.Z, { text: u("Your transaction will revert if there is a large, unfavorable price movement before it is confirmed."), ml: "4px", placement: "top-start" }),
                                    ],
                                }),
                                (0, t.jsx)(I.DA, {
                                    children: (0, t.jsx)(c.Z, {
                                        fontSize: "14px",
                                        children: m
                                            ? null !== (o = "".concat(null === (n = h[G.gN.OUTPUT]) || void 0 === n ? void 0 : n.toSignificant(4), " ").concat(l.outputAmount.currency.symbol)) && void 0 !== o
                                                ? o
                                                : "-"
                                            : null !== (i = "".concat(null === (r = h[G.gN.INPUT]) || void 0 === r ? void 0 : r.toSignificant(4), " ").concat(l.inputAmount.currency.symbol)) && void 0 !== i
                                            ? i
                                            : "-",
                                    }),
                                }),
                            ],
                        }),
                        (0, t.jsxs)(I.m0, {
                            children: [
                                (0, t.jsxs)(I.DA, {
                                    children: [
                                        (0, t.jsx)(c.Z, { fontSize: "14px", color: "textSubtle", children: u("Price Impact") }),
                                        (0, t.jsx)($.Z, { text: u("The difference between the market price and estimated price due to trade size."), ml: "4px", placement: "top-start" }),
                                    ],
                                }),
                                (0, t.jsx)(me, { priceImpact: f }),
                            ],
                        }),
                        (0, t.jsxs)(I.m0, {
                            children: [
                                (0, t.jsxs)(I.DA, {
                                    children: [
                                        (0, t.jsx)(c.Z, { fontSize: "14px", color: "textSubtle", children: u("Liquidity Provider Fee") }),
                                        (0, t.jsx)($.Z, {
                                            text: (0, t.jsxs)(t.Fragment, {
                                                children: [
                                                    (0, t.jsx)(c.Z, { mb: "12px", children: u("For each trade a %amount% fee is paid", { amount: "0.25%" }) }),
                                                    (0, t.jsxs)(c.Z, { children: ["- ", u("%amount% to LP token holders", { amount: "0.17%" })] }),
                                                    (0, t.jsxs)(c.Z, { children: ["- ", u("%amount% to the Treasury", { amount: "0.08%" })] }),
                                                ],
                                            }),
                                            ml: "4px",
                                            placement: "top-start",
                                        }),
                                    ],
                                }),
                                (0, t.jsx)(c.Z, { fontSize: "14px", children: p ? "".concat(p.toSignificant(4), " ").concat(l.inputAmount.currency.symbol) : "-" }),
                            ],
                        }),
                    ],
                });
            }
            function Ee(e) {
                var n = e.trade,
                    r = (0, b.$G)().t,
                    o = Ne((0, Ze.$2)(), 1)[0],
                    i = Boolean(n && n.route.path.length > 2);
                return (0, t.jsx)(Z.Tz, {
                    gap: "0px",
                    children:
                        n &&
                        (0, t.jsxs)(t.Fragment, {
                            children: [
                                (0, t.jsx)(Ue, { trade: n, allowedSlippage: o }),
                                i &&
                                    (0, t.jsx)(t.Fragment, {
                                        children: (0, t.jsxs)(I.m0, {
                                            style: { padding: "0 16px" },
                                            children: [
                                                (0, t.jsxs)("span", {
                                                    style: { display: "flex", alignItems: "center" },
                                                    children: [
                                                        (0, t.jsx)(c.Z, { fontSize: "14px", color: "textSubtle", children: r("Route") }),
                                                        (0, t.jsx)($.Z, { text: r("Routing through these tokens resulted in the best price for your trade."), ml: "4px", placement: "top-start" }),
                                                    ],
                                                }),
                                                (0, t.jsx)(ke, { trade: n }),
                                            ],
                                        }),
                                    }),
                            ],
                        }),
                });
            }
            function Le(e, n, r) {
                return n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = r), e;
            }
            function De(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {},
                        t = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols &&
                        (t = t.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            })
                        )),
                        t.forEach(function (n) {
                            Le(e, n, r[n]);
                        });
                }
                return e;
            }
            function ze(e, n) {
                if (null == e) return {};
                var r,
                    t,
                    o = (function (e, n) {
                        if (null == e) return {};
                        var r,
                            t,
                            o = {},
                            i = Object.keys(e);
                        for (t = 0; t < i.length; t++) (r = i[t]), n.indexOf(r) >= 0 || (o[r] = e[r]);
                        return o;
                    })(e, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (t = 0; t < i.length; t++) (r = i[t]), n.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
                }
                return o;
            }
            function Be() {
                var e,
                    n,
                    r =
                        ((e = [
                            "\n  margin-top: ",
                            ";\n  padding-top: 16px;\n  padding-bottom: 16px;\n  width: 100%;\n  // max-width: 400px;\n  border-radius: 20px;\n  // background-color: ",
                            ";\n  background: linear-gradient(95.13deg, rgba(22, 24, 48, 0.25) 0%, rgba(46, 51, 92, 0.25) 100%);\n  backdrop-filter: blur(5px);\n\n  transform: ",
                            ";\n  transition: transform 300ms ease-in-out;\n",
                        ]),
                        n || (n = e.slice(0)),
                        Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(n) } })));
                return (
                    (Be = function () {
                        return r;
                    }),
                    r
                );
            }
            var Me = i.ZP.div.withConfig({ componentId: "sc-7cebe3bf-0" })(
                Be(),
                function (e) {
                    return e.show ? "16px" : 0;
                },
                function (e) {
                    return e.theme.colors.invertedContrast;
                },
                function (e) {
                    return e.show ? "translateY(0%)" : "translateY(-100%)";
                }
            );
            function _e(e) {
                var n,
                    r = e.trade,
                    o = ze(e, ["trade"]),
                    i = Ae(r);
                return (0, t.jsx)(Me, { show: Boolean(r), children: (0, t.jsx)(Ee, De({}, o, { trade: null !== (n = null !== r && void 0 !== r ? r : i) && void 0 !== n ? n : void 0 })) });
            }
            function Fe(e) {
                var n,
                    r,
                    o,
                    i,
                    a,
                    l = e.price,
                    s = e.showInverted,
                    u = e.setShowInverted,
                    d = s ? (null === l || void 0 === l ? void 0 : l.toSignificant(6)) : null === (n = null === l || void 0 === l ? void 0 : l.invert()) || void 0 === n ? void 0 : n.toSignificant(6),
                    f = Boolean((null === l || void 0 === l ? void 0 : l.baseCurrency) && (null === l || void 0 === l ? void 0 : l.quoteCurrency)),
                    p = s
                        ? ""
                              .concat(null === l || void 0 === l || null === (r = l.quoteCurrency) || void 0 === r ? void 0 : r.symbol, " per ")
                              .concat(null === l || void 0 === l || null === (o = l.baseCurrency) || void 0 === o ? void 0 : o.symbol)
                        : ""
                              .concat(null === l || void 0 === l || null === (i = l.baseCurrency) || void 0 === i ? void 0 : i.symbol, " per ")
                              .concat(null === l || void 0 === l || null === (a = l.quoteCurrency) || void 0 === a ? void 0 : a.symbol);
                return (0, t.jsx)(c.Z, {
                    style: { justifyContent: "center", alignItems: "center", display: "flex" },
                    children: f
                        ? (0, t.jsxs)(t.Fragment, {
                              children: [
                                  null !== d && void 0 !== d ? d : "-",
                                  " ",
                                  p,
                                  (0, t.jsx)(le, {
                                      onClick: function () {
                                          return u(!s);
                                      },
                                      children: (0, t.jsx)(R.Z, { width: "14px" }),
                                  }),
                              ],
                          })
                        : "-",
                });
            }
            var Re = r(17796),
                Ge = r(20388),
                We = function (e) {
                    var n = e.tokens,
                        r = e.onDismiss,
                        o = e.onCancel,
                        i = (0, b.$G)().t;
                    return (0, t.jsx)(Re.Z, {
                        title: i("Import Token"),
                        onDismiss: function () {
                            null === r || void 0 === r || r(), o();
                        },
                        style: { maxWidth: "420px" },
                        children: (0, t.jsx)(Ge.Z, { tokens: n, handleCurrencySelect: r }),
                    });
                };
            function $e(e, n, r) {
                return n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = r), e;
            }
            function He(e, n) {
                if (null == e) return {};
                var r,
                    t,
                    o = (function (e, n) {
                        if (null == e) return {};
                        var r,
                            t,
                            o = {},
                            i = Object.keys(e);
                        for (t = 0; t < i.length; t++) (r = i[t]), n.indexOf(r) >= 0 || (o[r] = e[r]);
                        return o;
                    })(e, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (t = 0; t < i.length; t++) (r = i[t]), n.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
                }
                return o;
            }
            function Xe(e, n) {
                return n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(n) } }));
            }
            function Ve() {
                var e = Xe(["\n  width: 50%;\n"]);
                return (
                    (Ve = function () {
                        return e;
                    }),
                    e
                );
            }
            function qe() {
                var e = Xe([
                    "\n  min-width: 20px;\n  min-height: 20px;\n  background-color: ",
                    ";\n  border-radius: 50%;\n  color: #ffffff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  line-height: 8px;\n  font-size: 12px;\n",
                ]);
                return (
                    (qe = function () {
                        return e;
                    }),
                    e
                );
            }
            function Ke() {
                var e = Xe(["\n  width: calc(100% - 20px);\n  display: flex;\n  align-items: center;\n"]);
                return (
                    (Ke = function () {
                        return e;
                    }),
                    e
                );
            }
            function Ye() {
                var e = Xe(["\n  width: 100%;\n  height: 2px;\n  background: linear-gradient(\n    90deg,\n    ", "\n      0%,\n    ", "\n      80%\n  );\n  opacity: 0.6;\n"]);
                return (
                    (Ye = function () {
                        return e;
                    }),
                    e
                );
            }
            var Je = (0, i.ZP)(I.m0).withConfig({ componentId: "sc-b6a41b3e-0" })(Ve()),
                Qe = i.ZP.div.withConfig({ componentId: "sc-b6a41b3e-1" })(qe(), function (e) {
                    var n = e.theme,
                        r = e.confirmed;
                    return e.disabled ? n.colors.backgroundDisabled : r ? n.colors.success : n.colors.primary;
                }),
                en = i.ZP.div.withConfig({ componentId: "sc-b6a41b3e-2" })(Ke()),
                nn = i.ZP.div.withConfig({ componentId: "sc-b6a41b3e-3" })(
                    Ye(),
                    function (e) {
                        var n = e.theme,
                            r = e.prevConfirmed;
                        return e.disabled ? n.colors.backgroundDisabled : r ? n.colors.success : n.colors.primary;
                    },
                    function (e) {
                        var n = e.theme,
                            r = e.prevConfirmed;
                        return e.disabled ? n.colors.backgroundDisabled : r ? n.colors.primary : n.colors.backgroundDisabled;
                    }
                );
            function rn(e) {
                var n = e.steps,
                    r = e.disabled,
                    o = void 0 !== r && r,
                    i = He(e, ["steps", "disabled"]);
                return (0, t.jsx)(
                    Z.Tz,
                    (function (e) {
                        for (var n = 1; n < arguments.length; n++) {
                            var r = null != arguments[n] ? arguments[n] : {},
                                t = Object.keys(r);
                            "function" === typeof Object.getOwnPropertySymbols &&
                                (t = t.concat(
                                    Object.getOwnPropertySymbols(r).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                                    })
                                )),
                                t.forEach(function (n) {
                                    $e(e, n, r[n]);
                                });
                        }
                        return e;
                    })({ justify: "center" }, i, {
                        children: (0, t.jsxs)(Je, {
                            children: [
                                n.map(function (e, r) {
                                    return (0, t.jsxs)(en, { children: [(0, t.jsx)(Qe, { confirmed: e, disabled: o || (!n[r - 1] && 0 !== r), children: e ? "\u2713" : r + 1 }), (0, t.jsx)(nn, { prevConfirmed: e, disabled: o })] }, r);
                                }),
                                (0, t.jsx)(Qe, { disabled: o || !n[n.length - 1], children: n.length + 1 }),
                            ],
                        }),
                    })
                );
            }
            var tn,
                on = r(84866),
                an = r(87750),
                cn = r(94133),
                ln = r(2934),
                sn = r(34051),
                un = r.n(sn),
                dn = r(17059),
                fn = r(89147),
                pn = r(17849);
            function mn(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : H.gv,
                    r = arguments.length > 2 ? arguments[2] : void 0,
                    t = (0, A.Z)(),
                    i = t.account,
                    c = t.chainId,
                    l = t.library,
                    s = (0, P.Z)(r),
                    u = s.address,
                    d = null === r ? i : u,
                    f = (0, pn.Z)();
                return (0, o.useMemo)(
                    function () {
                        if (!e || !d || !l || !i || !c || !f) return [];
                        var r = (0, S.iY)(c, l, i);
                        if (!r) return [];
                        var t = [];
                        return (
                            t.push(a.Router.swapCallParameters(e, { feeOnTransfer: !1, allowedSlippage: new a.Percent(a.JSBI.BigInt(n), H.PM), recipient: d, deadline: f.toNumber() })),
                            e.tradeType === a.TradeType.EXACT_INPUT && t.push(a.Router.swapCallParameters(e, { feeOnTransfer: !0, allowedSlippage: new a.Percent(a.JSBI.BigInt(n), H.PM), recipient: d, deadline: f.toNumber() })),
                            t.map(function (e) {
                                return { parameters: e, contract: r };
                            })
                        );
                    },
                    [i, n, c, f, l, d, e]
                );
            }
            function hn(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t;
            }
            function xn(e, n, r, t, o, i, a) {
                try {
                    var c = e[i](a),
                        l = c.value;
                } catch (s) {
                    return void r(s);
                }
                c.done ? n(l) : Promise.resolve(l).then(t, o);
            }
            function gn(e) {
                return function () {
                    var n = this,
                        r = arguments;
                    return new Promise(function (t, o) {
                        var i = e.apply(n, r);
                        function a(e) {
                            xn(i, t, o, a, c, "next", e);
                        }
                        function c(e) {
                            xn(i, t, o, a, c, "throw", e);
                        }
                        a(void 0);
                    });
                };
            }
            function bn(e, n, r) {
                return n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = r), e;
            }
            function vn(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {},
                        t = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols &&
                        (t = t.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            })
                        )),
                        t.forEach(function (n) {
                            bn(e, n, r[n]);
                        });
                }
                return e;
            }
            function yn(e) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return hn(e);
                    })(e) ||
                    (function (e) {
                        if (("undefined" !== typeof Symbol && null != e[Symbol.iterator]) || null != e["@@iterator"]) return Array.from(e);
                    })(e) ||
                    (function (e, n) {
                        if (!e) return;
                        if ("string" === typeof e) return hn(e, n);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === r && e.constructor && (r = e.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(r);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return hn(e, n);
                    })(e) ||
                    (function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function jn(e, n) {
                for (var r; e; ) {
                    var t, o, i, a;
                    (r = null !== (i = null !== (o = e.reason) && void 0 !== o ? o : e.message) && void 0 !== i ? i : r), (e = null !== (a = e.error) && void 0 !== a ? a : null === (t = e.data) || void 0 === t ? void 0 : t.originalError);
                }
                switch ((0 === (null === r || void 0 === r ? void 0 : r.indexOf("execution reverted: ")) && (r = r.substring("execution reverted: ".length)), r)) {
                    case "PancakeRouter: EXPIRED":
                        return n("The transaction could not be sent because the deadline has passed. Please check that your transaction deadline is not too low.");
                    case "PancakeRouter: INSUFFICIENT_OUTPUT_AMOUNT":
                    case "PancakeRouter: EXCESSIVE_INPUT_AMOUNT":
                        return n("This transaction will not succeed either due to price movement or fee on transfer. Try increasing your slippage tolerance.");
                    case "TransferHelper: TRANSFER_FROM_FAILED":
                        return n("The input token cannot be transferred. There may be an issue with the input token.");
                    case "Pancake: TRANSFER_FAILED":
                        return n("The output token cannot be transferred. There may be an issue with the output token.");
                    default:
                        return -1 !== (null === r || void 0 === r ? void 0 : r.indexOf("undefined is not an object"))
                            ? (console.error(e, r),
                              n("An error occurred when trying to execute this swap. You may need to increase your slippage tolerance. If that does not work, there may be an incompatibility with the token you are trading."))
                            : n("Unknown error%reason%. Try increasing your slippage tolerance.", { reason: r ? ': "'.concat(r, '"') : "" });
                }
            }
            !(function (e) {
                (e[(e.INVALID = 0)] = "INVALID"), (e[(e.LOADING = 1)] = "LOADING"), (e[(e.VALID = 2)] = "VALID");
            })(tn || (tn = {}));
            var wn,
                Cn = r(46151),
                Tn = r(29121),
                Pn = r(38373),
                An = r(20973);
            function Zn(e, n, r, t, o, i, a) {
                try {
                    var c = e[i](a),
                        l = c.value;
                } catch (s) {
                    return void r(s);
                }
                c.done ? n(l) : Promise.resolve(l).then(t, o);
            }
            function In(e) {
                return function () {
                    var n = this,
                        r = arguments;
                    return new Promise(function (t, o) {
                        var i = e.apply(n, r);
                        function a(e) {
                            Zn(i, t, o, a, c, "next", e);
                        }
                        function c(e) {
                            Zn(i, t, o, a, c, "throw", e);
                        }
                        a(void 0);
                    });
                };
            }
            !(function (e) {
                (e[(e.NOT_APPLICABLE = 0)] = "NOT_APPLICABLE"), (e[(e.WRAP = 1)] = "WRAP"), (e[(e.UNWRAP = 2)] = "UNWRAP");
            })(wn || (wn = {}));
            var Sn = { wrapType: wn.NOT_APPLICABLE };
            var kn = r(78098),
                On = r(62302),
                Nn = r(76396),
                Un = r(13766),
                En = r(39985),
                Ln = r(76137),
                Dn = r(42755),
                zn = r(31254),
                Bn = function () {
                    var e = (0, b.$G)().t;
                    return (0, t.jsx)(t.Fragment, {
                        children: (0, t.jsxs)(c.Z, {
                            children: [
                                e("SAFEMOON has been migrated to"),
                                " ",
                                (0, t.jsx)(T.Z, { style: { display: "inline" }, external: !0, href: "https://bscscan.com/address/0x42981d0bfbAf196529376EE702F2a9Eb9092fcB5", children: e("a new contract address.") }),
                                " ",
                                e("Trading on the old address may result in the complete loss of your assets. For more information please refer to"),
                                " ",
                                (0, t.jsxs)(T.Z, { style: { display: "inline" }, external: !0, href: "https://twitter.com/safemoon/status/1477770592031887360", children: [e("Safemoon's announcement"), "."] }),
                            ],
                        }),
                    });
                },
                Mn = function () {
                    var e = (0, b.$G)().t;
                    return (0, t.jsx)(t.Fragment, {
                        children: (0, t.jsxs)(c.Z, {
                            children: [
                                e("ITAM has been rebranded as ITAM CUBE."),
                                " ",
                                (0, t.jsx)(T.Z, { style: { display: "inline" }, external: !0, href: "https://itam.network/swap", children: e("Please proceed to ITAM bridge to conduct a one-way swap of your ITAM tokens.") }),
                                " ",
                                e("All transfers of the old ITAM token will be disabled after the swap."),
                            ],
                        }),
                    });
                },
                _n = function () {
                    var e = (0, b.$G)().t;
                    return (0, t.jsx)(c.Z, { children: e("Warning: BONDLY has been compromised. Please remove liquidity until further notice.") });
                },
                Fn = r(20506),
                Rn = function (e) {
                    var n = e.handleContinueClick,
                        r = (0, b.$G)().t,
                        i = (0, o.useState)(!1),
                        a = i[0],
                        l = i[1];
                    return (0, t.jsx)(t.Fragment, {
                        children: (0, t.jsxs)(X.Z, {
                            justifyContent: "space-between",
                            children: [
                                (0, t.jsxs)(X.Z, {
                                    alignItems: "center",
                                    children: [
                                        (0, t.jsx)(Fn.Z, {
                                            name: "confirmed",
                                            type: "checkbox",
                                            checked: a,
                                            onChange: function () {
                                                return l(!a);
                                            },
                                            scale: "sm",
                                        }),
                                        (0, t.jsx)(c.Z, { ml: "10px", style: { userSelect: "none" }, children: r("I understand") }),
                                    ],
                                }),
                                (0, t.jsx)(f.Z, { disabled: !a, onClick: n, children: r("Continue") }),
                            ],
                        }),
                    });
                },
                Gn = function () {
                    var e = (0, b.$G)().t;
                    return (0, t.jsx)(t.Fragment, {
                        children: (0, t.jsxs)(c.Z, {
                            children: [
                                e("Crypto Cars (CCAR) has been migrated to"),
                                " ",
                                (0, t.jsx)(T.Z, { style: { display: "inline" }, external: !0, href: "https://bscscan.com/token/0x322e5015Cc464Ada7f99dE7131CE494dE1834396", children: e("a new contract address.") }),
                                " ",
                                e("Trading on the old address may result in the complete loss of your assets. For more information please refer to"),
                                " ",
                                (0, t.jsx)(T.Z, { style: { display: "inline" }, external: !0, href: "https://t.me/Crypto_Cars_Official/465037", children: e("the announcement.") }),
                            ],
                        }),
                    });
                },
                Wn = r(88788),
                $n = function () {
                    var e = (0, b.$G)().t;
                    return (0, t.jsxs)(t.Fragment, {
                        children: [
                            (0, t.jsx)(c.Z, { children: e("Please note that this is the old BTT token, which has been swapped to the new BTT tokens in the following ratio:") }),
                            (0, t.jsx)(c.Z, { children: "1 BTT (OLD) = 1,000 BTT (NEW)" }),
                            (0, t.jsxs)(c.Z, {
                                mb: "8px",
                                children: [
                                    e("Trade the new BTT token"),
                                    " ",
                                    (0, t.jsx)(T.Z, { style: { display: "inline" }, href: "https://pancakeswap.finance/swap?outputCurrency=0x352Cb5E19b12FC216548a2677bD0fce83BaE434B", children: e("here") }),
                                ],
                            }),
                            (0, t.jsx)(Wn.Z, { href: "https://medium.com/@BitTorrent/tutorial-how-to-swap-bttold-to-btt-453264d7142", children: e("For more details on the swap, please refer here.") }),
                        ],
                    });
                };
            function Hn(e, n, r) {
                return n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = r), e;
            }
            function Xn(e, n) {
                return n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(n) } }));
            }
            function Vn() {
                var e = Xn(["\n  max-width: 440px;\n"]);
                return (
                    (Vn = function () {
                        return e;
                    }),
                    e
                );
            }
            function qn() {
                var e = Xn(["\n  align-items: flex-start;\n  justify-content: flex-start;\n"]);
                return (
                    (qn = function () {
                        return e;
                    }),
                    e
                );
            }
            var Kn = (0, i.ZP)(En.F0).withConfig({ componentId: "sc-75b9e575-0" })(Vn()),
                Yn = (0, i.ZP)(Ln.Z).withConfig({ componentId: "sc-75b9e575-1" })(qn()),
                Jn = function (e) {
                    var n,
                        r = e.swapCurrency,
                        i = e.onDismiss,
                        a = (0, b.$G)().t,
                        c = (0, zn.Z)().theme;
                    (0, o.useEffect)(function () {
                        var e = function (e) {
                            return e.stopPropagation(), e.preventDefault(), !1;
                        };
                        return (
                            document.querySelectorAll('[role="presentation"]').forEach(function (n) {
                                n.addEventListener("click", e, !0);
                            }),
                            function () {
                                document.querySelectorAll('[role="presentation"]').forEach(function (n) {
                                    n.removeEventListener("click", e, !0);
                                });
                            }
                        );
                    }, []);
                    var l = (Hn((n = {}), j.safemoon.address, { symbol: j.safemoon.symbol, component: (0, t.jsx)(Bn, {}) }),
                    Hn(n, j.bondly.address, { symbol: j.bondly.symbol, component: (0, t.jsx)(_n, {}) }),
                    Hn(n, j.itam.address, { symbol: j.itam.symbol, component: (0, t.jsx)(Mn, {}) }),
                    Hn(n, j.ccar.address, { symbol: j.ccar.symbol, component: (0, t.jsx)(Gn, {}) }),
                    Hn(n, j.bttold.address, { symbol: j.bttold.symbol, component: (0, t.jsx)($n, {}) }),
                    n)[r.address];
                    return (0, t.jsxs)(Kn, {
                        minWidth: "280px",
                        children: [
                            (0, t.jsx)(En.xB, { background: c.colors.gradients.cardHeader, children: (0, t.jsx)(Dn.Z, { p: "12px 24px", children: a("Notice for trading %symbol%", { symbol: l.symbol }) }) }),
                            (0, t.jsxs)(En.fe, { p: "24px", children: [(0, t.jsx)(Yn, { variant: "warning", mb: "24px", children: (0, t.jsx)(m.Z, { children: l.component }) }), (0, t.jsx)(Rn, { handleContinueClick: i })] }),
                        ],
                    });
                },
                Qn = r(38143),
                er = r(41168),
                nr = r(78491);
            function rr(e, n, r) {
                return n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = r), e;
            }
            function tr(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var r = null != arguments[n] ? arguments[n] : {},
                        t = Object.keys(r);
                    "function" === typeof Object.getOwnPropertySymbols &&
                        (t = t.concat(
                            Object.getOwnPropertySymbols(r).filter(function (e) {
                                return Object.getOwnPropertyDescriptor(r, e).enumerable;
                            })
                        )),
                        t.forEach(function (n) {
                            rr(e, n, r[n]);
                        });
                }
                return e;
            }
            function or(e, n) {
                if (null == e) return {};
                var r,
                    t,
                    o = (function (e, n) {
                        if (null == e) return {};
                        var r,
                            t,
                            o = {},
                            i = Object.keys(e);
                        for (t = 0; t < i.length; t++) (r = i[t]), n.indexOf(r) >= 0 || (o[r] = e[r]);
                        return o;
                    })(e, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (t = 0; t < i.length; t++) (r = i[t]), n.indexOf(r) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, r) && (o[r] = e[r]));
                }
                return o;
            }
            var ir = function (e) {
                    return (0, t.jsxs)(
                        nr.Z,
                        tr({ id: "arrow_loading", viewBox: "0 0 24 24" }, e, {
                            children: [
                                (0, t.jsx)("path", {
                                    stroke: "none",
                                    fill: "#D7CAEC",
                                    d:
                                        "M16.2751 7.78995C13.932 5.44681 10.133 5.44681 7.78986 7.78995C7.02853 8.55128 6.51457 9.4663 6.24798 10.4351C6.24473 10.4499 6.24114 10.4646 6.23719 10.4793C6.17635 10.7064 6.12938 10.9339 6.09577 11.161C5.83159 12.9457 6.39255 14.7026 7.52624 15.9944C7.61054 16.0901 7.69842 16.1838 7.78986 16.2752C8.08307 16.5685 8.39909 16.825 8.7322 17.0448C9.25533 17.3892 9.84172 17.6568 10.4798 17.8278C10.7386 17.8971 10.9979 17.9484 11.2565 17.9825C12.9537 18.2061 14.6187 17.6866 15.8747 16.6415C16.0123 16.5265 16.1459 16.4044 16.2751 16.2752C16.2848 16.2655 16.2947 16.2561 16.3047 16.2469C17.0123 15.531 17.5491 14.627 17.8283 13.5851C17.9712 13.0517 18.5196 12.7351 19.053 12.878C19.5865 13.021 19.9031 13.5693 19.7602 14.1028C19.3141 15.7676 18.3745 17.1684 17.1409 18.1899C16.1883 18.9822 15.0949 19.5189 13.9515 19.8002C11.8607 20.3147 9.6028 19.9749 7.7328 18.7809C7.06855 18.3579 6.47841 17.8432 5.97519 17.2589C5.12341 16.2738 4.55173 15.1302 4.26015 13.9324C4.01698 12.9416 3.96104 11.8931 4.12168 10.8379C4.36697 9.20484 5.1183 7.63309 6.37564 6.37574C9.49984 3.25154 14.5652 3.25154 17.6894 6.37574L18.2332 6.91959L18.2337 5.49951C18.2338 5.05769 18.5921 4.69964 19.034 4.69979C19.4758 4.69995 19.8338 5.05825 19.8337 5.50007L19.8325 9.03277L19.8322 9.8325L19.0325 9.83249L18.9401 9.83249C18.8146 9.85665 18.6854 9.85665 18.5599 9.83248L15.5005 9.83245C15.0587 9.83245 14.7005 9.47427 14.7005 9.03244C14.7005 8.59062 15.0587 8.23245 15.5005 8.23245L16.7176 8.23246L16.2751 7.78995Z",
                                }),
                                (0, t.jsxs)("defs", {
                                    children: [
                                        (0, t.jsx)("path", {
                                            id: "arrow",
                                            stroke: "none",
                                            fill: "none",
                                            d:
                                                "M16.2751 7.78995C13.932 5.44681 10.133 5.44681 7.78986 7.78995C7.02853 8.55128 6.51457 9.4663 6.24798 10.4351C6.24473 10.4499 6.24114 10.4646 6.23719 10.4793C6.17635 10.7064 6.12938 10.9339 6.09577 11.161C5.83159 12.9457 6.39255 14.7026 7.52624 15.9944C7.61054 16.0901 7.69842 16.1838 7.78986 16.2752C8.08307 16.5685 8.39909 16.825 8.7322 17.0448C9.25533 17.3892 9.84172 17.6568 10.4798 17.8278C10.7386 17.8971 10.9979 17.9484 11.2565 17.9825C12.9537 18.2061 14.6187 17.6866 15.8747 16.6415C16.0123 16.5265 16.1459 16.4044 16.2751 16.2752C16.2848 16.2655 16.2947 16.2561 16.3047 16.2469C17.0123 15.531 17.5491 14.627 17.8283 13.5851C17.9712 13.0517 18.5196 12.7351 19.053 12.878C19.5865 13.021 19.9031 13.5693 19.7602 14.1028C19.3141 15.7676 18.3745 17.1684 17.1409 18.1899C16.1883 18.9822 15.0949 19.5189 13.9515 19.8002C11.8607 20.3147 9.6028 19.9749 7.7328 18.7809C7.06855 18.3579 6.47841 17.8432 5.97519 17.2589C5.12341 16.2738 4.55173 15.1302 4.26015 13.9324C4.01698 12.9416 3.96104 11.8931 4.12168 10.8379C4.36697 9.20484 5.1183 7.63309 6.37564 6.37574C9.49984 3.25154 14.5652 3.25154 17.6894 6.37574L18.2332 6.91959L18.2337 5.49951C18.2338 5.05769 18.5921 4.69964 19.034 4.69979C19.4758 4.69995 19.8338 5.05825 19.8337 5.50007L19.8325 9.03277L19.8322 9.8325L19.0325 9.83249L18.9401 9.83249C18.8146 9.85665 18.6854 9.85665 18.5599 9.83248L15.5005 9.83245C15.0587 9.83245 14.7005 9.47427 14.7005 9.03244C14.7005 8.59062 15.0587 8.23245 15.5005 8.23245L16.7176 8.23246L16.2751 7.78995Z",
                                        }),
                                        (0, t.jsx)("clipPath", { id: "arrow-clip", children: (0, t.jsx)("use", { xlinkHref: "#arrow" }) }),
                                    ],
                                }),
                            ],
                        })
                    );
                },
                ar = function (e) {
                    var n = e.disabled,
                        r = or(e, ["disabled"]);
                    return n
                        ? (0, t.jsx)(ir, tr({}, r))
                        : (0, t.jsxs)(
                              nr.Z,
                              tr({ id: "arrow_loading", viewBox: "0 0 24 24" }, r, {
                                  children: [
                                      (0, t.jsx)("path", {
                                          stroke: "none",
                                          fill: "#7A6EAA",
                                          d:
                                              "M16.2751 7.78995C13.932 5.44681 10.133 5.44681 7.78986 7.78995C7.02853 8.55128 6.51457 9.4663 6.24798 10.4351C6.24473 10.4499 6.24114 10.4646 6.23719 10.4793C6.17635 10.7064 6.12938 10.9339 6.09577 11.161C5.83159 12.9457 6.39255 14.7026 7.52624 15.9944C7.61054 16.0901 7.69842 16.1838 7.78986 16.2752C8.08307 16.5685 8.39909 16.825 8.7322 17.0448C9.25533 17.3892 9.84172 17.6568 10.4798 17.8278C10.7386 17.8971 10.9979 17.9484 11.2565 17.9825C12.9537 18.2061 14.6187 17.6866 15.8747 16.6415C16.0123 16.5265 16.1459 16.4044 16.2751 16.2752C16.2848 16.2655 16.2947 16.2561 16.3047 16.2469C17.0123 15.531 17.5491 14.627 17.8283 13.5851C17.9712 13.0517 18.5196 12.7351 19.053 12.878C19.5865 13.021 19.9031 13.5693 19.7602 14.1028C19.3141 15.7676 18.3745 17.1684 17.1409 18.1899C16.1883 18.9822 15.0949 19.5189 13.9515 19.8002C11.8607 20.3147 9.6028 19.9749 7.7328 18.7809C7.06855 18.3579 6.47841 17.8432 5.97519 17.2589C5.12341 16.2738 4.55173 15.1302 4.26015 13.9324C4.01698 12.9416 3.96104 11.8931 4.12168 10.8379C4.36697 9.20484 5.1183 7.63309 6.37564 6.37574C9.49984 3.25154 14.5652 3.25154 17.6894 6.37574L18.2332 6.91959L18.2337 5.49951C18.2338 5.05769 18.5921 4.69964 19.034 4.69979C19.4758 4.69995 19.8338 5.05825 19.8337 5.50007L19.8325 9.03277L19.8322 9.8325L19.0325 9.83249L18.9401 9.83249C18.8146 9.85665 18.6854 9.85665 18.5599 9.83248L15.5005 9.83245C15.0587 9.83245 14.7005 9.47427 14.7005 9.03244C14.7005 8.59062 15.0587 8.23245 15.5005 8.23245L16.7176 8.23246L16.2751 7.78995Z",
                                      }),
                                      (0, t.jsxs)("defs", {
                                          children: [
                                              (0, t.jsx)("path", {
                                                  id: "arrow",
                                                  stroke: "none",
                                                  fill: "none",
                                                  d:
                                                      "M16.2751 7.78995C13.932 5.44681 10.133 5.44681 7.78986 7.78995C7.02853 8.55128 6.51457 9.4663 6.24798 10.4351C6.24473 10.4499 6.24114 10.4646 6.23719 10.4793C6.17635 10.7064 6.12938 10.9339 6.09577 11.161C5.83159 12.9457 6.39255 14.7026 7.52624 15.9944C7.61054 16.0901 7.69842 16.1838 7.78986 16.2752C8.08307 16.5685 8.39909 16.825 8.7322 17.0448C9.25533 17.3892 9.84172 17.6568 10.4798 17.8278C10.7386 17.8971 10.9979 17.9484 11.2565 17.9825C12.9537 18.2061 14.6187 17.6866 15.8747 16.6415C16.0123 16.5265 16.1459 16.4044 16.2751 16.2752C16.2848 16.2655 16.2947 16.2561 16.3047 16.2469C17.0123 15.531 17.5491 14.627 17.8283 13.5851C17.9712 13.0517 18.5196 12.7351 19.053 12.878C19.5865 13.021 19.9031 13.5693 19.7602 14.1028C19.3141 15.7676 18.3745 17.1684 17.1409 18.1899C16.1883 18.9822 15.0949 19.5189 13.9515 19.8002C11.8607 20.3147 9.6028 19.9749 7.7328 18.7809C7.06855 18.3579 6.47841 17.8432 5.97519 17.2589C5.12341 16.2738 4.55173 15.1302 4.26015 13.9324C4.01698 12.9416 3.96104 11.8931 4.12168 10.8379C4.36697 9.20484 5.1183 7.63309 6.37564 6.37574C9.49984 3.25154 14.5652 3.25154 17.6894 6.37574L18.2332 6.91959L18.2337 5.49951C18.2338 5.05769 18.5921 4.69964 19.034 4.69979C19.4758 4.69995 19.8338 5.05825 19.8337 5.50007L19.8325 9.03277L19.8322 9.8325L19.0325 9.83249L18.9401 9.83249C18.8146 9.85665 18.6854 9.85665 18.5599 9.83248L15.5005 9.83245C15.0587 9.83245 14.7005 9.47427 14.7005 9.03244C14.7005 8.59062 15.0587 8.23245 15.5005 8.23245L16.7176 8.23246L16.2751 7.78995Z",
                                              }),
                                              (0, t.jsx)("clipPath", { id: "arrow-clip", children: (0, t.jsx)("use", { xlinkHref: "#arrow" }) }),
                                          ],
                                      }),
                                      (0, t.jsx)("g", {
                                          clipPath: "url(#arrow-clip)",
                                          children: (0, t.jsx)("circle", {
                                              cx: "12",
                                              cy: "12",
                                              r: "5",
                                              transform: "rotate(365,12,12)",
                                              fill: "none",
                                              stroke: "#D7CAEC",
                                              strokeWidth: "16",
                                              strokeDasharray: "30",
                                              strokeDashoffset: "0",
                                              children: (0, t.jsx)("animate", { attributeName: "stroke-dashoffset", values: "0;-30", begin: "arrow_loading.click; 0.7s", repeatCount: "indefinite", dur: "6.3s" }),
                                          }),
                                      }),
                                      (0, t.jsx)("use", { xlinkHref: "#arrow" }),
                                      (0, t.jsx)("animateTransform", {
                                          id: "transform_0",
                                          attributeName: "transform",
                                          attributeType: "XML",
                                          type: "rotate",
                                          from: "0 0 0",
                                          to: "-10 0 0",
                                          dur: "0.07s",
                                          begin: "arrow_loading.click;",
                                          repeatCount: "1",
                                      }),
                                      (0, t.jsx)("animateTransform", {
                                          id: "transform_1",
                                          attributeName: "transform",
                                          attributeType: "XML",
                                          type: "rotate",
                                          from: "-45 0 0",
                                          to: "390 0 0",
                                          dur: "0.6s",
                                          begin: "transform_0.end",
                                          repeatCount: "1",
                                      }),
                                      (0, t.jsx)("animateTransform", {
                                          id: "transform_2",
                                          attributeName: "transform",
                                          attributeType: "XML",
                                          type: "rotate",
                                          from: "390 0 0",
                                          to: "360 0 0",
                                          dur: "0.15s",
                                          begin: "transform_1.end",
                                          repeatCount: "1",
                                      }),
                                  ],
                              })
                          );
                };
            function cr(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t;
            }
            function lr(e, n) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, n) {
                        var r = null == e ? null : ("undefined" !== typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                        if (null != r) {
                            var t,
                                o,
                                i = [],
                                a = !0,
                                c = !1;
                            try {
                                for (r = r.call(e); !(a = (t = r.next()).done) && (i.push(t.value), !n || i.length !== n); a = !0);
                            } catch (l) {
                                (c = !0), (o = l);
                            } finally {
                                try {
                                    a || null == r.return || r.return();
                                } finally {
                                    if (c) throw o;
                                }
                            }
                            return i;
                        }
                    })(e, n) ||
                    (function (e, n) {
                        if (!e) return;
                        if ("string" === typeof e) return cr(e, n);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === r && e.constructor && (r = e.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(r);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return cr(e, n);
                    })(e, n) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function sr() {
                var e,
                    n,
                    r =
                        ((e = ["\n  flex-direction: column;\n  align-items: center;\n  padding: 24px 25px 20px 25px;\n  width: 100%;\n  // border-bottom: 1px solid ", ";\n"]),
                        n || (n = e.slice(0)),
                        Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(n) } })));
                return (
                    (sr = function () {
                        return r;
                    }),
                    r
                );
            }
            var ur = (0, i.ZP)(X.Z).withConfig({ componentId: "sc-3ac715ea-0" })(sr(), function (e) {
                    return e.theme.colors.cardBorder;
                }),
                dr = function (e) {
                    var n = e.title,
                        r = e.subtitle,
                        o = e.hasAmount,
                        i = e.onRefreshPrice,
                        a = lr((0, Ze.DG)(), 1)[0];
                    return (0, t.jsxs)(ur, {
                        children: [
                            (0, t.jsxs)(X.Z, {
                                width: "100%",
                                alignItems: "center",
                                justifyContent: "space-between",
                                children: [
                                    (0, t.jsx)(X.Z, { flexDirection: "column", alignItems: "flex-start", width: "100%", mr: 18, children: (0, t.jsx)(Dn.Z, { as: "h2", children: n }) }),
                                    (0, t.jsxs)(X.Z, {
                                        children: [
                                            (0, t.jsx)(l.Z, {
                                                variant: "text",
                                                scale: "sm",
                                                onClick: function () {
                                                    return i();
                                                },
                                                children: (0, t.jsx)(ar, { disabled: !o, color: "textSubtle", width: "27px" }),
                                            }),
                                            (0, t.jsx)(Qn.Z, { show: a, children: (0, t.jsx)(er.Z, { color: "textSubtle", mr: "0" }) }),
                                        ],
                                    }),
                                ],
                            }),
                            (0, t.jsx)(X.Z, { width: "100%", alignItems: "center", children: (0, t.jsx)(c.Z, { color: "textSubtle", fontSize: "14px", children: r }) }),
                        ],
                    });
                };
            function fr(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var r = 0, t = new Array(n); r < n; r++) t[r] = e[r];
                return t;
            }
            function pr(e, n, r) {
                return n in e ? Object.defineProperty(e, n, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[n] = r), e;
            }
            function mr(e, n) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return e;
                    })(e) ||
                    (function (e, n) {
                        var r = null == e ? null : ("undefined" !== typeof Symbol && e[Symbol.iterator]) || e["@@iterator"];
                        if (null != r) {
                            var t,
                                o,
                                i = [],
                                a = !0,
                                c = !1;
                            try {
                                for (r = r.call(e); !(a = (t = r.next()).done) && (i.push(t.value), !n || i.length !== n); a = !0);
                            } catch (l) {
                                (c = !0), (o = l);
                            } finally {
                                try {
                                    a || null == r.return || r.return();
                                } finally {
                                    if (c) throw o;
                                }
                            }
                            return i;
                        }
                    })(e, n) ||
                    (function (e, n) {
                        if (!e) return;
                        if ("string" === typeof e) return fr(e, n);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        "Object" === r && e.constructor && (r = e.constructor.name);
                        if ("Map" === r || "Set" === r) return Array.from(r);
                        if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return fr(e, n);
                    })(e, n) ||
                    (function () {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                    })()
                );
            }
            function hr(e, n) {
                return n || (n = e.slice(0)), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(n) } }));
            }
            function xr() {
                var e = hr(["\n  font-size: 14px;\n  font-weight: 500;\n"]);
                return (
                    (xr = function () {
                        return e;
                    }),
                    e
                );
            }
            function gr() {
                var e = hr([
                    "\n  box-shadow: inset 0px -2px 0px rgba(0, 0, 0, 0.1);\n  background: none;\n  .icon-down {\n    fill: #ff00f9;\n  }\n  .icon-up-down {\n    display: none;\n  }\n  &:hover {\n    .icon-down {\n      display: none;\n      fill: white;\n    }\n    .icon-up-down {\n      display: block;\n      fill: white;\n    }\n  }\n",
                ]);
                return (
                    (gr = function () {
                        return e;
                    }),
                    e
                );
            }
            var br = (0, i.ZP)(c.Z).withConfig({ componentId: "sc-3d653cce-0" })(xr()),
                vr = (0, i.ZP)(l.Z).withConfig({ componentId: "sc-3d653cce-1" })(gr());
            function yr() {
                var e,
                    n,
                    r,
                    i,
                    l,
                    v,
                    y,
                    w,
                    T,
                    k,
                    O,
                    N = (0, g.useRouter)(),
                    U = (0, kn.jj)(),
                    E = (0, b.$G)().t,
                    L = C(),
                    D = L.refreshBlockNumber,
                    z = L.isLoading,
                    B = [(0, cn.U8)(null === U || void 0 === U ? void 0 : U.inputCurrencyId), (0, cn.U8)(null === U || void 0 === U ? void 0 : U.outputCurrencyId)],
                    F = B[0],
                    R = B[1],
                    $ = (0, o.useMemo)(
                        function () {
                            var e;
                            return null !==
                                (v =
                                    null === (e = [F, R]) || void 0 === e
                                        ? void 0
                                        : e.filter(function (e) {
                                              return (n = e), null != (r = a.Token) && "undefined" !== typeof Symbol && r[Symbol.hasInstance] ? !!r[Symbol.hasInstance](n) : n instanceof r;
                                              var n, r;
                                          })) && void 0 !== v
                                ? v
                                : [];
                        },
                        [F, R]
                    ),
                    X = (0, cn.e_)(),
                    V =
                        $ &&
                        $.filter(function (e) {
                            return !(e.address in X);
                        }),
                    q = (0, A.Z)().account,
                    K = mr((0, Ze.DG)(), 1)[0],
                    Y = mr((0, Ze.$2)(), 1)[0],
                    J = (0, kn.dU)(),
                    Q = J.independentField,
                    ee = J.typedValue,
                    ne = J.recipient,
                    re = J[G.gN.INPUT].currencyId,
                    te = J[G.gN.OUTPUT].currencyId,
                    oe = (0, cn.U8)(re),
                    ce = (0, cn.U8)(te),
                    le = (0, kn.SM)(Q, ee, re, oe, te, ce, ne),
                    se = le.v2Trade,
                    ue = le.currencyBalances,
                    de = le.parsedAmount,
                    pe = le.currencies,
                    me = le.inputError,
                    he = (function (e, n, r) {
                        var t = (0, b.$G)().t,
                            i = (0, A.Z)(),
                            c = i.chainId,
                            l = i.account,
                            s = (0, An.d)().callWithGasPrice,
                            u = (0, Pn.Hj)(),
                            d = (0, Tn._h)(null !== l && void 0 !== l ? l : void 0, e),
                            f = (0, o.useMemo)(
                                function () {
                                    return (0, Cn.Z)(r, e);
                                },
                                [e, r]
                            ),
                            p = (0, dn.h7)();
                        return (0, o.useMemo)(
                            function () {
                                if (!u || !c || !e || !n) return Sn;
                                var r = f && d && !d.lessThan(f);
                                return e === a.ETHER && (0, a.currencyEquals)(a.WETH[c], n)
                                    ? {
                                          wrapType: wn.WRAP,
                                          execute:
                                              r && f
                                                  ? In(
                                                        un().mark(function e() {
                                                            var n;
                                                            return un().wrap(
                                                                function (e) {
                                                                    for (;;)
                                                                        switch ((e.prev = e.next)) {
                                                                            case 0:
                                                                                return (e.prev = 0), (e.next = 3), s(u, "deposit", void 0, { value: "0x".concat(f.raw.toString(16)) });
                                                                            case 3:
                                                                                (n = e.sent), p(n, { summary: "Wrap ".concat(f.toSignificant(6), " BNB to WBNB") }), (e.next = 10);
                                                                                break;
                                                                            case 7:
                                                                                (e.prev = 7), (e.t0 = e.catch(0)), console.error("Could not deposit", e.t0);
                                                                            case 10:
                                                                            case "end":
                                                                                return e.stop();
                                                                        }
                                                                },
                                                                e,
                                                                null,
                                                                [[0, 7]]
                                                            );
                                                        })
                                                    )
                                                  : void 0,
                                          inputError: r ? void 0 : t("Insufficient BNB balance"),
                                      }
                                    : (0, a.currencyEquals)(a.WETH[c], e) && n === a.ETHER
                                    ? {
                                          wrapType: wn.UNWRAP,
                                          execute:
                                              r && f
                                                  ? In(
                                                        un().mark(function e() {
                                                            var n;
                                                            return un().wrap(
                                                                function (e) {
                                                                    for (;;)
                                                                        switch ((e.prev = e.next)) {
                                                                            case 0:
                                                                                return (e.prev = 0), (e.next = 3), s(u, "withdraw", ["0x".concat(f.raw.toString(16))]);
                                                                            case 3:
                                                                                (n = e.sent), p(n, { summary: "Unwrap ".concat(f.toSignificant(6), " WBNB to BNB") }), (e.next = 10);
                                                                                break;
                                                                            case 7:
                                                                                (e.prev = 7), (e.t0 = e.catch(0)), console.error("Could not withdraw", e.t0);
                                                                            case 10:
                                                                            case "end":
                                                                                return e.stop();
                                                                        }
                                                                },
                                                                e,
                                                                null,
                                                                [[0, 7]]
                                                            );
                                                        })
                                                    )
                                                  : void 0,
                                          inputError: r ? void 0 : t("Insufficient WBNB balance"),
                                      }
                                    : Sn;
                            },
                            [u, c, e, n, t, f, d, p, s]
                        );
                    })(pe[G.gN.INPUT], pe[G.gN.OUTPUT], ee),
                    xe = he.wrapType,
                    ge = he.execute,
                    be = he.inputError,
                    ye = xe !== wn.NOT_APPLICABLE,
                    je = ye ? void 0 : se,
                    we = ye
                        ? (pr((y = {}), G.gN.INPUT, de), pr(y, G.gN.OUTPUT, de), y)
                        : (pr((w = {}), G.gN.INPUT, Q === G.gN.INPUT ? de : null === je || void 0 === je ? void 0 : je.inputAmount), pr(w, G.gN.OUTPUT, Q === G.gN.OUTPUT ? de : null === je || void 0 === je ? void 0 : je.outputAmount), w),
                    Pe = (0, kn._r)(),
                    Ae = Pe.onSwitchTokens,
                    Ie = Pe.onCurrencySelection,
                    Se = Pe.onUserInput,
                    ke = Pe.onChangeRecipient,
                    Oe = !me,
                    Ne = Q === G.gN.INPUT ? G.gN.OUTPUT : G.gN.INPUT,
                    Ue = (0, o.useCallback)(
                        function (e) {
                            Se(G.gN.INPUT, e);
                        },
                        [Se]
                    ),
                    Ee = (0, o.useCallback)(
                        function (e) {
                            Se(G.gN.OUTPUT, e);
                        },
                        [Se]
                    ),
                    Le = (0, o.useState)({ tradeToConfirm: void 0, attemptingTxn: !1, swapErrorMessage: void 0, txHash: void 0 }),
                    De = Le[0],
                    ze = De.tradeToConfirm,
                    Be = De.swapErrorMessage,
                    Me = De.attemptingTxn,
                    Re = De.txHash,
                    Ge = Le[1],
                    $e =
                        (pr((O = {}), Q, ee),
                        pr(
                            O,
                            Ne,
                            ye
                                ? null !== (T = null === (e = we[Q]) || void 0 === e ? void 0 : e.toExact()) && void 0 !== T
                                    ? T
                                    : ""
                                : null !== (k = null === (n = we[Ne]) || void 0 === n ? void 0 : n.toSignificant(6)) && void 0 !== k
                                ? k
                                : ""
                        ),
                        O),
                    He = null === je || void 0 === je ? void 0 : je.route,
                    Xe = Boolean(pe[G.gN.INPUT] && pe[G.gN.OUTPUT] && (null === (r = we[Q]) || void 0 === r ? void 0 : r.greaterThan(a.JSBI.BigInt(0)))),
                    Ve = !He,
                    qe = mr((0, ln.re)(je, Y), 2),
                    Ke = qe[0],
                    Ye = qe[1],
                    Je = (0, o.useState)(!1),
                    Qe = Je[0],
                    en = Je[1];
                (0, o.useEffect)(
                    function () {
                        Ke === ln.UK.PENDING && en(!0);
                    },
                    [Ke, Qe]
                );
                var nn = (0, On.i)(ue[G.gN.INPUT]),
                    sn = Boolean(nn && (null === (i = we[G.gN.INPUT]) || void 0 === i ? void 0 : i.equalTo(nn))),
                    pn = (function (e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : H.gv,
                            r = arguments.length > 2 ? arguments[2] : void 0,
                            t = (0, A.Z)(),
                            i = t.account,
                            a = t.chainId,
                            c = t.library,
                            l = (0, Ze.Fh)(),
                            s = mn(e, n, r),
                            u = (0, b.$G)().t,
                            d = (0, dn.h7)(),
                            f = (0, P.Z)(r).address,
                            p = null === r ? i : f;
                        return (0, o.useMemo)(
                            function () {
                                return e && c && i && a
                                    ? p
                                        ? {
                                              state: tn.VALID,
                                              callback: (function () {
                                                  var n = gn(
                                                      un().mark(function n() {
                                                          var t, o, a, c, f, m, h, x, g, b, v;
                                                          return un().wrap(function (n) {
                                                              for (;;)
                                                                  switch ((n.prev = n.next)) {
                                                                      case 0:
                                                                          return (
                                                                              (n.next = 3),
                                                                              Promise.all(
                                                                                  s.map(function (e) {
                                                                                      var n,
                                                                                          r = e.parameters,
                                                                                          t = r.methodName,
                                                                                          o = r.args,
                                                                                          i = r.value,
                                                                                          a = e.contract,
                                                                                          c = !i || (0, fn.Z)(i) ? {} : { value: i };
                                                                                      return (n = a.estimateGas)[t]
                                                                                          .apply(n, yn(o).concat([c]))
                                                                                          .then(function (n) {
                                                                                              return { call: e, gasEstimate: n };
                                                                                          })
                                                                                          .catch(function (n) {
                                                                                              var r;
                                                                                              return (
                                                                                                  console.error("Gas estimate failed, trying eth_call to extract error", e),
                                                                                                  (r = a.callStatic)[t]
                                                                                                      .apply(r, yn(o).concat([c]))
                                                                                                      .then(function (r) {
                                                                                                          return (
                                                                                                              console.error("Unexpected successful call after failed estimate gas", e, n, r),
                                                                                                              { call: e, error: u("Unexpected issue with estimating the gas. Please try again.") }
                                                                                                          );
                                                                                                      })
                                                                                                      .catch(function (n) {
                                                                                                          return console.error("Call threw error", e, n), { call: e, error: jn(n, u) };
                                                                                                      })
                                                                                              );
                                                                                          });
                                                                                  })
                                                                              )
                                                                          );
                                                                      case 3:
                                                                          if (
                                                                              ((o = n.sent),
                                                                              (a = o.find(function (e, n, r) {
                                                                                  return "gasEstimate" in e && (n === r.length - 1 || "gasEstimate" in r[n + 1]);
                                                                              })))
                                                                          ) {
                                                                              n.next = 10;
                                                                              break;
                                                                          }
                                                                          if (
                                                                              !(
                                                                                  (c = o.filter(function (e) {
                                                                                      return "error" in e;
                                                                                  })).length > 0
                                                                              )
                                                                          ) {
                                                                              n.next = 9;
                                                                              break;
                                                                          }
                                                                          throw new Error(c[c.length - 1].error);
                                                                      case 9:
                                                                          throw new Error(u("Unexpected error. Could not estimate gas for the swap."));
                                                                      case 10:
                                                                          return (
                                                                              (f = a.call),
                                                                              (m = f.contract),
                                                                              (h = f.parameters),
                                                                              (x = h.methodName),
                                                                              (g = h.args),
                                                                              (b = h.value),
                                                                              (v = a.gasEstimate),
                                                                              n.abrupt(
                                                                                  "return",
                                                                                  (t = m)[x]
                                                                                      .apply(t, yn(g).concat([vn({ gasLimit: (0, S.yC)(v), gasPrice: l }, b && !(0, fn.Z)(b) ? { value: b, from: i } : { from: i })]))
                                                                                      .then(function (n) {
                                                                                          var t = e.inputAmount.currency.symbol,
                                                                                              o = e.outputAmount.currency.symbol,
                                                                                              a = e.inputAmount.toSignificant(3),
                                                                                              c = e.outputAmount.toSignificant(3),
                                                                                              l = "Swap ".concat(a, " ").concat(t, " for ").concat(c, " ").concat(o),
                                                                                              s = p === i ? l : "".concat(l, " to ").concat(r && (0, S.UJ)(r) ? (0, ve.Z)(r) : r);
                                                                                          return d(n, { summary: s }), n.hash;
                                                                                      })
                                                                                      .catch(function (e) {
                                                                                          throw 4001 === (null === e || void 0 === e ? void 0 : e.code)
                                                                                              ? new Error("Transaction rejected.")
                                                                                              : (console.error("Swap failed", e, x, g, b), new Error(u("Swap failed: %message%", { message: jn(e, u) })));
                                                                                      })
                                                                              )
                                                                          );
                                                                      case 12:
                                                                      case "end":
                                                                          return n.stop();
                                                                  }
                                                          }, n);
                                                      })
                                                  );
                                                  return function () {
                                                      return n.apply(this, arguments);
                                                  };
                                              })(),
                                              error: null,
                                          }
                                        : null !== r
                                        ? { state: tn.INVALID, callback: null, error: "Invalid recipient" }
                                        : { state: tn.LOADING, callback: null, error: null }
                                    : { state: tn.INVALID, callback: null, error: "Missing dependencies" };
                            },
                            [e, c, i, a, p, r, s, l, u, d]
                        );
                    })(je, Y, ne),
                    hn = pn.callback,
                    xn = pn.error,
                    bn = (0, W.U7)(je).priceImpactWithoutFee,
                    Zn = mr((0, Ze.RO)(), 1)[0],
                    En = (0, o.useCallback)(
                        function () {
                            (bn &&
                                !(function (e, n) {
                                    if (!e.lessThan(H.EV)) {
                                        var r = "confirm";
                                        return window.prompt(n('This swap has a price impact of at least %amount%%. Please type the word "%word%" to continue with this swap.', { amount: H.EV.toFixed(0), word: r })) === r;
                                    }
                                    return !!e.lessThan(H.Uf) || window.confirm(n("This swap has a price impact of at least %amount%%. Please confirm that you would like to continue with this swap.", { amount: H.Uf.toFixed(0) }));
                                })(bn, E)) ||
                                (hn &&
                                    (Ge({ attemptingTxn: !0, tradeToConfirm: ze, swapErrorMessage: void 0, txHash: void 0 }),
                                    hn()
                                        .then(function (e) {
                                            Ge({ attemptingTxn: !1, tradeToConfirm: ze, swapErrorMessage: void 0, txHash: e });
                                        })
                                        .catch(function (e) {
                                            Ge({ attemptingTxn: !1, tradeToConfirm: ze, swapErrorMessage: e.message, txHash: void 0 });
                                        })));
                        },
                        [bn, hn, ze, E]
                    ),
                    Ln = (0, o.useState)(!1),
                    Dn = Ln[0],
                    zn = Ln[1],
                    Bn = (0, W.oX)(bn),
                    Mn = !me && (Ke === ln.UK.NOT_APPROVED || Ke === ln.UK.PENDING || (Qe && Ke === ln.UK.APPROVED)) && !(Bn > 3 && !K),
                    _n = (0, o.useCallback)(
                        function () {
                            Ge({ tradeToConfirm: ze, attemptingTxn: Me, swapErrorMessage: Be, txHash: Re }), Re && Se(G.gN.INPUT, "");
                        },
                        [Me, Se, Be, ze, Re]
                    ),
                    Fn = (0, o.useCallback)(
                        function () {
                            Ge({ tradeToConfirm: je, swapErrorMessage: Be, txHash: Re, attemptingTxn: Me });
                        },
                        [Me, Be, je, Re]
                    ),
                    Rn = (0, o.useState)(null),
                    Gn = Rn[0],
                    Wn = Rn[1],
                    $n = mr((0, s.Z)((0, t.jsx)(Jn, { swapCurrency: Gn })), 1)[0],
                    Hn = function (e) {
                        var n = Object.entries(j).find(function (n) {
                            var r = n[1];
                            return e.address === r.address;
                        });
                        return Boolean(n);
                    };
                (0, o.useEffect)(
                    function () {
                        Gn && $n();
                    },
                    [Gn]
                );
                var Xn = (0, o.useCallback)(
                        function (e) {
                            en(!1), Ie(G.gN.INPUT, e);
                            var n = Hn(e);
                            Wn(n ? e : null);
                        },
                        [Ie]
                    ),
                    Vn = (0, o.useCallback)(
                        function () {
                            nn && Se(G.gN.INPUT, nn.toExact());
                        },
                        [nn, Se]
                    ),
                    qn = (0, o.useCallback)(
                        function (e) {
                            Ie(G.gN.OUTPUT, e);
                            var n = Hn(e);
                            Wn(n ? e : null);
                        },
                        [Ie]
                    ),
                    Kn = (0, h.mP)(null === pe || void 0 === pe ? void 0 : pe.INPUT, null === pe || void 0 === pe ? void 0 : pe.OUTPUT),
                    Yn = mr(
                        (0, s.Z)(
                            (0, t.jsx)(We, {
                                tokens: V,
                                onCancel: function () {
                                    return N.push("/swap");
                                },
                            })
                        ),
                        1
                    )[0];
                (0, o.useEffect)(
                    function () {
                        V.length > 0 && Yn();
                    },
                    [V.length]
                );
                var Qn,
                    er = mr(
                        (0, s.Z)(
                            (0, t.jsx)(Ce, { trade: je, originalTrade: ze, onAcceptChanges: Fn, attemptingTxn: Me, txHash: Re, recipient: ne, allowedSlippage: Y, onConfirm: En, swapErrorMessage: Be, customOnDismiss: _n }),
                            !0,
                            !0,
                            "confirmSwapModal"
                        ),
                        1
                    )[0],
                    nr = Boolean(de),
                    rr = (0, o.useCallback)(
                        function () {
                            nr && D();
                        },
                        [nr, D]
                    );
                return (0, t.jsx)(Un.Z, {
                    removePadding: !0,
                    style: { backgroundImage: "url(images/background.png)", backgroundColor: "#040404", backgroundPosition: "center bottom", backgroundSize: "100% cover" },
                    children: (0, t.jsxs)("div", {
                        style: { position: "relative", maxWidth: "455px", width: "100%", marginTop: "32px" },
                        children: [
                            (0, t.jsx)("div", {
                                style: { position: "absolute", background: "linear-gradient(to right, #E357FE, #902ADF, #3E01BF)", opacity: "0.25", filter: "blur(15px)", height: "100%", width: "100%", borderRadius: "16px" },
                            }),
                            (0, t.jsx)("div", {
                                style: { margin: 4 },
                                children: (0, t.jsxs)(on.j, {
                                    children: [
                                        (0, t.jsx)(dr, { title: E("Swap"), subtitle: E("Fast, Secure, KYC-Free."), hasAmount: nr, onRefreshPrice: rr }),
                                        (0, t.jsxs)(ie, {
                                            id: "swap-page",
                                            style: { minHeight: "390px" },
                                            children: [
                                                (0, t.jsxs)(Z.Tz, {
                                                    gap: "sm",
                                                    children: [
                                                        (0, t.jsx)(Te.Z, {
                                                            label: Q === G.gN.OUTPUT && !ye && je ? E("From (estimated)") : E("From"),
                                                            value: $e[G.gN.INPUT],
                                                            showMaxButton: !sn,
                                                            currency: pe[G.gN.INPUT],
                                                            onUserInput: Ue,
                                                            onMax: Vn,
                                                            onCurrencySelect: Xn,
                                                            otherCurrency: pe[G.gN.OUTPUT],
                                                            id: "swap-currency-input",
                                                        }),
                                                        (0, t.jsx)(Z.Tz, {
                                                            justify: "space-between",
                                                            children: (0, t.jsxs)(I.BA, {
                                                                justify: K ? "space-between" : "center",
                                                                style: { padding: "0 1rem" },
                                                                children: [
                                                                    (0, t.jsxs)(vr, {
                                                                        variant: "light",
                                                                        scale: "sm",
                                                                        onClick: function () {
                                                                            en(!1), Ae();
                                                                        },
                                                                        children: [
                                                                            (0, t.jsx)(u.Z, { className: "icon-down", color: pe[G.gN.INPUT] && pe[G.gN.OUTPUT] ? "primary" : "text" }),
                                                                            (0, t.jsx)(d.Z, { className: "icon-up-down", color: pe[G.gN.INPUT] && pe[G.gN.OUTPUT] ? "primary" : "text" }),
                                                                        ],
                                                                    }),
                                                                    null === ne && !ye && K
                                                                        ? (0, t.jsx)(f.Z, {
                                                                              variant: "text",
                                                                              id: "add-recipient-button",
                                                                              onClick: function () {
                                                                                  return ke("");
                                                                              },
                                                                              children: E("+ Add a send (optional)"),
                                                                          })
                                                                        : null,
                                                                ],
                                                            }),
                                                        }),
                                                        (0, t.jsx)(Te.Z, {
                                                            value: $e[G.gN.OUTPUT],
                                                            onUserInput: Ee,
                                                            label: Q === G.gN.INPUT && !ye && je ? E("To (estimated)") : E("To"),
                                                            showMaxButton: !1,
                                                            currency: pe[G.gN.OUTPUT],
                                                            onCurrencySelect: qn,
                                                            otherCurrency: pe[G.gN.INPUT],
                                                            id: "swap-currency-output",
                                                        }),
                                                        K && null !== ne && !ye
                                                            ? (0, t.jsxs)(t.Fragment, {
                                                                  children: [
                                                                      (0, t.jsxs)(I.BA, {
                                                                          justify: "space-between",
                                                                          style: { padding: "0 1rem" },
                                                                          children: [
                                                                              (0, t.jsx)(ae, { clickable: !1, children: (0, t.jsx)(u.Z, { width: "16px" }) }),
                                                                              (0, t.jsx)(f.Z, {
                                                                                  variant: "text",
                                                                                  id: "remove-recipient-button",
                                                                                  onClick: function () {
                                                                                      return ke(null);
                                                                                  },
                                                                                  children: E("- Remove send"),
                                                                              }),
                                                                          ],
                                                                      }),
                                                                      (0, t.jsx)(M, { id: "recipient", value: ne, onChange: ke }),
                                                                  ],
                                                              })
                                                            : null,
                                                        ye
                                                            ? null
                                                            : (0, t.jsxs)(Z.Tz, {
                                                                  gap: "7px",
                                                                  style: { padding: "0 16px" },
                                                                  children: [
                                                                      (0, t.jsxs)(I.m0, {
                                                                          align: "center",
                                                                          children: [(0, t.jsx)(br, { children: E("Slippage Tolerance") }), (0, t.jsxs)(c.Z, { bold: !0, color: "primary", children: [Y / 100, "%"] })],
                                                                      }),
                                                                      (0, t.jsx)(I.m0, {
                                                                          align: "center",
                                                                          children:
                                                                              Boolean(je) &&
                                                                              (0, t.jsxs)(t.Fragment, {
                                                                                  children: [
                                                                                      (0, t.jsx)(br, { children: E("Price") }),
                                                                                      z
                                                                                          ? (0, t.jsx)(p.Z, { width: "100%", ml: "8px", height: "24px" })
                                                                                          : (0, t.jsx)(Fe, { price: null === je || void 0 === je ? void 0 : je.executionPrice, showInverted: Dn, setShowInverted: zn }),
                                                                                  ],
                                                                              }),
                                                                      }),
                                                                  ],
                                                              }),
                                                    ],
                                                }),
                                                (0, t.jsxs)(m.Z, {
                                                    mt: "0.25rem",
                                                    mb: "16px",
                                                    children: [
                                                        Kn
                                                            ? (0, t.jsx)(f.Z, { width: "100%", disabled: !0, children: E("Unsupported Asset") })
                                                            : q
                                                            ? ye
                                                                ? (0, t.jsx)(f.Z, {
                                                                      width: "100%",
                                                                      disabled: Boolean(be),
                                                                      onClick: ge,
                                                                      children: null !== be && void 0 !== be ? be : xe === wn.WRAP ? "Wrap" : xe === wn.UNWRAP ? "Unwrap" : null,
                                                                  })
                                                                : Ve && Xe
                                                                ? (0, t.jsxs)(_.h2, {
                                                                      style: { textAlign: "center", padding: "0.75rem", background: "linear-gradient(95.13deg,rgba(22,24,48,0.25) 0%,rgba(46,51,92,0.25) 100%)" },
                                                                      children: [
                                                                          (0, t.jsx)(c.Z, { color: "textSubtle", children: E("Insufficient liquidity for this trade.") }),
                                                                          Zn && (0, t.jsx)(c.Z, { color: "textSubtle", children: E("Try enabling multi-hop trades.") }),
                                                                      ],
                                                                  })
                                                                : Mn
                                                                ? (0, t.jsxs)(I.m0, {
                                                                      children: [
                                                                          (0, t.jsx)(f.Z, {
                                                                              variant: Ke === ln.UK.APPROVED ? "success" : "primary",
                                                                              onClick: Ye,
                                                                              disabled: Ke !== ln.UK.NOT_APPROVED || Qe,
                                                                              width: "48%",
                                                                              children:
                                                                                  Ke === ln.UK.PENDING
                                                                                      ? (0, t.jsxs)(I.BA, { gap: "6px", justify: "center", children: [E("Enabling"), " ", (0, t.jsx)(Nn.Z, { stroke: "white" })] })
                                                                                      : Qe && Ke === ln.UK.APPROVED
                                                                                      ? E("Enabled")
                                                                                      : E("Enable %asset%", { asset: null !== (Qn = null === (l = pe[G.gN.INPUT]) || void 0 === l ? void 0 : l.symbol) && void 0 !== Qn ? Qn : "" }),
                                                                          }),
                                                                          (0, t.jsx)(f.Z, {
                                                                              variant: Oe && Bn > 2 ? "danger" : "primary",
                                                                              onClick: function () {
                                                                                  K ? En() : (Ge({ tradeToConfirm: je, attemptingTxn: !1, swapErrorMessage: void 0, txHash: void 0 }), er());
                                                                              },
                                                                              width: "48%",
                                                                              id: "swap-button",
                                                                              disabled: !Oe || Ke !== ln.UK.APPROVED || (Bn > 3 && !K),
                                                                              children: E(Bn > 3 && !K ? "Price Impact High" : Bn > 2 ? "Swap Anyway" : "Swap"),
                                                                          }),
                                                                      ],
                                                                  })
                                                                : (0, t.jsx)(f.Z, {
                                                                      variant: Oe && Bn > 2 && !xn ? "danger" : "primary",
                                                                      onClick: function () {
                                                                          K ? En() : (Ge({ tradeToConfirm: je, attemptingTxn: !1, swapErrorMessage: void 0, txHash: void 0 }), er());
                                                                      },
                                                                      id: "swap-button",
                                                                      width: "100%",
                                                                      children: me || E(Bn > 3 && !K ? "Price Impact Too High" : Bn > 2 ? "Swap Anyway" : "Swap"),
                                                                  })
                                                            : (0, t.jsx)(an.Z, { width: "100%" }),
                                                        Mn && (0, t.jsx)(Z.ZP, { style: { marginTop: "1rem" }, children: (0, t.jsx)(rn, { steps: [Ke === ln.UK.APPROVED] }) }),
                                                        K && Be ? (0, t.jsx)(fe, { error: Be }) : null,
                                                    ],
                                                }),
                                                Kn ? (0, t.jsx)(x.Z, { currencies: [pe.INPUT, pe.OUTPUT] }) : je && (0, t.jsx)(_e, { trade: je }),
                                            ],
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                });
            }
            var jr = function () {
                return (0, t.jsx)(yr, {});
            };
        },
    },
    function (e) {
        e.O(0, [9539, 1843, 1314, 5855, 9586, 2949, 5115, 761, 649, 619, 9774, 2888, 179], function () {
            return (n = 98229), e((e.s = n));
            var n;
        });
        var n = e.O();
        _N_E = n;
    },
]);
//# sourceMappingURL=swap-b67c0ebea973d8d5.js.map
