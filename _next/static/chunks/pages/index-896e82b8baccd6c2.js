(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5405],
    {
        48312: function (n, e, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/",
                function () {
                    return t(19079);
                },
            ]);
        },
        19079: function (n, e, t) {
            "use strict";
            t.r(e),
                t.d(e, {
                    __N_SSG: function () {
                        return Sn;
                    },
                    default: function () {
                        return On;
                    },
                });
            var r = t(85893),
                i = t(8100),
                o = t(54739),
                c = t(19532),
                a = t(16108),
                u = t(13766),
                l = t(42755),
                s = t(87177),
                d = t(67602);
            function f() {
                var n,
                    e,
                    t =
                        ((n = ["\n  padding: 16px 24px;\n  border: 1px solid #f2f2f2;\n  border-radius: 16px;\n  box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.5);\n  position: relative;\n"]),
                        e || (e = n.slice(0)),
                        Object.freeze(Object.defineProperties(n, { raw: { value: Object.freeze(e) } })));
                return (
                    (f = function () {
                        return t;
                    }),
                    t
                );
            }
            var p = (0, o.ZP)("div").withConfig({ componentId: "sc-fa600b2c-0" })(f()),
                x = function (n) {
                    var e = n.children;
                    return (0, r.jsx)(p, { children: e });
                },
                h = t(46230),
                g = t(39397);
            function m() {
                var n,
                    e,
                    t =
                        ((n = ["\n  textalign: 'center';\n  padding: '8px 0';\n  @media screen and (max-width: 768px) {\n    flex-direction: column;\n  }\n"]),
                        e || (e = n.slice(0)),
                        Object.freeze(Object.defineProperties(n, { raw: { value: Object.freeze(e) } })));
                return (
                    (m = function () {
                        return t;
                    }),
                    t
                );
            }
            var b = (0, o.ZP)(c.Z).withConfig({ componentId: "sc-dfdb0101-0" })(m()),
                j = function () {
                    var n = (0, h.C)(function (n) {
                            var e;
                            return null === (e = n.app.loading) || void 0 === e || e;
                        }),
                        e = (0, h.C)(function (n) {
                            return n.app.marketPrice;
                        }),
                        t = (0, h.C)(function (n) {
                            return n.app.marketCap;
                        }),
                        i = (0, h.C)(function (n) {
                            return n.app.circSupply;
                        });
                    return (0, r.jsx)(x, {
                        children: (0, r.jsxs)(b, {
                            justifyContent: "space-around",
                            children: [
                                (0, r.jsxs)(c.Z, {
                                    flexDirection: "column",
                                    marginBottom: "12px",
                                    children: [
                                        (0, r.jsx)(l.Z, { scale: "xl", color: "textSubtle", children: n ? (0, r.jsx)(s.Z, {}) : (0, r.jsx)(g.Z, { value: n ? 0 : (t / Math.pow(10, 6)).toFixed(2), prefix: "$", postfix: "M" }) }),
                                        (0, r.jsx)(d.Z, { color: "textSubtle", children: "Marketcap" }),
                                    ],
                                }),
                                (0, r.jsxs)(c.Z, {
                                    flexDirection: "column",
                                    marginBottom: "12px",
                                    children: [
                                        (0, r.jsx)(l.Z, { scale: "xl", color: "textSubtle", children: n ? (0, r.jsx)(s.Z, {}) : (0, r.jsx)(g.Z, { value: n ? 0 : (i / Math.pow(10, 9)).toFixed(2), prefix: "", postfix: "B" }) }),
                                        (0, r.jsx)(d.Z, { color: "textSubtle", children: "Circulating Supply" }),
                                    ],
                                }),
                                /*
                                (0, r.jsxs)(c.Z, {
                                    flexDirection: "column",
                                    marginBottom: "12px",
                                    children: [(0, r.jsx)(l.Z, { scale: "xl", color: "textSubtle", children: "0K" }), (0, r.jsx)(d.Z, { color: "textSubtle", children: "Holders" })],
                                }),
                                */
                                (0, r.jsxs)(c.Z, {
                                    flexDirection: "column",
                                    marginBottom: "12px",
                                    children: [
                                        (0, r.jsx)(l.Z, { scale: "xl", color: "textSubtle", children: n ? (0, r.jsx)(s.Z, {}) : (0, r.jsx)(g.Z, { value: (+e).toFixed(4), prefix: "$", postfix: "" }) }),
                                        (0, r.jsx)(d.Z, { color: "textSubtle", children: "TMF Price" }),
                                    ],
                                }),
                            ],
                        }),
                    });
                },
                v = function (n) {
                    return (0, r.jsxs)(d.Z, {
                        color: n.children < 0 ? "failure" : "success",
                        style: { position: "absolute", right: "24px", top: "16px", fontSize: "12px" },
                        children: [n.children >= 0 ? "+" : "", (+n.children).toFixed(2), "%"],
                    });
                },
                w = function () {
                    var n = 2397215.48,
                        e = (0, h.C)(function (n) {
                            var e;
                            return null === (e = n.app.loading) || void 0 === e || e;
                        }),
                        t = (0, h.C)(function (n) {
                            return n.app.totalLiquidity;
                        });
                    return (0, r.jsxs)(x, {
                        children: [
                            (0, r.jsx)(d.Z, { color: "textSubtle", marginBottom: "12px", children: "Liquidity" }),
                            (0, r.jsx)(l.Z, { scale: "lg", color: "textSubtle", children: e ? (0, r.jsx)(s.Z, {}) : (0, r.jsx)(g.Z, { value: e ? 0 : (t / Math.pow(10, 6)).toFixed(2), prefix: "$", postfix: "M" }) }),
                            e ? (0, r.jsx)(s.Z, {}) : (0, r.jsx)(v, { children: (t - n) / n }),
                        ],
                    });
                },
                y = function (n) {
                    return (0, r.jsxs)(d.Z, {
                        color: n.children < 0 ? "failure" : "success",
                        style: { position: "absolute", right: "24px", top: "16px", fontSize: "12px" },
                        children: [n.children >= 0 ? "+" : "", (+n.children).toFixed(2), "%"],
                    });
                },
                Z = function () {
                    var n = 18305945.56,
                        e = (0, h.C)(function (n) {
                            var e;
                            return null === (e = n.app.loading) || void 0 === e || e;
                        }),
                        t = (0, h.C)(function (n) {
                            return n.app.treasuryMarketValue;
                        });
                    return (0, r.jsxs)(x, {
                        children: [
                            (0, r.jsx)(d.Z, { color: "textSubtle", marginBottom: "12px", children: "Treasury" }),
                            (0, r.jsx)(l.Z, { scale: "lg", color: "textSubtle", children: e ? (0, r.jsx)(s.Z, {}) : (0, r.jsx)(g.Z, { value: e ? 0 : (t / Math.pow(10, 6)).toFixed(2), prefix: "$", postfix: "M" }) }),
                            e ? (0, r.jsx)(s.Z, {}) : (0, r.jsx)(y, { children: (t - n) / n }),
                        ],
                    });
                },
                k = t(23526);
            function C(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, { raw: { value: Object.freeze(e) } }));
            }
            function S() {
                var n = C(["\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]);
                return (
                    (S = function () {
                        return n;
                    }),
                    n
                );
            }
            function O() {
                var n = C(["\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]);
                return (
                    (O = function () {
                        return n;
                    }),
                    n
                );
            }
            var P = o.ZP.img.withConfig({ componentId: "sc-33263ada-0" })(S()),
                I = o.ZP.img.withConfig({ componentId: "sc-33263ada-1" })(O()),
                T = function () {
                    return (0, r.jsxs)(k.Z, {
                        backgroundImage: "url('/images/APY-bg.svg')",
                        style: { backgroundSize: "auto 100%", backgroundRepeat: "no-repeat", position: "relative" },
                        children: [
                            (0, r.jsx)(x, {
                                children: (0, r.jsxs)(k.Z, {
                                    marginLeft: "44px",
                                    children: [
                                        (0, r.jsxs)(c.Z, {
                                            style: { marginBottom: "12px" },
                                            children: [
                                                (0, r.jsxs)("svg", {
                                                    width: "31",
                                                    height: "30",
                                                    viewBox: "0 0 31 30",
                                                    fill: "none",
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    style: { display: "inline" },
                                                    children: [
                                                        (0, r.jsx)("g", {
                                                            opacity: "0.186861",
                                                            children: (0, r.jsx)("path", {
                                                                d:
                                                                    "M28.7937 15C28.7937 22.5057 22.7091 28.5903 15.2033 28.5903C7.69767 28.5903 1.61304 22.5057 1.61304 15C1.61304 7.49431 7.69767 1.40967 15.2033 1.40967C22.7091 1.40967 28.7937 7.49431 28.7937 15Z",
                                                                fill: "#53ff47",
                                                            }),
                                                        }),
                                                        (0, r.jsx)("path", {
                                                            d:
                                                                "M26.6724 15C26.6724 21.3341 21.5376 26.4689 15.2035 26.4689C8.86945 26.4689 3.73462 21.3341 3.73462 15C3.73462 8.66599 8.86945 3.53116 15.2035 3.53116C21.5376 3.53116 26.6724 8.66599 26.6724 15Z",
                                                            fill: "#53ff47",
                                                        }),
                                                        (0, r.jsx)("path", {
                                                            d: "M9.28418 15.1025L13.3152 19.0175C13.3384 19.04 13.3754 19.0393 13.3977 19.016L21.1223 10.9416",
                                                            stroke: "white",
                                                            strokeWidth: "2.88335",
                                                            strokeLinecap: "round",
                                                        }),
                                                    ],
                                                }),
                                                (0, r.jsx)(d.Z, { color: "textSubtle", fontSize: "23px", lineHeight: "23px", style: { display: "inline", marginTop: "4px" }, children: "Fixed APY" }),
                                            ],
                                        }),
                                        (0, r.jsx)(l.Z, { scale: "xl", marginBottom: "16px", style: { fontWeight: 900 }, children: (0, r.jsx)(g.Z, { value: "204 967.16", prefix: "", postfix: "%" }) }),
                                        (0, r.jsx)(d.Z, { color: "textSubtle", fontSize: "16px", marginBottom: "3px", children: "Just buy, hold, and earn!" }),
                                    ],
                                }),
                            }),
                            /*
                            (0, r.jsx)(P, { src: "/images/coin_top.svg", style: { position: "absolute", right: "50%", height: "70%", top: "50%" } }),
                            (0, r.jsx)(P, { src: "/images/coin_top.svg", style: { position: "absolute", right: "25%", height: "70%", top: "15%" } }),
                            (0, r.jsx)(I, { src: "/images/coin_bottom.svg", style: { position: "absolute", right: "0%", height: "70%", top: "-15%" } }),
                            */
                        ],
                    });
                },
                z = t(31289),
                B = t(56938),
                D = t(16695);
            function A(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, { raw: { value: Object.freeze(e) } }));
            }
            function L() {
                var n = A([
                    "\n  padding: 2px;\n  border-radius: 16px;\n  background: transparent;\n  box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.5);\n\n  .Card-Inner {\n    display: none;\n padding: 16px 24px;\n    border-radius: 16px;\n    background: #0e1121;\n    position: relative;\n    height: 100%;\n\n    img {\n      position: absolute;\n      top: 10px;\n      right: -30px;\n      width: 50%;\n      max-width: 220px;\n    }\n  }\n",
                ]);
                return (
                    (L = function () {
                        return n;
                    }),
                    n
                );
            }
            function E() {
                var n = A(["\n  display: inline-block;\n  background: linear-gradient(to right, #00ffd1, #6775dc, #ff00f9);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n"]);
                return (
                    (E = function () {
                        return n;
                    }),
                    n
                );
            }
            function M() {
                var n = A(["\n  background: linear-gradient(to right, #00ffd1, #6775dc, #ff00f9);\n  border-radius: 8px;\n  width: 100%;\n  height: 48px;\n"]);
                return (
                    (M = function () {
                        return n;
                    }),
                    n
                );
            }
            var N = (0, o.ZP)(k.Z).withConfig({ componentId: "sc-6a99ed61-0" })(L()),
                _ = (0, o.ZP)(d.Z).withConfig({ componentId: "sc-6a99ed61-1" })(E()),
                F = (0, o.ZP)(z.Z).withConfig({ componentId: "sc-6a99ed61-2" })(M()),
                $ = function () {
                    (0, B.ZK)();
                    var n = (0, B.QG)().currentRound,
                        e = n.amountCollectedInTMF,
                        t = n.amountInjectedInTMF,
                        i = (0, h.C)(function (n) {
                            return n.app.marketPrice;
                        }),
                        o = e.plus(t).times(i),
                        c = (0, D.mW)(o);
                    return (0, r.jsx)(N, {
                        children: (0, r.jsxs)(k.Z, {
                            className: "Card-Inner",
                            children: [
                                (0, r.jsx)("img", { src: "/images/lottery-bg.svg", alt: "lottery" }),
                                (0, r.jsx)(_, { fontSize: "23px", marginBottom: "16px", children: "The TrueMoneyFinance Lottery" }),
                                (0, r.jsx)(d.Z, { color: "textSubtle", fontSize: "19px", children: "Win up to" }),
                                (0, r.jsxs)(k.Z, {
                                    position: "relative",
                                    children: [
                                        (0, r.jsxs)(_, {
                                            fontSize: "46px",
                                            fontWeight: 800,
                                            style: { filter: "blur(20px)" },
                                            children: [
                                                "$",
                                                (+c)
                                                    .toFixed(2)
                                                    .toString()
                                                    .replace(/\B(?=(\d{3})+(?!\d))/g, " "),
                                            ],
                                        }),
                                        (0, r.jsxs)(_, {
                                            fontSize: "46px",
                                            fontWeight: 800,
                                            style: { position: "absolute", top: 0, left: 0 },
                                            children: [
                                                "$",
                                                (+c)
                                                    .toFixed(2)
                                                    .toString()
                                                    .replace(/\B(?=(\d{3})+(?!\d))/g, " "),
                                            ],
                                        }),
                                    ],
                                }),
                                (0, r.jsx)(d.Z, { color: "textSubtle", fontSize: "19px", marginTop: "8px", children: "Try your luck!" }),
                                (0, r.jsx)(d.Z, { color: "textSubtle", fontSize: "12px", marginTop: "12px", marginBottom: "21px", children: "Playing the TrueMoneyFinance Lottery gives you a chance to win huge prizes. It's easy and fair!" }),
                                (0, r.jsx)(k.Z, {
                                    margin: "0 0 20px",
                                    children: (0, r.jsx)(F, {
                                        scale: "sm",
                                        onClick: function () {
                                            window.location.href = "/lottery";
                                        },
                                        children: "Buy Now!",
                                    }),
                                }),
                            ],
                        }),
                    });
                },
                W = t(67294);
            function U(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, { raw: { value: Object.freeze(e) } }));
            }
            function G() {
                var n = U([
                    "\n  padding: 2px;\n  border-radius: 16px;\n  background: transparent;\n  box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.5);\n\n  .Card-Inner {\n    display: none;\n   padding: 16px 24px;\n    border-radius: 16px;\n    background: #0e1121;\n    position: relative;\n\n    img {\n      position: absolute;\n      top: 10px;\n      right: -30px;\n    }\n  }\n",
                ]);
                return (
                    (G = function () {
                        return n;
                    }),
                    n
                );
            }
            function H() {
                var n = U(["\n  display: inline-block;\n  background: linear-gradient(to right, #fff500, #d94999, #db00ff);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n"]);
                return (
                    (H = function () {
                        return n;
                    }),
                    n
                );
            }
            function R() {
                var n = U(["\n  background: linear-gradient(to right, #fff500, #d94999, #db00ff);\n  border-radius: 8px;\n  width: 100%;\n  height: 48px;\n"]);
                return (
                    (R = function () {
                        return n;
                    }),
                    n
                );
            }
            var Q = (0, o.ZP)(k.Z).withConfig({ componentId: "sc-590b7b35-0" })(G()),
                Y = (0, o.ZP)(d.Z).withConfig({ componentId: "sc-590b7b35-1" })(H()),
                q = (0, o.ZP)(z.Z).withConfig({ componentId: "sc-590b7b35-2" })(R()),
                K = function () {
                    var n = (0, W.useState)(0),
                        e = n[0],
                        t = n[1],
                        i = (0, h.C)(function (n) {
                            return n.poolData && n.poolData.awardBalance;
                        }),
                        o = (0, h.C)(function (n) {
                            return n.app.marketPrice;
                        });
                    return (
                        (0, W.useEffect)(
                            function () {
                                i && o && t(i * o);
                            },
                            [o, i]
                        ),
                        (0, r.jsx)(Q, {
                            children: (0, r.jsxs)(k.Z, {
                                className: "Card-Inner",
                                children: [
                                    (0, r.jsx)(Y, { fontSize: "23px", marginBottom: "16px", children: "P.L.A.Y. Protocol" }),
                                    (0, r.jsx)(d.Z, { color: "textSubtle", fontSize: "19px", children: "Win Up To" }),
                                    (0, r.jsxs)(k.Z, {
                                        position: "relative",
                                        children: [
                                            (0, r.jsx)(Y, {
                                                fontSize: "46px",
                                                fontWeight: 800,
                                                style: { filter: "blur(20px)" },
                                                children: (0, r.jsx)(g.Z, {
                                                    value: e
                                                        .toFixed(2)
                                                        .toString()
                                                        .replace(/\B(?=(\d{3})+(?!\d))/g, " "),
                                                    prefix: "$",
                                                }),
                                            }),
                                            (0, r.jsx)(Y, {
                                                fontSize: "46px",
                                                fontWeight: 800,
                                                style: { position: "absolute", top: 0, left: 0 },
                                                children: (0, r.jsx)(g.Z, {
                                                    value: e
                                                        .toFixed(2)
                                                        .toString()
                                                        .replace(/\B(?=(\d{3})+(?!\d))/g, " "),
                                                    prefix: "$",
                                                }),
                                            }),
                                        ],
                                    }),
                                    (0, r.jsx)(d.Z, { color: "textSubtle", fontSize: "19px", marginTop: "8px", children: "Win by Saving." }),
                                    (0, r.jsx)(d.Z, {
                                        color: "textSubtle",
                                        fontSize: "12px",
                                        marginTop: "12px",
                                        marginBottom: "21px",
                                        children: "P.L.A.Y. is a crypto-powered savings protocol based on PLSA. Save money and have a chance to win every week.",
                                    }),
                                    (0, r.jsx)(k.Z, {
                                        margin: "0 0 20px",
                                        children: (0, r.jsx)(q, {
                                            scale: "sm",
                                            onClick: function () {
                                                window.location.href = "/play";
                                            },
                                            children: "PLAY Now!",
                                        }),
                                    }),
                                ],
                            }),
                        })
                    );
                };
            function X() {
                var n,
                    e,
                    t =
                        ((n = ["\n  background: linear-gradient(to right, #ff8a30, #ff9747);\n  border-radius: 8px;\n  width: 100%;\n"]),
                        e || (e = n.slice(0)),
                        Object.freeze(Object.defineProperties(n, { raw: { value: Object.freeze(e) } })));
                return (
                    (X = function () {
                        return t;
                    }),
                    t
                );
            }
            var J = (0, o.ZP)(z.Z).withConfig({ componentId: "sc-798ab60b-0" })(X()),
                V = function () {
                    return (0, r.jsx)(x, {
                        children: (0, r.jsxs)(k.Z, {
                            margin: "10px 35px 32px",
                            children: [
                                (0, r.jsx)(d.Z, { color: "textSubtle", marginBottom: "34px", fontSize: "35px", fontWeight: 800, textAlign: "center", children: "Still got questions?" }),
                                (0, r.jsx)("form", { action: "https://docs.truemoney.finance/", method: "get", target: "_blank", children: (0, r.jsxs)(J, { scale: "md", children: ["More Details ", ">"] }) }),
                            ],
                        }),
                    });
                },
                nn = t(96939),
                en = t(47851),
                tn = t(97550),
                rn = t(35870),
                on = t(43484),
                cn = t(44609);
            function an() {
                var n,
                    e,
                    t =
                        ((n = ["\n  background: linear-gradient(to right, #ff8a30, #ff9747);\n  border-radius: 8px;\n  width: 100%;\n"]),
                        e || (e = n.slice(0)),
                        Object.freeze(Object.defineProperties(n, { raw: { value: Object.freeze(e) } })));
                return (
                    (an = function () {
                        return t;
                    }),
                    t
                );
            }
            (0, o.ZP)(nn.Z).withConfig({ componentId: "sc-881fe00a-0" })(an());
            var un = function () {
                return (0, r.jsx)(x, {
                    children: (0, r.jsxs)(k.Z, {
                        margin: "10px 35px 32px",
                        children: [
                            (0, r.jsx)(d.Z, { color: "textSubtle", marginBottom: "34px", fontSize: "35px", fontWeight: 800, textAlign: "center", children: "Connect with us" }),
                            (0, r.jsxs)(c.Z, {
                                alignItems: "center",
                                justifyContent: "center",
                                children: [
                                    (0, r.jsx)(nn.Z, { href: "https://twitter.com/tmcdefi", children: (0, r.jsx)(en.Z, { variant: "text", "aria-label": "Twitter", children: (0, r.jsx)(tn.Z, { width: 35 }) }) }),
                                    (0, r.jsx)(nn.Z, { href: "https://t.me/tmcdefi", children: (0, r.jsx)(en.Z, { variant: "text", "aria-label": "Telegram", children: (0, r.jsx)(rn.Z, { width: 35 }) }) }),
                                    /*(0, r.jsx)(nn.Z, { href: "https://discord.gg/", children: (0, r.jsx)(en.Z, { variant: "text", "aria-label": "Discord", children: (0, r.jsx)(on.Z, { width: 35 }) }) }),*/
                                ],
                            }),
                        ],
                    }),
                });
            };
            function ln(n) {
                var e = function (n) {
                        var e,
                            t = "";
                        for (e = 0; e <= 3; e++) t += p.charAt((n >> (8 * e + 4)) & 15) + p.charAt((n >> (8 * e)) & 15);
                        return t;
                    },
                    t = function (n, e) {
                        var t = (65535 & n) + (65535 & e);
                        return (((n >> 16) + (e >> 16) + (t >> 16)) << 16) | (65535 & t);
                    },
                    r = function (n, e, r, i, o, c) {
                        return t(((a = t(t(e, n), t(i, c))) << (u = o)) | (a >>> (32 - u)), r);
                        var a, u;
                    },
                    i = function (n, e, t, i, o, c, a) {
                        return r((e & t) | (~e & i), n, e, o, c, a);
                    },
                    o = function (n, e, t, i, o, c, a) {
                        return r((e & i) | (t & ~i), n, e, o, c, a);
                    },
                    c = function (n, e, t, i, o, c, a) {
                        return r(e ^ t ^ i, n, e, o, c, a);
                    },
                    a = function (n, e, t, i, o, c, a) {
                        return r(t ^ (e | ~i), n, e, o, c, a);
                    };
                if (void 0 === n) return "";
                var u,
                    l,
                    s,
                    d,
                    f,
                    p = "0123456789abcdef",
                    x = (function (n) {
                        var e,
                            t = 1 + ((n.length + 8) >> 6),
                            r = new Array(16 * t);
                        for (e = 0; e < 16 * t; e++) r[e] = 0;
                        for (e = 0; e < n.length; e++) r[e >> 2] |= n.charCodeAt(e) << ((e % 4) * 8);
                        return (r[e >> 2] |= 128 << ((e % 4) * 8)), (r[16 * t - 2] = 8 * n.length), r;
                    })(n),
                    h = 1732584193,
                    g = -271733879,
                    m = -1732584194,
                    b = 271733878;
                for (u = 0; u < x.length; u += 16)
                    (l = h),
                        (s = g),
                        (d = m),
                        (f = b),
                        (h = i(h, g, m, b, x[u + 0], 7, -680876936)),
                        (b = i(b, h, g, m, x[u + 1], 12, -389564586)),
                        (m = i(m, b, h, g, x[u + 2], 17, 606105819)),
                        (g = i(g, m, b, h, x[u + 3], 22, -1044525330)),
                        (h = i(h, g, m, b, x[u + 4], 7, -176418897)),
                        (b = i(b, h, g, m, x[u + 5], 12, 1200080426)),
                        (m = i(m, b, h, g, x[u + 6], 17, -1473231341)),
                        (g = i(g, m, b, h, x[u + 7], 22, -45705983)),
                        (h = i(h, g, m, b, x[u + 8], 7, 1770035416)),
                        (b = i(b, h, g, m, x[u + 9], 12, -1958414417)),
                        (m = i(m, b, h, g, x[u + 10], 17, -42063)),
                        (g = i(g, m, b, h, x[u + 11], 22, -1990404162)),
                        (h = i(h, g, m, b, x[u + 12], 7, 1804603682)),
                        (b = i(b, h, g, m, x[u + 13], 12, -40341101)),
                        (m = i(m, b, h, g, x[u + 14], 17, -1502002290)),
                        (h = o(h, (g = i(g, m, b, h, x[u + 15], 22, 1236535329)), m, b, x[u + 1], 5, -165796510)),
                        (b = o(b, h, g, m, x[u + 6], 9, -1069501632)),
                        (m = o(m, b, h, g, x[u + 11], 14, 643717713)),
                        (g = o(g, m, b, h, x[u + 0], 20, -373897302)),
                        (h = o(h, g, m, b, x[u + 5], 5, -701558691)),
                        (b = o(b, h, g, m, x[u + 10], 9, 38016083)),
                        (m = o(m, b, h, g, x[u + 15], 14, -660478335)),
                        (g = o(g, m, b, h, x[u + 4], 20, -405537848)),
                        (h = o(h, g, m, b, x[u + 9], 5, 568446438)),
                        (b = o(b, h, g, m, x[u + 14], 9, -1019803690)),
                        (m = o(m, b, h, g, x[u + 3], 14, -187363961)),
                        (g = o(g, m, b, h, x[u + 8], 20, 1163531501)),
                        (h = o(h, g, m, b, x[u + 13], 5, -1444681467)),
                        (b = o(b, h, g, m, x[u + 2], 9, -51403784)),
                        (m = o(m, b, h, g, x[u + 7], 14, 1735328473)),
                        (h = c(h, (g = o(g, m, b, h, x[u + 12], 20, -1926607734)), m, b, x[u + 5], 4, -378558)),
                        (b = c(b, h, g, m, x[u + 8], 11, -2022574463)),
                        (m = c(m, b, h, g, x[u + 11], 16, 1839030562)),
                        (g = c(g, m, b, h, x[u + 14], 23, -35309556)),
                        (h = c(h, g, m, b, x[u + 1], 4, -1530992060)),
                        (b = c(b, h, g, m, x[u + 4], 11, 1272893353)),
                        (m = c(m, b, h, g, x[u + 7], 16, -155497632)),
                        (g = c(g, m, b, h, x[u + 10], 23, -1094730640)),
                        (h = c(h, g, m, b, x[u + 13], 4, 681279174)),
                        (b = c(b, h, g, m, x[u + 0], 11, -358537222)),
                        (m = c(m, b, h, g, x[u + 3], 16, -722521979)),
                        (g = c(g, m, b, h, x[u + 6], 23, 76029189)),
                        (h = c(h, g, m, b, x[u + 9], 4, -640364487)),
                        (b = c(b, h, g, m, x[u + 12], 11, -421815835)),
                        (m = c(m, b, h, g, x[u + 15], 16, 530742520)),
                        (h = a(h, (g = c(g, m, b, h, x[u + 2], 23, -995338651)), m, b, x[u + 0], 6, -198630844)),
                        (b = a(b, h, g, m, x[u + 7], 10, 1126891415)),
                        (m = a(m, b, h, g, x[u + 14], 15, -1416354905)),
                        (g = a(g, m, b, h, x[u + 5], 21, -57434055)),
                        (h = a(h, g, m, b, x[u + 12], 6, 1700485571)),
                        (b = a(b, h, g, m, x[u + 3], 10, -1894986606)),
                        (m = a(m, b, h, g, x[u + 10], 15, -1051523)),
                        (g = a(g, m, b, h, x[u + 1], 21, -2054922799)),
                        (h = a(h, g, m, b, x[u + 8], 6, 1873313359)),
                        (b = a(b, h, g, m, x[u + 15], 10, -30611744)),
                        (m = a(m, b, h, g, x[u + 6], 15, -1560198380)),
                        (g = a(g, m, b, h, x[u + 13], 21, 1309151649)),
                        (h = a(h, g, m, b, x[u + 4], 6, -145523070)),
                        (b = a(b, h, g, m, x[u + 11], 10, -1120210379)),
                        (m = a(m, b, h, g, x[u + 2], 15, 718787259)),
                        (g = a(g, m, b, h, x[u + 9], 21, -343485551)),
                        (h = t(h, l)),
                        (g = t(g, s)),
                        (m = t(m, d)),
                        (b = t(b, f));
                return e(h) + e(g) + e(m) + e(b);
            }
            function sn(n, e) {
                for (var t = 0; t < e.length; t++) {
                    var r = e[t];
                    (r.enumerable = r.enumerable || !1), (r.configurable = !0), "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r);
                }
            }
            var dn = (function () {
                function n() {
                    !(function (n, e) {
                        if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function");
                    })(this, n);
                }
                var e, t, r;
                return (
                    (e = n),
                    (r = [
                        {
                            key: "get",
                            value: function (n) {
                                if (0 === document.cookie.length) return null;
                                var e = document.cookie.indexOf("".concat(n, "="));
                                if (-1 === e) return null;
                                e = e + n.length + 1;
                                var t = document.cookie.indexOf(";", e);
                                return -1 == t && (t = document.cookie.length), decodeURIComponent(document.cookie.substring(e, t));
                            },
                        },
                        {
                            key: "set",
                            value: function (n, e, t) {
                                if (t > 0) {
                                    var r = new Date().getTime() + 864e5 * t,
                                        i = new Date(r).toUTCString();
                                    document.cookie = n + "=".concat(encodeURIComponent(e), "; expires=").concat(i, "; path=/");
                                } else document.cookie = n + "=".concat(encodeURIComponent(e), "; path=/");
                            },
                        },
                        {
                            key: "remove",
                            value: function (n) {
                                n && (document.cookie = n + "=''; expires=".concat(new Date(1).toUTCString()));
                            },
                        },
                        {
                            key: "getAll",
                            value: function () {
                                if (0 === document.cookie.length) return null;
                                var n = {};
                                return (
                                    document.cookie.split(";").forEach(function (e) {
                                        var t = e.split("=");
                                        n[(t[0] + "").trim()] = decodeURIComponent(t[1]);
                                    }),
                                    n
                                );
                            },
                        },
                        {
                            key: "check",
                            value: function (n) {
                                return !(!(n = this.get(n)) || "" === n);
                            },
                        },
                    ]),
                    (t = null) && sn(e.prototype, t),
                    r && sn(e, r),
                    n
                );
            })();
            function fn(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, { raw: { value: Object.freeze(e) } }));
            }
            function pn() {
                var n = fn([
                    "\n    padding: 2px;\n    border-radius: 16px;\n    background: linear-gradient(to right, #f2f2f2, #f2f2f2, #f2f2f2);\n    box-shadow: 10px 10px 20px 0px rgba(0, 0, 0, 0.5);\n\n    .Card-Inner {\n        padding: 16px 24px;\n        border-radius: 16px;\n        background: #0e1121;\n        position: relative;\n        height: 100%;\n    }\n",
                ]);
                return (
                    (pn = function () {
                        return n;
                    }),
                    n
                );
            }
            function xn() {
                var n = fn(["\n    display: inline-block;\n    background: linear-gradient(to right, #f2f2f2, #f2f2f2, #f2f2f2);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n"]);
                return (
                    (xn = function () {
                        return n;
                    }),
                    n
                );
            }
            var hn = (0, o.ZP)(k.Z).withConfig({ componentId: "sc-3509e89f-0" })(pn()),
                gn = (0, o.ZP)(d.Z).withConfig({ componentId: "sc-3509e89f-1" })(xn()),
                mn = function () {
                    var n = (0, W.useState)(!0),
                        e = n[0],
                        t = n[1],
                        i = (0, W.useState)(null),
                        o = i[0],
                        c = i[1],
                        a = (0, W.useState)(!1),
                        u = a[0],
                        l = a[1],
                        s = (0, h.C)(function (n) {
                            return n.app.lastAnnouncement && n.app.lastAnnouncement !== o && (c(n.app.lastAnnouncement), t(ln(n.app.lastAnnouncement) === dn.get("lastAnnouncement"))), n.app.lastAnnouncement;
                        });
                    return (
                        !e &&
                        (0, r.jsx)(hn, {
                            children: (0, r.jsxs)(k.Z, {
                                className: "Card-Inner",
                                style: { cursor: "pointer" },
                                onClick: function () {
                                    return l(!u);
                                },
                                children: [
                                    (0, r.jsx)("a", {
                                        href: "#",
                                        style: { float: "right", color: "#fff", fontWeight: "700" },
                                        onClick: function (n) {
                                            n.preventDefault(), dn.set("lastAnnouncement", ln(s), { expires: 365 }), t(ln(s) === dn.get("lastAnnouncement"));
                                        },
                                        children: "Close [X]",
                                    }),
                                    (0, r.jsxs)(gn, {
                                        fontSize: "23px",
                                        marginBottom: "16px",
                                        fontWeight: "700",
                                        children: ["Latest Announcement", (0, r.jsx)("div", { style: { display: "block", fontSize: "0.6em" }, children: "(click to expand)" })],
                                    }),
                                    (0, r.jsx)("div", {
                                        style: { whiteSpace: "pre-wrap", wordBreak: "break-word", lineHeight: "20px", marginBottom: "20px", color: "#fff", height: u ? "auto" : "100px", overflow: "hidden" },
                                        children: s || "Loading...",
                                    }),
                                ],
                            }),
                        })
                    );
                };
            function bn(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, { raw: { value: Object.freeze(e) } }));
            }
            function jn() {
                var n = bn(['\n  width: calc(100% - 16px);\n  max-width: 980px;\n  position="relative";\n  margin-bottom: 70px;\n  ']);
                return (
                    (jn = function () {
                        return n;
                    }),
                    n
                );
            }
            function vn() {
                var n = bn(["\n  width: 100%;\n"]);
                return (
                    (vn = function () {
                        return n;
                    }),
                    n
                );
            }
            function wn() {
                var n = bn(["\n  @media screen and (max-width: 768px) {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n    grid-row-gap: 30px;\n  }\n"]);
                return (
                    (wn = function () {
                        return n;
                    }),
                    n
                );
            }
            var yn = (0, o.ZP)(c.Z).withConfig({ componentId: "sc-df614688-0" })(jn()),
                Zn = (0, o.ZP)(a.Z).withConfig({ componentId: "sc-df614688-1" })(vn()),
                kn = (0, o.ZP)(a.Z).withConfig({ componentId: "sc-df614688-2" })(wn());
            function Cn() {
                return (0, r.jsx)(u.Z, {
                    children: (0, r.jsx)(yn, {
                        children: (0, r.jsxs)(Zn, {
                            flex: "1",
                            gridRowGap: "60px",
                            children: [
                                (0, r.jsx)(mn, {}),
                                (0, r.jsx)(j, {}),
                                (0, r.jsxs)(kn, { flex: "1", gridTemplateColumns: "1fr 1fr", gridColumnGap: "52px", children: [(0, r.jsx)(w, {}), (0, r.jsx)(Z, {})] }),
                                (0, r.jsx)(T, {}),
                                (0, r.jsxs)(kn, { flex: "1", gridTemplateColumns: "1fr 1fr", gridColumnGap: "50px", children: [(0, r.jsx)($, {}), (0, r.jsx)(K, {})] }),
                                (0, r.jsxs)(kn, { flex: "1", gridTemplateColumns: "1fr 1fr", gridColumnGap: "50px", children: [(0, r.jsx)(V, {}), (0, r.jsx)(un, {})] }),
                            ],
                        }),
                    }),
                });
            }
            var Sn = !0,
                On = function (n) {
                    var e = n.totalTx30Days,
                        t = n.addressCount30Days,
                        o = n.tvl;
                    return (0, r.jsx)(i.J$, { value: { fallback: { totalTx30Days: e, addressCount30Days: t, tvl: o } }, children: (0, r.jsx)(Cn, {}) });
                };
        },
        56938: function (n, e, t) {
            "use strict";
            t.d(e, {
                ZK: function () {
                    return y;
                },
                dJ: function () {
                    return v;
                },
                uN: function () {
                    return w;
                },
                Dp: function () {
                    return b;
                },
                c_: function () {
                    return j;
                },
                QG: function () {
                    return Z;
                },
            });
            var r = t(67294),
                i = t(77044),
                o = t(25617),
                c = t(77586),
                a = t(69165),
                u = t(11676),
                l = t(44431),
                s = t.n(l),
                d = t(68697);
            function f(n, e, t) {
                return e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (n[e] = t), n;
            }
            var p = function (n) {
                    return n.lottery.userLotteryData;
                },
                x = function (n) {
                    return n.lottery.lotteriesData;
                },
                h = (0, d.P1)(
                    [
                        function (n) {
                            return n.lottery.maxNumberTicketsPerBuyOrClaim;
                        },
                    ],
                    function (n) {
                        return new (s())(n);
                    }
                ),
                g = (0, d.P1)(
                    [
                        function (n) {
                            return n.lottery.currentRound;
                        },
                    ],
                    function (n) {
                        var e = n.priceTicketInUSDT,
                            t = n.discountDivisor,
                            r = n.amountCollectedInTMF,
                            i = n.amountInjectedInTMF;
                        return (function (n) {
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
                                        f(n, e, t[e]);
                                    });
                            }
                            return n;
                        })({}, n, { priceTicketInUSDT: new (s())(e), discountDivisor: new (s())(t), amountCollectedInTMF: new (s())(r), amountInjectedInTMF: new (s())(i) });
                    }
                ),
                m = (0, d.P1)(
                    [
                        g,
                        function (n) {
                            return n.lottery.isTransitioning;
                        },
                        function (n) {
                            return n.lottery.currentLotteryId;
                        },
                        p,
                        x,
                        h,
                    ],
                    function (n, e, t, r, i, o) {
                        return { currentLotteryId: t, maxNumberTicketsPerBuyOrClaim: o, isTransitioning: e, userLotteryData: r, lotteriesData: i, currentRound: n };
                    }
                ),
                b = function () {
                    return (0, o.v9)(function (n) {
                        return n.lottery.userLotteryData;
                    });
                },
                j = function (n) {
                    var e = (0, r.useMemo)(
                        function () {
                            return (function (n) {
                                return (0, d.P1)([p], function (e) {
                                    return e.rounds.find(function (e) {
                                        return e.lotteryId === n;
                                    });
                                });
                            })(n);
                        },
                        [n]
                    );
                    return (0, o.v9)(e);
                },
                v = function () {
                    return (0, o.v9)(function (n) {
                        return n.lottery.lotteriesData;
                    });
                },
                w = function (n) {
                    var e = (0, r.useMemo)(
                        function () {
                            return (function (n) {
                                return (0, d.P1)([x], function (e) {
                                    return null === e || void 0 === e
                                        ? void 0
                                        : e.find(function (e) {
                                              return e.id === n;
                                          });
                                });
                            })(n);
                        },
                        [n]
                    );
                    return (0, o.v9)(e);
                },
                y = function () {
                    var n = (0, i.Ge)().account,
                        e = (0, c.TL)(),
                        t = (0, o.v9)(function (n) {
                            return n.lottery.currentLotteryId;
                        });
                    (0, r.useEffect)(
                        function () {
                            e((0, u.kC)());
                        },
                        [e]
                    ),
                        (0, a.a)(
                            function () {
                                t &&
                                    (0, o.dC)(function () {
                                        e((0, u.S5)({ currentLotteryId: t })), e((0, u.PU)({ currentLotteryId: t }));
                                    });
                            },
                            [e, t]
                        ),
                        (0, r.useEffect)(
                            function () {
                                n && t && e((0, u.w5)({ account: n, currentLotteryId: t }));
                            },
                            [e, t, n]
                        );
                },
                Z = function () {
                    return (0, o.v9)(m);
                };
        },
        13766: function (n, e, t) {
            "use strict";
            t.d(e, {
                Z: function () {
                    return p;
                },
            });
            var r = t(85893),
                i = t(54739),
                o = t(19532),
                c = t(64690),
                a = t(81313);
            function u(n, e, t) {
                return e in n ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (n[e] = t), n;
            }
            function l(n) {
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
                            u(n, e, t[e]);
                        });
                }
                return n;
            }
            function s(n, e) {
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
            function d() {
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
                    (d = function () {
                        return t;
                    }),
                    t
                );
            }
            var f = i.ZP.div.withConfig({ componentId: "sc-808467fc-0" })(
                    d(),
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
                p = function (n) {
                    var e = n.children,
                        t = n.removePadding,
                        i = void 0 !== t && t,
                        u = (n.hideFooterOnDesktop, n.noMinHeight),
                        d = void 0 !== u && u,
                        p = n.helpUrl,
                        x = (void 0 === p && a.SO, s(n, ["children", "removePadding", "hideFooterOnDesktop", "noMinHeight", "helpUrl"]));
                    return (0, r.jsxs)(r.Fragment, { children: [(0, r.jsx)(c.V, {}), (0, r.jsxs)(f, l({ $removePadding: i, $noMinHeight: d }, x, { children: [e, (0, r.jsx)(o.Z, { flexGrow: 1 })] }))] });
                };
        },
    },
    function (n) {
        n.O(0, [9774, 2888, 179], function () {
            return (e = 48312), n((n.s = e));
            var e;
        });
        var e = n.O();
        _N_E = e;
    },
]);
