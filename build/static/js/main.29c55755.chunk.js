(this["webpackJsonptomb.finance"] =
  this["webpackJsonptomb.finance"] || []).push([
  [2],
  {
    105: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      }),
        n.d(t, "c", function () {
          return u;
        }),
        n.d(t, "d", function () {
          return p;
        }),
        n.d(t, "b", function () {
          return s;
        });
      var a = n(55),
        i = Object(a.b)("transactions/addTransaction"),
        u = Object(a.b)("transactions/clearAllTransactions"),
        p = Object(a.b)("transactions/finalizeTransaction"),
        s = Object(a.b)("transactions/checkedTransaction");
    },
    124: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return s;
      }),
        n.d(t, "b", function () {
          return r;
        }),
        n.d(t, "d", function () {
          return o;
        }),
        n.d(t, "a", function () {
          return y;
        });
      var a = n(0),
        i = n(64),
        u = n(58),
        p = n(430);
      function s() {
        var e = Object(p.h)().chainId;
        return Object(u.c)(function (t) {
          return t.application.blockNumber[null !== e && void 0 !== e ? e : -1];
        });
      }
      function r() {
        var e = Object(u.b)();
        return Object(a.useCallback)(
          function (t, n) {
            e(Object(i.a)({ content: t, key: n }));
          },
          [e]
        );
      }
      function o() {
        var e = Object(u.b)();
        return Object(a.useCallback)(
          function (t) {
            e(Object(i.b)({ key: t }));
          },
          [e]
        );
      }
      function y() {
        var e = Object(u.c)(function (e) {
          return e.application.popupList;
        });
        return Object(a.useMemo)(
          function () {
            return e.filter(function (e) {
              return e.show;
            });
          },
          [e]
        );
      }
    },
    127: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return s;
      }),
        n.d(t, "a", function () {
          return r;
        });
      var a = n(265),
        i = n.n(a),
        u = {
          testing: !1,
          autoGasMultiplier: 1.5,
          defaultConfirmations: 1,
          defaultGas: "6000000",
          defaultGasPrice: "1000000000000",
          ethereumNodeTimeout: 1e4,
        },
        p = n(81);
      function s(e, t) {
        var n = Object.assign(u, t || {});
        return new (
          e.includes("wss")
            ? i.a.providers.WebsocketProvider
            : i.a.providers.HttpProvider
        )(e, { timeout: n.ethereumNodeTimeout });
      }
      function r(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
        return Object(p.parseUnits)(String(e), t);
      }
    },
    145: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return p;
      });
      var a = n(98),
        i = n(42),
        u = n(127);
      function p() {
        return new a.ethers.providers.Web3Provider(
          Object(u.b)(i.b.defaultProvider),
          i.b.chainId
        );
      }
    },
    179: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return o;
      });
      var a,
        i = n(27),
        u = n(0),
        p = n.n(u),
        s = n(22),
        r = s.d.div(
          a || (a = Object(i.a)(["\n  color: ", ";\n"])),
          function (e) {
            return e.color;
          }
        ),
        o = function (e) {
          var t,
            n = e.text,
            a = e.variant,
            i = void 0 === a ? "secondary" : a,
            o = e.color,
            y = Object(u.useContext)(s.a).color;
          return (
            o
              ? (t = o)
              : "primary" === i
              ? (t = y.primary.main)
              : ("secondary" === i || "normal" === i) && (t = "#2c2560"),
            p.a.createElement(r, { color: t }, n)
          );
        };
    },
    180: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return P;
      });
      var a = n(0),
        i = n.n(a),
        u = n(411),
        p = n.n(u),
        s = n(412),
        r = n.n(s),
        o = n(413),
        y = n.n(o),
        l = n(414),
        d = n.n(l),
        m = n(415),
        c = n.n(m),
        b = n(416),
        T = n.n(b),
        f = n(417),
        v = n.n(f),
        w = n(418),
        M = n.n(w),
        h = n(419),
        x = n.n(h),
        O = n(420),
        _ = n.n(O),
        g = n(421),
        E = n.n(g),
        k = {
          MBird: p.a,
          TOMBPNG: y.a,
          TSHAREPNG: d.a,
          MShare: r.a,
          Mbond: c.a,
          WFTM: M.a,
          BOO: x.a,
          SHIBA: E.a,
          ZOO: _.a,
          "MBird-POS-LP": T.a,
          "MShare-POS-LP": v.a,
        },
        P = function (e) {
          var t = e.symbol,
            n = e.size,
            a = void 0 === n ? 64 : n;
          if (!k[t]) throw new Error("Invalid Token Logo symbol: ".concat(t));
          return i.a.createElement("img", {
            src: k[t],
            alt: "".concat(t, " Logo"),
            width: a,
            height: a,
          });
        };
    },
    181: function (e, t, n) {
      "use strict";
      var a = n(2),
        i = n.n(a),
        u = n(14),
        p = n(24),
        s = n(0),
        r = n(34),
        o = n(96),
        y = n(42);
      t.a = function (e) {
        var t = Object(s.useState)(r.a.from(0)),
          n = Object(p.a)(t, 2),
          a = n[0],
          l = n[1],
          d = Object(o.a)(),
          m = null === d || void 0 === d ? void 0 : d.isUnlocked,
          c = Object(s.useCallback)(
            Object(u.a)(
              i.a.mark(function t() {
                return i.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (
                          (t.t0 = l), (t.next = 3), e.balanceOf(d.myAccount)
                        );
                      case 3:
                        (t.t1 = t.sent), (0, t.t0)(t.t1);
                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            ),
            [e, d.myAccount]
          );
        return (
          Object(s.useEffect)(
            function () {
              if (m) {
                c().catch(function (e) {
                  return console.error(
                    "Failed to fetch token balance: ".concat(e.stack)
                  );
                });
                var e = setInterval(c, y.b.refreshInterval);
                return function () {
                  return clearInterval(e);
                };
              }
            },
            [m, e, c, d]
          ),
          a
        );
      };
    },
    208: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return F;
      }),
        n.d(t, "a", function () {
          return S;
        });
      var a = n(24),
        i = n(0),
        u = n.n(i),
        p = n(430),
        s = n(2),
        r = n.n(s),
        o = n(14),
        y = n(108),
        l = n(59),
        d = n(6),
        m = n(7),
        c = n(210),
        b = n(116),
        T = n(107),
        f = n(98),
        v = n(34),
        w = n(127),
        M = n(81),
        h = (function () {
          function e(t, n, a) {
            var i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : 18;
            Object(d.a)(this, e),
              (this.contract = void 0),
              (this.address = void 0),
              (this.symbol = void 0),
              (this.decimal = void 0),
              (this.contract = new T.Contract(t, x, n)),
              (this.address = t),
              (this.symbol = a),
              (this.decimal = i);
          }
          return (
            Object(m.a)(e, [
              {
                key: "connect",
                value: function (e) {
                  this.contract = new T.Contract(this.address, x, e);
                },
              },
              {
                key: "estimateGas",
                get: function () {
                  return this.contract.estimateGas;
                },
              },
              {
                key: "totalSupply",
                value: function () {
                  return this.contract.totalSupply();
                },
              },
              {
                key: "balanceOf",
                value: function (e) {
                  return this.contract.balanceOf(e);
                },
              },
              {
                key: "transfer",
                value: function (e, t) {
                  return this.contract.transfer(e, t);
                },
              },
              {
                key: "allowance",
                value: function (e, t) {
                  return this.contract.allowance(e, t);
                },
              },
              {
                key: "approve",
                value: function (e, t) {
                  return this.contract.approve(e, t);
                },
              },
              {
                key: "transferFrom",
                value: function (e, t, n) {
                  return this.contract.transferFrom(e, t, n);
                },
              },
              {
                key: "displayedBalanceOf",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e(t) {
                      var n;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.balanceOf(t);
                              case 2:
                                return (
                                  (n = e.sent),
                                  e.abrupt(
                                    "return",
                                    Object(M.formatUnits)(n, this.decimal)
                                  )
                                );
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "displayedTotalSupply",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e() {
                      var t;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.totalSupply();
                              case 2:
                                return (
                                  (t = e.sent),
                                  e.abrupt(
                                    "return",
                                    Number(
                                      Object(M.formatUnits)(t, this.decimal)
                                    ).toFixed(0)
                                  )
                                );
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
            ]),
            e
          );
        })(),
        x = [
          {
            inputs: [
              { internalType: "string", name: "name", type: "string" },
              { internalType: "string", name: "symbol", type: "string" },
            ],
            stateMutability: "nonpayable",
            type: "constructor",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "owner",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "spender",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Approval",
            type: "event",
          },
          {
            anonymous: !1,
            inputs: [
              {
                indexed: !0,
                internalType: "address",
                name: "from",
                type: "address",
              },
              {
                indexed: !0,
                internalType: "address",
                name: "to",
                type: "address",
              },
              {
                indexed: !1,
                internalType: "uint256",
                name: "value",
                type: "uint256",
              },
            ],
            name: "Transfer",
            type: "event",
          },
          {
            inputs: [],
            name: "name",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "symbol",
            outputs: [{ internalType: "string", name: "", type: "string" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "decimals",
            outputs: [{ internalType: "uint8", name: "", type: "uint8" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [],
            name: "totalSupply",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "account", type: "address" },
            ],
            name: "balanceOf",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "recipient", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transfer",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "owner", type: "address" },
              { internalType: "address", name: "spender", type: "address" },
            ],
            name: "allowance",
            outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
            stateMutability: "view",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "approve",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "sender", type: "address" },
              { internalType: "address", name: "recipient", type: "address" },
              { internalType: "uint256", name: "amount", type: "uint256" },
            ],
            name: "transferFrom",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              { internalType: "uint256", name: "addedValue", type: "uint256" },
            ],
            name: "increaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
          {
            inputs: [
              { internalType: "address", name: "spender", type: "address" },
              {
                internalType: "uint256",
                name: "subtractedValue",
                type: "uint256",
              },
            ],
            name: "decreaseAllowance",
            outputs: [{ internalType: "bool", name: "", type: "bool" }],
            stateMutability: "nonpayable",
            type: "function",
          },
        ],
        O = n(30),
        _ = n(145),
        g = n(398),
        E = n(42),
        k = n(263),
        P = n.n(k),
        A = n(93),
        R = (function () {
          function e(t) {
            Object(d.a)(this, e),
              (this.myAccount = void 0),
              (this.provider = void 0),
              (this.signer = void 0),
              (this.config = void 0),
              (this.contracts = void 0),
              (this.externalTokens = void 0),
              (this.masonryVersionOfUser = void 0),
              (this.TOMBWFTM_LP = void 0),
              (this.MBird = void 0),
              (this.MShare = void 0),
              (this.Mbond = void 0),
              (this.FTM = void 0);
            var n = t.deployments,
              i = t.externalTokens,
              u = Object(_.a)();
            this.contracts = {};
            for (var p = 0, s = Object.entries(n); p < s.length; p++) {
              var r = Object(a.a)(s[p], 2),
                o = r[0],
                y = r[1];
              this.contracts[o] = new T.Contract(y.address, y.abi, u);
            }
            this.externalTokens = {};
            for (var l = 0, m = Object.entries(i); l < m.length; l++) {
              var c = Object(a.a)(m[l], 2),
                b = c[0],
                f = Object(a.a)(c[1], 2),
                v = f[0],
                w = f[1];
              this.externalTokens[b] = new h(v, u, b, w);
            }
            (this.MBird = new h(n.tomb.address, u, "MBird")),
              (this.MShare = new h(n.tShare.address, u, "MShare")),
              (this.Mbond = new h(n.tBond.address, u, "Mbond")),
              (this.FTM = this.externalTokens.WFTM),
              (this.TOMBWFTM_LP = new T.Contract(i["MBird-POS-LP"][0], g, u)),
              (this.config = t),
              (this.provider = u);
          }
          return (
            Object(m.a)(e, [
              {
                key: "unlockWallet",
                value: function (e, t) {
                  var n = this,
                    i = new f.ethers.providers.Web3Provider(
                      e,
                      this.config.chainId
                    );
                  (this.signer = i.getSigner(0)), (this.myAccount = t);
                  for (
                    var u = 0, p = Object.entries(this.contracts);
                    u < p.length;
                    u++
                  ) {
                    var s = Object(a.a)(p[u], 2),
                      r = s[0],
                      o = s[1];
                    this.contracts[r] = o.connect(this.signer);
                  }
                  var d,
                    m = [this.MBird, this.MShare, this.Mbond].concat(
                      Object(l.a)(Object.values(this.externalTokens))
                    ),
                    c = Object(y.a)(m);
                  try {
                    for (c.s(); !(d = c.n()).done; ) {
                      d.value.connect(this.signer);
                    }
                  } catch (b) {
                    c.e(b);
                  } finally {
                    c.f();
                  }
                  (this.TOMBWFTM_LP = this.TOMBWFTM_LP.connect(this.signer)),
                    console.log(
                      "\ud83d\udd13 Wallet is unlocked. Welcome, ".concat(
                        t,
                        "!"
                      )
                    ),
                    this.fetchMasonryVersionOfUser()
                      .then(function (e) {
                        return (n.masonryVersionOfUser = e);
                      })
                      .catch(function (e) {
                        console.error(
                          "Failed to fetch masonry version: ".concat(e.stack)
                        ),
                          (n.masonryVersionOfUser = "latest");
                      });
                },
              },
              {
                key: "isUnlocked",
                get: function () {
                  return !!this.myAccount;
                },
              },
              {
                key: "getTombStat",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e() {
                      var t, n, a, i, u, p, s, o, y, l, d, m;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t = this.contracts),
                                  (n = t.TombFtmRewardPool),
                                  (a = t.TombFtmLpTombRewardPool),
                                  (i = t.TombFtmLpTombRewardPoolOld),
                                  (e.next = 3),
                                  this.MBird.totalSupply()
                                );
                              case 3:
                                return (
                                  (u = e.sent),
                                  (e.next = 6),
                                  this.MBird.balanceOf(n.address)
                                );
                              case 6:
                                return (
                                  (p = e.sent),
                                  (e.next = 9),
                                  this.MBird.balanceOf(a.address)
                                );
                              case 9:
                                return (
                                  (s = e.sent),
                                  (e.next = 12),
                                  this.MBird.balanceOf(i.address)
                                );
                              case 12:
                                return (
                                  (o = e.sent),
                                  (y = u.sub(p).sub(s).sub(o)),
                                  (e.next = 16),
                                  this.getTokenPriceFromPancakeswap(this.MBird)
                                );
                              case 16:
                                return (
                                  (l = e.sent),
                                  (e.next = 19),
                                  this.getWFTMPriceFromPancakeswap()
                                );
                              case 19:
                                return (
                                  (d = e.sent),
                                  (m = (Number(l) * Number(d)).toFixed(2)),
                                  e.abrupt("return", {
                                    tokenInFtm: l,
                                    priceInDollars: m,
                                    totalSupply: Object(O.b)(
                                      u,
                                      this.MBird.decimal,
                                      0
                                    ),
                                    circulatingSupply: Object(O.b)(
                                      y,
                                      this.MBird.decimal,
                                      0
                                    ),
                                  })
                                );
                              case 22:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getLPStat",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e(t) {
                      var n, a, i, u, p, s, o, y, l, d, m, c, b, T;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = this.externalTokens[t]),
                                  (e.next = 3),
                                  n.totalSupply()
                                );
                              case 3:
                                return (
                                  (a = e.sent),
                                  (i = Object(O.b)(a, 18)),
                                  (u = t.startsWith("MBird")
                                    ? this.MBird
                                    : this.MShare),
                                  (p = t.startsWith("MBird")),
                                  (e.next = 9),
                                  u.balanceOf(n.address)
                                );
                              case 9:
                                return (
                                  (s = e.sent),
                                  (o = Object(O.b)(s, 18)),
                                  (e.next = 13),
                                  this.FTM.balanceOf(n.address)
                                );
                              case 13:
                                return (
                                  (y = e.sent),
                                  (l = Object(O.b)(y, 18)),
                                  (d = Number(o) / Number(i)),
                                  (m = Number(l) / Number(i)),
                                  (e.next = 19),
                                  this.getLPTokenPrice(n, u, p)
                                );
                              case 19:
                                return (
                                  (c = e.sent),
                                  (b = Number(c).toFixed(2).toString()),
                                  (T = (Number(i) * Number(c))
                                    .toFixed(2)
                                    .toString()),
                                  e.abrupt("return", {
                                    tokenAmount: d.toFixed(2).toString(),
                                    ftmAmount: m.toFixed(2).toString(),
                                    priceOfOne: b,
                                    totalLiquidity: T,
                                    totalSupply: Number(i)
                                      .toFixed(2)
                                      .toString(),
                                  })
                                );
                              case 23:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getBondStat",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e() {
                      var t, n, a, i, u, p, s;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t = this.contracts.Treasury),
                                  (e.next = 3),
                                  this.getTombStat()
                                );
                              case 3:
                                return (
                                  (n = e.sent),
                                  (e.next = 6),
                                  t.getBondPremiumRate()
                                );
                              case 6:
                                return (
                                  (a = e.sent),
                                  (i = 1),
                                  Object(O.a)(a, this.MBird.decimal) > 0 &&
                                    (i = Object(O.a)(a, this.MBird.decimal)),
                                  (u = (Number(n.tokenInFtm) * i).toFixed(2)),
                                  (p = (Number(n.priceInDollars) * i).toFixed(
                                    2
                                  )),
                                  (e.next = 13),
                                  this.MShare.displayedTotalSupply()
                                );
                              case 13:
                                return (
                                  (s = e.sent),
                                  e.abrupt("return", {
                                    tokenInFtm: u,
                                    priceInDollars: p,
                                    totalSupply: s,
                                    circulatingSupply: s,
                                  })
                                );
                              case 15:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getShareStat",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e() {
                      var t, n, a, i, u, p, s;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t =
                                    this.contracts.TombFtmLPTShareRewardPool),
                                  (e.next = 3),
                                  this.MShare.totalSupply()
                                );
                              case 3:
                                return (
                                  (n = e.sent),
                                  (e.next = 6),
                                  this.getTokenPriceFromPancakeswap(this.MShare)
                                );
                              case 6:
                                return (
                                  (a = e.sent),
                                  (e.next = 9),
                                  this.MShare.balanceOf(t.address)
                                );
                              case 9:
                                return (
                                  (i = e.sent),
                                  (u = n.sub(i)),
                                  (e.next = 13),
                                  this.getWFTMPriceFromPancakeswap()
                                );
                              case 13:
                                return (
                                  (p = e.sent),
                                  (s = (Number(a) * Number(p)).toFixed(2)),
                                  e.abrupt("return", {
                                    tokenInFtm: a,
                                    priceInDollars: s,
                                    totalSupply: Object(O.b)(
                                      n,
                                      this.MShare.decimal,
                                      0
                                    ),
                                    circulatingSupply: Object(O.b)(
                                      u,
                                      this.MShare.decimal,
                                      0
                                    ),
                                  })
                                );
                              case 16:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getTombStatInEstimatedTWAP",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e() {
                      var t, n, a, i, u, p, s;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t = this.contracts),
                                  (n = t.SeigniorageOracle),
                                  (a = t.TombFtmRewardPool),
                                  (e.next = 3),
                                  n.twap(
                                    this.MBird.address,
                                    f.ethers.utils.parseEther("1")
                                  )
                                );
                              case 3:
                                return (
                                  (i = e.sent),
                                  (e.next = 6),
                                  this.MBird.totalSupply()
                                );
                              case 6:
                                return (
                                  (u = e.sent),
                                  (e.next = 9),
                                  this.MBird.balanceOf(a.address)
                                );
                              case 9:
                                return (
                                  (p = e.sent),
                                  (s = u.sub(p)),
                                  e.abrupt("return", {
                                    tokenInFtm: Object(O.b)(i),
                                    priceInDollars: Object(O.b)(i),
                                    totalSupply: Object(O.b)(
                                      u,
                                      this.MBird.decimal,
                                      0
                                    ),
                                    circulatingSupply: Object(O.b)(
                                      s,
                                      this.MBird.decimal,
                                      0
                                    ),
                                  })
                                );
                              case 12:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getTombPriceInLastTWAP",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e() {
                      var t;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t = this.contracts.Treasury),
                                  e.abrupt("return", t.getTombUpdatedPrice())
                                );
                              case 2:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getPoolAPRs",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e(t) {
                      var n, a, i, u, p, s, o, y, l, d, m, c, b;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (void 0 !== this.myAccount) {
                                  e.next = 2;
                                  break;
                                }
                                return e.abrupt("return");
                              case 2:
                                return (
                                  (n = t.depositToken),
                                  (a = this.contracts[t.contract]),
                                  (e.next = 6),
                                  this.getDepositTokenPriceInDollars(
                                    t.depositTokenName,
                                    n
                                  )
                                );
                              case 6:
                                return (
                                  (i = e.sent),
                                  (e.next = 9),
                                  n.balanceOf(t.address)
                                );
                              case 9:
                                if (
                                  ((u = e.sent),
                                  (p =
                                    Number(i) *
                                    Number(Object(O.b)(u, n.decimal))),
                                  "TOMB" !== t.earnTokenName)
                                ) {
                                  e.next = 17;
                                  break;
                                }
                                return (e.next = 14), this.getTombStat();
                              case 14:
                                (e.t0 = e.sent), (e.next = 20);
                                break;
                              case 17:
                                return (e.next = 19), this.getShareStat();
                              case 19:
                                e.t0 = e.sent;
                              case 20:
                                return (
                                  (s = e.t0),
                                  (e.next = 23),
                                  this.getTokenPerSecond(
                                    t.earnTokenName,
                                    t.contract,
                                    a,
                                    t.depositTokenName
                                  )
                                );
                              case 23:
                                return (
                                  (o = e.sent),
                                  (y = o.mul(60).mul(60)),
                                  (l =
                                    Number(s.priceInDollars) *
                                    Number(Object(O.b)(y.mul(24).mul(365)))),
                                  (d =
                                    Number(s.priceInDollars) *
                                    Number(Object(O.b)(y.mul(24)))),
                                  (m =
                                    Number(i) *
                                    Number(Object(O.b)(u, n.decimal))),
                                  (c = (d / m) * 100),
                                  (b = (l / m) * 100),
                                  e.abrupt("return", {
                                    dailyAPR: c.toFixed(2).toString(),
                                    yearlyAPR: b.toFixed(2).toString(),
                                    TVL: p.toFixed(2).toString(),
                                  })
                                );
                              case 31:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getTokenPerSecond",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e(t, n, a, i) {
                      var u, p, s, o;
                      return r.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if ("MBird" !== t) {
                                e.next = 20;
                                break;
                              }
                              if (n.endsWith("TombRewardPool")) {
                                e.next = 8;
                                break;
                              }
                              return (e.next = 4), a.tombPerSecond();
                            case 4:
                              if (((u = e.sent), "WFTM" !== i)) {
                                e.next = 7;
                                break;
                              }
                              return e.abrupt(
                                "return",
                                u.mul(6e3).div(11e3).div(24)
                              );
                            case 7:
                              return e.abrupt("return", u.div(24));
                            case 8:
                              return (e.next = 10), a.poolStartTime();
                            case 10:
                              if (
                                ((p = e.sent),
                                (s = new Date(1e3 * p.toNumber())),
                                3456e5,
                                !(Date.now() - s.getTime() > 3456e5))
                              ) {
                                e.next = 17;
                                break;
                              }
                              return (e.next = 16), a.epochTombPerSecond(1);
                            case 16:
                              return e.abrupt("return", e.sent);
                            case 17:
                              return (e.next = 19), a.epochTombPerSecond(0);
                            case 19:
                              return e.abrupt("return", e.sent);
                            case 20:
                              return (e.next = 22), a.tSharePerSecond();
                            case 22:
                              if (((o = e.sent), !i.startsWith("TOMB"))) {
                                e.next = 27;
                                break;
                              }
                              return e.abrupt(
                                "return",
                                o.mul(35500).div(59500)
                              );
                            case 27:
                              return e.abrupt("return", o.mul(24e3).div(59500));
                            case 28:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function (t, n, a, i) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getDepositTokenPriceInDollars",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e(t, n) {
                      var a, i;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.next = 2),
                                  this.getWFTMPriceFromPancakeswap()
                                );
                              case 2:
                                if (((i = e.sent), "WFTM" !== t)) {
                                  e.next = 7;
                                  break;
                                }
                                (a = i), (e.next = 29);
                                break;
                              case 7:
                                if ("MBird-POS-LP" !== t) {
                                  e.next = 13;
                                  break;
                                }
                                return (
                                  (e.next = 10),
                                  this.getLPTokenPrice(n, this.MBird, !0)
                                );
                              case 10:
                                (a = e.sent), (e.next = 29);
                                break;
                              case 13:
                                if ("MShare-POS-LP" !== t) {
                                  e.next = 19;
                                  break;
                                }
                                return (
                                  (e.next = 16),
                                  this.getLPTokenPrice(n, this.MShare, !1)
                                );
                              case 16:
                                (a = e.sent), (e.next = 29);
                                break;
                              case 19:
                                if ("SHIBA" !== t) {
                                  e.next = 25;
                                  break;
                                }
                                return (
                                  (e.next = 22),
                                  this.getTokenPriceFromSpiritswap(n)
                                );
                              case 22:
                                (a = e.sent), (e.next = 29);
                                break;
                              case 25:
                                return (
                                  (e.next = 27),
                                  this.getTokenPriceFromPancakeswap(n)
                                );
                              case 27:
                                (a = e.sent),
                                  (a = (Number(a) * Number(i)).toString());
                              case 29:
                                return e.abrupt("return", a);
                              case 30:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getCurrentEpoch",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e() {
                      var t;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t = this.contracts.Treasury),
                                  e.abrupt("return", t.epoch())
                                );
                              case 2:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getBondOraclePriceInLastTWAP",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e() {
                      var t;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t = this.contracts.Treasury),
                                  e.abrupt("return", t.getBondPremiumRate())
                                );
                              case 2:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "buyBonds",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e(t) {
                      var n, a;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = this.contracts.Treasury),
                                  (e.next = 3),
                                  n.getTombPrice()
                                );
                              case 3:
                                return (
                                  (a = e.sent),
                                  (e.next = 6),
                                  n.buyBonds(Object(w.a)(t), a)
                                );
                              case 6:
                                return e.abrupt("return", e.sent);
                              case 7:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "redeemBonds",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e(t) {
                      var n, a;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = this.contracts.Treasury),
                                  (e.next = 3),
                                  n.getTombPrice()
                                );
                              case 3:
                                return (
                                  (a = e.sent),
                                  (e.next = 6),
                                  n.redeemBonds(Object(w.a)(t), a)
                                );
                              case 6:
                                return e.abrupt("return", e.sent);
                              case 7:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getTotalValueLocked",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e() {
                      var t, n, a, i, u, p, s, o, y, l, d, m, c;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                (t = 0), (n = 0), (a = Object.values(E.a));
                              case 2:
                                if (!(n < a.length)) {
                                  e.next = 18;
                                  break;
                                }
                                return (
                                  (i = a[n]),
                                  (u = this.contracts[i.contract]),
                                  (p = this.externalTokens[i.depositTokenName]),
                                  (e.next = 8),
                                  this.getDepositTokenPriceInDollars(
                                    i.depositTokenName,
                                    p
                                  )
                                );
                              case 8:
                                return (
                                  (s = e.sent),
                                  (e.next = 11),
                                  p.balanceOf(u.address)
                                );
                              case 11:
                                (o = e.sent),
                                  (y =
                                    Number(Object(O.b)(o, p.decimal)) *
                                    Number(s)),
                                  (l = Number.isNaN(y) ? 0 : y),
                                  (t += l);
                              case 15:
                                n++, (e.next = 2);
                                break;
                              case 18:
                                return (e.next = 20), this.getShareStat();
                              case 20:
                                return (
                                  (d = e.sent.priceInDollars),
                                  (e.next = 23),
                                  this.MShare.balanceOf(
                                    this.currentMasonry().address
                                  )
                                );
                              case 23:
                                return (
                                  (m = e.sent),
                                  (c =
                                    Number(
                                      Object(O.b)(m, this.MShare.decimal)
                                    ) * Number(d)),
                                  e.abrupt("return", t + c)
                                );
                              case 26:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getLPTokenPrice",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e(t, n, a) {
                      var i, u, p, s, o, y;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.t0 = O.c), (e.next = 3), t.totalSupply()
                                );
                              case 3:
                                return (
                                  (e.t1 = e.sent),
                                  (e.t2 = t.decimal),
                                  (i = (0, e.t0)(e.t1, e.t2)),
                                  (e.t3 = O.c),
                                  (e.next = 9),
                                  n.balanceOf(t.address)
                                );
                              case 9:
                                if (
                                  ((e.t4 = e.sent),
                                  (e.t5 = n.decimal),
                                  (u = (0, e.t3)(e.t4, e.t5)),
                                  !0 !== a)
                                ) {
                                  e.next = 18;
                                  break;
                                }
                                return (e.next = 15), this.getTombStat();
                              case 15:
                                (e.t6 = e.sent), (e.next = 21);
                                break;
                              case 18:
                                return (e.next = 20), this.getShareStat();
                              case 20:
                                e.t6 = e.sent;
                              case 21:
                                return (
                                  (p = e.t6),
                                  (s = p.priceInDollars),
                                  (o = Number(u) / Number(i)),
                                  (y = (Number(s) * o * 2).toString()),
                                  e.abrupt("return", y)
                                );
                              case 26:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t, n, a) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "earnedFromBank",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e(t, n, a) {
                      var i,
                        u,
                        p = arguments;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((i =
                                    p.length > 3 && void 0 !== p[3]
                                      ? p[3]
                                      : this.myAccount),
                                  (u = this.contracts[t]),
                                  (e.prev = 2),
                                  "TOMB" !== n)
                                ) {
                                  e.next = 9;
                                  break;
                                }
                                return (e.next = 6), u.pendingTOMB(a, i);
                              case 6:
                                return e.abrupt("return", e.sent);
                              case 9:
                                return (e.next = 11), u.pendingShare(a, i);
                              case 11:
                                return e.abrupt("return", e.sent);
                              case 12:
                                e.next = 18;
                                break;
                              case 14:
                                return (
                                  (e.prev = 14),
                                  (e.t0 = e.catch(2)),
                                  console.error(
                                    "Failed to call earned() on pool "
                                      .concat(u.address, ": ")
                                      .concat(e.t0.stack)
                                  ),
                                  e.abrupt("return", v.a.from(0))
                                );
                              case 18:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[2, 14]]
                      );
                    })
                  );
                  return function (t, n, a) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "stakedBalanceOnBank",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e(t, n) {
                      var a,
                        i,
                        u,
                        p = arguments;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (a =
                                    p.length > 2 && void 0 !== p[2]
                                      ? p[2]
                                      : this.myAccount),
                                  (i = this.contracts[t]),
                                  (e.prev = 2),
                                  (e.next = 5),
                                  i.userInfo(n, a)
                                );
                              case 5:
                                return (u = e.sent), (e.next = 8), u.amount;
                              case 8:
                                return e.abrupt("return", e.sent);
                              case 11:
                                return (
                                  (e.prev = 11),
                                  (e.t0 = e.catch(2)),
                                  console.error(
                                    "Failed to call balanceOf() on pool "
                                      .concat(i.address, ": ")
                                      .concat(e.t0.stack)
                                  ),
                                  e.abrupt("return", v.a.from(0))
                                );
                              case 15:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[2, 11]]
                      );
                    })
                  );
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "stake",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e(t, n, a) {
                      var i;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (i = this.contracts[t]),
                                  (e.next = 3),
                                  i.deposit(n, a)
                                );
                              case 3:
                                return e.abrupt("return", e.sent);
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t, n, a) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "unstake",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e(t, n, a) {
                      var i;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (i = this.contracts[t]),
                                  (e.next = 3),
                                  i.withdraw(n, a)
                                );
                              case 3:
                                return e.abrupt("return", e.sent);
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t, n, a) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "harvest",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e(t, n) {
                      var a;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (a = this.contracts[t]),
                                  (e.next = 3),
                                  a.withdraw(n, 0)
                                );
                              case 3:
                                return e.abrupt("return", e.sent);
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "exit",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e(t, n) {
                      var a,
                        i,
                        u,
                        p = arguments;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (a =
                                    p.length > 2 && void 0 !== p[2]
                                      ? p[2]
                                      : this.myAccount),
                                  (i = this.contracts[t]),
                                  (e.next = 4),
                                  i.userInfo(n, a)
                                );
                              case 4:
                                return (
                                  (u = e.sent),
                                  (e.next = 7),
                                  i.withdraw(n, u.amount)
                                );
                              case 7:
                                return e.abrupt("return", e.sent);
                              case 8:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t, n) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "fetchMasonryVersionOfUser",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e() {
                      return r.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt("return", "latest");
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "currentMasonry",
                value: function () {
                  return this.masonryVersionOfUser, this.contracts.Masonry;
                },
              },
              {
                key: "isOldMasonryMember",
                value: function () {
                  return "latest" !== this.masonryVersionOfUser;
                },
              },
              {
                key: "getTokenPriceFromPancakeswap",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e(t) {
                      var n, a, i, u, p, s;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.provider.ready;
                              case 2:
                                if (e.sent) {
                                  e.next = 5;
                                  break;
                                }
                                return e.abrupt("return");
                              case 5:
                                return (
                                  (n = this.config.chainId),
                                  (a = this.config.externalTokens.WFTM),
                                  (i = new b.Token(n, a[0], a[1])),
                                  (u = new b.Token(
                                    n,
                                    t.address,
                                    t.decimal,
                                    t.symbol
                                  )),
                                  (e.prev = 9),
                                  (e.next = 12),
                                  b.Fetcher.fetchPairData(i, u, this.provider)
                                );
                              case 12:
                                return (
                                  (p = e.sent),
                                  (s = new b.Route([p], u)),
                                  e.abrupt("return", s.midPrice.toFixed(4))
                                );
                              case 17:
                                (e.prev = 17),
                                  (e.t0 = e.catch(9)),
                                  console.error(
                                    "Failed to fetch token price of "
                                      .concat(t.symbol, ": ")
                                      .concat(e.t0)
                                  );
                              case 20:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[9, 17]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getTokenPriceFromSpiritswap",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e(t) {
                      var n, a, i, u, p, s, o, y, l, d, m, b;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.provider.ready;
                              case 2:
                                if (e.sent) {
                                  e.next = 5;
                                  break;
                                }
                                return e.abrupt("return");
                              case 5:
                                return (
                                  (n = this.config.chainId),
                                  (a = this.externalTokens.WFTM),
                                  (i = new c.b(n, a.address, a.decimal)),
                                  (u = new c.b(
                                    n,
                                    t.address,
                                    t.decimal,
                                    t.symbol
                                  )),
                                  (e.prev = 9),
                                  (e.next = 12),
                                  c.a.fetchPairData(i, u, this.provider)
                                );
                              case 12:
                                return (
                                  (p = e.sent),
                                  (s = p.liquidityToken),
                                  (e.next = 16),
                                  a.balanceOf(s.address)
                                );
                              case 16:
                                return (
                                  (o = e.sent),
                                  (y = Number(Object(O.c)(o, a.decimal))),
                                  (e.next = 20),
                                  t.balanceOf(s.address)
                                );
                              case 20:
                                return (
                                  (l = e.sent),
                                  (d = Number(Object(O.c)(l, t.decimal))),
                                  (e.next = 24),
                                  this.getWFTMPriceFromPancakeswap()
                                );
                              case 24:
                                return (
                                  (m = e.sent),
                                  (b = (y / d) * Number(m)),
                                  e.abrupt("return", b.toString())
                                );
                              case 29:
                                (e.prev = 29),
                                  (e.t0 = e.catch(9)),
                                  console.error(
                                    "Failed to fetch token price of "
                                      .concat(t.symbol, ": ")
                                      .concat(e.t0)
                                  );
                              case 32:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[9, 29]]
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getWFTMPriceFromPancakeswap",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e() {
                      var t, n, a, i, u, p, s, o;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (e.next = 2), this.provider.ready;
                              case 2:
                                if (e.sent) {
                                  e.next = 5;
                                  break;
                                }
                                return e.abrupt("return");
                              case 5:
                                return (
                                  (t = this.externalTokens),
                                  (n = t.WFTM),
                                  (a = t.FUSDT),
                                  (e.prev = 6),
                                  (i = this.externalTokens["USDT-FTM-LP"]),
                                  (e.next = 10),
                                  n.balanceOf(i.address)
                                );
                              case 10:
                                return (
                                  (u = e.sent),
                                  (p = Number(Object(O.c)(u, n.decimal))),
                                  (e.next = 14),
                                  a.balanceOf(i.address)
                                );
                              case 14:
                                return (
                                  (s = e.sent),
                                  (o = Number(Object(O.c)(s, a.decimal))),
                                  e.abrupt("return", (o / p).toString())
                                );
                              case 19:
                                (e.prev = 19),
                                  (e.t0 = e.catch(6)),
                                  console.error(
                                    "Failed to fetch token price of WFTM: ".concat(
                                      e.t0
                                    )
                                  );
                              case 22:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this,
                        [[6, 19]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getMasonryAPR",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e() {
                      var t, n, a, i, u, p, s, o, y, l;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t = this.currentMasonry()),
                                  (e.next = 3),
                                  t.latestSnapshotIndex()
                                );
                              case 3:
                                return (
                                  (n = e.sent),
                                  (e.next = 6),
                                  t.masonryHistory(n)
                                );
                              case 6:
                                return (
                                  (a = e.sent),
                                  (i = a[1]),
                                  (e.next = 10),
                                  this.getShareStat()
                                );
                              case 10:
                                return (
                                  (u = e.sent.priceInDollars),
                                  (e.next = 13),
                                  this.getTombStat()
                                );
                              case 13:
                                return (
                                  (p = e.sent.priceInDollars),
                                  (s = (i / 1e18) * Number(p) * 4),
                                  (e.next = 18),
                                  this.MShare.balanceOf(t.address)
                                );
                              case 18:
                                return (
                                  (o = e.sent),
                                  (y =
                                    Number(
                                      Object(O.b)(o, this.MShare.decimal)
                                    ) * Number(u)),
                                  (l = ((100 * s) / y) * 365),
                                  e.abrupt("return", l)
                                );
                              case 22:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "canUserClaimRewardFromMasonry",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e() {
                      var t;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t = this.currentMasonry()),
                                  (e.next = 3),
                                  t.canClaimReward(this.myAccount)
                                );
                              case 3:
                                return e.abrupt("return", e.sent);
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "canUserUnstakeFromMasonry",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e() {
                      var t, n, a, i, u;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t = this.currentMasonry()),
                                  (e.next = 3),
                                  t.canWithdraw(this.myAccount)
                                );
                              case 3:
                                return (
                                  (n = e.sent),
                                  (e.next = 6),
                                  this.getStakedSharesOnMasonry()
                                );
                              case 6:
                                return (
                                  (a = e.sent),
                                  (i =
                                    0 ===
                                    Number(
                                      Object(O.b)(a, this.MShare.decimal)
                                    )),
                                  (u = !!i || n),
                                  e.abrupt("return", u)
                                );
                              case 10:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "timeUntilClaimRewardFromMasonry",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e() {
                      return r.a.wrap(function (e) {
                        for (;;)
                          switch ((e.prev = e.next)) {
                            case 0:
                              return e.abrupt("return", v.a.from(0));
                            case 1:
                            case "end":
                              return e.stop();
                          }
                      }, e);
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getTotalStakedInMasonry",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e() {
                      var t;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t = this.currentMasonry()),
                                  (e.next = 3),
                                  t.totalSupply()
                                );
                              case 3:
                                return e.abrupt("return", e.sent);
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "stakeShareToMasonry",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e(t) {
                      var n;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (!this.isOldMasonryMember()) {
                                  e.next = 2;
                                  break;
                                }
                                throw new Error(
                                  "you're using old masonry. please withdraw and deposit the TSHARE again."
                                );
                              case 2:
                                return (
                                  (n = this.currentMasonry()),
                                  (e.next = 5),
                                  n.stake(Object(w.a)(t))
                                );
                              case 5:
                                return e.abrupt("return", e.sent);
                              case 6:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getStakedSharesOnMasonry",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e() {
                      var t;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((t = this.currentMasonry()),
                                  "v1" !== this.masonryVersionOfUser)
                                ) {
                                  e.next = 5;
                                  break;
                                }
                                return (
                                  (e.next = 4), t.getShareOf(this.myAccount)
                                );
                              case 4:
                                return e.abrupt("return", e.sent);
                              case 5:
                                return (
                                  (e.next = 7), t.balanceOf(this.myAccount)
                                );
                              case 7:
                                return e.abrupt("return", e.sent);
                              case 8:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getEarningsOnMasonry",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e() {
                      var t;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((t = this.currentMasonry()),
                                  "v1" !== this.masonryVersionOfUser)
                                ) {
                                  e.next = 5;
                                  break;
                                }
                                return (
                                  (e.next = 4),
                                  t.getCashEarningsOf(this.myAccount)
                                );
                              case 4:
                                return e.abrupt("return", e.sent);
                              case 5:
                                return (e.next = 7), t.earned(this.myAccount);
                              case 7:
                                return e.abrupt("return", e.sent);
                              case 8:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "withdrawShareFromMasonry",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e(t) {
                      var n;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (n = this.currentMasonry()),
                                  (e.next = 3),
                                  n.withdraw(Object(w.a)(t))
                                );
                              case 3:
                                return e.abrupt("return", e.sent);
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "harvestCashFromMasonry",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e() {
                      var t;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((t = this.currentMasonry()),
                                  "v1" !== this.masonryVersionOfUser)
                                ) {
                                  e.next = 5;
                                  break;
                                }
                                return (e.next = 4), t.claimDividends();
                              case 4:
                                return e.abrupt("return", e.sent);
                              case 5:
                                return (e.next = 7), t.claimReward();
                              case 7:
                                return e.abrupt("return", e.sent);
                              case 8:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "exitFromMasonry",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e() {
                      var t;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t = this.currentMasonry()),
                                  (e.next = 3),
                                  t.exit()
                                );
                              case 3:
                                return e.abrupt("return", e.sent);
                              case 4:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getTreasuryNextAllocationTime",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e() {
                      var t, n, a, i;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t = this.contracts.Treasury),
                                  (e.next = 3),
                                  t.nextEpochPoint()
                                );
                              case 3:
                                return (
                                  (n = e.sent),
                                  (a = new Date(n.mul(1e3).toNumber())),
                                  (i = new Date(Date.now())),
                                  e.abrupt("return", { from: i, to: a })
                                );
                              case 7:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getUserClaimRewardTime",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e() {
                      var t, n, a, i, u, p, s, o, y, l, d, m, c, b, T, f;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t = this.contracts),
                                  (n = t.Masonry),
                                  (a = t.Treasury),
                                  (e.next = 3),
                                  n.nextEpochPoint()
                                );
                              case 3:
                                return (i = e.sent), (e.next = 6), n.epoch();
                              case 6:
                                return (
                                  (u = e.sent),
                                  (e.next = 9),
                                  n.masons(this.myAccount)
                                );
                              case 9:
                                return (
                                  (p = e.sent),
                                  (s = p.epochTimerStart),
                                  (e.next = 13),
                                  a.PERIOD()
                                );
                              case 13:
                                return (
                                  (o = e.sent),
                                  (y = o / 60 / 60),
                                  (e.next = 17),
                                  n.rewardLockupEpochs()
                                );
                              case 17:
                                if (
                                  ((l = e.sent),
                                  (d = Number(s) + Number(l)),
                                  (m = new Date(Date.now())),
                                  !(d - u <= 0))
                                ) {
                                  e.next = 24;
                                  break;
                                }
                                return e.abrupt("return", { from: m, to: m });
                              case 24:
                                if (d - u !== 1) {
                                  e.next = 29;
                                  break;
                                }
                                return (
                                  (c = new Date(1e3 * i)),
                                  e.abrupt("return", { from: m, to: c })
                                );
                              case 29:
                                return (
                                  (b = new Date(1e3 * i)),
                                  (T = d - u - 1),
                                  (f = P()(b)
                                    .add(T * y, "hours")
                                    .toDate()),
                                  e.abrupt("return", { from: m, to: f })
                                );
                              case 33:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "getUserUnstakeTime",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e() {
                      var t, n, a, i, u, p, s, o, y, l, d, m, c, b, T, f, v;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t = this.contracts),
                                  (n = t.Masonry),
                                  (a = t.Treasury),
                                  (e.next = 3),
                                  n.nextEpochPoint()
                                );
                              case 3:
                                return (i = e.sent), (e.next = 6), n.epoch();
                              case 6:
                                return (
                                  (u = e.sent),
                                  (e.next = 9),
                                  n.masons(this.myAccount)
                                );
                              case 9:
                                return (
                                  (p = e.sent),
                                  (s = p.epochTimerStart),
                                  (e.next = 13),
                                  a.PERIOD()
                                );
                              case 13:
                                return (
                                  (o = e.sent),
                                  (y = o / 60 / 60),
                                  (e.next = 17),
                                  n.withdrawLockupEpochs()
                                );
                              case 17:
                                return (
                                  (l = e.sent),
                                  (d = new Date(Date.now())),
                                  (m = Number(s) + Number(l)),
                                  (e.next = 22),
                                  this.getStakedSharesOnMasonry()
                                );
                              case 22:
                                if (
                                  ((c = e.sent), !(u <= m && 0 === Number(c)))
                                ) {
                                  e.next = 27;
                                  break;
                                }
                                return e.abrupt("return", { from: d, to: d });
                              case 27:
                                if (m - u !== 1) {
                                  e.next = 32;
                                  break;
                                }
                                return (
                                  (b = new Date(1e3 * i)),
                                  e.abrupt("return", { from: d, to: b })
                                );
                              case 32:
                                return (
                                  (T = new Date(1e3 * i)),
                                  (f = m - Number(u) - 1),
                                  (v = P()(T)
                                    .add(f * y, "hours")
                                    .toDate()),
                                  e.abrupt("return", { from: d, to: v })
                                );
                              case 36:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "watchAssetInMetamask",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e(t) {
                      var n, a, i, u;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((n = window),
                                  !(a = n.ethereum) ||
                                    a.networkVersion !== E.b.chainId.toString())
                                ) {
                                  e.next = 5;
                                  break;
                                }
                                return (
                                  "MBird" === t
                                    ? ((i = this.MBird),
                                      (u =
                                        "https://tomb.finance/presskit/tomb_icon_noBG.png"))
                                    : "MShare" === t
                                    ? ((i = this.MShare),
                                      (u =
                                        "https://tomb.finance/presskit/tshare_icon_noBG.png"))
                                    : "Mbond" === t &&
                                      ((i = this.Mbond),
                                      (u =
                                        "https://tomb.finance/presskit/tbond_icon_noBG.png")),
                                  (e.next = 5),
                                  a.request({
                                    method: "wallet_watchAsset",
                                    params: {
                                      type: "ERC20",
                                      options: {
                                        address: i.address,
                                        symbol: i.symbol,
                                        decimals: 18,
                                        image: u,
                                      },
                                    },
                                  })
                                );
                              case 5:
                                return e.abrupt("return", !0);
                              case 6:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "listenForRegulationsEvents",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e() {
                      var t, n, a, i, u, p;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (t = this.contracts.Treasury),
                                  (n = t.filters.DaoFundFunded()),
                                  (a = t.filters.DevFundFunded()),
                                  (i = t.filters.MasonryFunded()),
                                  (e.next = 6),
                                  t.queryFilter(i)
                                );
                              case 6:
                                return (
                                  (u = e.sent),
                                  (p = []),
                                  u.forEach(function (e, t) {
                                    p.push({ epoch: t + 1 }),
                                      (p[t].masonryFund = Object(O.b)(
                                        e.args[1]
                                      ));
                                  }),
                                  (e.next = 11),
                                  t.queryFilter(a)
                                );
                              case 11:
                                return (
                                  e.sent.forEach(function (e, t) {
                                    p[t].devFund = Object(O.b)(e.args[1]);
                                  }),
                                  (e.next = 15),
                                  t.queryFilter(n)
                                );
                              case 15:
                                return (
                                  e.sent.forEach(function (e, t) {
                                    p[t].daoFund = Object(O.b)(e.args[1]);
                                  }),
                                  e.abrupt("return", p)
                                );
                              case 18:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "estimateZapIn",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e(t, n, a) {
                      var i, u, p, s;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((i = this.contracts.zapper),
                                  (u = this.externalTokens[n]),
                                  t !== A.a)
                                ) {
                                  e.next = 8;
                                  break;
                                }
                                return (
                                  (e.next = 5),
                                  i.estimateZapIn(
                                    u.address,
                                    A.b,
                                    Object(M.parseUnits)(a, 18)
                                  )
                                );
                              case 5:
                                (p = e.sent), (e.next = 12);
                                break;
                              case 8:
                                return (
                                  (s = t === A.c ? this.MBird : this.MShare),
                                  (e.next = 11),
                                  i.estimateZapInToken(
                                    s.address,
                                    u.address,
                                    A.b,
                                    Object(M.parseUnits)(a, 18)
                                  )
                                );
                              case 11:
                                p = e.sent;
                              case 12:
                                return e.abrupt("return", [
                                  p[0] / 1e18,
                                  p[1] / 1e18,
                                ]);
                              case 13:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t, n, a) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
              {
                key: "zapIn",
                value: (function () {
                  var e = Object(o.a)(
                    r.a.mark(function e(t, n, a) {
                      var i, u, p, s;
                      return r.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                if (
                                  ((i = this.contracts.zapper),
                                  (u = this.externalTokens[n]),
                                  t !== A.a)
                                ) {
                                  e.next = 9;
                                  break;
                                }
                                return (
                                  (p = { value: Object(M.parseUnits)(a, 18) }),
                                  (e.next = 6),
                                  i.zapIn(u.address, A.b, this.myAccount, p)
                                );
                              case 6:
                                return e.abrupt("return", e.sent);
                              case 9:
                                return (
                                  (s = t === A.c ? this.MBird : this.MShare),
                                  (e.next = 12),
                                  i.zapInToken(
                                    s.address,
                                    Object(M.parseUnits)(a, 18),
                                    u.address,
                                    A.b,
                                    this.myAccount
                                  )
                                );
                              case 12:
                                return e.abrupt("return", e.sent);
                              case 13:
                              case "end":
                                return e.stop();
                            }
                        },
                        e,
                        this
                      );
                    })
                  );
                  return function (t, n, a) {
                    return e.apply(this, arguments);
                  };
                })(),
              },
            ]),
            e
          );
        })(),
        S = Object(i.createContext)({ tombFinance: null }),
        F = function (e) {
          var t = e.children,
            n = Object(p.h)(),
            s = n.ethereum,
            r = n.account,
            o = Object(i.useState)(),
            y = Object(a.a)(o, 2),
            l = y[0],
            d = y[1];
          return (
            Object(i.useEffect)(
              function () {
                if (l) r && l.unlockWallet(s, r);
                else {
                  var e = new R(E.b);
                  r && e.unlockWallet(s, r), d(e);
                }
              },
              [r, s, l]
            ),
            u.a.createElement(S.Provider, { value: { tombFinance: l } }, t)
          );
        };
    },
    209: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return m;
      }),
        n.d(t, "a", function () {
          return y;
        });
      var a,
        i,
        u = n(27),
        p = n(24),
        s = n(0),
        r = n.n(s),
        o = n(22),
        y = Object(s.createContext)({
          onPresent: function () {},
          onDismiss: function () {},
        }),
        l = o.d.div(
          a ||
            (a = Object(u.a)([
              "\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n",
            ]))
        ),
        d = o.d.div(
          i ||
            (i = Object(u.a)([
              "\n  background-color: #00000088;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n",
            ]))
        ),
        m = function (e) {
          var t = e.children,
            n = Object(s.useState)(!1),
            a = Object(p.a)(n, 2),
            i = a[0],
            u = a[1],
            o = Object(s.useState)(),
            m = Object(p.a)(o, 2),
            c = m[0],
            b = m[1],
            T = Object(s.useCallback)(
              function (e) {
                b(e), u(!0);
              },
              [b, u]
            ),
            f = Object(s.useCallback)(
              function () {
                b(void 0), u(!1);
              },
              [b, u]
            );
          return r.a.createElement(
            y.Provider,
            { value: { content: c, isOpen: i, onPresent: T, onDismiss: f } },
            t,
            i &&
              r.a.createElement(
                l,
                null,
                r.a.createElement(d, { onClick: f }),
                r.a.isValidElement(c) && r.a.cloneElement(c, { onDismiss: f })
              )
          );
        };
    },
    219: function (e, t, n) {
      "use strict";
      var a,
        i,
        u,
        p,
        s = n(24),
        r = n(0),
        o = n.n(r),
        y = n(818),
        l = n(430),
        d = n(276),
        m = n(814),
        c = n(816),
        b = n(815),
        T = function (e) {
          var t = e.icon,
            n = e.onConnect,
            a = e.title;
          return o.a.createElement(
            m.a,
            { button: !0, onClick: n },
            o.a.createElement(c.a, null, t),
            o.a.createElement(b.a, { primary: a })
          );
        },
        f = n(833),
        v = n(817),
        w = n(810),
        M = n(391),
        h = n.n(M),
        x = n(410),
        O = n.n(x),
        _ = Object(w.a)(function (e) {
          return {
            paper: {
              position: "absolute",
              width: 400,
              backgroundColor: e.palette.background.paper,
              boxShadow: e.shadows[5],
              padding: e.spacing(4),
              outline: "none",
            },
          };
        }),
        g = function (e) {
          var t = e.open,
            n = e.handleClose,
            a = _(),
            i = Object(l.h)(),
            u = i.account,
            p = i.connect;
          return (
            Object(r.useEffect)(function () {
              u && n();
            }),
            o.a.createElement(
              f.a,
              {
                "aria-labelledby": "connect a wallet",
                "aria-describedby": "connect your crypto wallet",
                open: t,
                style: {
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                },
                onClose: n,
              },
              o.a.createElement(
                "div",
                { className: a.paper },
                o.a.createElement("h2", null, "Connect Wallet"),
                o.a.createElement(
                  v.a,
                  { component: "nav", "aria-label": "main mailbox folders" },
                  o.a.createElement(T, {
                    icon: o.a.createElement("img", {
                      src: h.a,
                      alt: "Metamask logo",
                      style: { height: 32 },
                    }),
                    onConnect: function () {
                      p("injected");
                    },
                    title: "Metamask",
                  }),
                  o.a.createElement(T, {
                    icon: o.a.createElement("img", {
                      src: O.a,
                      alt: "Wallet Connect logo",
                      style: { height: 24 },
                    }),
                    onConnect: function () {
                      p("walletconnect");
                    },
                    title: "WalletConnect",
                  })
                )
              )
            )
          );
        },
        E = n(27),
        k = n(22),
        P = n(181),
        A = n(30),
        R = n(179),
        S = n(273),
        F = n(274),
        I = n(96),
        C = n(180),
        j = k.d.div(
          a ||
            (a = Object(E.a)([
              "\n  //color: ",
              ";\n  font-size: 30px;\n  font-weight: 700;\n",
            ])),
          function (e) {
            return e.theme.color.grey[300];
          }
        ),
        D = k.d.div(
          i ||
            (i = Object(E.a)([
              "\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n",
            ]))
        ),
        N = k.d.div(
          u ||
            (u = Object(E.a)([
              "\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-bottom: ",
              "px;\n",
            ])),
          function (e) {
            return e.theme.spacing[4];
          }
        ),
        L = k.d.div(
          p ||
            (p = Object(E.a)([
              "\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  margin: 0 ",
              "px;\n",
            ])),
          function (e) {
            return e.theme.spacing[3];
          }
        ),
        B = function (e) {
          e.onDismiss;
          var t = Object(I.a)(),
            n = Object(P.a)(t.MBird),
            a = Object(r.useMemo)(
              function () {
                return Object(A.b)(n);
              },
              [n]
            ),
            i = Object(P.a)(t.MShare),
            u = Object(r.useMemo)(
              function () {
                return Object(A.b)(i);
              },
              [i]
            ),
            p = Object(P.a)(t.Mbond),
            s = Object(r.useMemo)(
              function () {
                return Object(A.b)(p);
              },
              [p]
            );
          return o.a.createElement(
            S.a,
            null,
            o.a.createElement(F.a, { text: "My Wallet" }),
            o.a.createElement(
              N,
              null,
              o.a.createElement(
                L,
                null,
                o.a.createElement(C.a, { symbol: "MBird" }),
                o.a.createElement(
                  D,
                  null,
                  o.a.createElement(j, null, a),
                  o.a.createElement(R.a, { text: "TOMB Available" })
                )
              ),
              o.a.createElement(
                L,
                null,
                o.a.createElement(C.a, { symbol: "MShare" }),
                o.a.createElement(
                  D,
                  null,
                  o.a.createElement(j, null, u),
                  o.a.createElement(R.a, { text: "TSHARE Available" })
                )
              ),
              o.a.createElement(
                L,
                null,
                o.a.createElement(C.a, { symbol: "Mbond" }),
                o.a.createElement(
                  D,
                  null,
                  o.a.createElement(j, null, s),
                  o.a.createElement(R.a, { text: "TBOND Available" })
                )
              )
            )
          );
        };
      t.a = function (e) {
        var t = e.text,
          n = Object(l.h)().account,
          a = Object(d.a)(o.a.createElement(B, null)),
          i = Object(s.a)(a, 1)[0],
          u = Object(r.useState)(!1),
          p = Object(s.a)(u, 2),
          m = p[0],
          c = p[1],
          b = t || "Unlock";
        return o.a.createElement(
          "div",
          null,
          n
            ? o.a.createElement(
                y.a,
                { variant: "contained", onClick: i },
                "My Wallet"
              )
            : o.a.createElement(
                y.a,
                {
                  onClick: function () {
                    c(!0);
                  },
                  color: "primary",
                  variant: "contained",
                },
                b
              ),
          o.a.createElement(g, {
            open: m,
            handleClose: function () {
              c(!1);
            },
          })
        );
      };
    },
    273: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return T;
      });
      var a,
        i,
        u,
        p = n(27),
        s = n(0),
        r = n.n(s),
        o = n(22),
        y = o.d.div(
          a ||
            (a = Object(p.a)([
              "\n  background-color: rgba(255, 255, 255, 0.9); //",
              ";\n  color: #2c2560 !important;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n",
            ])),
          function (e) {
            return e.theme.color.grey[800];
          }
        ),
        l = function (e) {
          var t = e.children;
          return r.a.createElement(y, null, t);
        },
        d = n(394),
        m = o.d.div(
          i ||
            (i = Object(p.a)([
              "\n  box-sizing: border-box;\n  margin: 0 auto;\n  max-width: ",
              "px;\n  padding: 0 ",
              "px;\n  width: 100%;\n",
            ])),
          function (e) {
            return e.width;
          },
          function (e) {
            return e.theme.spacing[4];
          }
        ),
        c = function (e) {
          var t,
            n = e.children,
            a = e.size,
            i = void 0 === a ? "md" : a,
            u = Object(s.useContext)(o.a).siteWidth;
          switch (i) {
            case "sm":
              t = u / 2;
              break;
            case "md":
              t = (2 * u) / 3;
              break;
            case "lg":
            default:
              t = u;
          }
          return r.a.createElement(m, { width: t }, n);
        },
        b = o.d.div(
          u ||
            (u = Object(p.a)([
              "\n  border-radius: 12px;\n  position: relative;\n",
            ]))
        ),
        T = function (e) {
          var t = e.children;
          return r.a.createElement(
            c,
            { size: "sm" },
            r.a.createElement(
              b,
              null,
              r.a.createElement(l, null, r.a.createElement(d.a, null, t))
            )
          );
        };
    },
    274: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      var a,
        i = n(27),
        u = n(0),
        p = n.n(u),
        s = n(22).d.div(
          a ||
            (a = Object(i.a)([
              "\n  align-items: center;\n  //color: ",
              ";\n  display: flex;\n  font-size: 18px;\n  font-weight: 700;\n  height: ",
              "px;\n  justify-content: center;\n  margin-top: ",
              "px;\n",
            ])),
          function (e) {
            return e.theme.color.grey[300];
          },
          function (e) {
            return e.theme.topBarSize;
          },
          function (e) {
            return -e.theme.spacing[4];
          }
        ),
        r = function (e) {
          var t = e.text;
          return p.a.createElement(s, null, t);
        };
    },
    276: function (e, t, n) {
      "use strict";
      var a = n(0),
        i = n(209);
      t.a = function (e) {
        var t = Object(a.useContext)(i.a),
          n = t.onDismiss,
          u = t.onPresent;
        return [
          Object(a.useCallback)(
            function () {
              u(e);
            },
            [e, u]
          ),
          n,
        ];
      };
    },
    277: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return q;
      });
      var a = n(0),
        i = n.n(a),
        u = n(811),
        p = n(430),
        s = function () {
          var e = Object(p.h)(),
            t = e.account,
            n = e.connect,
            i = e.connector;
          t && window.localStorage.setItem("connectorId", i),
            Object(a.useEffect)(
              function () {
                var e = window.localStorage.getItem("connectorId");
                e && !t && n(e);
              },
              [n, t]
            );
        },
        r = n(61),
        o = n(810),
        y = n(812),
        l = n(177),
        d = n(813),
        m = n(406),
        c = n.n(m),
        b = n(407),
        T = n.n(b),
        f = n(408),
        v = n.n(f),
        w = n(409),
        M = n.n(w),
        h = Object(o.a)(function (e) {
          return {
            footer: Object(r.a)(
              {
                position: "absolute",
                bottom: "0",
                paddingTop: "15px",
                paddingBottom: "15px",
                width: "100%",
                color: "white",
                backgroundColor: "#121212",
                textAlign: "center",
                height: "1.3rem",
              },
              e.breakpoints.down("xs"),
              { display: "none" }
            ),
            link: {
              width: "24px",
              height: "24px",
              display: "inline",
              marginLeft: "20px",
            },
            img: { width: "24px", height: "24px" },
          };
        }),
        x = function () {
          var e = h();
          return i.a.createElement(
            "footer",
            { className: e.footer },
            i.a.createElement(
              u.a,
              { maxWidth: "lg" },
              i.a.createElement(
                y.a,
                { container: !0 },
                i.a.createElement(
                  y.a,
                  { item: !0, xs: 6 },
                  i.a.createElement(
                    l.a,
                    { variant: "body2", color: "textSecondary", align: "left" },
                    "Copyright \xa9 ",
                    i.a.createElement(
                      d.a,
                      { color: "inherit", href: "/" },
                      "Poseidon Black"
                    ),
                    " ",
                    new Date().getFullYear()
                  )
                ),
                i.a.createElement(
                  y.a,
                  { item: !0, xs: 6, style: { textAlign: "right" } },
                  i.a.createElement(
                    "a",
                    {
                      href: "https://twitter.com/tombfinance",
                      rel: "noopener noreferrer",
                      target: "_blank",
                      className: e.link,
                    },
                    i.a.createElement("img", {
                      alt: "twitter",
                      src: c.a,
                      className: e.img,
                    })
                  ),
                  i.a.createElement(
                    "a",
                    {
                      href: "https://t.me/tombfinance",
                      rel: "noopener noreferrer",
                      target: "_blank",
                      className: e.link,
                    },
                    i.a.createElement("img", {
                      alt: "telegram",
                      src: T.a,
                      className: e.img,
                    })
                  ),
                  i.a.createElement(
                    "a",
                    {
                      href: "https://www.youtube.com/channel/UCGf87DxPzLXwPrfYpXIkaLQ",
                      rel: "noopener noreferrer",
                      target: "_blank",
                      className: e.link,
                    },
                    i.a.createElement("img", {
                      alt: "youtube",
                      src: M.a,
                      className: e.img,
                    })
                  ),
                  i.a.createElement(
                    "a",
                    {
                      href: "http://discord.tomb.finance/",
                      rel: "noopener noreferrer",
                      target: "_blank",
                      className: e.link,
                    },
                    i.a.createElement("img", {
                      alt: "discord",
                      src: v.a,
                      className: e.img,
                    })
                  )
                )
              )
            )
          );
        },
        O = n(24),
        _ = n(15),
        g = n(86),
        E = n(819),
        k = n(820),
        P = n(821),
        A = n(831),
        R = n(822),
        S = n(834),
        F = n(823),
        I = n(817),
        C = n(814),
        j = n(815),
        D = function (e) {
          var t = e.primary,
            n = e.to,
            a = i.a.useMemo(
              function () {
                return i.a.forwardRef(function (e, t) {
                  return i.a.createElement(
                    g.b,
                    Object.assign({ ref: t, to: n }, e)
                  );
                });
              },
              [n]
            );
          return i.a.createElement(
            "li",
            null,
            i.a.createElement(
              C.a,
              { button: !0, component: a },
              i.a.createElement(j.a, { primary: t })
            )
          );
        },
        N = n(422),
        L = n.n(N),
        B = n(424),
        W = n.n(B),
        U = n(423),
        H = n.n(U),
        z = n(138),
        G = n(219),
        V = Object(o.a)(function (e) {
          return {
            "@global": { ul: { margin: 0, padding: 0, listStyle: "none" } },
            appBar: {
              color: "#e0e3bd",
              "background-color": "#121212",
              padding: "10px",
              marginBottom: "3rem",
            },
            drawer: { width: 240, flexShrink: 0 },
            drawerPaper: { width: 240 },
            hide: { display: "none" },
            toolbar: { flexWrap: "wrap" },
            toolbarTitle: {
              fontFamily: '"Amarante", cursive',
              fontSize: "30px",
              flexGrow: 1,
            },
            link: {
              textTransform: "uppercase",
              color: "#e0e3bd",
              fontSize: "14px",
              margin: e.spacing(1, 2),
              textDecoration: "none",
              "&:hover": { textDecoration: "none" },
            },
            brandLink: {
              textDecoration: "none",
              color: "#e0e3bd",
              "&:hover": { textDecoration: "none" },
            },
          };
        }),
        Z = function () {
          var e = Object(E.a)("(min-width:900px)"),
            t = V(),
            n = Object(z.a)(),
            a = i.a.useState(!1),
            u = Object(O.a)(a, 2),
            p = u[0],
            s = u[1],
            r = function () {
              s(!1);
            };
          return i.a.createElement(
            k.a,
            { position: "sticky", elevation: 0, className: t.appBar },
            i.a.createElement(
              P.a,
              { className: t.toolbar },
              e
                ? i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(
                      l.a,
                      {
                        variant: "h6",
                        color: "inherit",
                        noWrap: !0,
                        className: t.toolbarTitle,
                      },
                      i.a.createElement(
                        g.b,
                        { to: "/", color: "inherit", className: t.brandLink },
                        "Mockingbird"
                      )
                    ),
                    i.a.createElement(
                      A.a,
                      { mr: 5 },
                      i.a.createElement(
                        g.b,
                        { color: "textPrimary", to: "/", className: t.link },
                        "Home"
                      ),
                      i.a.createElement(
                        g.b,
                        {
                          color: "textPrimary",
                          to: "/cemetery",
                          className: t.link,
                        },
                        "Cemetery"
                      ),
                      i.a.createElement(
                        g.b,
                        {
                          color: "textPrimary",
                          to: "/masonry",
                          className: t.link,
                        },
                        "Masonry"
                      ),
                      i.a.createElement(
                        g.b,
                        { color: "textPrimary", to: "/pit", className: t.link },
                        "Pit"
                      ),
                      i.a.createElement(
                        "a",
                        {
                          href: "https://docs.tomb.finance",
                          className: t.link,
                        },
                        "Docs"
                      )
                    ),
                    i.a.createElement(G.a, { text: "Connect" })
                  )
                : i.a.createElement(
                    i.a.Fragment,
                    null,
                    i.a.createElement(
                      R.a,
                      {
                        color: "inherit",
                        "aria-label": "open drawer",
                        onClick: function () {
                          s(!0);
                        },
                        edge: "start",
                        className: Object(_.a)(p && t.hide),
                      },
                      i.a.createElement(L.a, null)
                    ),
                    i.a.createElement(
                      l.a,
                      { variant: "h6", noWrap: !0 },
                      "Tomb Finance"
                    ),
                    i.a.createElement(
                      S.a,
                      {
                        className: t.drawer,
                        onEscapeKeyDown: r,
                        onBackdropClick: r,
                        variant: "temporary",
                        Mbond: "left",
                        open: p,
                        classes: { paper: t.drawerPaper },
                      },
                      i.a.createElement(
                        "div",
                        null,
                        i.a.createElement(
                          R.a,
                          { onClick: r },
                          "rtl" === n.direction
                            ? i.a.createElement(H.a, null)
                            : i.a.createElement(W.a, null)
                        )
                      ),
                      i.a.createElement(F.a, null),
                      i.a.createElement(
                        I.a,
                        null,
                        i.a.createElement(D, { primary: "Home", to: "/" }),
                        i.a.createElement(D, {
                          primary: "Cemetery",
                          to: "/cemetery",
                        }),
                        i.a.createElement(D, {
                          primary: "Masonry",
                          to: "/masonry",
                        }),
                        i.a.createElement(D, { primary: "Pit", to: "/pit" }),
                        i.a.createElement(
                          C.a,
                          {
                            button: !0,
                            component: "a",
                            href: "https://docs.tomb.finance",
                          },
                          i.a.createElement(j.a, null, "Docs")
                        ),
                        i.a.createElement(
                          C.a,
                          {
                            style: {
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            },
                          },
                          i.a.createElement(G.a, { text: "Connect" })
                        )
                      )
                    )
                  )
            )
          );
        },
        q = function (e) {
          var t = e.children;
          return (
            s(),
            i.a.createElement(
              "div",
              { style: { position: "relative", minHeight: "100vh" } },
              i.a.createElement(Z, null),
              i.a.createElement(
                u.a,
                { maxWidth: "lg", style: { paddingBottom: "5rem" } },
                t
              ),
              i.a.createElement(x, null)
            )
          );
        };
    },
    282: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return m;
      }),
        n.d(t, "a", function () {
          return y;
        });
      var a = n(2),
        i = n.n(a),
        u = n(90),
        p = n(14),
        s = n(24),
        r = n(0),
        o = n.n(r),
        y = Object(r.createContext)({ banks: [] }),
        l = n(96),
        d = n(42),
        m = function (e) {
          var t = e.children,
            n = Object(r.useState)([]),
            a = Object(s.a)(n, 2),
            m = a[0],
            c = a[1],
            b = Object(l.a)(),
            T = null === b || void 0 === b ? void 0 : b.isUnlocked,
            f = Object(r.useCallback)(
              Object(p.a)(
                i.a.mark(function e() {
                  var t, n, a, p;
                  return i.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          (t = []), (n = 0), (a = Object.values(d.a));
                        case 2:
                          if (!(n < a.length)) {
                            e.next = 16;
                            break;
                          }
                          if (!(p = a[n]).finished) {
                            e.next = 12;
                            break;
                          }
                          if (b.isUnlocked) {
                            e.next = 7;
                            break;
                          }
                          return e.abrupt("continue", 13);
                        case 7:
                          return (
                            (e.next = 9),
                            b.stakedBalanceOnBank(
                              p.contract,
                              p.poolId,
                              b.myAccount
                            )
                          );
                        case 9:
                          if (!e.sent.lte(0)) {
                            e.next = 12;
                            break;
                          }
                          return e.abrupt("continue", 13);
                        case 12:
                          t.push(
                            Object(u.a)(
                              Object(u.a)({}, p),
                              {},
                              {
                                address: d.b.deployments[p.contract].address,
                                depositToken:
                                  b.externalTokens[p.depositTokenName],
                                earnToken:
                                  "TOMB" === p.earnTokenName
                                    ? b.MBird
                                    : b.MShare,
                              }
                            )
                          );
                        case 13:
                          n++, (e.next = 2);
                          break;
                        case 16:
                          t.sort(function (e, t) {
                            return e.sort > t.sort ? 1 : -1;
                          }),
                            c(t);
                        case 18:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [b, c]
            );
          return (
            Object(r.useEffect)(
              function () {
                b &&
                  f().catch(function (e) {
                    return console.error(
                      "Failed to fetch pools: ".concat(e.stack)
                    );
                  });
              },
              [T, b, f]
            ),
            o.a.createElement(y.Provider, { value: { banks: m } }, t)
          );
        };
    },
    30: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return i;
      }),
        n.d(t, "c", function () {
          return u;
        }),
        n.d(t, "a", function () {
          return p;
        });
      var a = n(34),
        i = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 18,
            n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 4,
            a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
          0 === t && (n = 0);
          var i = p(e, t - n),
            u = (i / Math.pow(10, n)).toFixed(n);
          return u.length > 12 && a ? u.slice(0, 12) + "..." : u;
        },
        u = function (e) {
          var t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 18,
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return i(e, t, 4, n);
        };
      function p(e) {
        var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 18;
        return Number(e.div(a.a.from(10).pow(t)));
      }
    },
    391: function (e, t, n) {
      e.exports = n.p + "static/media/metamask-fox.c06f3a3e.svg";
    },
    394: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return r;
      });
      var a,
        i = n(27),
        u = n(0),
        p = n.n(u),
        s = n(22).d.div(
          a ||
            (a = Object(i.a)([
              "\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  padding: ",
              "px;\n",
            ])),
          function (e) {
            return e.theme.spacing[4];
          }
        ),
        r = function (e) {
          var t = e.children;
          return p.a.createElement(s, null, t);
        };
    },
    398: function (e) {
      e.exports = JSON.parse(
        '[{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]'
      );
    },
    406: function (e, t, n) {
      e.exports = n.p + "static/media/twitter.08d2ade8.svg";
    },
    407: function (e, t, n) {
      e.exports = n.p + "static/media/telegram.28146bd8.svg";
    },
    408: function (e, t, n) {
      e.exports = n.p + "static/media/discord.5f33a495.svg";
    },
    409: function (e, t, n) {
      e.exports = n.p + "static/media/youtube.503d2e22.svg";
    },
    410: function (e, t, n) {
      e.exports = n.p + "static/media/wallet-connect.37f2bc6e.svg";
    },
    411: function (e, t, n) {
      e.exports = n.p + "static/media/crypto_tomb_cash.f2b44ef4.svg";
    },
    412: function (e, t, n) {
      e.exports = n.p + "static/media/crypto_tomb_share.bf1a6c52.svg";
    },
    413: function (e, t, n) {
      e.exports = n.p + "static/media/crypto_tomb_cash.f2b44ef4.4d4f8ca6.png";
    },
    414: function (e, t, n) {
      e.exports = n.p + "static/media/crypto_tomb_share.bf1a6c52.14510c1a.png";
    },
    415: function (e, t, n) {
      e.exports = n.p + "static/media/crypto_tomb_bond.f3331ee8.svg";
    },
    416: function (e, t, n) {
      e.exports = n.p + "static/media/tomb_ftm_lp.84532366.png";
    },
    417: function (e, t, n) {
      e.exports = n.p + "static/media/tshare_ftm_lp.07de9070.png";
    },
    418: function (e, t, n) {
      e.exports = n.p + "static/media/ftm_logo_blue.d8eaf3b2.svg";
    },
    419: function (e, t, n) {
      e.exports = n.p + "static/media/spooky.1b007b4a.png";
    },
    42: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return u;
      });
      var a = n(116),
        i = {
          development: {
            chainId: a.ChainId.FTMTESTNET,
            networkName: "Fantom Opera Testnet",
            ftmscanUrl: "https://testnet.ftmscan.com",
            defaultProvider: "https://rpc.testnet.fantom.network/",
            deployments: n(432),
            externalTokens: {
              WFTM: ["0xf1277d1ed8ad466beddf92ef448a132661956621", 18],
              FUSDT: ["0xb7f24e6e708eabfaa9e64b40ee21a5adbffb51d6", 6],
              BOO: ["0xf1277d1ed8ad466beddf92ef448a132661956621", 18],
              ZOO: ["0x2317610e609674e53D9039aaB85D8cAd8485A7c5", 0],
              SHIBA: ["0x39523112753956d19A3d6a30E758bd9FF7a8F3C0", 9],
              "USDT-FTM-LP": ["0xE7e3461C2C03c18301F66Abc9dA1F385f45047bA", 18],
              "MBird-POS-LP": [
                "0x13Fe199F19c8F719652985488F150762A5E9c3A8",
                18,
              ],
              "MShare-POS-LP": [
                "0x20bc90bB41228cb9ab412036F80CE4Ef0cAf1BD5",
                18,
              ],
            },
            baseLaunchDate: new Date("2022-02-10 13:00:00Z"),
            bondLaunchesAt: new Date("2022-02-10T15:00:00Z"),
            masonryLaunchesAt: new Date("2022-02-10T00:00:00Z"),
            refreshInterval: 1e4,
          },
          production: {
            chainId: a.ChainId.MAINNET,
            networkName: "Fantom Opera Mainnet",
            ftmscanUrl: "https://ftmscan.com",
            defaultProvider: "https://rpcapi.fantom.network/",
            deployments: n(433),
            externalTokens: {
              WFTM: ["0x4ae3Fa715E21f328c2B61c037B9CC1761B6aF0bD", 18],
              FUSDT: ["0x4ae3Fa715E21f328c2B61c037B9CC1761B6aF0bD", 6],
              BOO: ["0x4ae3Fa715E21f328c2B61c037B9CC1761B6aF0bD", 18],
              ZOO: ["0x4ae3Fa715E21f328c2B61c037B9CC1761B6aF0bD", 0],
              SHIBA: ["0x4ae3Fa715E21f328c2B61c037B9CC1761B6aF0bD", 9],
              "USDT-FTM-LP": ["0x2b4C76d0dc16BE1C31D4C1DC53bF9B45987Fc75c", 18],
              "MBird-POS-LP": [
                "0xEa5b4B898BAE20089890e39c6cF94a47D59A2Fc5",
                18,
              ],
              "MShare-POS-LP": [
                "0x4733bc45eF91cF7CcEcaeeDb794727075fB209F2",
                18,
              ],
            },
            baseLaunchDate: new Date("2021-06-02 13:00:00Z"),
            bondLaunchesAt: new Date("2020-12-03T15:00:00Z"),
            masonryLaunchesAt: new Date("2020-12-11T00:00:00Z"),
            refreshInterval: 1e4,
          },
        },
        u = {
          TombFtmRewardPool: {
            name: "Earn TOMB by FTM",
            poolId: 0,
            sectionInUI: 0,
            contract: "TombFtmRewardPool",
            depositTokenName: "WFTM",
            earnTokenName: "TOMB",
            finished: !1,
            sort: 1,
            closedForStaking: !0,
          },
          TombBooRewardPool: {
            name: "Earn TOMB by BOO",
            poolId: 1,
            sectionInUI: 0,
            contract: "TombBooGenesisRewardPool",
            depositTokenName: "BOO",
            earnTokenName: "TOMB",
            finished: !1,
            sort: 2,
            closedForStaking: !0,
          },
          TombShibaRewardPool: {
            name: "Earn TOMB by SHIBA",
            poolId: 2,
            sectionInUI: 0,
            contract: "TombShibaGenesisRewardPool",
            depositTokenName: "SHIBA",
            earnTokenName: "TOMB",
            finished: !1,
            sort: 3,
            closedForStaking: !0,
          },
          TombZooRewardPool: {
            name: "Earn TOMB by ZOO",
            poolId: 3,
            sectionInUI: 0,
            contract: "TombZooGenesisRewardPool",
            depositTokenName: "ZOO",
            earnTokenName: "TOMB",
            finished: !1,
            sort: 4,
            closedForStaking: !0,
          },
          TombFtmLPTombRewardPool: {
            name: "Earn TOMB by TOMB-FTM LP",
            poolId: 0,
            sectionInUI: 1,
            contract: "TombFtmLpTombRewardPool",
            depositTokenName: "MBird-POS-LP",
            earnTokenName: "TOMB",
            finished: !1,
            sort: 5,
            closedForStaking: !0,
          },
          TombFtmLPTombRewardPoolOld: {
            name: "Earn MBird by MBird-POS LP",
            poolId: 0,
            sectionInUI: 1,
            contract: "TombFtmLpTombRewardPoolOld",
            depositTokenName: "MBird-POS-LP",
            earnTokenName: "MBird",
            finished: !0,
            sort: 9,
            closedForStaking: !0,
          },
          TombFtmLPTShareRewardPool: {
            name: "Earn MBird by MBird-POS LP",
            poolId: 0,
            sectionInUI: 2,
            contract: "TombFtmLPTShareRewardPool",
            depositTokenName: "MBird-POS-LP",
            earnTokenName: "MBird",
            finished: !1,
            sort: 6,
            closedForStaking: !1,
          },
          TshareFtmLPTShareRewardPool: {
            name: "Earn MShare by MShare-POS LP",
            poolId: 1,
            sectionInUI: 2,
            contract: "TshareFtmLPTShareRewardPool",
            depositTokenName: "MShare-POS-LP",
            earnTokenName: "MShare",
            finished: !1,
            sort: 7,
            closedForStaking: !1,
          },
        };
      t.b = i.production;
    },
    420: function (e, t, n) {
      e.exports = n.p + "static/media/zoo_logo.d34dbeab.svg";
    },
    421: function (e, t, n) {
      e.exports = n.p + "static/media/shiba_logo.554ab6e6.svg";
    },
    425: function (e, t, n) {
      e.exports = n.p + "static/media/regulations_bg.b9559c2c.png";
    },
    432: function (e) {
      e.exports = JSON.parse(
        '{"BondOracle":{"address":"0xE4EFD87ad34360932E5325D77A0a6e39147DEbFa","abi":[{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_tokenA","type":"address"},{"internalType":"address","name":"_tokenB","type":"address"},{"internalType":"uint256","name":"_period","type":"uint256"},{"internalType":"uint256","name":"_startTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"price0CumulativeLast","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"price1CumulativeLast","type":"uint256"}],"name":"Updated","type":"event"},{"inputs":[],"name":"blockTimestampLast","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"callable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountIn","type":"uint256"}],"name":"consult","outputs":[{"internalType":"uint144","name":"amountOut","type":"uint144"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountIn","type":"uint256"}],"name":"expectedPrice","outputs":[{"internalType":"uint224","name":"amountOut","type":"uint224"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentEpoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastEpoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNextEpoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isOperator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextEpochPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pair","outputs":[{"internalType":"contract IUniswapV2Pair","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"factory","type":"address"},{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"}],"name":"pairFor","outputs":[{"internalType":"address","name":"lpt","type":"address"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"price0Average","outputs":[{"internalType":"uint224","name":"_x","type":"uint224"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price1Average","outputs":[{"internalType":"uint224","name":"_x","type":"uint224"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_period","type":"uint256"}],"name":"setPeriod","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator_","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"update","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"SeigniorageOracle":{"address":"0xf3471c818b1b632A1F8865B748c3A9f475bf9E21","abi":[{"inputs":[{"internalType":"contract IUniswapV2Pair","name":"_pair","type":"address"},{"internalType":"uint256","name":"_period","type":"uint256"},{"internalType":"uint256","name":"_startTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"price0CumulativeLast","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"price1CumulativeLast","type":"uint256"}],"name":"Updated","type":"event"},{"inputs":[],"name":"blockTimestampLast","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentEpoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastEpochTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isOperator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextEpochPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pair","outputs":[{"internalType":"contract IUniswapV2Pair","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price0Average","outputs":[{"internalType":"uint224","name":"_x","type":"uint224"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price1Average","outputs":[{"internalType":"uint224","name":"_x","type":"uint224"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_epoch","type":"uint256"}],"name":"setEpoch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_period","type":"uint256"}],"name":"setPeriod","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator_","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"update","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amountIn","type":"uint256"}],"name":"consult","outputs":[{"internalType":"uint144","name":"amountOut","type":"uint144"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amountIn","type":"uint256"}],"name":"twap","outputs":[{"internalType":"uint144","name":"_amountOut","type":"uint144"}],"stateMutability":"view","type":"function"}]},"tomb":{"address":"0x31b813d69d10D149Ab90013e8ef9baAF72514B4D","abi":[{"inputs":[{"internalType":"uint256","name":"_taxRate","type":"uint256"},{"internalType":"address","name":"_taxCollectorAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldAddress","type":"address"},{"indexed":false,"internalType":"address","name":"newAddress","type":"address"}],"name":"TaxOfficeTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"INITIAL_AIRDROP_WALLET_DISTRIBUTION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INITIAL_GENESIS_POOL_DISTRIBUTION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INITIAL_TOMB_POOL_DISTRIBUTION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"autoCalculateTax","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"excludedAddresses","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isOperator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPoolDistributed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"taxCollectorAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"taxOffice","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"taxRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"taxTiersRates","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"taxTiersTwaps","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tombOracle","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator_","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getTaxTiersTwapsCount","outputs":[{"internalType":"uint256","name":"count","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTaxTiersRatesCount","outputs":[{"internalType":"uint256","name":"count","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"isAddressExcluded","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint8","name":"_index","type":"uint8"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setTaxTiersTwap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_index","type":"uint8"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setTaxTiersRate","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enableAutoCalculateTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"disableAutoCalculateTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tombOracle","type":"address"}],"name":"setTombOracle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_taxOffice","type":"address"}],"name":"setTaxOffice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_taxCollectorAddress","type":"address"}],"name":"setTaxCollectorAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_taxRate","type":"uint256"}],"name":"setTaxRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"excludeAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"includeAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recipient_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_genesisPool","type":"address"},{"internalType":"address","name":"_tombPool","type":"address"},{"internalType":"address","name":"_airdropWallet","type":"address"}],"name":"distributeReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"tShare":{"address":"0x5Dc01F135D80cB456e30DD89576E1D03B1b6687b","abi":[{"inputs":[{"internalType":"uint256","name":"_startTime","type":"uint256"},{"internalType":"address","name":"_communityFund","type":"address"},{"internalType":"address","name":"_devFund","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"COMMUNITY_FUND_POOL_ALLOCATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEV_FUND_POOL_ALLOCATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FARMING_POOL_REWARD_ALLOCATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"VESTING_DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"communityFund","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"communityFundLastClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"communityFundRewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devFund","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devFundLastClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devFundRewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"endTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isOperator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPoolDistributed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator_","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_communityFund","type":"address"}],"name":"setTreasuryFund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devFund","type":"address"}],"name":"setDevFund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unclaimedTreasuryFund","outputs":[{"internalType":"uint256","name":"_pending","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unclaimedDevFund","outputs":[{"internalType":"uint256","name":"_pending","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_farmingIncentiveFund","type":"address"}],"name":"distributeReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"tBond":{"address":"0xCC0D8FCA1b567dA618eFB006027BD3497E500780","abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isOperator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator_","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recipient_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"Treasury":{"address":"0x7e06932CbC6b3c9A43310027A20A8fEBdB756889","abi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"tombAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bondAmount","type":"uint256"}],"name":"BoughtBonds","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"bondAmount","type":"uint256"}],"name":"BurnedBonds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"seigniorage","type":"uint256"}],"name":"DaoFundFunded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"seigniorage","type":"uint256"}],"name":"DevFundFunded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"executor","type":"address"},{"indexed":false,"internalType":"uint256","name":"at","type":"uint256"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"seigniorage","type":"uint256"}],"name":"MasonryFunded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"tombAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bondAmount","type":"uint256"}],"name":"RedeemedBonds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"seigniorage","type":"uint256"}],"name":"TreasuryFunded","type":"event"},{"inputs":[],"name":"PERIOD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bondDepletionFloorPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bootstrapEpochs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bootstrapSupplyExpansionPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"daoFund","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"daoFundSharedPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devFund","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devFundSharedPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"discountPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"epoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"epochSupplyContractionLeft","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"masonry","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxDebtRatioPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxDiscountRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"maxExpansionTiers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPremiumRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupplyContractionPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupplyExpansionPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintingFactorForPayingDebt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"premiumPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"premiumThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"previousEpochTombPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"seigniorageExpansionFloorPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"seigniorageSaved","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"supplyTiers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tbond","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tomb","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tombOracle","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tombPriceCeiling","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tombPriceOne","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tshare","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isInitialized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextEpochPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTombPrice","outputs":[{"internalType":"uint256","name":"tombPrice","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTombUpdatedPrice","outputs":[{"internalType":"uint256","name":"_tombPrice","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReserve","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBurnableTombLeft","outputs":[{"internalType":"uint256","name":"_burnableTombLeft","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRedeemableBonds","outputs":[{"internalType":"uint256","name":"_redeemableBonds","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBondDiscountRate","outputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBondPremiumRate","outputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tomb","type":"address"},{"internalType":"address","name":"_tbond","type":"address"},{"internalType":"address","name":"_tshare","type":"address"},{"internalType":"address","name":"_tombOracle","type":"address"},{"internalType":"address","name":"_masonry","type":"address"},{"internalType":"uint256","name":"_startTime","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_masonry","type":"address"}],"name":"setMasonry","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tombOracle","type":"address"}],"name":"setTombOracle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tombPriceCeiling","type":"uint256"}],"name":"setTombPriceCeiling","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxSupplyExpansionPercent","type":"uint256"}],"name":"setMaxSupplyExpansionPercents","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_bondDepletionFloorPercent","type":"uint256"}],"name":"setBondDepletionFloorPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxSupplyContractionPercent","type":"uint256"}],"name":"setMaxSupplyContractionPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxDebtRatioPercent","type":"uint256"}],"name":"setMaxDebtRatioPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_bootstrapEpochs","type":"uint256"},{"internalType":"uint256","name":"_bootstrapSupplyExpansionPercent","type":"uint256"}],"name":"setBootstrap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_daoFund","type":"address"},{"internalType":"uint256","name":"_daoFundSharedPercent","type":"uint256"},{"internalType":"address","name":"_devFund","type":"address"},{"internalType":"uint256","name":"_devFundSharedPercent","type":"uint256"}],"name":"setExtraFunds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxDiscountRate","type":"uint256"}],"name":"setMaxDiscountRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxPremiumRate","type":"uint256"}],"name":"setMaxPremiumRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_discountPercent","type":"uint256"}],"name":"setDiscountPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_premiumThreshold","type":"uint256"}],"name":"setPremiumThreshold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_premiumPercent","type":"uint256"}],"name":"setPremiumPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintingFactorForPayingDebt","type":"uint256"}],"name":"setMintingFactorForPayingDebt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tombAmount","type":"uint256"},{"internalType":"uint256","name":"targetPrice","type":"uint256"}],"name":"buyBonds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_bondAmount","type":"uint256"},{"internalType":"uint256","name":"targetPrice","type":"uint256"}],"name":"redeemBonds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"allocateSeigniorage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"masonrySetOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_withdrawLockupEpochs","type":"uint256"},{"internalType":"uint256","name":"_rewardLockupEpochs","type":"uint256"}],"name":"masonrySetLockUp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"masonryAllocateSeigniorage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"masonryGovernanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"Masonry":{"address":"0xA44d9B09e80Ef5786E4466845b94f943991467E5","abi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"executor","type":"address"},{"indexed":false,"internalType":"uint256","name":"at","type":"uint256"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"masonryHistory","outputs":[{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"uint256","name":"rewardReceived","type":"uint256"},{"internalType":"uint256","name":"rewardPerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"masons","outputs":[{"internalType":"uint256","name":"lastSnapshotIndex","type":"uint256"},{"internalType":"uint256","name":"rewardEarned","type":"uint256"},{"internalType":"uint256","name":"epochTimerStart","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardLockupEpochs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"share","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tomb","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"contract ITreasury","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawLockupEpochs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_tomb","type":"address"},{"internalType":"contract IERC20","name":"_share","type":"address"},{"internalType":"contract ITreasury","name":"_treasury","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_withdrawLockupEpochs","type":"uint256"},{"internalType":"uint256","name":"_rewardLockupEpochs","type":"uint256"}],"name":"setLockUp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"latestSnapshotIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"mason","type":"address"}],"name":"getLastSnapshotIndexOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"mason","type":"address"}],"name":"canWithdraw","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"mason","type":"address"}],"name":"canClaimReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"epoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextEpochPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTombPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"mason","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"exit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"allocateSeigniorage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"TombFtmRewardPool":{"address":"0xFb392431c0dd8d7f21315aA63bA60C6Bd10A0fcd","abi":[{"inputs":[{"internalType":"address","name":"_tomb","type":"address"},{"internalType":"uint256","name":"_poolStartTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"TOTAL_REWARDS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accTombPerShare","type":"uint256"},{"internalType":"bool","name":"isStarted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"runningTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tomb","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tombPerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"uint256","name":"_lastRewardTime","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fromTime","type":"uint256"},{"internalType":"uint256","name":"_toTime","type":"uint256"}],"name":"getGeneratedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingTOMB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"TombBooGenesisRewardPool":{"address":"0xFb392431c0dd8d7f21315aA63bA60C6Bd10A0fcd","abi":[{"inputs":[{"internalType":"address","name":"_tomb","type":"address"},{"internalType":"uint256","name":"_poolStartTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"TOTAL_REWARDS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accTombPerShare","type":"uint256"},{"internalType":"bool","name":"isStarted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"runningTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tomb","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tombPerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"uint256","name":"_lastRewardTime","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fromTime","type":"uint256"},{"internalType":"uint256","name":"_toTime","type":"uint256"}],"name":"getGeneratedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingTOMB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"TombZooGenesisRewardPool":{"address":"0xFb392431c0dd8d7f21315aA63bA60C6Bd10A0fcd","abi":[{"inputs":[{"internalType":"address","name":"_tomb","type":"address"},{"internalType":"uint256","name":"_poolStartTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"TOTAL_REWARDS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accTombPerShare","type":"uint256"},{"internalType":"bool","name":"isStarted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"runningTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tomb","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tombPerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"uint256","name":"_lastRewardTime","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fromTime","type":"uint256"},{"internalType":"uint256","name":"_toTime","type":"uint256"}],"name":"getGeneratedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingTOMB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"TombShibaGenesisRewardPool":{"address":"0xFb392431c0dd8d7f21315aA63bA60C6Bd10A0fcd","abi":[{"inputs":[{"internalType":"address","name":"_tomb","type":"address"},{"internalType":"uint256","name":"_poolStartTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"TOTAL_REWARDS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accTombPerShare","type":"uint256"},{"internalType":"bool","name":"isStarted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"runningTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tomb","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tombPerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"uint256","name":"_lastRewardTime","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fromTime","type":"uint256"},{"internalType":"uint256","name":"_toTime","type":"uint256"}],"name":"getGeneratedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingTOMB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"TombFtmLpTombRewardPool":{"address":"0x96Ddab71d6074f09267A653FE9490ea16D20e20f","abi":[{"inputs":[{"internalType":"address","name":"_tomb","type":"address"},{"internalType":"uint256","name":"_poolStartTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"epochEndTimes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"epochTombPerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"epochTotalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accTombPerShare","type":"uint256"},{"internalType":"bool","name":"isStarted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tomb","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"uint256","name":"_lastRewardTime","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fromTime","type":"uint256"},{"internalType":"uint256","name":"_toTime","type":"uint256"}],"name":"getGeneratedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingTOMB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"TombFtmLpTombRewardPoolOld":{"address":"0x52618Fa2364ae23f29B88c4De5bc9d28BCc34dE5","abi":[{"inputs":[{"internalType":"address","name":"_tomb","type":"address"},{"internalType":"uint256","name":"_poolStartTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"epochEndTimes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"epochTombPerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"epochTotalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accTombPerShare","type":"uint256"},{"internalType":"bool","name":"isStarted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tomb","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"uint256","name":"_lastRewardTime","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fromTime","type":"uint256"},{"internalType":"uint256","name":"_toTime","type":"uint256"}],"name":"getGeneratedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingTOMB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"TombFtmLPTShareRewardPool":{"address":"0xE9A9242b5aBd050ec714EDfF53ff08dfA066aaf0","abi":[{"inputs":[{"internalType":"address","name":"_tshare","type":"address"},{"internalType":"uint256","name":"_poolStartTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"TOTAL_REWARDS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accTSharePerShare","type":"uint256"},{"internalType":"bool","name":"isStarted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"runningTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tSharePerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tshare","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"uint256","name":"_lastRewardTime","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fromTime","type":"uint256"},{"internalType":"uint256","name":"_toTime","type":"uint256"}],"name":"getGeneratedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"TshareFtmLPTShareRewardPool":{"address":"0xE9A9242b5aBd050ec714EDfF53ff08dfA066aaf0","abi":[{"inputs":[{"internalType":"address","name":"_tshare","type":"address"},{"internalType":"uint256","name":"_poolStartTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"TOTAL_REWARDS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accTSharePerShare","type":"uint256"},{"internalType":"bool","name":"isStarted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"runningTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tSharePerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tshare","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"uint256","name":"_lastRewardTime","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fromTime","type":"uint256"},{"internalType":"uint256","name":"_toTime","type":"uint256"}],"name":"getGeneratedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"zapper":{"address":"0x8bb1fe7a50082623b372d857b4d07911c786a3e9","abi":[{"inputs":[{"internalType":"address","name":"_WNATIVE","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"fee_to","type":"address"},{"indexed":false,"internalType":"uint16","name":"rate","type":"uint16"},{"indexed":false,"internalType":"uint16","name":"min","type":"uint16"}],"name":"FeeChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"_LP","type":"address"},{"internalType":"address","name":"_router","type":"address"},{"internalType":"uint256","name":"_amt","type":"uint256"}],"name":"estimateZapIn","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"address","name":"_router","type":"address"},{"internalType":"uint256","name":"_amt","type":"uint256"}],"name":"estimateZapInToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint16","name":"rate","type":"uint16"},{"internalType":"uint16","name":"min","type":"uint16"}],"name":"setFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"router","type":"address"},{"internalType":"address","name":"bridgeToken","type":"address"}],"name":"setTokenBridgeForRouter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"router","type":"address"}],"name":"setUseNativeRouter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"routerAddr","type":"address"},{"internalType":"address","name":"_recipient","type":"address"}],"name":"swapToNative","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"address","name":"routerAddr","type":"address"},{"internalType":"address","name":"_recipient","type":"address"}],"name":"swapToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"useNativeRouter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"_toRouter","type":"address"},{"internalType":"address","name":"_recipient","type":"address"}],"name":"zapAcross","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"address","name":"routerAddr","type":"address"},{"internalType":"address","name":"_recipient","type":"address"}],"name":"zapIn","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"address","name":"routerAddr","type":"address"},{"internalType":"address","name":"_recipient","type":"address"}],"name":"zapInToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"routerAddr","type":"address"},{"internalType":"address","name":"_recipient","type":"address"}],"name":"zapOut","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"address","name":"routerAddr","type":"address"},{"internalType":"address","name":"_recipient","type":"address"}],"name":"zapOutToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]}}'
      );
    },
    433: function (e) {
      e.exports = JSON.parse(
        '{"BondOracle":{"address":"0xE4EFD87ad34360932E5325D77A0a6e39147DEbFa","abi":[{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_tokenA","type":"address"},{"internalType":"address","name":"_tokenB","type":"address"},{"internalType":"uint256","name":"_period","type":"uint256"},{"internalType":"uint256","name":"_startTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"price0CumulativeLast","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"price1CumulativeLast","type":"uint256"}],"name":"Updated","type":"event"},{"inputs":[],"name":"blockTimestampLast","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"callable","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountIn","type":"uint256"}],"name":"consult","outputs":[{"internalType":"uint144","name":"amountOut","type":"uint144"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amountIn","type":"uint256"}],"name":"expectedPrice","outputs":[{"internalType":"uint224","name":"amountOut","type":"uint224"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentEpoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastEpoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getNextEpoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isOperator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextEpochPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pair","outputs":[{"internalType":"contract IUniswapV2Pair","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"factory","type":"address"},{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"}],"name":"pairFor","outputs":[{"internalType":"address","name":"lpt","type":"address"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"price0Average","outputs":[{"internalType":"uint224","name":"_x","type":"uint224"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price1Average","outputs":[{"internalType":"uint224","name":"_x","type":"uint224"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_period","type":"uint256"}],"name":"setPeriod","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator_","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"update","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"SeigniorageOracle":{"address":"0x89bAb7A96dB9F4f077739053D70E151e05209219","abi":[{"inputs":[{"internalType":"contract IUniswapV2Pair","name":"_pair","type":"address"},{"internalType":"uint256","name":"_period","type":"uint256"},{"internalType":"uint256","name":"_startTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"price0CumulativeLast","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"price1CumulativeLast","type":"uint256"}],"name":"Updated","type":"event"},{"inputs":[],"name":"blockTimestampLast","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getCurrentEpoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getLastEpochTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getPeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isOperator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextEpochPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pair","outputs":[{"internalType":"contract IUniswapV2Pair","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price0Average","outputs":[{"internalType":"uint224","name":"_x","type":"uint224"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price1Average","outputs":[{"internalType":"uint224","name":"_x","type":"uint224"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_epoch","type":"uint256"}],"name":"setEpoch","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_period","type":"uint256"}],"name":"setPeriod","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator_","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"update","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amountIn","type":"uint256"}],"name":"consult","outputs":[{"internalType":"uint144","name":"amountOut","type":"uint144"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amountIn","type":"uint256"}],"name":"twap","outputs":[{"internalType":"uint144","name":"_amountOut","type":"uint144"}],"stateMutability":"view","type":"function"}]},"tomb":{"address":"0x0A4a6FfFeC784Dc1C83ED63B3b1F3DAaeDC052aa","abi":[{"inputs":[{"internalType":"uint256","name":"_taxRate","type":"uint256"},{"internalType":"address","name":"_taxCollectorAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldAddress","type":"address"},{"indexed":false,"internalType":"address","name":"newAddress","type":"address"}],"name":"TaxOfficeTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"INITIAL_GENESIS_POOL_DISTRIBUTION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"INITIAL_MBIRD_POOL_DISTRIBUTION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MbirdOracle","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"autoCalculateTax","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"burnThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"disableAutoCalculateTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_genesisPool","type":"address"},{"internalType":"address","name":"_MbirdPool","type":"address"}],"name":"distributeReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"enableAutoCalculateTax","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"excludeAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"excludedAddresses","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTaxTiersRatesCount","outputs":[{"internalType":"uint256","name":"count","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTaxTiersTwapsCount","outputs":[{"internalType":"uint256","name":"count","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"includeAddress","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"isAddressExcluded","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isOperator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPoolDistributed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_burnThreshold","type":"uint256"}],"name":"setBurnThreshold","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_MbirdOracle","type":"address"}],"name":"setMbirdOracle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_taxCollectorAddress","type":"address"}],"name":"setTaxCollectorAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_taxOffice","type":"address"}],"name":"setTaxOffice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_taxRate","type":"uint256"}],"name":"setTaxRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_index","type":"uint8"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setTaxTiersRate","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"_index","type":"uint8"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setTaxTiersTwap","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"taxCollectorAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"taxOffice","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"taxRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"taxTiersRates","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"taxTiersTwaps","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator_","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"tShare":{"address":"0xb3207d5272a5DcA6CD47d5bCD414d409A1074433","abi":[{"inputs":[{"internalType":"uint256","name":"_startTime","type":"uint256"},{"internalType":"address","name":"_communityFund","type":"address"},{"internalType":"address","name":"_devFund","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"COMMUNITY_FUND_POOL_ALLOCATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DEV_FUND_POOL_ALLOCATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"FARMING_POOL_REWARD_ALLOCATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"VESTING_DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"communityFund","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"communityFundLastClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"communityFundRewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"devFund","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devFundLastClaimed","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devFundRewardRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"endTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isOperator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPoolDistributed","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator_","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_communityFund","type":"address"}],"name":"setTreasuryFund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_devFund","type":"address"}],"name":"setDevFund","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unclaimedTreasuryFund","outputs":[{"internalType":"uint256","name":"_pending","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unclaimedDevFund","outputs":[{"internalType":"uint256","name":"_pending","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_farmingIncentiveFund","type":"address"}],"name":"distributeReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"tBond":{"address":"0x9971BBa3B292B5EA99Ecbd5879A084Be816550d8","abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOperator","type":"address"},{"indexed":true,"internalType":"address","name":"newOperator","type":"address"}],"name":"OperatorTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isOperator","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOperator_","type":"address"}],"name":"transferOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recipient_","type":"address"},{"internalType":"uint256","name":"amount_","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burnFrom","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"Treasury":{"address":"0xdddA95af2D6E0Ba0B17120D76650a846d0a53F00","abi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"tombAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bondAmount","type":"uint256"}],"name":"BoughtBonds","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"bondAmount","type":"uint256"}],"name":"BurnedBonds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"seigniorage","type":"uint256"}],"name":"DaoFundFunded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"seigniorage","type":"uint256"}],"name":"DevFundFunded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"executor","type":"address"},{"indexed":false,"internalType":"uint256","name":"at","type":"uint256"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"seigniorage","type":"uint256"}],"name":"MasonryFunded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"tombAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"bondAmount","type":"uint256"}],"name":"RedeemedBonds","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"seigniorage","type":"uint256"}],"name":"TreasuryFunded","type":"event"},{"inputs":[],"name":"PERIOD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bondDepletionFloorPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bootstrapEpochs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"bootstrapSupplyExpansionPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"daoFund","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"daoFundSharedPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devFund","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"devFundSharedPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"discountPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"epoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"epochSupplyContractionLeft","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"masonry","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxDebtRatioPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxDiscountRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"maxExpansionTiers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxPremiumRate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupplyContractionPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxSupplyExpansionPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintingFactorForPayingDebt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"premiumPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"premiumThreshold","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"previousEpochTombPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"seigniorageExpansionFloorPercent","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"seigniorageSaved","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"startTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"supplyTiers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tbond","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tomb","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tombOracle","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tombPriceCeiling","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tombPriceOne","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tshare","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isInitialized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextEpochPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTombPrice","outputs":[{"internalType":"uint256","name":"tombPrice","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTombUpdatedPrice","outputs":[{"internalType":"uint256","name":"_tombPrice","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getReserve","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBurnableTombLeft","outputs":[{"internalType":"uint256","name":"_burnableTombLeft","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getRedeemableBonds","outputs":[{"internalType":"uint256","name":"_redeemableBonds","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBondDiscountRate","outputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getBondPremiumRate","outputs":[{"internalType":"uint256","name":"_rate","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tomb","type":"address"},{"internalType":"address","name":"_tbond","type":"address"},{"internalType":"address","name":"_tshare","type":"address"},{"internalType":"address","name":"_tombOracle","type":"address"},{"internalType":"address","name":"_masonry","type":"address"},{"internalType":"uint256","name":"_startTime","type":"uint256"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_masonry","type":"address"}],"name":"setMasonry","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_tombOracle","type":"address"}],"name":"setTombOracle","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tombPriceCeiling","type":"uint256"}],"name":"setTombPriceCeiling","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxSupplyExpansionPercent","type":"uint256"}],"name":"setMaxSupplyExpansionPercents","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_bondDepletionFloorPercent","type":"uint256"}],"name":"setBondDepletionFloorPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxSupplyContractionPercent","type":"uint256"}],"name":"setMaxSupplyContractionPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxDebtRatioPercent","type":"uint256"}],"name":"setMaxDebtRatioPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_bootstrapEpochs","type":"uint256"},{"internalType":"uint256","name":"_bootstrapSupplyExpansionPercent","type":"uint256"}],"name":"setBootstrap","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_daoFund","type":"address"},{"internalType":"uint256","name":"_daoFundSharedPercent","type":"uint256"},{"internalType":"address","name":"_devFund","type":"address"},{"internalType":"uint256","name":"_devFundSharedPercent","type":"uint256"}],"name":"setExtraFunds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxDiscountRate","type":"uint256"}],"name":"setMaxDiscountRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_maxPremiumRate","type":"uint256"}],"name":"setMaxPremiumRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_discountPercent","type":"uint256"}],"name":"setDiscountPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_premiumThreshold","type":"uint256"}],"name":"setPremiumThreshold","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_premiumPercent","type":"uint256"}],"name":"setPremiumPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintingFactorForPayingDebt","type":"uint256"}],"name":"setMintingFactorForPayingDebt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tombAmount","type":"uint256"},{"internalType":"uint256","name":"targetPrice","type":"uint256"}],"name":"buyBonds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_bondAmount","type":"uint256"},{"internalType":"uint256","name":"targetPrice","type":"uint256"}],"name":"redeemBonds","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"allocateSeigniorage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"masonrySetOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_withdrawLockupEpochs","type":"uint256"},{"internalType":"uint256","name":"_rewardLockupEpochs","type":"uint256"}],"name":"masonrySetLockUp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"masonryAllocateSeigniorage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"masonryGovernanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"Masonry":{"address":"0x4E56bbB489a14Ed4aa55D1e4B031cAEC474874D3","abi":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"executor","type":"address"},{"indexed":false,"internalType":"uint256","name":"at","type":"uint256"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Staked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdrawn","type":"event"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"allocateSeigniorage","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"mason","type":"address"}],"name":"canClaimReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"mason","type":"address"}],"name":"canWithdraw","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"mason","type":"address"}],"name":"earned","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"epoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"exit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"mason","type":"address"}],"name":"getLastSnapshotIndexOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getMbirdPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_mbird","type":"address"},{"internalType":"contract IERC20","name":"_mlot","type":"address"},{"internalType":"contract ITreasury","name":"_treasury","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialized","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"latestSnapshotIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"masonryHistory","outputs":[{"internalType":"uint256","name":"time","type":"uint256"},{"internalType":"uint256","name":"rewardReceived","type":"uint256"},{"internalType":"uint256","name":"rewardPerShare","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"masons","outputs":[{"internalType":"uint256","name":"lastSnapshotIndex","type":"uint256"},{"internalType":"uint256","name":"rewardEarned","type":"uint256"},{"internalType":"uint256","name":"epochTimerStart","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mbird","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mlot","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextEpochPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardLockupEpochs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_withdrawLockupEpochs","type":"uint256"},{"internalType":"uint256","name":"_rewardLockupEpochs","type":"uint256"}],"name":"setLockUp","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"stake","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"treasury","outputs":[{"internalType":"contract ITreasury","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawLockupEpochs","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}]},"TombFtmRewardPool":{"address":"0x1611Bb1a16601dBB2eDf4c73Bd5CE506F89c8348","abi":[{"inputs":[{"internalType":"address","name":"_mbird","type":"address"},{"internalType":"uint256","name":"_poolStartTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"uint256","name":"_lastRewardTime","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"epochEndTimes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"epochMbirdPerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"epochTotalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fromTime","type":"uint256"},{"internalType":"uint256","name":"_toTime","type":"uint256"}],"name":"getGeneratedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mbird","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingMBIRD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accMbirdPerShare","type":"uint256"},{"internalType":"bool","name":"isStarted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"TombBooGenesisRewardPool":{"address":"0x38D08e819424a41b2580f6e7840A8A0A7D26e06c","abi":[{"inputs":[{"internalType":"address","name":"_mbird","type":"address"},{"internalType":"uint256","name":"_poolStartTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"TOTAL_REWARDS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"uint256","name":"_lastRewardTime","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fromTime","type":"uint256"},{"internalType":"uint256","name":"_toTime","type":"uint256"}],"name":"getGeneratedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mbird","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mbirdPerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingMBIRD","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accMbirdPerShare","type":"uint256"},{"internalType":"bool","name":"isStarted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"runningTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"TombZooGenesisRewardPool":{"address":"0x9A896d3c54D7e45B558BD5fFf26bF1E8C031F93b","abi":[{"inputs":[{"internalType":"address","name":"_tomb","type":"address"},{"internalType":"uint256","name":"_poolStartTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"TOTAL_REWARDS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accTombPerShare","type":"uint256"},{"internalType":"bool","name":"isStarted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"runningTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tomb","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tombPerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"uint256","name":"_lastRewardTime","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fromTime","type":"uint256"},{"internalType":"uint256","name":"_toTime","type":"uint256"}],"name":"getGeneratedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingTOMB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"TombShibaGenesisRewardPool":{"address":"0x9A896d3c54D7e45B558BD5fFf26bF1E8C031F93b","abi":[{"inputs":[{"internalType":"address","name":"_tomb","type":"address"},{"internalType":"uint256","name":"_poolStartTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"TOTAL_REWARDS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accTombPerShare","type":"uint256"},{"internalType":"bool","name":"isStarted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"runningTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tomb","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tombPerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"uint256","name":"_lastRewardTime","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fromTime","type":"uint256"},{"internalType":"uint256","name":"_toTime","type":"uint256"}],"name":"getGeneratedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingTOMB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"TombFtmLpTombRewardPoolOld":{"address":"0xA7B16703470055881e7EE093e9b0bF537f29CD4d","abi":[{"inputs":[{"internalType":"address","name":"_tomb","type":"address"},{"internalType":"uint256","name":"_poolStartTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"epochEndTimes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"epochTombPerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"epochTotalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accTombPerShare","type":"uint256"},{"internalType":"bool","name":"isStarted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tomb","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"uint256","name":"_lastRewardTime","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fromTime","type":"uint256"},{"internalType":"uint256","name":"_toTime","type":"uint256"}],"name":"getGeneratedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingTOMB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"TombFtmLpTombRewardPool":{"address":"0xa7b9123f4b15fE0fF01F469ff5Eab2b41296dC0E","abi":[{"inputs":[{"internalType":"address","name":"_tomb","type":"address"},{"internalType":"uint256","name":"_poolStartTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"epochEndTimes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"epochTombPerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"epochTotalRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accTombPerShare","type":"uint256"},{"internalType":"bool","name":"isStarted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tomb","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"uint256","name":"_lastRewardTime","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fromTime","type":"uint256"},{"internalType":"uint256","name":"_toTime","type":"uint256"}],"name":"getGeneratedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingTOMB","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"TombFtmLPTShareRewardPool":{"address":"0xcc0a87F7e7c693042a9Cc703661F5060c80ACb43","abi":[{"inputs":[{"internalType":"address","name":"_tshare","type":"address"},{"internalType":"uint256","name":"_poolStartTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"TOTAL_REWARDS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accTSharePerShare","type":"uint256"},{"internalType":"bool","name":"isStarted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"runningTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tSharePerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tshare","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"uint256","name":"_lastRewardTime","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fromTime","type":"uint256"},{"internalType":"uint256","name":"_toTime","type":"uint256"}],"name":"getGeneratedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"TshareFtmLPTShareRewardPool":{"address":"0xcc0a87F7e7c693042a9Cc703661F5060c80ACb43","abi":[{"inputs":[{"internalType":"address","name":"_tshare","type":"address"},{"internalType":"uint256","name":"_poolStartTime","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"EmergencyWithdraw","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"RewardPaid","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":true,"internalType":"uint256","name":"pid","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"TOTAL_REWARDS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"operator","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolEndTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolInfo","outputs":[{"internalType":"contract IERC20","name":"token","type":"address"},{"internalType":"uint256","name":"allocPoint","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"internalType":"uint256","name":"accTSharePerShare","type":"uint256"},{"internalType":"bool","name":"isStarted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolStartTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"runningTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tSharePerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalAllocPoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tshare","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"rewardDebt","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_allocPoint","type":"uint256"},{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"bool","name":"_withUpdate","type":"bool"},{"internalType":"uint256","name":"_lastRewardTime","type":"uint256"}],"name":"add","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_allocPoint","type":"uint256"}],"name":"set","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_fromTime","type":"uint256"},{"internalType":"uint256","name":"_toTime","type":"uint256"}],"name":"getGeneratedReward","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"address","name":"_user","type":"address"}],"name":"pendingShare","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"massUpdatePools","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"updatePool","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_pid","type":"uint256"}],"name":"emergencyWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"}],"name":"setOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"contract IERC20","name":"_token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"governanceRecoverUnsupported","outputs":[],"stateMutability":"nonpayable","type":"function"}]},"zapper":{"address":"0x8bb1fe7a50082623b372d857b4d07911c786a3e9","abi":[{"inputs":[{"internalType":"address","name":"_WNATIVE","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"fee_to","type":"address"},{"indexed":false,"internalType":"uint16","name":"rate","type":"uint16"},{"indexed":false,"internalType":"uint16","name":"min","type":"uint16"}],"name":"FeeChange","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[{"internalType":"address","name":"_LP","type":"address"},{"internalType":"address","name":"_router","type":"address"},{"internalType":"uint256","name":"_amt","type":"uint256"}],"name":"estimateZapIn","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"address","name":"_router","type":"address"},{"internalType":"uint256","name":"_amt","type":"uint256"}],"name":"estimateZapInToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint16","name":"rate","type":"uint16"},{"internalType":"uint16","name":"min","type":"uint16"}],"name":"setFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"router","type":"address"},{"internalType":"address","name":"bridgeToken","type":"address"}],"name":"setTokenBridgeForRouter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"router","type":"address"}],"name":"setUseNativeRouter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"routerAddr","type":"address"},{"internalType":"address","name":"_recipient","type":"address"}],"name":"swapToNative","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"address","name":"routerAddr","type":"address"},{"internalType":"address","name":"_recipient","type":"address"}],"name":"swapToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"useNativeRouter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"_toRouter","type":"address"},{"internalType":"address","name":"_recipient","type":"address"}],"name":"zapAcross","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"address","name":"routerAddr","type":"address"},{"internalType":"address","name":"_recipient","type":"address"}],"name":"zapIn","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"address","name":"routerAddr","type":"address"},{"internalType":"address","name":"_recipient","type":"address"}],"name":"zapInToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"routerAddr","type":"address"},{"internalType":"address","name":"_recipient","type":"address"}],"name":"zapOut","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"address","name":"routerAddr","type":"address"},{"internalType":"address","name":"_recipient","type":"address"}],"name":"zapOutToken","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]}}'
      );
    },
    442: function (e, t, n) {
      e.exports = n(778);
    },
    447: function (e, t, n) {},
    453: function (e, t) {},
    502: function (e, t) {},
    504: function (e, t) {},
    622: function (e, t) {},
    624: function (e, t) {},
    64: function (e, t, n) {
      "use strict";
      n.d(t, "e", function () {
        return i;
      }),
        n.d(t, "d", function () {
          return u;
        }),
        n.d(t, "c", function () {
          return p;
        }),
        n.d(t, "a", function () {
          return s;
        }),
        n.d(t, "b", function () {
          return r;
        });
      var a = n(55),
        i = Object(a.b)("app/updateBlockNumber"),
        u = Object(a.b)("app/toggleWalletModal"),
        p = Object(a.b)("app/toggleSettingsMenu"),
        s = Object(a.b)("app/addPopup"),
        r = Object(a.b)("app/removePopup");
    },
    656: function (e, t) {},
    661: function (e, t) {},
    663: function (e, t) {},
    670: function (e, t) {},
    683: function (e, t) {},
    778: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        i = n.n(a),
        u = n(44),
        p = n.n(u),
        s = (n(447), n(58)),
        r = n(86),
        o = n(50),
        y = n(830),
        l = n(22),
        d = n(430),
        m = n(2),
        c = n.n(m),
        b = n(14),
        T = n(24),
        f = n(42),
        v = function () {
          var e = Object(a.useState)(!1),
            t = Object(T.a)(e, 2),
            n = t[0],
            i = t[1],
            u = window.ethereum,
            p = (function () {
              var e = Object(b.a)(
                c.a.mark(function e(t) {
                  return c.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            t.request({
                              method: "wallet_addEthereumChain",
                              params: [
                                {
                                  chainId: "0x".concat(
                                    f.b.chainId.toString(16)
                                  ),
                                  chainName: f.b.networkName,
                                  nativeCurrency: {
                                    name: "FTM",
                                    symbol: "ftm",
                                    decimals: 18,
                                  },
                                  rpcUrls: [f.b.defaultProvider],
                                  blockExplorerUrls: [f.b.ftmscanUrl],
                                },
                              ],
                            })
                          );
                        case 2:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          Object(a.useEffect)(
            function () {
              n ||
                (u &&
                  u.networkVersion !== f.b.chainId.toString() &&
                  (p(u), i(!0)));
            },
            [n, u]
          );
        },
        w = n(282),
        M = n(208),
        h = n(209),
        x = n(59),
        O = n(55),
        _ = n(266),
        g = n(105),
        E = function () {
          return new Date().getTime();
        },
        k = Object(O.c)({}, function (e) {
          return e
            .addCase(g.a, function (e, t) {
              var n,
                a,
                i = t.payload,
                u = i.chainId,
                p = i.from,
                s = i.hash,
                r = i.approval,
                o = i.summary;
              if (null === (n = e[u]) || void 0 === n ? void 0 : n[s])
                throw Error("Attempted to add existing transaction.");
              var y = null !== (a = e[u]) && void 0 !== a ? a : {};
              (y[s] = {
                hash: s,
                approval: r,
                summary: o,
                from: p,
                addedTime: E(),
              }),
                (e[u] = y);
            })
            .addCase(g.c, function (e, t) {
              var n = t.payload.chainId;
              e[n] && (e[n] = {});
            })
            .addCase(g.b, function (e, t) {
              var n,
                a = t.payload,
                i = a.chainId,
                u = a.hash,
                p = a.blockNumber,
                s = null === (n = e[i]) || void 0 === n ? void 0 : n[u];
              s &&
                (s.lastCheckedBlockNumber
                  ? (s.lastCheckedBlockNumber = Math.max(
                      p,
                      s.lastCheckedBlockNumber
                    ))
                  : (s.lastCheckedBlockNumber = p));
            })
            .addCase(g.d, function (e, t) {
              var n,
                a = t.payload,
                i = a.hash,
                u = a.chainId,
                p = a.receipt,
                s = null === (n = e[u]) || void 0 === n ? void 0 : n[i];
              s && ((s.receipt = p), (s.confirmedTime = E()));
            });
        }),
        P = n(64),
        A = Object(O.c)(
          {
            blockNumber: {},
            popupList: [],
            walletModalOpen: !1,
            settingsMenuOpen: !1,
          },
          function (e) {
            return e
              .addCase(P.e, function (e, t) {
                var n = t.payload,
                  a = n.chainId,
                  i = n.blockNumber;
                "number" !== typeof e.blockNumber[a]
                  ? (e.blockNumber[a] = i)
                  : (e.blockNumber[a] = Math.max(i, e.blockNumber[a]));
              })
              .addCase(P.d, function (e) {
                e.walletModalOpen = !e.walletModalOpen;
              })
              .addCase(P.c, function (e) {
                e.settingsMenuOpen = !e.settingsMenuOpen;
              })
              .addCase(P.a, function (e, t) {
                var n = t.payload,
                  a = n.content,
                  i = n.key,
                  u = n.removeAfterMs,
                  p = void 0 === u ? 15e3 : u;
                e.popupList = (
                  i
                    ? e.popupList.filter(function (e) {
                        return e.key !== i;
                      })
                    : e.popupList
                ).concat([
                  {
                    key: i || Object(O.e)(),
                    show: !0,
                    content: a,
                    removeAfterMs: p,
                  },
                ]);
              })
              .addCase(P.b, function (e, t) {
                var n = t.payload.key;
                e.popupList.forEach(function (e) {
                  e.key === n && (e.show = !1);
                });
              });
          }
        ),
        R = ["transactions"],
        S = Object(O.a)({
          reducer: { application: A, transactions: k },
          middleware: [].concat(Object(x.a)(Object(O.d)({ thunk: !1 })), [
            Object(_.save)({ states: R }),
          ]),
          preloadedState: Object(_.load)({ states: R }),
        }),
        F = { 200: "#64ffda" },
        I = {
          borderRadius: 12,
          color: {
            black: "#000",
            grey: {
              100: "#f5f5f5",
              200: "#eeeeee",
              300: "#e0e0e0",
              400: "#bdbdbd",
              500: "#9e9e9e",
              600: "#757575",
              700: "#616161",
              800: "#424242",
              900: "#212121",
            },
            purple: { 200: "#bd7cfe", 400: "#ab47bc", 700: "#7b1fa2" },
            primary: { light: "#7575FF", main: "#9090FF" },
            secondary: { main: F[200] },
            white: "#FFF",
            teal: F,
          },
          siteWidth: 1200,
          spacing: { 1: 4, 2: 8, 3: 16, 4: 24, 5: 32, 6: 48, 7: 64 },
          topBarSize: 72,
        },
        C = n(426),
        j = Object(C.a)({
          palette: {
            type: "dark",
            text: { primary: "#FFF" },
            background: {
              default: "#121212",
              paper: "rgba(255, 255, 255, 0.9)",
            },
            primary: {
              light: "#757ce8",
              main: "#571eb1",
              dark: "#2c2560",
              contrastText: "#000",
            },
            secondary: {
              light: "#ff7961",
              main: "#f44336",
              dark: "#ba000d",
              contrastText: "#000",
            },
            action: {
              disabledBackground: "#CDCDCD",
              active: "#000",
              hover: "#000",
            },
          },
          typography: {
            color: "#2c2560",
            fontFamily: ['"Poppins"', "sans-serif"].join(","),
          },
        });
      var D = "visibilityState" in document;
      function N() {
        return !D || "hidden" !== document.visibilityState;
      }
      var L = n(145);
      function B() {
        var e = Object(d.h)(),
          t = e.ethereum,
          n = e.chainId,
          i = Object(s.b)(),
          u = (function () {
            var e = Object(a.useState)(N()),
              t = Object(T.a)(e, 2),
              n = t[0],
              i = t[1],
              u = Object(a.useCallback)(
                function () {
                  i(N());
                },
                [i]
              );
            return (
              Object(a.useEffect)(
                function () {
                  if (D)
                    return (
                      document.addEventListener("visibilitychange", u),
                      function () {
                        document.removeEventListener("visibilitychange", u);
                      }
                    );
                },
                [u]
              ),
              n
            );
          })(),
          p = Object(a.useState)({ chainId: n, blockNumber: null }),
          r = Object(T.a)(p, 2),
          o = r[0],
          y = r[1],
          l = Object(a.useCallback)(
            function (e) {
              y(function (t) {
                return n === t.chainId
                  ? "number" !== typeof t.blockNumber
                    ? { chainId: n, blockNumber: e }
                    : { chainId: n, blockNumber: Math.max(e, t.blockNumber) }
                  : t;
              });
            },
            [n, y]
          );
        Object(a.useEffect)(
          function () {
            if (t && n && u) {
              y({ chainId: n, blockNumber: null });
              var e = Object(L.a)();
              return (
                e
                  .getBlockNumber()
                  .then(l)
                  .catch(function (e) {
                    return console.error(
                      "Failed to get block number for chainId: ".concat(n),
                      e
                    );
                  }),
                e.on("block", l),
                function () {
                  return e.removeListener("block", l);
                }
              );
            }
          },
          [i, n, t, l, u]
        );
        var m = (function (e, t) {
          var n = Object(a.useState)(e),
            i = Object(T.a)(n, 2),
            u = i[0],
            p = i[1];
          return (
            Object(a.useEffect)(
              function () {
                var n = setTimeout(function () {
                  p(e);
                }, t);
                return function () {
                  clearTimeout(n);
                };
              },
              [e, t]
            ),
            u
          );
        })(o, 100);
        return (
          Object(a.useEffect)(
            function () {
              m.chainId &&
                m.blockNumber &&
                u &&
                i(
                  Object(P.e)({
                    chainId: m.chainId,
                    blockNumber: m.blockNumber,
                  })
                );
            },
            [u, i, m.blockNumber, m.chainId]
          ),
          null
        );
      }
      var W = n(124);
      function U() {
        var e,
          t = Object(d.h)(),
          n = t.chainId,
          i = t.ethereum,
          u = Object(W.c)(),
          p = Object(s.b)(),
          r = Object(s.c)(function (e) {
            return e.transactions;
          }),
          o = n && null !== (e = r[n]) && void 0 !== e ? e : {},
          y = Object(W.b)();
        return (
          Object(a.useEffect)(
            function () {
              if (n && i && u) {
                var e = Object(L.a)();
                Object.keys(o)
                  .filter(function (e) {
                    return (function (e, t) {
                      if (t.receipt) return !1;
                      if (!t.lastCheckedBlockNumber) return !0;
                      var n = e - t.lastCheckedBlockNumber;
                      if (n < 1) return !1;
                      var a = (new Date().getTime() - t.addedTime) / 1e3 / 60;
                      return a > 60 ? n > 9 : !(a > 5) || n > 2;
                    })(u, o[e]);
                  })
                  .forEach(function (t) {
                    e.getTransactionReceipt(t)
                      .then(function (e) {
                        var a;
                        e
                          ? (p(
                              Object(g.d)({
                                chainId: n,
                                hash: t,
                                receipt: {
                                  blockHash: e.blockHash,
                                  blockNumber: e.blockNumber,
                                  contractAddress: e.contractAddress,
                                  from: e.from,
                                  status: e.status,
                                  to: e.to,
                                  transactionHash: e.transactionHash,
                                  transactionIndex: e.transactionIndex,
                                },
                              })
                            ),
                            y(
                              {
                                txn: {
                                  hash: t,
                                  success: 1 === e.status,
                                  summary:
                                    null === (a = o[t]) || void 0 === a
                                      ? void 0
                                      : a.summary,
                                },
                              },
                              t
                            ))
                          : p(
                              Object(g.b)({
                                chainId: n,
                                hash: t,
                                blockNumber: u,
                              })
                            );
                      })
                      .catch(function (e) {
                        console.error(
                          "failed to check transaction hash: ".concat(t),
                          e
                        );
                      });
                  });
              }
            },
            [n, i, o, u, p, y]
          ),
          null
        );
      }
      var H,
        z,
        G,
        V = function () {
          return i.a.createElement(
            i.a.Fragment,
            null,
            i.a.createElement(B, null),
            i.a.createElement(U, null)
          );
        },
        Z = n(177),
        q = function () {
          return i.a.createElement(
            "div",
            {
              style: {
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              },
            },
            i.a.createElement(Z.a, null, "Loading")
          );
        },
        Y = n(27),
        J = n(809),
        K = n(206),
        Q = n(807),
        X = n(808),
        $ = l.d.div(H || (H = Object(Y.a)(["\n  flex-wrap: nowrap;\n"])));
      function ee(e) {
        var t = e.hash,
          n = e.success,
          u = e.summary,
          p = Object(d.h)().chainId,
          s = Object(a.useContext)(l.a);
        return i.a.createElement(
          $,
          null,
          i.a.createElement(
            "div",
            { style: { paddingRight: 16 } },
            n
              ? i.a.createElement(Q.a, { color: s.color.teal[200], size: 24 })
              : i.a.createElement(X.a, { color: "#FF6871", size: 24 })
          ),
          i.a.createElement(
            "div",
            null,
            i.a.createElement(
              ie,
              null,
              null !== u && void 0 !== u
                ? u
                : "Hash: " + t.slice(0, 8) + "..." + t.slice(58, 65)
            ),
            p &&
              i.a.createElement(
                ue,
                {
                  target: "_blank",
                  href: "".concat(f.b.ftmscanUrl, "/tx/").concat(t),
                },
                "View on Ftmscan"
              )
          )
        );
      }
      var te,
        ne,
        ae,
        ie = l.d.span(
          z || (z = Object(Y.a)(["\n  font-weight: 500;\n  color: ", ";\n"])),
          function (e) {
            return e.theme.color.grey[300];
          }
        ),
        ue = l.d.a(
          G || (G = Object(Y.a)(["\n  color: ", ";\n"])),
          function (e) {
            return e.theme.color.grey[500];
          }
        ),
        pe = l.d.div(te || (te = Object(Y.a)(["\n  flex-wrap: nowrap;\n"])));
      function se(e) {
        var t = e.message,
          n = e.stack,
          u = Object(a.useCallback)(
            Object(b.a)(
              c.a.mark(function e() {
                return c.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          (e.next = 2),
                          navigator.clipboard.writeText(
                            "".concat(t, "\n").concat(n)
                          )
                        );
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            [t, n]
          );
        return i.a.createElement(
          pe,
          null,
          i.a.createElement(
            "div",
            { style: { paddingRight: 16 } },
            i.a.createElement(X.a, { color: "#FF6871", size: 24 })
          ),
          i.a.createElement(
            "div",
            null,
            i.a.createElement(ce, null, t),
            i.a.createElement(
              be,
              { onClick: u, href: "#" },
              "Copy error details"
            )
          )
        );
      }
      var re,
        oe,
        ye,
        le,
        de,
        me,
        ce = l.d.span(
          ne || (ne = Object(Y.a)(["\n  font-weight: 500;\n  color: ", ";\n"])),
          function (e) {
            return e.theme.color.grey[300];
          }
        ),
        be = l.d.a(
          ae || (ae = Object(Y.a)(["\n  color: ", ";\n"])),
          function (e) {
            return e.theme.color.grey[500];
          }
        ),
        Te = Object(l.d)(J.a)(
          re ||
            (re = Object(Y.a)([
              "\n  position: absolute;\n  right: 10px;\n  top: 10px;\n\n  :hover {\n    cursor: pointer;\n  }\n",
            ]))
        ),
        fe = l.d.div(
          oe ||
            (oe = Object(Y.a)([
              "\n  display: inline-block;\n  width: 100%;\n  padding: 1em;\n  background-color: ",
              ";\n  position: relative;\n  border-radius: 10px;\n  padding: 20px;\n  padding-right: 35px;\n  overflow: hidden;\n\n  @media (max-width: 768px) {\n    min-width: 290px;\n  }\n",
            ])),
          function (e) {
            return e.theme.color.grey[700];
          }
        ),
        ve = l.d.div(
          ye ||
            (ye = Object(Y.a)([
              "\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  width: 100%;\n  height: 2px;\n  background-color: ",
              ";\n",
            ])),
          function (e) {
            return e.theme.color.grey[400];
          }
        ),
        we = Object(K.a)(ve);
      function Me(e) {
        var t = e.removeAfterMs,
          n = e.content,
          u = e.popKey,
          p = Object(W.d)(),
          s = Object(a.useCallback)(
            function () {
              return p(u);
            },
            [u, p]
          );
        Object(a.useEffect)(
          function () {
            if (null !== t) {
              var e = setTimeout(function () {
                s();
              }, t);
              return function () {
                clearTimeout(e);
              };
            }
          },
          [t, s]
        );
        var r,
          o = Object(a.useContext)(l.a);
        if ("txn" in n) {
          var y = n.txn,
            d = y.hash,
            m = y.success,
            c = y.summary;
          r = i.a.createElement(ee, { hash: d, success: m, summary: c });
        }
        if ("error" in n) {
          var b = n.error,
            T = b.message,
            f = b.stack;
          r = i.a.createElement(se, { message: T, stack: f });
        }
        var v = Object(K.b)({
          from: { width: "100%" },
          to: { width: "0%" },
          config: { duration: null !== t && void 0 !== t ? t : void 0 },
        });
        return i.a.createElement(
          fe,
          null,
          i.a.createElement(Te, { color: o.text2, onClick: s }),
          r,
          null !== t ? i.a.createElement(we, { style: v }) : null
        );
      }
      var he = l.d.div(
          le ||
            (le = Object(Y.a)([
              "\n  position: relative;\n  max-width: 100%;\n  height: ",
              ";\n  margin: ",
              ";\n  margin-bottom: ",
              "};\n\n  display: none;\n  @media (max-width: 768px) {\n    display: block;\n  };\n",
            ])),
          function (e) {
            return e.height;
          },
          function (e) {
            return e.height ? "0 auto;" : 0;
          },
          function (e) {
            return e.height ? "20px" : 0;
          }
        ),
        xe = l.d.div(
          de ||
            (de = Object(Y.a)([
              "\n  height: 99%;\n  overflow-x: auto;\n  overflow-y: hidden;\n  display: flex;\n  flex-direction: row;\n  -webkit-overflow-scrolling: touch;\n  ::-webkit-scrollbar {\n    display: none;\n  }\n",
            ]))
        ),
        Oe = l.d.div(
          me ||
            (me = Object(Y.a)([
              "\n  position: fixed;\n  top: 64px;\n  margin-right: 24px;\n  right: 3rem;\n  max-width: 355px !important;\n  width: 100%;\n  z-index: 2;\n\n  @media (max-width: 768px) {\n    display: none;\n  } ;\n",
            ]))
        );
      function _e() {
        var e = Object(W.a)();
        return i.a.createElement(
          i.a.Fragment,
          null,
          i.a.createElement(
            Oe,
            null,
            e.map(function (e) {
              return i.a.createElement(Me, {
                key: e.key,
                content: e.content,
                popKey: e.key,
                removeAfterMs: e.removeAfterMs,
              });
            })
          ),
          i.a.createElement(
            he,
            {
              height:
                (null === e || void 0 === e ? void 0 : e.length) > 0
                  ? "fit-content"
                  : 0,
            },
            i.a.createElement(
              xe,
              null,
              e
                .slice(0)
                .reverse()
                .map(function (e) {
                  return i.a.createElement(Me, {
                    key: e.key,
                    content: e.content,
                    popKey: e.key,
                    removeAfterMs: e.removeAfterMs,
                  });
                })
            )
          )
        );
      }
      var ge,
        Ee = n(61),
        ke = n(20),
        Pe = n(810),
        Ae = n(824),
        Re = n(825),
        Se = n(826),
        Fe = n(827),
        Ie = n(828),
        Ce = n(829),
        je = n(277),
        De = n(425),
        Ne = n.n(De),
        Le = n(96),
        Be = Object(l.c)(
          ge ||
            (ge = Object(Y.a)([
              "\n  body, html {\n    background: url(",
              ") no-repeat !important;\n    background-size: cover !important;\n  }\n",
            ])),
          Ne.a
        ),
        We = Object(ke.a)(function (e) {
          return {
            head: {
              fontSize: 18,
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              color: "#2c2560",
              fontWeight: "bolder",
            },
            body: { fontSize: 14, color: "#2c2560" },
          };
        })(Ae.a),
        Ue = Object(Pe.a)(function (e) {
          return {
            gridItem: Object(Ee.a)({ height: "100%" }, e.breakpoints.up("md"), {
              height: "90px",
            }),
          };
        }),
        He = Object(ke.a)(function (e) {
          return {
            root: { "&:nth-of-type(odd)": { backgroundColor: "rgb(0,0,0)" } },
          };
        })(Re.a),
        ze = function () {
          var e = Ue(),
            t = Object(Le.a)(),
            n = Object(a.useState)(null),
            u = Object(T.a)(n, 2),
            p = u[0],
            s = u[1];
          return (
            Object(a.useEffect)(
              function () {
                t &&
                  t.listenForRegulationsEvents().then(function (e) {
                    s(
                      e.reverse().map(function (e) {
                        return (
                          (t = e.epoch),
                          (n = e.daoFund),
                          (a = e.devFund),
                          (i = e.masonryFund),
                          {
                            epoch: t,
                            dao: n,
                            dev: a,
                            masonry: i,
                            sum: (Number(n) + Number(a) + Number(i)).toFixed(2),
                          }
                        );
                        var t, n, a, i;
                      })
                    );
                  });
              },
              [t]
            ),
            i.a.createElement(
              je.a,
              null,
              i.a.createElement(Be, null),
              i.a.createElement(
                Z.a,
                {
                  color: "textPrimary",
                  align: "center",
                  variant: "h3",
                  gutterBottom: !0,
                },
                "Graveyard regulations"
              ),
              i.a.createElement(
                Se.a,
                null,
                i.a.createElement(
                  Fe.a,
                  { className: e.table, "aria-label": "simple table" },
                  i.a.createElement(
                    Ie.a,
                    null,
                    i.a.createElement(
                      Re.a,
                      null,
                      i.a.createElement(We, { align: "center" }, "Epoch"),
                      i.a.createElement(
                        We,
                        { align: "center" },
                        "Masonry funding"
                      ),
                      i.a.createElement(We, { align: "center" }, "DAO funding"),
                      i.a.createElement(We, { align: "center" }, "DEV funding"),
                      i.a.createElement(We, { align: "center" }, "Total"),
                      i.a.createElement(
                        We,
                        { align: "center" },
                        "Bonds Bought"
                      ),
                      i.a.createElement(
                        We,
                        { align: "center" },
                        "Bonds Redeemed"
                      )
                    )
                  ),
                  i.a.createElement(
                    Ce.a,
                    null,
                    null === p || void 0 === p
                      ? void 0
                      : p.map(function (e, t) {
                          return i.a.createElement(
                            He,
                            {
                              style:
                                t % 2
                                  ? { background: "rgba(255,255,255,0.9)" }
                                  : { background: "rgba(255,255,255,0.8)" },
                              key: e.epoch,
                            },
                            i.a.createElement(
                              We,
                              {
                                style: { color: "#2c2560" },
                                align: "center",
                                component: "th",
                                scope: "row",
                              },
                              e.epoch
                            ),
                            i.a.createElement(
                              We,
                              { align: "center" },
                              e.masonry
                            ),
                            i.a.createElement(We, { align: "center" }, e.dao),
                            i.a.createElement(We, { align: "center" }, e.dev),
                            i.a.createElement(We, { align: "center" }, e.sum),
                            i.a.createElement(We, { align: "center" }, "0"),
                            i.a.createElement(We, { align: "center" }, "0")
                          );
                        })
                  )
                )
              )
            )
          );
        },
        Ge = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(9), n.e(7)]).then(n.bind(null, 914));
        }),
        Ve = Object(a.lazy)(function () {
          return Promise.all([n.e(0), n.e(5)]).then(n.bind(null, 911));
        }),
        Ze = Object(a.lazy)(function () {
          return Promise.all([n.e(12), n.e(6)]).then(n.bind(null, 910));
        }),
        qe = Object(a.lazy)(function () {
          return Promise.all([n.e(11), n.e(8)]).then(n.bind(null, 913));
        }),
        Ye = function () {
          return i.a.createElement(
            "h3",
            {
              style: {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              },
            },
            "URL Not Found. ",
            i.a.createElement("a", { href: "/" }, "Go back home.")
          );
        },
        Je = function (e) {
          var t = e.children;
          return i.a.createElement(
            l.b,
            { theme: I },
            i.a.createElement(
              y.a,
              { theme: j },
              i.a.createElement(
                d.a,
                {
                  chainId: f.b.chainId,
                  connectors: {
                    walletconnect: { rpcUrl: f.b.defaultProvider },
                  },
                },
                i.a.createElement(
                  s.a,
                  { store: S },
                  i.a.createElement(V, null),
                  i.a.createElement(
                    M.b,
                    null,
                    i.a.createElement(
                      h.b,
                      null,
                      i.a.createElement(
                        w.b,
                        null,
                        i.a.createElement(
                          i.a.Fragment,
                          null,
                          i.a.createElement(_e, null),
                          t
                        )
                      )
                    )
                  )
                )
              )
            )
          );
        },
        Ke = function () {
          return (
            ("undefined" !== typeof localStorage.version_app &&
              "1.0" === localStorage.version_app) ||
              (localStorage.clear(),
              localStorage.setItem("connectorId", ""),
              localStorage.setItem("version_app", "1.0")),
            v(),
            i.a.createElement(
              Je,
              null,
              i.a.createElement(
                r.a,
                null,
                i.a.createElement(
                  a.Suspense,
                  { fallback: i.a.createElement(q, null) },
                  i.a.createElement(
                    o.c,
                    null,
                    i.a.createElement(
                      o.a,
                      { exact: !0, path: "/" },
                      i.a.createElement(Ge, null)
                    ),
                    i.a.createElement(
                      o.a,
                      { path: "/cemetery" },
                      i.a.createElement(Ve, null)
                    ),
                    i.a.createElement(
                      o.a,
                      { path: "/masonry" },
                      i.a.createElement(Ze, null)
                    ),
                    i.a.createElement(
                      o.a,
                      { path: "/pit" },
                      i.a.createElement(qe, null)
                    ),
                    i.a.createElement(
                      o.a,
                      { path: "/regulations" },
                      i.a.createElement(ze, null)
                    ),
                    i.a.createElement(
                      o.a,
                      { path: "*" },
                      i.a.createElement(Ye, null)
                    )
                  )
                )
              )
            )
          );
        };
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      p.a.render(
        i.a.createElement(i.a.StrictMode, null, i.a.createElement(Ke, null)),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
    93: function (e, t, n) {
      "use strict";
      n.d(t, "c", function () {
        return a;
      }),
        n.d(t, "d", function () {
          return i;
        }),
        n.d(t, "a", function () {
          return u;
        }),
        n.d(t, "b", function () {
          return p;
        }),
        n.d(t, "e", function () {
          return s;
        });
      var a = "TOMB",
        i = "TSHARE",
        u = "FTM",
        p = "0xF491e7B69E4244ad4002BC14e878a34207E38c29",
        s = "0x8bb1fe7a50082623b372d857b4d07911c786a3e9";
    },
    96: function (e, t, n) {
      "use strict";
      var a = n(0),
        i = n(208);
      t.a = function () {
        return Object(a.useContext)(i.a).tombFinance;
      };
    },
  },
  [[442, 3, 4]],
]);
