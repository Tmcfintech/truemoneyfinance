(self.__BUILD_MANIFEST = (function (s, c, t, a, e, i, n, d, o, f, u, r, k, b, h, p, j, l, g, y, m, v, A, _, I, q, B, F, w, D, E, L, M, N, S, T, U, C, x, P, z, G, H, J, K, O, Q, R, V, W) {
    return {
        __rewrites: {
            beforeFiles: [],
            afterFiles: [
                { source: "/info/token/:address", destination: "/info/tokens/:address" },
                { source: "/info/pool/:address", destination: T },
                { source: "/info/pair/:address", destination: T },
            ],
            fallback: [],
        },
        "/": ["static/chunks/pages/index-d68832dedff162cb.js"],
        "/404": ["static/chunks/pages/404-ffdbdc25c632636b.js"],
        "/_error": ["static/chunks/pages/_error-15985f1273587a17.js"],
        "/account": ["static/chunks/8130-88b42ae37b0a7e62.js", "static/chunks/pages/account-c4d0f840d8c9da50.js"],
        "/add/[[...currency]]": [d, o, k, m, i, f, b, v, A, "static/chunks/pages/add/[[...currency]]-48d73abeffd3ef81.js"],
        "/calculator": [i, "static/chunks/pages/calculator-947e2f78fd32195a.js"],
        "/competition": [a, s, q, "static/chunks/pages/competition-c04b35180719ec53.js"],
        "/create-profile": ["static/chunks/3502-b28d94511b4ed17f.js", c, h, "static/chunks/pages/create-profile-16e6f17906c0c9ae.js"],
        "/farms": [e, t, u, p, j, l, U, "static/chunks/pages/farms-7d13a582d5be18c3.js"],
        "/farms/auction": [e, c, q, C, x, "static/chunks/pages/farms/auction-af55b09ab596d8da.js"],
        "/farms/history": [e, t, u, p, j, l, U, "static/chunks/pages/farms/history-bfdbc1672dbe07e6.js"],
        "/find": [d, o, k, i, f, b, A, "static/chunks/pages/find-a37ce7c927ae8a0a.js"],
        "/ifo": [e, s, c, t, u, p, _, B, P, "static/chunks/pages/ifo-4106f5e8c600acf6.js"],
        "/ifo/history": [s, c, u, _, P, "static/chunks/pages/ifo/history-37ddac2eef7b3541.js"],
        "/info": [r, F, w, g, D, E, "static/chunks/pages/info-251a72bc8f542a79.js"],
        "/info/pools": [r, g, "static/chunks/pages/info/pools-e6baad49908c4cfd.js"],
        "/info/pools/[address]": [r, F, w, g, D, E, "static/chunks/pages/info/pools/[address]-18ec715d1aab9419.js"],
        "/info/tokens": [r, g, "static/chunks/pages/info/tokens-3ea2b9420e549429.js"],
        "/info/tokens/[address]": [r, F, w, g, D, E, "static/chunks/pages/info/tokens/[address]-2e69c66defe46ea6.js"],
        "/limit-orders": [d, o, r, k, m, i, f, b, v, z, "static/chunks/pages/limit-orders-b0b40ce77c63f994.js"],
        "/liquidity": [d, o, i, f, A, "static/chunks/pages/liquidity-8cf59307dbe485d1.js"],
        "/lottery": [e, "static/chunks/8037-4b183413beaf1be5.js", c, t, x, "static/chunks/pages/lottery-9dffd00067a934d5.js"],
        "/nfts": [a, s, n, y, q, "static/chunks/pages/nfts-82ff10c20cef3600.js"],
        "/nfts/activity": [s, n, L, "static/chunks/1326-ae28449847d49d01.js", G, "static/chunks/pages/nfts/activity-f9509fcd4e88e096.js"],
        "/nfts/collections": [a, s, n, y, j, "static/chunks/pages/nfts/collections-22a50e252a4c5453.js"],
        "/nfts/collections/[collectionAddress]": [a, "static/chunks/7079-d5fe7361dc9afaa2.js", s, n, y, G, "static/chunks/pages/nfts/collections/[collectionAddress]-c5b36e3a499995b6.js"],
        "/nfts/collections/[collectionAddress]/[tokenId]": [a, H, s, c, n, y, h, I, L, J, K, "static/chunks/pages/nfts/collections/[collectionAddress]/[tokenId]-c05cf28f9b2aaa71.js"],
        "/nfts/profile": ["static/chunks/pages/nfts/profile-73e9700f6b348577.js"],
        "/nfts/profile/[accountAddress]": [a, s, c, n, y, h, I, M, J, "static/chunks/pages/nfts/profile/[accountAddress]-c1d8f74de47e5567.js"],
        "/nfts/profile/[accountAddress]/achievements": [a, c, h, I, M, O, "static/chunks/pages/nfts/profile/[accountAddress]/achievements-fe9dca63f18439d7.js"],
        "/nfts/profile/[accountAddress]/activity": [a, s, c, n, h, I, L, M, "static/chunks/pages/nfts/profile/[accountAddress]/activity-da2cce45b21240aa.js"],
        "/pancake-squad": [c, "static/chunks/pages/pancake-squad-04536b22fd3ed5ea.js"],
        "/play": ["static/chunks/pages/play-81c7d304f3d67765.js"],
        "/pools": [e, s, t, u, p, j, l, _, B, Q, "static/chunks/pages/pools-6b74c4051a4ca8ed.js"],
        "/pools/history": [e, s, t, u, p, j, l, _, B, Q, "static/chunks/pages/pools/history-cdb4c297d3411398.js"],
        "/prediction": [e, H, s, l, K, "static/chunks/pages/prediction-f3ee331c6c9e7045.js"],
        "/prediction/leaderboard": [s, C, "static/chunks/pages/prediction/leaderboard-ea4076a48a0c13c5.js"],
        "/remove/[[...currency]]": [d, o, k, m, i, f, b, v, A, "static/chunks/pages/remove/[[...currency]]-feec240ab54d66c9.js"],
        "/swap": [d, o, k, m, i, f, b, v, z, "static/chunks/pages/swap-f57171808710ae4b.js"],
        "/teams": ["static/chunks/pages/teams-7e59054c2f68029e.js"],
        "/teams/[id]": [O, "static/chunks/pages/teams/[id]-d5505225d78fe02f.js"],
        "/voting": [N, "static/chunks/6584-ef87dcd52a0cda73.js", t, S, R, "static/chunks/pages/voting-4ae8837aba00ad88.js"],
        "/voting/proposal/create": [N, V, "static/css/33c54bd7bbd63d61.css", "static/chunks/8960-04ee4d08c7e04538.js", t, S, W, "static/chunks/pages/voting/proposal/create-e0d21d4686e4821b.js"],
        "/voting/proposal/[id]": [N, V, t, S, W, R, "static/chunks/pages/voting/proposal/[id]-6cc50a3e3432b123.js"],
        sortedPages: [
            "/",
            "/404",
            "/_app",
            "/_error",
            "/account",
            "/add/[[...currency]]",
            "/calculator",
            "/competition",
            "/create-profile",
            "/farms",
            "/farms/auction",
            "/farms/history",
            "/find",
            "/ifo",
            "/ifo/history",
            "/info",
            "/info/pools",
            "/info/pools/[address]",
            "/info/tokens",
            "/info/tokens/[address]",
            "/limit-orders",
            "/liquidity",
            "/lottery",
            "/nfts",
            "/nfts/activity",
            "/nfts/collections",
            "/nfts/collections/[collectionAddress]",
            "/nfts/collections/[collectionAddress]/[tokenId]",
            "/nfts/profile",
            "/nfts/profile/[accountAddress]",
            "/nfts/profile/[accountAddress]/achievements",
            "/nfts/profile/[accountAddress]/activity",
            "/pancake-squad",
            "/play",
            "/pools",
            "/pools/history",
            "/prediction",
            "/prediction/leaderboard",
            "/remove/[[...currency]]",
            "/swap",
            "/teams",
            "/teams/[id]",
            "/voting",
            "/voting/proposal/create",
            "/voting/proposal/[id]",
        ],
    };
})(
    "static/chunks/6832-53e133abadc7158b.js",
    "static/chunks/1148-2990a55f3ac62e6d.js",
    "static/chunks/5242-2b0c312b620aa01e.js",
    "static/chunks/5675-3769acd6d41920d3.js",
    "static/chunks/7857-3a9b0222f12d09ad.js",
    "static/chunks/2949-7b049dd334a72b6d.js",
    "static/chunks/167-9fa22e86e8e6d2d0.js",
    "static/chunks/9539-b5beb029cdffbe07.js",
    "static/chunks/1843-e982a575f1ffcd70.js",
    "static/chunks/5115-83fe4de91bc24cd9.js",
    "static/chunks/6672-f692e207657b14da.js",
    "static/chunks/2077-930a204c877fd795.js",
    "static/chunks/1314-0ea8f338c0a7c9d2.js",
    "static/chunks/761-58b1e3d8ce7d933b.js",
    "static/chunks/272-d53b55cab384fbbf.js",
    "static/chunks/8856-addb213c22be9c52.js",
    "static/chunks/6455-b72d7afc74225f36.js",
    "static/chunks/9275-05174af135ba4231.js",
    "static/chunks/1564-4cbf8e2315c9b4f2.js",
    "static/chunks/8831-2595b05120ca898b.js",
    "static/chunks/5855-bc6dfe18e5782325.js",
    "static/chunks/649-7c6456d60220f7ec.js",
    "static/chunks/9993-c319cabeae59fbc5.js",
    "static/chunks/117-d2223b84bccd9ee0.js",
    "static/chunks/4422-a4851c4e141b494c.js",
    "static/chunks/5968-402f6caffb50c47b.js",
    "static/chunks/5088-330ed89025b97a8f.js",
    "static/chunks/4496-f8df471cd1fd9757.js",
    "static/chunks/2452-6c906befe7b42f66.js",
    "static/chunks/5840-bfe63bbb8b5adde1.js",
    "static/chunks/2828-20971799ee375dba.js",
    "static/chunks/5718-0e3fde6f50bd9d9a.js",
    "static/chunks/1198-7e77605cfe5572e6.js",
    "static/chunks/2298-51f412835f1a2267.js",
    "static/chunks/7558-ad86b429360bbff5.js",
    "/info/pools/:address",
    "static/chunks/8432-d61fedd48afb195c.js",
    "static/chunks/7004-fe1c1b6c45fea729.js",
    "static/chunks/7978-5099d9f6095f0505.js",
    "static/chunks/7158-d96c815aa259aeb1.js",
    "static/chunks/619-1dd48a0b8c268125.js",
    "static/chunks/6514-e0fcc8e09491cf4d.js",
    "static/chunks/3292-50e58d81f5bafe6a.js",
    "static/chunks/6887-c93a3f669f07ce61.js",
    "static/css/34cca8c9ebe3665f.css",
    "static/chunks/5688-b86f17c6e8dc88e9.js",
    "static/chunks/4511-c2d3413a0d0b5429.js",
    "static/chunks/5329-8f1b640a42cea41d.js",
    "static/chunks/3919-ccf03e44b5814c44.js",
    "static/chunks/4103-6764171e49fa8a3c.js"
)),
    self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB();
