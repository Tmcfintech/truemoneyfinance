(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5481],
    {
        53552: function (n, e, t) {
            (window.__NEXT_P = window.__NEXT_P || []).push([
                "/calculator",
                function () {
                    return t(53057);
                },
            ]);
        },
        53057: function (n, e, t) {
            "use strict";
            t.r(e),
                t.d(e, {
                    default: function () {
                        return _;
                    },
                });
            var r = t(85893),
                i = t(67294),
                o = t(14141),
                c = t(19532),
                l = t(42755),
                a = t(67602),
                s = t(7867),
                d = t(45932);
            function u(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, { raw: { value: Object.freeze(e) } }));
            }
            function p() {
                var n = u(["\n  position: relative;\n  flex-direction: column;\n  justify-content: space-between;\n  padding: 0 25px 30px;\n"]);
                return (
                    (p = function () {
                        return n;
                    }),
                    n
                );
            }
            function x() {
                var n = u(["\n          :hover {\n            cursor: pointer;\n            opacity: 0.8;\n          }\n        "]);
                return (
                    (x = function () {
                        return n;
                    }),
                    n
                );
            }
            function f() {
                var n = u(["\n  padding: 2px;\n\n  ", "\n"]);
                return (
                    (f = function () {
                        return n;
                    }),
                    n
                );
            }
            function h() {
                var n = u(["\n  color: ", ";\n"]);
                return (
                    (h = function () {
                        return n;
                    }),
                    n
                );
            }
            function b() {
                var n = u([
                    "\n  height: 22px;\n  width: 22px;\n  background-color: ",
                    ";\n  border: none;\n  border-radius: 50%;\n  padding: 0.2rem;\n  font-size: 0.875rem;\n  font-weight: 400;\n  margin-left: 0.4rem;\n  cursor: pointer;\n  color: ",
                    ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  float: right;\n\n  :hover {\n    background-color: ",
                    ";\n  }\n  :focus {\n    background-color: ",
                    ";\n    outline: none;\n  }\n",
                ]);
                return (
                    (b = function () {
                        return n;
                    }),
                    n
                );
            }
            function g() {
                var n = u(["\n  width: 220px;\n"]);
                return (
                    (g = function () {
                        return n;
                    }),
                    n
                );
            }
            function m() {
                var n = u([
                    "\n  background-color: ",
                    ";\n  border-radius: 1rem;\n  display: flex;\n  align-items: center;\n  font-size: 0.825rem;\n  width: 100%;\n  padding: 3rem 1.25rem 1rem 1rem;\n  margin-top: -2rem;\n  color: ",
                    ";\n  z-index: -1;\n  p {\n    padding: 0;\n    margin: 0;\n    font-weight: 500;\n  }\n",
                ]);
                return (
                    (m = function () {
                        return n;
                    }),
                    n
                );
            }
            function j() {
                var n = u(["\n  background-color: ", ";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 12px;\n  border-radius: 12px;\n  min-width: 48px;\n  height: 48px;\n"]);
                return (
                    (j = function () {
                        return n;
                    }),
                    n
                );
            }
            function y() {
                var n = u(["\n  background-color: ", ";\n  padding: 0.5rem;\n  border-radius: 12px;\n  margin-top: 8px;\n"]);
                return (
                    (y = function () {
                        return n;
                    }),
                    n
                );
            }
            var w = (0, o.ZP)(c.Z).withConfig({ componentId: "sc-38713282-0" })(p());
            o.ZP.div.withConfig({ componentId: "sc-38713282-1" })(f(), function (n) {
                return n.clickable ? (0, o.iv)(x()) : null;
            }),
                (0, o.ZP)(a.Z).withConfig({ componentId: "sc-38713282-2" })(h(), function (n) {
                    var e = n.theme,
                        t = n.severity;
                    return 3 === t || 4 === t ? e.colors.failure : 2 === t ? e.colors.warning : 1 === t ? e.colors.text : e.colors.success;
                }),
                o.ZP.button.withConfig({ componentId: "sc-38713282-3" })(
                    b(),
                    function (n) {
                        return n.theme.colors.background;
                    },
                    function (n) {
                        return n.theme.colors.text;
                    },
                    function (n) {
                        return n.theme.colors.dropdown;
                    },
                    function (n) {
                        return n.theme.colors.dropdown;
                    }
                ),
                (0, o.ZP)(a.Z).attrs({ ellipsis: !0 }).withConfig({ componentId: "sc-38713282-4" })(g()),
                o.ZP.div.withConfig({ componentId: "sc-38713282-5" })(
                    m(),
                    function (n) {
                        var e = n.theme;
                        return "".concat(e.colors.failure, "33");
                    },
                    function (n) {
                        return n.theme.colors.failure;
                    }
                ),
                o.ZP.div.withConfig({ componentId: "sc-38713282-6" })(j(), function (n) {
                    var e = n.theme;
                    return "".concat(e.colors.failure, "33");
                });
            (0, o.ZP)(d.Tz).withConfig({ componentId: "sc-38713282-7" })(y(), function (n) {
                var e = n.theme;
                return "".concat(e.colors.warning, "33");
            });
            var v = t(84866),
                Z = t(46230),
                C = t(13766);
            function k(n, e) {
                return e || (e = n.slice(0)), Object.freeze(Object.defineProperties(n, { raw: { value: Object.freeze(e) } }));
            }
            function S() {
                var n = k([
                    "\n  border: 1px solid #f2f2f2;\n  border-bottom: 0;\n  border-right: 0;\n  border-radius: 16px;\n  background: linear-gradient(95.13deg, rgba(22, 24, 48, 0.25) 0%, rgba(46, 51, 92, 0.25) 100%);\n  box-shadow: 5px 5px 7px -5px #000;\n  padding: 10px 16px 20px;\n  margin-bottom: 16px;\n  @media (max-width: 360px) {\n    div {\n      font-size: 12px;\n    }\n  }\n",
                ]);
                return (
                    (S = function () {
                        return n;
                    }),
                    n
                );
            }
            function z() {
                var n = k([
                    "\n  border: 1px solid #f2f2f2;\n  border-bottom: 0;\n  border-right: 0;\n  border-radius: 16px;\n  background: linear-gradient(95.13deg, rgba(22, 24, 48, 0.25) 0%, rgba(46, 51, 92, 0.25) 100%);\n  box-shadow: 5px 5px 7px -5px #000;\n  padding: 10px 16px 20px;\n  margin-bottom: 16px;\n  @media (max-width: 425px) {\n    padding-left: 4px;\n    padding-right: 4px;\n  }\n  @media (max-width: 360px) {\n    padding-left: 0px;\n    padding-right: 0px;\n    div {\n      font-size: 12px;\n    }\n  }\n",
                ]);
                return (
                    (z = function () {
                        return n;
                    }),
                    n
                );
            }
            function I() {
                var n = k(["\n    flex-direction: column;\n    align-items: center;\n    padding: 30px 25px 20px 25px;\n    width: 100%;\n    padding-bottom: 18px;\n    // border-bottom: 1px solid ", ";\n  "]);
                return (
                    (I = function () {
                        return n;
                    }),
                    n
                );
            }
            var P = o.ZP.div.withConfig({ componentId: "sc-d85e20c4-0" })(S()),
                T = o.ZP.div.withConfig({ componentId: "sc-d85e20c4-1" })(z());
            function F() {
                var n = (0, s.$G)().t,
                    e = (0, i.useState)(null),
                    t = e[0],
                    u = e[1],
                    p = (0, i.useState)(null),
                    x = p[0],
                    f = p[1],
                    h = (0, i.useState)(null),
                    b = h[0],
                    g = h[1],
                    m = (0, i.useState)(null),
                    j = m[0],
                    y = m[1],
                    k = (0, Z.C)(function (n) {
                        var e;
                        return null === (e = n.app.loading) || void 0 === e || e;
                    }),
                    S = (0, Z.C)(function (n) {
                        return n.app.marketPrice;
                    });
                (0, i.useEffect)(
                    function () {
                        y(30), S && f(S.toFixed(3)), S && g(S.toFixed(3));
                    },
                    [S]
                );
                var z = (0, Z.C)(function (n) {
                        return n.account.balances.tmf;
                    }),
                    F = (0, o.ZP)(c.Z).withConfig({ componentId: "sc-d85e20c4-2" })(I(), function (n) {
                        return n.theme.colors.cardBorder;
                    });
                return (0, r.jsx)(C.Z, {
                    removePadding: !0,
                    style: { backgroundImage: "url(images/background.png)", backgroundColor: "#040404", backgroundPosition: "center bottom", backgroundSize: "100% cover" },
                    children: (0, r.jsxs)("div", {
                        style: { position: "relative", maxWidth: "455px", width: "100%", marginTop: "32px" },
                        children: [
                            (0, r.jsx)("div", {
                                style: { position: "absolute", background: "linear-gradient(to right, #00ffd1, #00f0ff, #ff00f9)", opacity: "0.25", filter: "blur(15px)", height: "100%", width: "100%", borderRadius: "16px" },
                            }),
                            (0, r.jsx)("div", {
                                style: { margin: 4 },
                                children: (0, r.jsxs)(v.j, {
                                    children: [
                                        (0, r.jsxs)(F, {
                                            children: [
                                                (0, r.jsx)(c.Z, {
                                                    width: "100%",
                                                    alignItems: "center",
                                                    justifyContent: "space-between",
                                                    children: (0, r.jsx)(c.Z, { flexDirection: "column", alignItems: "flex-start", width: "100%", mr: 18, children: (0, r.jsx)(l.Z, { as: "h2", children: "Calculator" }) }),
                                                }),
                                                (0, r.jsx)(c.Z, { width: "100%", alignItems: "center", paddingTop: "6px", children: (0, r.jsx)(a.Z, { color: "textSubtle", fontSize: "14px", children: "Estimate your return." }) }),
                                            ],
                                        }),
                                        (0, r.jsx)(w, {
                                            id: "swap-page",
                                            children: (0, r.jsxs)(d.Tz, {
                                                gap: "sm",
                                                children: [
                                                    (0, r.jsxs)(P, {
                                                        children: [
                                                            (0, r.jsxs)(c.Z, {
                                                                mb: "6px",
                                                                alignItems: "center",
                                                                justifyContent: "space-between",
                                                                children: [
                                                                    (0, r.jsx)(a.Z, { children: "TMF amount" }),
                                                                    (0, r.jsx)(a.Z, {
                                                                        onClick: function () {
                                                                            u((1 * z).toFixed(2));
                                                                        },
                                                                        color: "textSubtle",
                                                                        fontSize: "14px",
                                                                        style: { display: "inline", cursor: "pointer" },
                                                                        children: k ? "-" : n("Balance: %balance%", { balance: (1 * z).toFixed(2) }),
                                                                    }),
                                                                ],
                                                            }),
                                                            (0, r.jsx)(c.Z, {
                                                                children: (0, r.jsx)("div", {
                                                                    style: { display: "block" },
                                                                    children: (0, r.jsx)("input", {
                                                                        type: "text",
                                                                        value: t,
                                                                        onChange: function (n) {
                                                                            u(n.target.value);
                                                                        },
                                                                        style: { width: "100%", fontSize: "20px", color: "white", backgroundColor: "transparent", borderColor: "transparent", outline: "transparent" },
                                                                        title: "Token Amount",
                                                                        pattern: "^[0-9]*[.,]?[0-9]*$",
                                                                        placeholder: "0.0",
                                                                    }),
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, r.jsxs)(P, {
                                                        children: [
                                                            (0, r.jsxs)(c.Z, {
                                                                mb: "6px",
                                                                alignItems: "center",
                                                                justifyContent: "space-between",
                                                                children: [
                                                                    (0, r.jsx)(a.Z, { children: "Purchase price" }),
                                                                    (0, r.jsx)(a.Z, {
                                                                        onClick: function () {
                                                                            f((1 * S).toFixed(3));
                                                                        },
                                                                        color: "textSubtle",
                                                                        fontSize: "14px",
                                                                        style: { display: "inline", cursor: "pointer" },
                                                                        children: k ? "-" : n("%balance%", { balance: (1 * S).toFixed(3) }),
                                                                    }),
                                                                ],
                                                            }),
                                                            (0, r.jsx)(c.Z, {
                                                                children: (0, r.jsx)("div", {
                                                                    style: { display: "block" },
                                                                    children: (0, r.jsx)("input", {
                                                                        type: "text",
                                                                        value: x,
                                                                        onChange: function (n) {
                                                                            f(n.target.value);
                                                                        },
                                                                        style: { width: "100%", fontSize: "20px", color: "white", backgroundColor: "transparent", borderColor: "transparent", outline: "transparent" },
                                                                        title: "Token Amount",
                                                                        pattern: "^[0-9]*[.,]?[0-9]*$",
                                                                        placeholder: "0.0",
                                                                    }),
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, r.jsxs)(P, {
                                                        children: [
                                                            (0, r.jsxs)(c.Z, {
                                                                mb: "6px",
                                                                alignItems: "center",
                                                                justifyContent: "space-between",
                                                                children: [
                                                                    (0, r.jsx)(a.Z, { children: "Future price" }),
                                                                    (0, r.jsx)(a.Z, {
                                                                        onClick: function () {
                                                                            f((1 * S).toFixed(3));
                                                                        },
                                                                        color: "textSubtle",
                                                                        fontSize: "14px",
                                                                        style: { display: "inline", cursor: "pointer" },
                                                                        children: k ? "-" : n("%balance%", { balance: (1 * S).toFixed(3) }),
                                                                    }),
                                                                ],
                                                            }),
                                                            (0, r.jsx)(c.Z, {
                                                                children: (0, r.jsx)("div", {
                                                                    style: { display: "block" },
                                                                    children: (0, r.jsx)("input", {
                                                                        type: "text",
                                                                        value: b,
                                                                        onChange: function (n) {
                                                                            g(n.target.value);
                                                                        },
                                                                        style: { width: "100%", fontSize: "20px", color: "white", backgroundColor: "transparent", borderColor: "transparent", outline: "transparent" },
                                                                        title: "Token Amount",
                                                                        pattern: "^[0-9]*[.,]?[0-9]*$",
                                                                        placeholder: "0.0",
                                                                    }),
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, r.jsxs)(P, {
                                                        children: [
                                                            (0, r.jsxs)(c.Z, {
                                                                mb: "6px",
                                                                alignItems: "center",
                                                                justifyContent: "space-between",
                                                                children: [
                                                                    (0, r.jsx)(a.Z, { style: { flexGrow: 1 }, children: "How many days?" }),
                                                                    (0, r.jsx)(a.Z, {
                                                                        onClick: function () {
                                                                            y(7);
                                                                        },
                                                                        color: "textSubtle",
                                                                        fontSize: "14px",
                                                                        style: { display: "inline", cursor: "pointer", marginRight: "8px" },
                                                                        children: k ? "-" : n("%balance%", { balance: 7 }),
                                                                    }),
                                                                    (0, r.jsx)(a.Z, {
                                                                        onClick: function () {
                                                                            y(15);
                                                                        },
                                                                        color: "textSubtle",
                                                                        fontSize: "14px",
                                                                        style: { display: "inline", cursor: "pointer", marginRight: "8px" },
                                                                        children: k ? "-" : n("%balance%", { balance: 15 }),
                                                                    }),
                                                                    (0, r.jsx)(a.Z, {
                                                                        onClick: function () {
                                                                            y(30);
                                                                        },
                                                                        color: "textSubtle",
                                                                        fontSize: "14px",
                                                                        style: { display: "inline", cursor: "pointer", marginRight: "8px" },
                                                                        children: k ? "-" : n("%balance%", { balance: 30 }),
                                                                    }),
                                                                    (0, r.jsx)(a.Z, {
                                                                        onClick: function () {
                                                                            y(60);
                                                                        },
                                                                        color: "textSubtle",
                                                                        fontSize: "14px",
                                                                        style: { display: "inline", cursor: "pointer", marginRight: "8px" },
                                                                        children: k ? "-" : n("%balance%", { balance: 60 }),
                                                                    }),
                                                                    (0, r.jsx)(a.Z, {
                                                                        onClick: function () {
                                                                            y(90);
                                                                        },
                                                                        color: "textSubtle",
                                                                        fontSize: "14px",
                                                                        style: { display: "inline", cursor: "pointer", marginRight: "8px" },
                                                                        children: k ? "-" : n("%balance%", { balance: 90 }),
                                                                    }),
                                                                    (0, r.jsx)(a.Z, {
                                                                        onClick: function () {
                                                                            y(180);
                                                                        },
                                                                        color: "textSubtle",
                                                                        fontSize: "14px",
                                                                        style: { display: "inline", cursor: "pointer", marginRight: "8px" },
                                                                        children: k ? "-" : n("%balance%", { balance: 180 }),
                                                                    }),
                                                                    (0, r.jsx)(a.Z, {
                                                                        onClick: function () {
                                                                            y(365);
                                                                        },
                                                                        color: "textSubtle",
                                                                        fontSize: "14px",
                                                                        style: { display: "inline", cursor: "pointer" },
                                                                        children: k ? "-" : n("%balance%", { balance: 365 }),
                                                                    }),
                                                                ],
                                                            }),
                                                            (0, r.jsx)(c.Z, {
                                                                children: (0, r.jsx)("div", {
                                                                    style: { display: "block" },
                                                                    children: (0, r.jsx)("input", {
                                                                        type: "text",
                                                                        value: j,
                                                                        onChange: function (n) {
                                                                            y(n.target.value);
                                                                        },
                                                                        style: { width: "100%", fontSize: "20px", color: "white", backgroundColor: "transparent", borderColor: "transparent", outline: "transparent" },
                                                                        title: "Token Amount",
                                                                        pattern: "^[0-9]*[.,]?[0-9]*$",
                                                                        placeholder: "0.0",
                                                                    }),
                                                                }),
                                                            }),
                                                        ],
                                                    }),
                                                    (0, r.jsx)(T, {
                                                        style: { background: "transparent", border: "none", boxShadow: "none", paddingBottom: "0px", marginBottom: "0px" },
                                                        children: (0, r.jsxs)(c.Z, {
                                                            mb: "6px",
                                                            alignItems: "center",
                                                            justifyContent: "space-between",
                                                            children: [(0, r.jsx)(a.Z, { children: "APY" }), (0, r.jsx)(a.Z, { color: "textSubtle", fontSize: "14px", style: { display: "inline" }, children: "204,967.16%" })],
                                                        }),
                                                    }),
                                                    (0, r.jsx)(T, {
                                                        style: { background: "transparent", border: "none", boxShadow: "none", paddingBottom: "0px", marginBottom: "0px" },
                                                        children: (0, r.jsxs)(c.Z, {
                                                            mb: "6px",
                                                            alignItems: "center",
                                                            justifyContent: "space-between",
                                                            children: [
                                                                (0, r.jsx)(a.Z, { children: "Initial investment" }),
                                                                (0, r.jsxs)(a.Z, { color: "textSubtle", fontSize: "14px", style: { display: "inline" }, children: ["$", (t * x).toFixed(2), " USD"] }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, r.jsx)(T, {
                                                        style: { background: "transparent", border: "none", boxShadow: "none", paddingBottom: "0px", marginBottom: "0px" },
                                                        children: (0, r.jsxs)(c.Z, {
                                                            mb: "6px",
                                                            alignItems: "center",
                                                            justifyContent: "space-between",
                                                            children: [
                                                                (0, r.jsx)(a.Z, { children: "Estimated rewards" }),
                                                                (0, r.jsxs)(a.Z, { color: "textSubtle", fontSize: "14px", style: { display: "inline" }, children: [(t * Math.pow(1.019176, j)).toFixed(2), " TMF"] }),
                                                            ],
                                                        }),
                                                    }),
                                                    (0, r.jsx)(T, {
                                                        style: { background: "transparent", border: "none", boxShadow: "none", paddingBottom: "0px", marginBottom: "0px" },
                                                        children: (0, r.jsxs)(c.Z, {
                                                            mb: "6px",
                                                            alignItems: "center",
                                                            justifyContent: "space-between",
                                                            children: [
                                                                (0, r.jsx)(a.Z, { children: "Potential return" }),
                                                                (0, r.jsxs)(a.Z, { color: "textSubtle", fontSize: "14px", style: { display: "inline" }, children: ["$", (t * Math.pow(1.019176, j) * b).toFixed(2), " USD"] }),
                                                            ],
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                            }),
                        ],
                    }),
                });
            }
            var _ = function () {
                return (0, r.jsx)(F, {});
            };
        },
    },
    function (n) {
        n.O(0, [2949, 9774, 2888, 179], function () {
            return (e = 53552), n((n.s = e));
            var e;
        });
        var e = n.O();
        _N_E = e;
    },
]);
