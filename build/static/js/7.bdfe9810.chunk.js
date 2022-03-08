(this["webpackJsonptomb.finance"] =
  this["webpackJsonptomb.finance"] || []).push([
  [7],
  {
    837: function (e, t, n) {
      "use strict";
      var a = n(0),
        r = n(838),
        c = n(124);
      t.a = function () {
        var e = Object(r.b)(),
          t = Object(c.b)();
        return Object(a.useCallback)(
          function (n, a) {
            n.then(function (t) {
              return e(t, { summary: a });
            }).catch(function (e) {
              if (!e.message.includes("User denied")) {
                var n = "Unable to "
                  .concat(a[0].toLowerCase())
                  .concat(a.slice(1));
                console.error("".concat(n, ": ").concat(e.message || e.stack)),
                  t({ error: { message: n, stack: e.message || e.stack } });
              }
            });
          },
          [t, e]
        );
      };
    },
    838: function (e, t, n) {
      "use strict";
      n.d(t, "b", function () {
        return o;
      }),
        n.d(t, "a", function () {
          return u;
        });
      var a = n(0),
        r = n(58),
        c = n(430),
        l = n(105);
      function o() {
        var e = Object(c.h)(),
          t = e.chainId,
          n = e.account,
          o = Object(r.b)();
        return Object(a.useCallback)(
          function (e) {
            var a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = a.summary,
              c = a.approval;
            if (n && t) {
              var i = e.hash;
              if (!i) throw Error("No transaction hash found.");
              o(
                Object(l.a)({
                  hash: i,
                  from: n,
                  chainId: t,
                  approval: c,
                  summary: r,
                })
              );
            }
          },
          [o, t, n]
        );
      }
      function i() {
        var e,
          t = Object(c.h)().chainId,
          n = Object(r.c)(function (e) {
            return e.transactions;
          });
        return t && null !== (e = n[t]) && void 0 !== e ? e : {};
      }
      function u(e, t) {
        var n = i();
        return Object(a.useMemo)(
          function () {
            return (
              "string" === typeof e &&
              "string" === typeof t &&
              Object.keys(n).some(function (a) {
                var r = n[a];
                if (!r) return !1;
                if (r.receipt) return !1;
                var c = r.approval;
                return (
                  !!c &&
                  c.spender === t &&
                  c.tokenAddress === e &&
                  (function (e) {
                    return new Date().getTime() - e.addedTime < 864e5;
                  })(r)
                );
              })
            );
          },
          [n, t, e]
        );
      }
    },
    839: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return j;
      });
      var a,
        r,
        c,
        l,
        o,
        i,
        u = n(27),
        s = n(0),
        m = n.n(s),
        p = n(22),
        f = n(818),
        d = p.d.div(
          a ||
            (a = Object(u.a)([
              "\n  align-items: center;\n  background-color: ",
              ";\n  border-radius: ",
              "px;\n  display: flex;\n  padding: 0 ",
              "px;\n",
            ])),
          function (e) {
            return e.theme.color.grey[200];
          },
          function (e) {
            return e.theme.borderRadius;
          },
          function (e) {
            return e.theme.spacing[3];
          }
        ),
        b = p.d.input(
          r ||
            (r = Object(u.a)([
              "\n  background: none;\n  border: 0;\n  color: ",
              ";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n",
            ])),
          function (e) {
            return e.theme.color.grey[600];
          }
        ),
        O = function (e) {
          var t = e.endAdornment,
            n = e.onChange,
            a = e.placeholder,
            r = e.startAdornment,
            c = e.value;
          return m.a.createElement(
            d,
            null,
            !!r && r,
            m.a.createElement(b, { placeholder: a, value: c, onChange: n }),
            !!t && t
          );
        },
        E = p.d.div(c || (c = Object(u.a)([""]))),
        v = p.d.div(
          l || (l = Object(u.a)(["\n  width: ", "px;\n"])),
          function (e) {
            return e.theme.spacing[3];
          }
        ),
        h = p.d.div(
          o ||
            (o = Object(u.a)(["\n  align-items: center;\n  display: flex;\n"]))
        ),
        g = p.d.div(
          i ||
            (i = Object(u.a)([
              "\n  align-items: center;\n  color: ",
              ";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n",
            ])),
          function (e) {
            return e.theme.color.grey[400];
          }
        ),
        j = function (e) {
          var t = e.max,
            n = e.symbol,
            a = e.onChange,
            r = e.onSelectMax,
            c = e.value;
          return m.a.createElement(
            E,
            null,
            m.a.createElement(
              g,
              null,
              t.toLocaleString(),
              " ",
              n,
              " Available"
            ),
            m.a.createElement(O, {
              endAdornment: m.a.createElement(
                h,
                null,
                m.a.createElement(v, null),
                m.a.createElement(
                  "div",
                  null,
                  m.a.createElement(
                    f.a,
                    {
                      size: "small",
                      color: "primary",
                      variant: "contained",
                      onClick: r,
                    },
                    "Max"
                  )
                )
              ),
              onChange: a,
              placeholder: "0",
              value: c,
            })
          );
        };
    },
    840: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return f;
      });
      var a,
        r,
        c,
        l = n(27),
        o = n(0),
        i = n.n(o),
        u = n(22),
        s = u.d.div(
          a ||
            (a = Object(l.a)([
              "\n  align-items: center;\n  background-color: ",
              "00;\n  display: flex;\n  height: 96px;\n  margin: ",
              "px ",
              "px\n    ",
              "px;\n  padding: 0 ",
              "px;\n",
            ])),
          function (e) {
            return e.theme.color.grey[100];
          },
          function (e) {
            return e.theme.spacing[4];
          },
          function (e) {
            return -e.theme.spacing[4];
          },
          function (e) {
            return -e.theme.spacing[4];
          },
          function (e) {
            return e.theme.spacing[4];
          }
        ),
        m = u.d.div(r || (r = Object(l.a)(["\n  flex: 1;\n"]))),
        p = u.d.div(
          c || (c = Object(l.a)(["\n  width: ", "px;\n"])),
          function (e) {
            return e.theme.spacing[4];
          }
        ),
        f = function (e) {
          var t = e.children,
            n = i.a.Children.toArray(t).length;
          return i.a.createElement(
            s,
            null,
            i.a.Children.map(t, function (e, t) {
              return i.a.createElement(
                i.a.Fragment,
                null,
                i.a.createElement(m, null, e),
                t < n - 1 && i.a.createElement(p, null)
              );
            })
          );
        };
    },
    841: function (e, t, n) {
      "use strict";
      var a = n(2),
        r = n.n(a),
        c = n(14),
        l = n(24),
        o = n(0),
        i = n(430);
      t.a = function (e, t, n) {
        var a = Object(o.useState)(null),
          u = Object(l.a)(a, 2),
          s = u[0],
          m = u[1],
          p = Object(i.h)().account,
          f = Object(o.useCallback)(
            Object(c.a)(
              r.a.mark(function n() {
                var a;
                return r.a.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (n.next = 2), e.allowance(p, t);
                      case 2:
                        (a = n.sent), m(a);
                      case 4:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            ),
            [p, t, e]
          );
        return (
          Object(o.useEffect)(
            function () {
              p &&
                t &&
                e &&
                f().catch(function (e) {
                  return console.log(
                    "Failed to fetch allowance: ".concat(e.stack)
                  );
                });
            },
            [p, t, e, n, f]
          ),
          s
        );
      };
    },
    843: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var a,
        r = n(27),
        c = n(0),
        l = n.n(c),
        o = n(22).d.div(
          a ||
            (a = Object(r.a)([
              "\n  background-color: ",
              ";\n  font-size: 36px;\n  height: 95px;\n  width: 95px;\n  border-radius: 40px;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n  box-shadow: inset 4px 4px 8px ",
              ",\n    inset -6px -6px 12px ",
              ";\n  margin: 0 auto ",
              "px;\n",
            ])),
          function (e) {
            return e.theme.color.white;
          },
          function (e) {
            return e.theme.color.grey[300];
          },
          function (e) {
            return e.theme.color.grey[100];
          },
          function (e) {
            return e.theme.spacing[3];
          }
        ),
        i = function (e) {
          var t = e.children;
          return l.a.createElement(o, null, t);
        };
    },
    845: function (e, t, n) {
      "use strict";
      var a = n(2),
        r = n.n(a),
        c = n(14),
        l = n(24),
        o = n(0),
        i = n(96),
        u = n(42);
      t.a = function () {
        var e = Object(o.useState)(),
          t = Object(l.a)(e, 2),
          n = t[0],
          a = t[1],
          s = Object(i.a)(),
          m = Object(o.useCallback)(
            Object(c.a)(
              r.a.mark(function e() {
                return r.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.t0 = a), (e.next = 3), s.getTombStat();
                      case 3:
                        (e.t1 = e.sent), (0, e.t0)(e.t1);
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            [s]
          );
        return (
          Object(o.useEffect)(
            function () {
              m().catch(function (e) {
                return console.error(
                  "Failed to fetch TOMB price: ".concat(e.stack)
                );
              });
              var e = setInterval(m, u.b.refreshInterval);
              return function () {
                return clearInterval(e);
              };
            },
            [a, s, m]
          ),
          n
        );
      };
    },
    851: function (e, t, n) {
      "use strict";
      var a = n(2),
        r = n.n(a),
        c = n(14),
        l = n(24),
        o = n(0),
        i = n(96),
        u = n(42);
      t.a = function (e) {
        var t = Object(o.useState)(),
          n = Object(l.a)(t, 2),
          a = n[0],
          s = n[1],
          m = Object(i.a)(),
          p = Object(o.useCallback)(
            Object(c.a)(
              r.a.mark(function t() {
                return r.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.t0 = s), (t.next = 3), m.getLPStat(e);
                      case 3:
                        (t.t1 = t.sent), (0, t.t0)(t.t1);
                      case 5:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            ),
            [m, e]
          );
        return (
          Object(o.useEffect)(
            function () {
              p().catch(function (e) {
                return console.error(
                  "Failed to fetch TOMB price: ".concat(e.stack)
                );
              });
              var e = setInterval(p, u.b.refreshInterval);
              return function () {
                return clearInterval(e);
              };
            },
            [s, m, p]
          ),
          a
        );
      };
    },
    855: function (e, t, n) {
      "use strict";
      var a = n(0),
        r = n(96),
        c = n(837);
      t.a = function (e) {
        var t = Object(r.a)(),
          n = Object(c.a)();
        return {
          onZap: Object(a.useCallback)(
            function (a, r, c) {
              n(
                t.zapIn(a, r, c),
                "Zap ".concat(c, " in ").concat(e.depositTokenName, ".")
              );
            },
            [e, t, n]
          ),
        };
      };
    },
    856: function (e, t, n) {
      "use strict";
      var a = n(2),
        r = n.n(a),
        c = n(14),
        l = n(24),
        o = n(0),
        i = n(96),
        u = n(42);
      t.a = function () {
        var e = Object(o.useState)(),
          t = Object(l.a)(e, 2),
          n = t[0],
          a = t[1],
          s = Object(i.a)(),
          m = Object(o.useCallback)(
            Object(c.a)(
              r.a.mark(function e() {
                return r.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.t0 = a), (e.next = 3), s.getBondStat();
                      case 3:
                        (e.t1 = e.sent), (0, e.t0)(e.t1);
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            [s]
          );
        return (
          Object(o.useEffect)(
            function () {
              m().catch(function (e) {
                return console.error(
                  "Failed to fetch TBOND price: ".concat(e.stack)
                );
              });
              var e = setInterval(m, u.b.refreshInterval);
              return function () {
                return clearInterval(e);
              };
            },
            [a, s, m]
          ),
          n
        );
      };
    },
    857: function (e, t, n) {
      "use strict";
      var a = n(2),
        r = n.n(a),
        c = n(14),
        l = n(24),
        o = n(0),
        i = n(96),
        u = n(42);
      t.a = function () {
        var e = Object(o.useState)(),
          t = Object(l.a)(e, 2),
          n = t[0],
          a = t[1],
          s = Object(i.a)(),
          m = Object(o.useCallback)(
            Object(c.a)(
              r.a.mark(function e() {
                return r.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (e.t0 = a), (e.next = 3), s.getShareStat();
                      case 3:
                        (e.t1 = e.sent), (0, e.t0)(e.t1);
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            ),
            [s]
          );
        return (
          Object(o.useEffect)(
            function () {
              m().catch(function (e) {
                return console.error(
                  "Failed to fetch TSHARE price: ".concat(e.stack)
                );
              });
              var e = setInterval(m, u.b.refreshInterval);
              return function () {
                return clearInterval(e);
              };
            },
            [a, s, m]
          ),
          n
        );
      };
    },
    862: function (e, t, n) {
      "use strict";
      var a,
        r = n(27),
        c = n(2),
        l = n.n(c),
        o = n(14),
        i = n(24),
        u = n(0),
        s = n.n(u),
        m = n(177),
        p = n(915),
        f = n(912),
        d = n(818),
        b = n(20),
        O = n(909),
        E = n(273),
        v = n(840),
        h = n(274),
        g = n(839),
        j = n(22),
        x = n(30),
        y = n(179),
        k = n(851),
        S = n(181),
        N = n(96),
        A = n(430),
        P = n(98),
        C = n(34),
        w = n(838),
        M = n(841),
        I = n(93),
        T = P.ethers.constants.MaxUint256,
        L = C.a.from("1000000000000000000000000");
      !(function (e) {
        (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
          (e[(e.NOT_APPROVED = 1)] = "NOT_APPROVED"),
          (e[(e.PENDING = 2)] = "PENDING"),
          (e[(e.APPROVED = 3)] = "APPROVED");
      })(a || (a = {}));
      var F,
        R,
        D = function (e) {
          var t,
            n = Object(N.a)();
          e === I.a
            ? (t = n.FTM)
            : e === I.c
            ? (t = n.MBird)
            : e === I.d && (t = n.MShare);
          var r = Object(w.a)(t.address, I.e),
            c = Object(M.a)(t, I.e, r),
            i = Object(u.useMemo)(
              function () {
                return t === n.FTM
                  ? a.APPROVED
                  : c
                  ? c.lt(L)
                    ? r
                      ? a.PENDING
                      : a.NOT_APPROVED
                    : a.APPROVED
                  : a.UNKNOWN;
              },
              [c, r, t, n]
            ),
            s = Object(w.b)(),
            m = Object(u.useCallback)(
              Object(o.a)(
                l.a.mark(function e() {
                  var n;
                  return l.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (i === a.NOT_APPROVED) {
                            e.next = 3;
                            break;
                          }
                          return (
                            console.error("approve was called unnecessarily"),
                            e.abrupt("return")
                          );
                        case 3:
                          return (e.next = 5), t.approve(I.e, T);
                        case 5:
                          (n = e.sent),
                            s(n, {
                              summary: "Approve ".concat(t.symbol),
                              approval: {
                                tokenAddress: t.address,
                                spender: I.e,
                              },
                            });
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [i, t, s]
            );
          return [i, m];
        },
        z = n(898),
        H = j.d.div(
          F || (F = Object(r.a)(["\n  height: ", "px;\n  width: ", "px;\n"])),
          function (e) {
            return e.theme.spacing[4];
          },
          function (e) {
            return e.theme.spacing[4];
          }
        ),
        W = j.d.div(
          R ||
            (R = Object(r.a)([
              "\n  align-items: center;\n  color: ",
              ";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 22px;\n  justify-content: flex-start;\n",
            ])),
          function (e) {
            return e.theme.color.grey[400];
          }
        ),
        B = Object(b.a)({
          root: {
            backgroundColor: "white",
            color: "#2c2560",
            "&:hover": { backgroundColor: "grey", color: "#2c2560" },
            selected: { backgroundColor: "black" },
          },
        })(O.a);
      t.a = function (e) {
        var t = e.onConfirm,
          n = (e.onDismiss, e.tokenName),
          r = void 0 === n ? "" : n,
          c = e.decimals,
          b = void 0 === c ? 18 : c,
          O = Object(N.a)(),
          j = Object(A.h)().balance,
          P = (Number(j) / 1e18).toFixed(4).toString(),
          C = Object(S.a)(O.MBird),
          w = Object(S.a)(O.MShare),
          M = Object(u.useState)(""),
          T = Object(i.a)(M, 2),
          L = T[0],
          F = T[1],
          R = Object(u.useState)(I.a),
          V = Object(i.a)(R, 2),
          $ = V[0],
          Z = V[1],
          q = Object(u.useState)(P),
          U = Object(i.a)(q, 2),
          _ = U[0],
          G = U[1],
          K = Object(u.useState)({ token0: "0", token1: "0" }),
          J = Object(i.a)(K, 2),
          Q = J[0],
          X = J[1],
          Y = D($),
          ee = Object(i.a)(Y, 2),
          te = ee[0],
          ne = ee[1],
          ae = Object(k.a)("MBird-POS-LP"),
          re = Object(k.a)("MShare-POS-LP"),
          ce = Object(u.useMemo)(
            function () {
              return ae || null;
            },
            [ae]
          ),
          le = Object(u.useMemo)(
            function () {
              return re || null;
            },
            [re]
          ),
          oe = r.startsWith(I.c)
            ? null === ce || void 0 === ce
              ? void 0
              : ce.ftmAmount
            : null === le || void 0 === le
            ? void 0
            : le.ftmAmount;
        var ie = (function () {
            var e = Object(o.a)(
              l.a.mark(function e(t) {
                var n;
                return l.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          (("" !== t.currentTarget.value &&
                            0 !== t.currentTarget.value) ||
                            (F(t.currentTarget.value),
                            X({ token0: "0", token1: "0" })),
                          (a = t.currentTarget.value),
                          !isNaN(parseFloat(a)) && isFinite(a))
                        ) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt("return");
                      case 3:
                        return (
                          F(t.currentTarget.value),
                          (e.next = 6),
                          O.estimateZapIn($, r, String(t.currentTarget.value))
                        );
                      case 6:
                        (n = e.sent),
                          X({
                            token0: n[0].toString(),
                            token1: n[1].toString(),
                          });
                      case 8:
                      case "end":
                        return e.stop();
                    }
                  var a;
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          ue = (function () {
            var e = Object(o.a)(
              l.a.mark(function e() {
                var t;
                return l.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          F(_), (e.next = 3), O.estimateZapIn($, r, String(_))
                        );
                      case 3:
                        (t = e.sent),
                          X({
                            token0: t[0].toString(),
                            token1: t[1].toString(),
                          });
                      case 5:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function () {
              return e.apply(this, arguments);
            };
          })();
        return s.a.createElement(
          E.a,
          null,
          s.a.createElement(h.a, { text: "Zap in ".concat(r) }),
          s.a.createElement(
            m.a,
            { variant: "h6", align: "center" },
            "Powered by",
            " ",
            s.a.createElement(
              "a",
              {
                target: "_blank",
                rel: "noopener noreferrer",
                href: "https://mlnl.finance",
              },
              "mlnl.finance"
            )
          ),
          s.a.createElement(H, null),
          s.a.createElement(
            p.a,
            { style: { color: "#2c2560" }, id: "label" },
            "Select asset to zap with"
          ),
          s.a.createElement(
            f.a,
            {
              onChange: function (e) {
                var t = e.target.value;
                Z(t),
                  G(P),
                  e.target.value === I.d && G(Object(x.b)(w, b)),
                  e.target.value === I.c && G(Object(x.b)(C, b));
              },
              style: { color: "#2c2560" },
              labelId: "label",
              id: "select",
              value: $,
            },
            s.a.createElement(B, { value: I.a }, "FTM"),
            s.a.createElement(B, { value: I.c }, "TOMB"),
            s.a.createElement(B, { value: I.d }, "TSHARE")
          ),
          s.a.createElement(g.a, {
            onSelectMax: ue,
            onChange: ie,
            value: L,
            max: _,
            symbol: $,
          }),
          s.a.createElement(y.a, { text: "Zap Estimations" }),
          s.a.createElement(
            W,
            null,
            " ",
            r,
            ": ",
            Number(Q.token0) / Number(oe)
          ),
          s.a.createElement(
            W,
            null,
            " ",
            "(",
            Number(Q.token0),
            " ",
            I.a,
            " / ",
            Number(Q.token1),
            " ",
            r.startsWith(I.c) ? I.c : I.d,
            ")",
            " "
          ),
          s.a.createElement(
            v.a,
            null,
            s.a.createElement(
              d.a,
              {
                color: "primary",
                variant: "contained",
                onClick: function () {
                  return te !== a.APPROVED ? ne() : t($, r, L);
                },
              },
              te !== a.APPROVED ? "Approve" : "Let's go"
            )
          ),
          s.a.createElement(H, null),
          s.a.createElement(
            z.a,
            { variant: "filled", severity: "warning" },
            "Beta feature. Use at your own risk!"
          )
        );
      };
    },
    871: function (e, t, n) {
      e.exports = n.p + "static/media/MShare.c9f32551.jpg";
    },
    872: function (e, t, n) {
      e.exports = n.p + "static/media/poseidon.e796a94d.svg";
    },
    914: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "default", function () {
          return U;
        });
      var a,
        r = n(24),
        c = n(61),
        l = n(27),
        o = n(0),
        i = n.n(o),
        u = n(277),
        s = n(871),
        m = n.n(s),
        p = n(872),
        f = n.n(p),
        d = n(873),
        b = n.n(d),
        O = n(22),
        E = n(879),
        v = n.n(E),
        h = n(843),
        g = n(180),
        j = n(845),
        x = n(851),
        y = n(276),
        k = n(855),
        S = n(856),
        N = n(857),
        A = n(2),
        P = n.n(A),
        C = n(14),
        w = n(96),
        M = n(42),
        I = function () {
          var e = Object(o.useState)(0),
            t = Object(r.a)(e, 2),
            n = t[0],
            a = t[1],
            c = Object(w.a)(),
            l = Object(o.useCallback)(
              Object(C.a)(
                P.a.mark(function e() {
                  return P.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.t0 = a), (e.next = 3), c.getTotalValueLocked()
                          );
                        case 3:
                          (e.t1 = e.sent), (0, e.t0)(e.t1);
                        case 5:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [c]
            );
          return (
            Object(o.useEffect)(
              function () {
                l().catch(function (e) {
                  return console.error(
                    "Failed to fetch Total value locked: ".concat(e.stack)
                  );
                });
                var e = setInterval(l, M.b.refreshInterval);
                return function () {
                  return clearInterval(e);
                };
              },
              [a, c, l]
            ),
            n
          );
        },
        T = (n(432), n(433)),
        L = n(391),
        F = n.n(L),
        R = n(812),
        D = n(782),
        z = n(831),
        H = n(867),
        W = n(883),
        B = n(818),
        V = n(862),
        $ = n(810),
        Z = Object(O.c)(
          a ||
            (a = Object(l.a)([
              "\n  body {\n    background: url(",
              ") no-repeat !important;\n    background-size: cover !important;\n  }\n",
            ])),
          m.a
        ),
        q = Object($.a)(function (e) {
          return {
            button: Object(c.a)({}, e.breakpoints.down("415"), {
              marginTop: "10px",
            }),
          };
        }),
        U = function () {
          var e,
            t,
            n = q(),
            a = I(),
            c = Object(x.a)("MBird-POS-LP"),
            l = Object(x.a)("MShare-POS-LP"),
            s = Object(j.a)(),
            m = Object(N.a)(),
            p = Object(S.a)(),
            d = Object(w.a)();
          (e = T.tomb), (t = T.tShare);
          var O = "https://spookyswap.finance/swap?outputCurrency=" + e.address,
            E = "https://spookyswap.finance/swap?outputCurrency=" + t.address,
            A = Object(o.useMemo)(
              function () {
                return c || null;
              },
              [c]
            ),
            P = Object(o.useMemo)(
              function () {
                return l || null;
              },
              [l]
            ),
            C = Object(o.useMemo)(
              function () {
                return s ? Number(s.priceInDollars).toFixed(2) : null;
              },
              [s]
            ),
            M = Object(o.useMemo)(
              function () {
                return s ? Number(s.tokenInFtm).toFixed(2) : null;
              },
              [s]
            ),
            L = Object(o.useMemo)(
              function () {
                return s ? String(s.circulatingSupply) : null;
              },
              [s]
            ),
            $ = Object(o.useMemo)(
              function () {
                return s ? String(s.totalSupply) : null;
              },
              [s]
            ),
            U = Object(o.useMemo)(
              function () {
                return m ? Number(m.priceInDollars).toFixed(2) : null;
              },
              [m]
            ),
            _ = Object(o.useMemo)(
              function () {
                return m ? Number(m.tokenInFtm).toFixed(2) : null;
              },
              [m]
            ),
            G = Object(o.useMemo)(
              function () {
                return m ? String(m.circulatingSupply) : null;
              },
              [m]
            ),
            K = Object(o.useMemo)(
              function () {
                return m ? String(m.totalSupply) : null;
              },
              [m]
            ),
            J = Object(o.useMemo)(
              function () {
                return p ? Number(p.priceInDollars).toFixed(2) : null;
              },
              [p]
            ),
            Q = Object(o.useMemo)(
              function () {
                return p ? Number(p.tokenInFtm).toFixed(2) : null;
              },
              [p]
            ),
            X = Object(o.useMemo)(
              function () {
                return p ? String(p.circulatingSupply) : null;
              },
              [p]
            ),
            Y = Object(o.useMemo)(
              function () {
                return p ? String(p.totalSupply) : null;
              },
              [p]
            ),
            ee = Object(k.a)({ depositTokenName: "MBird-POS-LP" }),
            te = Object(k.a)({ depositTokenName: "MShare-POS-LP" }),
            ne = Object(y.a)(
              i.a.createElement(V.a, {
                decimals: 18,
                onConfirm: function (e, t, n) {
                  Number(n) <= 0 ||
                    isNaN(Number(n)) ||
                    (ee.onZap(e, t, n), ce());
                },
                tokenName: "MShare-POS-LP",
              })
            ),
            ae = Object(r.a)(ne, 2),
            re = ae[0],
            ce = ae[1],
            le = Object(y.a)(
              i.a.createElement(V.a, {
                decimals: 18,
                onConfirm: function (e, t, n) {
                  Number(n) <= 0 ||
                    isNaN(Number(n)) ||
                    (te.onZap(e, t, n), ue());
                },
                tokenName: "MShare-POS-LP",
              })
            ),
            oe = Object(r.a)(le, 2),
            ie = oe[0],
            ue = oe[1];
          return i.a.createElement(
            u.a,
            null,
            i.a.createElement(Z, null),
            i.a.createElement(
              R.a,
              { container: !0, spacing: 3 },
              i.a.createElement(
                R.a,
                { container: !0, item: !0, xs: 12, sm: 4, justify: "center" },
                i.a.createElement(b.a, {
                  color: "none",
                  style: { width: "300px", paddingTop: "0px" },
                  src: f.a,
                })
              ),
              i.a.createElement(
                R.a,
                { item: !0, xs: 12, sm: 8 },
                i.a.createElement(
                  D.a,
                  null,
                  i.a.createElement(
                    z.a,
                    { p: 4 },
                    i.a.createElement("h2", null, "Welcome to Mockingbird"),
                    i.a.createElement(
                      "p",
                      null,
                      "An algorithmic stablecoin on Fantom Opera, pegged to the price of 1 POS via seigniorage."
                    ),
                    i.a.createElement(
                      "p",
                      null,
                      "Stake your MSHARE in the Masonry to earn inflationary MBIRD rewards or provide liquidity on pairs and start earning today!"
                    )
                  )
                )
              ),
              i.a.createElement(
                R.a,
                { item: !0, xs: 12, sm: 4 },
                i.a.createElement(
                  H.a,
                  null,
                  i.a.createElement(
                    W.a,
                    { align: "center" },
                    i.a.createElement("h2", null, "Total Value Locked"),
                    i.a.createElement(v.a, {
                      style: { fontSize: "25px" },
                      end: a,
                      separator: ",",
                      prefix: "$",
                    })
                  )
                )
              ),
              i.a.createElement(
                R.a,
                { item: !0, xs: 12, sm: 8 },
                i.a.createElement(
                  H.a,
                  { style: { height: "100%" } },
                  i.a.createElement(
                    W.a,
                    { align: "center", style: { marginTop: "2.5%" } },
                    i.a.createElement(
                      B.a,
                      {
                        color: "primary",
                        href: "/masonry",
                        variant: "contained",
                        style: { marginRight: "10px" },
                      },
                      "Stake Now"
                    ),
                    i.a.createElement(
                      B.a,
                      {
                        href: "/cemetery",
                        variant: "contained",
                        className: n.button,
                        style: { marginRight: "10px" },
                      },
                      "Farm Now"
                    ),
                    i.a.createElement(
                      B.a,
                      {
                        color: "primary",
                        target: "_blank",
                        href: O,
                        variant: "contained",
                        style: { marginRight: "10px" },
                      },
                      "Buy MBIRD"
                    ),
                    i.a.createElement(
                      B.a,
                      {
                        variant: "contained",
                        target: "_blank",
                        href: E,
                        className: n.button,
                      },
                      "Buy MSHARE"
                    )
                  )
                )
              ),
              i.a.createElement(
                R.a,
                { item: !0, xs: 12, sm: 4 },
                i.a.createElement(
                  H.a,
                  null,
                  i.a.createElement(
                    W.a,
                    { align: "center", style: { position: "relative" } },
                    i.a.createElement("h2", null, "MBIRD"),
                    i.a.createElement(
                      B.a,
                      {
                        onClick: function () {
                          d.watchAssetInMetamask("MBird");
                        },
                        color: "primary",
                        variant: "outlined",
                        style: {
                          position: "absolute",
                          top: "10px",
                          right: "10px",
                        },
                      },
                      "+\xa0",
                      i.a.createElement("img", {
                        alt: "metamask fox",
                        style: { width: "20px" },
                        src: F.a,
                      })
                    ),
                    i.a.createElement(
                      z.a,
                      { mt: 2 },
                      i.a.createElement(
                        h.a,
                        null,
                        i.a.createElement(g.a, { symbol: "MBird" })
                      )
                    ),
                    "Current Price",
                    i.a.createElement(
                      z.a,
                      null,
                      i.a.createElement(
                        "span",
                        { style: { fontSize: "30px" } },
                        M || "-.--",
                        " POS"
                      )
                    ),
                    i.a.createElement(
                      z.a,
                      null,
                      i.a.createElement(
                        "span",
                        {
                          style: {
                            fontSize: "16px",
                            alignContent: "flex-start",
                          },
                        },
                        "$",
                        C || "-.--"
                      )
                    ),
                    i.a.createElement(
                      "span",
                      { style: { fontSize: "12px" } },
                      "Market Cap: $",
                      (L * C).toFixed(2),
                      " ",
                      i.a.createElement("br", null),
                      "Circulating Supply: ",
                      L,
                      " ",
                      i.a.createElement("br", null),
                      "Total Supply: ",
                      $
                    )
                  )
                )
              ),
              i.a.createElement(
                R.a,
                { item: !0, xs: 12, sm: 4 },
                i.a.createElement(
                  H.a,
                  null,
                  i.a.createElement(
                    W.a,
                    { align: "center", style: { position: "relative" } },
                    i.a.createElement("h2", null, "MSHARE"),
                    i.a.createElement(
                      B.a,
                      {
                        onClick: function () {
                          d.watchAssetInMetamask("MShare");
                        },
                        color: "primary",
                        variant: "outlined",
                        style: {
                          position: "absolute",
                          top: "10px",
                          right: "10px",
                        },
                      },
                      "+\xa0",
                      i.a.createElement("img", {
                        alt: "metamask fox",
                        style: { width: "20px" },
                        src: F.a,
                      })
                    ),
                    i.a.createElement(
                      z.a,
                      { mt: 2 },
                      i.a.createElement(
                        h.a,
                        null,
                        i.a.createElement(g.a, { symbol: "MShare" })
                      )
                    ),
                    "Current Price",
                    i.a.createElement(
                      z.a,
                      null,
                      i.a.createElement(
                        "span",
                        { style: { fontSize: "30px" } },
                        _ || "-.--",
                        " POS"
                      )
                    ),
                    i.a.createElement(
                      z.a,
                      null,
                      i.a.createElement(
                        "span",
                        { style: { fontSize: "16px" } },
                        "$",
                        U || "-.--"
                      )
                    ),
                    i.a.createElement(
                      "span",
                      { style: { fontSize: "12px" } },
                      "Market Cap: $",
                      (G * U).toFixed(2),
                      " ",
                      i.a.createElement("br", null),
                      "Circulating Supply: ",
                      G,
                      " ",
                      i.a.createElement("br", null),
                      "Total Supply: ",
                      K
                    )
                  )
                )
              ),
              i.a.createElement(
                R.a,
                { item: !0, xs: 12, sm: 4 },
                i.a.createElement(
                  H.a,
                  null,
                  i.a.createElement(
                    W.a,
                    { align: "center", style: { position: "relative" } },
                    i.a.createElement("h2", null, "MBOND"),
                    i.a.createElement(
                      B.a,
                      {
                        onClick: function () {
                          d.watchAssetInMetamask("Mbond");
                        },
                        color: "primary",
                        variant: "outlined",
                        style: {
                          position: "absolute",
                          top: "10px",
                          right: "10px",
                        },
                      },
                      "+\xa0",
                      i.a.createElement("img", {
                        alt: "metamask fox",
                        style: { width: "20px" },
                        src: F.a,
                      })
                    ),
                    i.a.createElement(
                      z.a,
                      { mt: 2 },
                      i.a.createElement(
                        h.a,
                        null,
                        i.a.createElement(g.a, { symbol: "MShare" })
                      )
                    ),
                    "Current Price",
                    i.a.createElement(
                      z.a,
                      null,
                      i.a.createElement(
                        "span",
                        { style: { fontSize: "30px" } },
                        Q || "-.--",
                        " POS"
                      )
                    ),
                    i.a.createElement(
                      z.a,
                      null,
                      i.a.createElement(
                        "span",
                        { style: { fontSize: "16px" } },
                        "$",
                        J || "-.--"
                      )
                    ),
                    i.a.createElement(
                      "span",
                      { style: { fontSize: "12px" } },
                      "Market Cap: $",
                      (X * J).toFixed(2),
                      " ",
                      i.a.createElement("br", null),
                      "Circulating Supply: ",
                      X,
                      " ",
                      i.a.createElement("br", null),
                      "Total Supply: ",
                      Y
                    )
                  )
                )
              ),
              i.a.createElement(
                R.a,
                { item: !0, xs: 12, sm: 6 },
                i.a.createElement(
                  H.a,
                  null,
                  i.a.createElement(
                    W.a,
                    { align: "center" },
                    i.a.createElement("h2", null, "MBIRD-POS Spooky LP"),
                    i.a.createElement(
                      z.a,
                      { mt: 2 },
                      i.a.createElement(
                        h.a,
                        null,
                        i.a.createElement(g.a, { symbol: "MBird-POS-LP" })
                      )
                    ),
                    i.a.createElement(
                      z.a,
                      { mt: 2 },
                      i.a.createElement(
                        B.a,
                        { color: "primary", onClick: re, variant: "contained" },
                        "Zap In"
                      )
                    ),
                    i.a.createElement(
                      z.a,
                      { mt: 2 },
                      i.a.createElement(
                        "span",
                        { style: { fontSize: "26px" } },
                        (null === A || void 0 === A ? void 0 : A.tokenAmount)
                          ? null === A || void 0 === A
                            ? void 0
                            : A.tokenAmount
                          : "-.--",
                        " MBird /",
                        " ",
                        (null === A || void 0 === A ? void 0 : A.ftmAmount)
                          ? null === A || void 0 === A
                            ? void 0
                            : A.ftmAmount
                          : "-.--",
                        " POS"
                      )
                    ),
                    i.a.createElement(
                      z.a,
                      null,
                      "$",
                      (null === A || void 0 === A ? void 0 : A.priceOfOne)
                        ? A.priceOfOne
                        : "-.--"
                    ),
                    i.a.createElement(
                      "span",
                      { style: { fontSize: "12px" } },
                      "Liquidity: $",
                      (null === A || void 0 === A ? void 0 : A.totalLiquidity)
                        ? A.totalLiquidity
                        : "-.--",
                      " ",
                      i.a.createElement("br", null),
                      "Total supply: ",
                      (null === A || void 0 === A ? void 0 : A.totalSupply)
                        ? A.totalSupply
                        : "-.--"
                    )
                  )
                )
              ),
              i.a.createElement(
                R.a,
                { item: !0, xs: 12, sm: 6 },
                i.a.createElement(
                  H.a,
                  null,
                  i.a.createElement(
                    W.a,
                    { align: "center" },
                    i.a.createElement("h2", null, "MSHARE-POS Spooky LP"),
                    i.a.createElement(
                      z.a,
                      { mt: 2 },
                      i.a.createElement(
                        h.a,
                        null,
                        i.a.createElement(g.a, { symbol: "MShare-POS-LP" })
                      )
                    ),
                    i.a.createElement(
                      z.a,
                      { mt: 2 },
                      i.a.createElement(
                        B.a,
                        { color: "primary", onClick: ie, variant: "contained" },
                        "Zap In"
                      )
                    ),
                    i.a.createElement(
                      z.a,
                      { mt: 2 },
                      i.a.createElement(
                        "span",
                        { style: { fontSize: "26px" } },
                        (null === P || void 0 === P ? void 0 : P.tokenAmount)
                          ? null === P || void 0 === P
                            ? void 0
                            : P.tokenAmount
                          : "-.--",
                        " MShare /",
                        " ",
                        (null === P || void 0 === P ? void 0 : P.ftmAmount)
                          ? null === P || void 0 === P
                            ? void 0
                            : P.ftmAmount
                          : "-.--",
                        " POS"
                      )
                    ),
                    i.a.createElement(
                      z.a,
                      null,
                      "$",
                      (null === P || void 0 === P ? void 0 : P.priceOfOne)
                        ? P.priceOfOne
                        : "-.--"
                    ),
                    i.a.createElement(
                      "span",
                      { style: { fontSize: "12px" } },
                      "Liquidity: $",
                      (null === P || void 0 === P ? void 0 : P.totalLiquidity)
                        ? P.totalLiquidity
                        : "-.--",
                      i.a.createElement("br", null),
                      "Total supply: ",
                      (null === P || void 0 === P ? void 0 : P.totalSupply)
                        ? P.totalSupply
                        : "-.--"
                    )
                  )
                )
              )
            )
          );
        };
    },
  },
]);
