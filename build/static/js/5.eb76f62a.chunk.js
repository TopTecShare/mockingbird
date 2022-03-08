(this["webpackJsonptomb.finance"] =
  this["webpackJsonptomb.finance"] || []).push([
  [5],
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
        return i;
      }),
        n.d(t, "a", function () {
          return u;
        });
      var a = n(0),
        r = n(58),
        c = n(430),
        o = n(105);
      function i() {
        var e = Object(c.h)(),
          t = e.chainId,
          n = e.account,
          i = Object(r.b)();
        return Object(a.useCallback)(
          function (e) {
            var a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = a.summary,
              c = a.approval;
            if (n && t) {
              var l = e.hash;
              if (!l) throw Error("No transaction hash found.");
              i(
                Object(o.a)({
                  hash: l,
                  from: n,
                  chainId: t,
                  approval: c,
                  summary: r,
                })
              );
            }
          },
          [i, t, n]
        );
      }
      function l() {
        var e,
          t = Object(c.h)().chainId,
          n = Object(r.c)(function (e) {
            return e.transactions;
          });
        return t && null !== (e = n[t]) && void 0 !== e ? e : {};
      }
      function u(e, t) {
        var n = l();
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
        o,
        i,
        l,
        u = n(27),
        s = n(0),
        m = n.n(s),
        d = n(22),
        f = n(818),
        b = d.d.div(
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
        p = d.d.input(
          r ||
            (r = Object(u.a)([
              "\n  background: none;\n  border: 0;\n  color: ",
              ";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n",
            ])),
          function (e) {
            return e.theme.color.grey[600];
          }
        ),
        v = function (e) {
          var t = e.endAdornment,
            n = e.onChange,
            a = e.placeholder,
            r = e.startAdornment,
            c = e.value;
          return m.a.createElement(
            b,
            null,
            !!r && r,
            m.a.createElement(p, { placeholder: a, value: c, onChange: n }),
            !!t && t
          );
        },
        O = d.d.div(c || (c = Object(u.a)([""]))),
        h = d.d.div(
          o || (o = Object(u.a)(["\n  width: ", "px;\n"])),
          function (e) {
            return e.theme.spacing[3];
          }
        ),
        E = d.d.div(
          i ||
            (i = Object(u.a)(["\n  align-items: center;\n  display: flex;\n"]))
        ),
        g = d.d.div(
          l ||
            (l = Object(u.a)([
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
            O,
            null,
            m.a.createElement(
              g,
              null,
              t.toLocaleString(),
              " ",
              n,
              " Available"
            ),
            m.a.createElement(v, {
              endAdornment: m.a.createElement(
                E,
                null,
                m.a.createElement(h, null),
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
        o = n(27),
        i = n(0),
        l = n.n(i),
        u = n(22),
        s = u.d.div(
          a ||
            (a = Object(o.a)([
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
        m = u.d.div(r || (r = Object(o.a)(["\n  flex: 1;\n"]))),
        d = u.d.div(
          c || (c = Object(o.a)(["\n  width: ", "px;\n"])),
          function (e) {
            return e.theme.spacing[4];
          }
        ),
        f = function (e) {
          var t = e.children,
            n = l.a.Children.toArray(t).length;
          return l.a.createElement(
            s,
            null,
            l.a.Children.map(t, function (e, t) {
              return l.a.createElement(
                l.a.Fragment,
                null,
                l.a.createElement(m, null, e),
                t < n - 1 && l.a.createElement(d, null)
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
        o = n(24),
        i = n(0),
        l = n(430);
      t.a = function (e, t, n) {
        var a = Object(i.useState)(null),
          u = Object(o.a)(a, 2),
          s = u[0],
          m = u[1],
          d = Object(l.h)().account,
          f = Object(i.useCallback)(
            Object(c.a)(
              r.a.mark(function n() {
                var a;
                return r.a.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (n.next = 2), e.allowance(d, t);
                      case 2:
                        (a = n.sent), m(a);
                      case 4:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            ),
            [d, t, e]
          );
        return (
          Object(i.useEffect)(
            function () {
              d &&
                t &&
                e &&
                f().catch(function (e) {
                  return console.log(
                    "Failed to fetch allowance: ".concat(e.stack)
                  );
                });
            },
            [d, t, e, n, f]
          ),
          s
        );
      };
    },
    843: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      });
      var a,
        r = n(27),
        c = n(0),
        o = n.n(c),
        i = n(22).d.div(
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
        l = function (e) {
          var t = e.children;
          return o.a.createElement(i, null, t);
        };
    },
    844: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var a = n(0),
        r = n.n(a),
        c = n(831),
        o = n(219),
        i = function () {
          return r.a.createElement(
            c.a,
            {
              style: {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              },
            },
            r.a.createElement(o.a, null)
          );
        };
    },
    845: function (e, t, n) {
      "use strict";
      var a = n(2),
        r = n.n(a),
        c = n(14),
        o = n(24),
        i = n(0),
        l = n(96),
        u = n(42);
      t.a = function () {
        var e = Object(i.useState)(),
          t = Object(o.a)(e, 2),
          n = t[0],
          a = t[1],
          s = Object(l.a)(),
          m = Object(i.useCallback)(
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
          Object(i.useEffect)(
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
    847: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return a;
      });
      var a,
        r = n(2),
        c = n.n(r),
        o = n(14),
        i = n(98),
        l = n(34),
        u = n(0),
        s = n(838),
        m = n(841),
        d = i.ethers.constants.MaxUint256,
        f = l.a.from("1000000000000000000000000");
      !(function (e) {
        (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
          (e[(e.NOT_APPROVED = 1)] = "NOT_APPROVED"),
          (e[(e.PENDING = 2)] = "PENDING"),
          (e[(e.APPROVED = 3)] = "APPROVED");
      })(a || (a = {})),
        (t.b = function (e, t) {
          var n = Object(s.a)(e.address, t),
            r = Object(m.a)(e, t, n),
            i = Object(u.useMemo)(
              function () {
                return r
                  ? r.lt(f)
                    ? n
                      ? a.PENDING
                      : a.NOT_APPROVED
                    : a.APPROVED
                  : a.UNKNOWN;
              },
              [r, n]
            ),
            l = Object(s.b)(),
            b = Object(u.useCallback)(
              Object(o.a)(
                c.a.mark(function n() {
                  var r;
                  return c.a.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          if (i === a.NOT_APPROVED) {
                            n.next = 3;
                            break;
                          }
                          return (
                            console.error("approve was called unnecessarily"),
                            n.abrupt("return")
                          );
                        case 3:
                          return (n.next = 5), e.approve(t, d);
                        case 5:
                          (r = n.sent),
                            l(r, {
                              summary: "Approve ".concat(e.symbol),
                              approval: { tokenAddress: e.address, spender: t },
                            });
                        case 7:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              ),
              [i, e, t, l]
            );
          return [i, b];
        });
    },
    849: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return u;
      });
      var a,
        r = n(27),
        c = n(0),
        o = n.n(c),
        i = n(22),
        l = i.d.div(
          a || (a = Object(r.a)(["\n  height: ", "px;\n  width: ", "px;\n"])),
          function (e) {
            return e.size;
          },
          function (e) {
            return e.size;
          }
        ),
        u = function (e) {
          var t,
            n = e.size,
            a = void 0 === n ? "md" : n,
            r = Object(c.useContext)(i.a).spacing;
          switch (a) {
            case "lg":
              t = r[6];
              break;
            case "sm":
              t = r[2];
              break;
            case "md":
            default:
              t = r[4];
          }
          return o.a.createElement(l, { size: t });
        };
    },
    850: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      });
      var a,
        r = n(27),
        c = n(0),
        o = n.n(c),
        i = n(22).d.div(
          a ||
            (a = Object(r.a)(["\n  font-size: 36px;\n  font-weight: 700;\n"]))
        ),
        l = function (e) {
          var t = e.value;
          return o.a.createElement(i, null, t);
        };
    },
    851: function (e, t, n) {
      "use strict";
      var a = n(2),
        r = n.n(a),
        c = n(14),
        o = n(24),
        i = n(0),
        l = n(96),
        u = n(42);
      t.a = function (e) {
        var t = Object(i.useState)(),
          n = Object(o.a)(t, 2),
          a = n[0],
          s = n[1],
          m = Object(l.a)(),
          d = Object(i.useCallback)(
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
          Object(i.useEffect)(
            function () {
              d().catch(function (e) {
                return console.error(
                  "Failed to fetch TOMB price: ".concat(e.stack)
                );
              });
              var e = setInterval(d, u.b.refreshInterval);
              return function () {
                return clearInterval(e);
              };
            },
            [s, m, d]
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
    857: function (e, t, n) {
      "use strict";
      var a = n(2),
        r = n.n(a),
        c = n(14),
        o = n(24),
        i = n(0),
        l = n(96),
        u = n(42);
      t.a = function () {
        var e = Object(i.useState)(),
          t = Object(o.a)(e, 2),
          n = t[0],
          a = t[1],
          s = Object(l.a)(),
          m = Object(i.useCallback)(
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
          Object(i.useEffect)(
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
    859: function (e, t, n) {
      "use strict";
      var a = n(2),
        r = n.n(a),
        c = n(14),
        o = n(24),
        i = n(0),
        l = n(96),
        u = n(42);
      t.a = function (e, t) {
        var n = Object(i.useState)("0"),
          a = Object(o.a)(n, 2),
          s = a[0],
          m = a[1],
          d = Object(l.a)(),
          f = null === d || void 0 === d ? void 0 : d.isUnlocked,
          b = Object(i.useCallback)(
            Object(c.a)(
              r.a.mark(function n() {
                var a;
                return r.a.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (n.next = 2), d.getDepositTokenPriceInDollars(e, t)
                        );
                      case 2:
                        (a = n.sent), m(a);
                      case 4:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            ),
            [t, e, d]
          );
        return (
          Object(i.useEffect)(
            function () {
              if (f) {
                b().catch(function (e) {
                  return console.error(e.stack);
                });
                var e = setInterval(b, u.b.refreshInterval);
                return function () {
                  return clearInterval(e);
                };
              }
            },
            [f, m, d, b]
          ),
          s
        );
      };
    },
    861: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return s;
      }),
        n.d(t, "b", function () {
          return m;
        });
      var a,
        r = n(0),
        c = n.n(r),
        o = n(22),
        i = n(27),
        l = o.d.div(a || (a = Object(i.a)([""]))),
        u = function (e) {
          var t = e.children;
          return c.a.createElement(l, null, t);
        },
        s = function (e) {
          var t = e.color,
            n = Object(r.useContext)(o.a).color;
          return c.a.createElement(
            u,
            null,
            c.a.createElement(
              "svg",
              { height: "24", viewBox: "0 0 24 24", width: "24" },
              c.a.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
              c.a.createElement("path", {
                d: "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z",
                fill: t || n.grey[400],
              })
            )
          );
        },
        m = function (e) {
          var t = e.color,
            n = Object(r.useContext)(o.a).color;
          return c.a.createElement(
            u,
            null,
            c.a.createElement(
              "svg",
              {
                viewBox: "0 0 24 24",
                fill: t || n.grey[400],
                width: "18px",
                height: "18px",
              },
              c.a.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
              c.a.createElement("path", { d: "M19 13H5v-2h14v2z" })
            )
          );
        };
    },
    862: function (e, t, n) {
      "use strict";
      var a,
        r = n(27),
        c = n(2),
        o = n.n(c),
        i = n(14),
        l = n(24),
        u = n(0),
        s = n.n(u),
        m = n(177),
        d = n(915),
        f = n(912),
        b = n(818),
        p = n(20),
        v = n(909),
        O = n(273),
        h = n(840),
        E = n(274),
        g = n(839),
        j = n(22),
        x = n(30),
        k = n(179),
        y = n(851),
        N = n(181),
        w = n(96),
        T = n(430),
        C = n(98),
        P = n(34),
        I = n(838),
        A = n(841),
        S = n(93),
        D = C.ethers.constants.MaxUint256,
        R = P.a.from("1000000000000000000000000");
      !(function (e) {
        (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
          (e[(e.NOT_APPROVED = 1)] = "NOT_APPROVED"),
          (e[(e.PENDING = 2)] = "PENDING"),
          (e[(e.APPROVED = 3)] = "APPROVED");
      })(a || (a = {}));
      var M,
        F,
        z = function (e) {
          var t,
            n = Object(w.a)();
          e === S.a
            ? (t = n.FTM)
            : e === S.c
            ? (t = n.MBird)
            : e === S.d && (t = n.MShare);
          var r = Object(I.a)(t.address, S.e),
            c = Object(A.a)(t, S.e, r),
            l = Object(u.useMemo)(
              function () {
                return t === n.FTM
                  ? a.APPROVED
                  : c
                  ? c.lt(R)
                    ? r
                      ? a.PENDING
                      : a.NOT_APPROVED
                    : a.APPROVED
                  : a.UNKNOWN;
              },
              [c, r, t, n]
            ),
            s = Object(I.b)(),
            m = Object(u.useCallback)(
              Object(i.a)(
                o.a.mark(function e() {
                  var n;
                  return o.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (l === a.NOT_APPROVED) {
                            e.next = 3;
                            break;
                          }
                          return (
                            console.error("approve was called unnecessarily"),
                            e.abrupt("return")
                          );
                        case 3:
                          return (e.next = 5), t.approve(S.e, D);
                        case 5:
                          (n = e.sent),
                            s(n, {
                              summary: "Approve ".concat(t.symbol),
                              approval: {
                                tokenAddress: t.address,
                                spender: S.e,
                              },
                            });
                        case 7:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              ),
              [l, t, s]
            );
          return [l, m];
        },
        U = n(898),
        V = j.d.div(
          M || (M = Object(r.a)(["\n  height: ", "px;\n  width: ", "px;\n"])),
          function (e) {
            return e.theme.spacing[4];
          },
          function (e) {
            return e.theme.spacing[4];
          }
        ),
        W = j.d.div(
          F ||
            (F = Object(r.a)([
              "\n  align-items: center;\n  color: ",
              ";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 22px;\n  justify-content: flex-start;\n",
            ])),
          function (e) {
            return e.theme.color.grey[400];
          }
        ),
        L = Object(p.a)({
          root: {
            backgroundColor: "white",
            color: "#2c2560",
            "&:hover": { backgroundColor: "grey", color: "#2c2560" },
            selected: { backgroundColor: "black" },
          },
        })(v.a);
      t.a = function (e) {
        var t = e.onConfirm,
          n = (e.onDismiss, e.tokenName),
          r = void 0 === n ? "" : n,
          c = e.decimals,
          p = void 0 === c ? 18 : c,
          v = Object(w.a)(),
          j = Object(T.h)().balance,
          C = (Number(j) / 1e18).toFixed(4).toString(),
          P = Object(N.a)(v.MBird),
          I = Object(N.a)(v.MShare),
          A = Object(u.useState)(""),
          D = Object(l.a)(A, 2),
          R = D[0],
          M = D[1],
          F = Object(u.useState)(S.a),
          B = Object(l.a)(F, 2),
          H = B[0],
          _ = B[1],
          G = Object(u.useState)(C),
          K = Object(l.a)(G, 2),
          Z = K[0],
          $ = K[1],
          q = Object(u.useState)({ token0: "0", token1: "0" }),
          J = Object(l.a)(q, 2),
          Y = J[0],
          Q = J[1],
          X = z(H),
          ee = Object(l.a)(X, 2),
          te = ee[0],
          ne = ee[1],
          ae = Object(y.a)("MBird-POS-LP"),
          re = Object(y.a)("MShare-POS-LP"),
          ce = Object(u.useMemo)(
            function () {
              return ae || null;
            },
            [ae]
          ),
          oe = Object(u.useMemo)(
            function () {
              return re || null;
            },
            [re]
          ),
          ie = r.startsWith(S.c)
            ? null === ce || void 0 === ce
              ? void 0
              : ce.ftmAmount
            : null === oe || void 0 === oe
            ? void 0
            : oe.ftmAmount;
        var le = (function () {
            var e = Object(i.a)(
              o.a.mark(function e(t) {
                var n;
                return o.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if (
                          (("" !== t.currentTarget.value &&
                            0 !== t.currentTarget.value) ||
                            (M(t.currentTarget.value),
                            Q({ token0: "0", token1: "0" })),
                          (a = t.currentTarget.value),
                          !isNaN(parseFloat(a)) && isFinite(a))
                        ) {
                          e.next = 3;
                          break;
                        }
                        return e.abrupt("return");
                      case 3:
                        return (
                          M(t.currentTarget.value),
                          (e.next = 6),
                          v.estimateZapIn(H, r, String(t.currentTarget.value))
                        );
                      case 6:
                        (n = e.sent),
                          Q({
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
            var e = Object(i.a)(
              o.a.mark(function e() {
                var t;
                return o.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        return (
                          M(Z), (e.next = 3), v.estimateZapIn(H, r, String(Z))
                        );
                      case 3:
                        (t = e.sent),
                          Q({
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
          O.a,
          null,
          s.a.createElement(E.a, { text: "Zap in ".concat(r) }),
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
          s.a.createElement(V, null),
          s.a.createElement(
            d.a,
            { style: { color: "#2c2560" }, id: "label" },
            "Select asset to zap with"
          ),
          s.a.createElement(
            f.a,
            {
              onChange: function (e) {
                var t = e.target.value;
                _(t),
                  $(C),
                  e.target.value === S.d && $(Object(x.b)(I, p)),
                  e.target.value === S.c && $(Object(x.b)(P, p));
              },
              style: { color: "#2c2560" },
              labelId: "label",
              id: "select",
              value: H,
            },
            s.a.createElement(L, { value: S.a }, "FTM"),
            s.a.createElement(L, { value: S.c }, "TOMB"),
            s.a.createElement(L, { value: S.d }, "TSHARE")
          ),
          s.a.createElement(g.a, {
            onSelectMax: ue,
            onChange: le,
            value: R,
            max: Z,
            symbol: H,
          }),
          s.a.createElement(k.a, { text: "Zap Estimations" }),
          s.a.createElement(
            W,
            null,
            " ",
            r,
            ": ",
            Number(Y.token0) / Number(ie)
          ),
          s.a.createElement(
            W,
            null,
            " ",
            "(",
            Number(Y.token0),
            " ",
            S.a,
            " / ",
            Number(Y.token1),
            " ",
            r.startsWith(S.c) ? S.c : S.d,
            ")",
            " "
          ),
          s.a.createElement(
            h.a,
            null,
            s.a.createElement(
              b.a,
              {
                color: "primary",
                variant: "contained",
                onClick: function () {
                  return te !== a.APPROVED ? ne() : t(H, r, R);
                },
              },
              te !== a.APPROVED ? "Approve" : "Let's go"
            )
          ),
          s.a.createElement(V, null),
          s.a.createElement(
            U.a,
            { variant: "filled", severity: "warning" },
            "Beta feature. Use at your own risk!"
          )
        );
      };
    },
    863: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return f;
      });
      var a,
        r,
        c,
        o = n(27),
        i = n(0),
        l = n.n(i),
        u = n(22),
        s = u.d.div(
          a ||
            (a = Object(o.a)([
              "\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  padding-bottom: ",
              "px;\n  padding-top: ",
              "px;\n  max-width: 512px;\n  width: 100%;\n  margin: 0 auto;\n",
            ])),
          function (e) {
            return e.theme.spacing[6];
          },
          function (e) {
            return e.theme.spacing[6];
          }
        ),
        m = u.d.h1(
          r ||
            (r = Object(o.a)([
              "\n  color: ",
              ";\n  font-size: 36px;\n  font-weight: 700;\n  margin: 0;\n  padding: 0;\n",
            ])),
          function (e) {
            return e.theme.color.grey[100];
          }
        ),
        d = u.d.h3(
          c ||
            (c = Object(o.a)([
              "\n  color: ",
              ";\n  font-size: 18px;\n  font-weight: 400;\n  margin: 0;\n  padding: 0;\n  text-align: center;\n",
            ])),
          function (e) {
            return e.theme.color.grey[400];
          }
        ),
        f = function (e) {
          e.icon;
          var t = e.subtitle,
            n = e.title;
          return l.a.createElement(
            s,
            null,
            l.a.createElement(m, null, n),
            l.a.createElement(d, null, t)
          );
        };
    },
    864: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return d;
      });
      var a,
        r,
        c = n(27),
        o = n(0),
        i = n.n(o),
        l = n(22),
        u = n(86),
        s = l.d.button(
          a ||
            (a = Object(c.a)([
              "\n  align-items: center;\n  // background-color: ",
              ";\n  background-color: ",
              ";\n  border: 0;\n  border-radius: 28px;\n  color: ",
              ";\n  cursor: pointer;\n  display: flex;\n  font-weight: 700;\n  height: 56px;\n  justify-content: center;\n  letter-spacing: 1px;\n  outline: none;\n  padding: 0;\n  margin: 0;\n  pointer-events: ",
              ";\n  text-transform: uppercase;\n  width: 56px;\n  &:hover {\n    // background-color: ",
              ";\n    background-color: #2c2560;\n  }\n",
            ])),
          function (e) {
            return e.theme.color.grey[e.disabled ? 900 : 700];
          },
          function (e) {
            return e.disabled ? e.theme.color.grey[900] : "#571eb1";
          },
          function (e) {
            return e.disabled
              ? e.theme.color.grey[500]
              : e.theme.color.primary.main;
          },
          function (e) {
            return e.disabled ? "none" : void 0;
          },
          function (e) {
            return e.theme.color.grey[800];
          }
        ),
        m = Object(l.d)(u.b)(
          r ||
            (r = Object(c.a)([
              "\n  align-items: center;\n  color: inherit;\n  display: flex;\n  flex: 1;\n  height: 56px;\n  justify-content: center;\n  margin: 0 ",
              "px;\n  padding: 0 ",
              "px;\n  text-decoration: none;\n",
            ])),
          function (e) {
            return -e.theme.spacing[4];
          },
          function (e) {
            return e.theme.spacing[4];
          }
        ),
        d = function (e) {
          var t = e.children,
            n = e.disabled,
            a = e.onClick,
            r = e.to;
          return i.a.createElement(
            s,
            { disabled: n, onClick: a },
            r ? i.a.createElement(m, { to: r }, t) : t
          );
        };
    },
    884: function (e, t, n) {
      "use strict";
      var a = n(213),
        r = n(214);
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = void 0);
      var c = r(n(0)),
        o = (0, a(n(215)).default)(
          c.createElement("path", { d: "M7 2v11h3v9l7-12h-4l4-8z" }),
          "FlashOn"
        );
      t.default = o;
    },
    885: function (e, t, n) {
      e.exports = n.p + "static/media/shipwreck.3a36559f.jpg";
    },
    911: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "default", function () {
          return Xe;
        });
      var a,
        r,
        c,
        o,
        i,
        l,
        u,
        s,
        m,
        d,
        f,
        b,
        p,
        v = n(24),
        O = n(27),
        h = n(0),
        E = n.n(h),
        g = n(430),
        j = n(50),
        x = n(61),
        k = n(22),
        y = n(810),
        N = n(831),
        w = n(812),
        T = n(867),
        C = n(883),
        P = n(177),
        I = n(818),
        A = n(863),
        S = n(849),
        D = n(844),
        R = n(843),
        M = n(179),
        F = n(850),
        z = n(2),
        U = n.n(z),
        V = n(14),
        W = n(34),
        L = n(96),
        B = n(42),
        H = function (e, t, n) {
          var a = Object(h.useState)(W.a.from(0)),
            r = Object(v.a)(a, 2),
            c = r[0],
            o = r[1],
            i = Object(L.a)(),
            l = null === i || void 0 === i ? void 0 : i.isUnlocked,
            u = Object(h.useCallback)(
              Object(V.a)(
                U.a.mark(function a() {
                  var r;
                  return U.a.wrap(function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (a.next = 2), i.earnedFromBank(e, t, n, i.myAccount)
                          );
                        case 2:
                          (r = a.sent), o(r);
                        case 4:
                        case "end":
                          return a.stop();
                      }
                  }, a);
                })
              ),
              [e, t, n, i]
            );
          return (
            Object(h.useEffect)(
              function () {
                if (l) {
                  u().catch(function (e) {
                    return console.error(e.stack);
                  });
                  var e = setInterval(u, B.b.refreshInterval);
                  return function () {
                    return clearInterval(e);
                  };
                }
              },
              [l, e, i, u]
            ),
            c
          );
        },
        _ = n(837),
        G = function (e) {
          var t = Object(L.a)(),
            n = Object(_.a)();
          return {
            onReward: Object(h.useCallback)(
              function () {
                n(
                  t.harvest(e.contract, e.poolId),
                  "Claim ".concat(e.earnTokenName, " from ").concat(e.contract)
                );
              },
              [e, t, n]
            ),
          };
        },
        K = n(30),
        Z = n(180),
        $ = n(845),
        q = n(857),
        J = k.d.div(
          a ||
            (a = Object(O.a)([
              "\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n",
            ]))
        ),
        Y = k.d.div(
          r ||
            (r = Object(O.a)([
              "\n  display: flex;\n  justify-content: center;\n  margin-top: ",
              "px;\n  width: 100%;\n",
            ])),
          function (e) {
            return e.theme.spacing[6];
          }
        ),
        Q = k.d.div(
          c ||
            (c = Object(O.a)([
              "\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n",
            ]))
        ),
        X = function (e) {
          var t = e.bank,
            n = H(t.contract, t.earnTokenName, t.poolId),
            a = G(t).onReward,
            r = Object($.a)(),
            c = Object(q.a)(),
            o = "TSHARE" === t.earnTokenName ? "TSHARE" : "TOMB",
            i = "TSHARE" === t.earnTokenName ? c : r,
            l = Object(h.useMemo)(
              function () {
                return i ? Number(i.priceInDollars).toFixed(2) : null;
              },
              [i]
            ),
            u = (Number(l) * Number(Object(K.b)(n))).toFixed(2);
          return E.a.createElement(
            T.a,
            null,
            E.a.createElement(
              C.a,
              null,
              E.a.createElement(
                Q,
                null,
                E.a.createElement(
                  J,
                  null,
                  E.a.createElement(
                    R.a,
                    null,
                    E.a.createElement(Z.a, { symbol: t.earnToken.symbol })
                  ),
                  E.a.createElement(F.a, { value: Object(K.b)(n) }),
                  E.a.createElement(M.a, { text: "\u2248 $".concat(u) }),
                  E.a.createElement(M.a, { text: "".concat(o, " Earned") })
                ),
                E.a.createElement(
                  Y,
                  null,
                  E.a.createElement(
                    I.a,
                    {
                      onClick: a,
                      disabled: n.eq(0),
                      color: "primary",
                      variant: "contained",
                    },
                    "Claim"
                  )
                )
              )
            )
          );
        },
        ee = n(861),
        te = n(884),
        ne = n.n(te),
        ae = n(864),
        re = n(847),
        ce = n(276),
        oe = n(81),
        ie = function (e) {
          var t = Object(L.a)(),
            n = Object(_.a)();
          return {
            onStake: Object(h.useCallback)(
              function (a) {
                var r = Object(oe.parseUnits)(a, e.depositToken.decimal);
                n(
                  t.stake(e.contract, e.poolId, r),
                  "Stake "
                    .concat(a, " ")
                    .concat(e.depositTokenName, " to ")
                    .concat(e.contract)
                );
              },
              [e, t, n]
            ),
          };
        },
        le = n(855),
        ue = function (e, t) {
          var n = Object(h.useState)(W.a.from(0)),
            a = Object(v.a)(n, 2),
            r = a[0],
            c = a[1],
            o = Object(L.a)(),
            i = null === o || void 0 === o ? void 0 : o.isUnlocked,
            l = Object(h.useCallback)(
              Object(V.a)(
                U.a.mark(function n() {
                  var a;
                  return U.a.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (
                            (n.next = 2),
                            o.stakedBalanceOnBank(e, t, o.myAccount)
                          );
                        case 2:
                          (a = n.sent), c(a);
                        case 4:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              ),
              [e, t, o]
            );
          return (
            Object(h.useEffect)(
              function () {
                if (i) {
                  l().catch(function (e) {
                    return console.error(e.stack);
                  });
                  var e = setInterval(l, B.b.refreshInterval);
                  return function () {
                    return clearInterval(e);
                  };
                }
              },
              [i, e, c, o, l]
            ),
            r
          );
        },
        se = n(859),
        me = n(181),
        de = function (e) {
          var t = Object(L.a)(),
            n = Object(_.a)();
          return {
            onWithdraw: Object(h.useCallback)(
              function (a) {
                var r = Object(oe.parseUnits)(a, e.depositToken.decimal);
                n(
                  t.unstake(e.contract, e.poolId, r),
                  "Withdraw "
                    .concat(a, " ")
                    .concat(e.depositTokenName, " from ")
                    .concat(e.contract)
                );
              },
              [e, t, n]
            ),
          };
        },
        fe = n(273),
        be = n(840),
        pe = n(274),
        ve = n(839),
        Oe = function (e) {
          var t = e.max,
            n = e.decimals,
            a = e.onConfirm,
            r = (e.onDismiss, e.tokenName),
            c = void 0 === r ? "" : r,
            o = Object(h.useState)(""),
            i = Object(v.a)(o, 2),
            l = i[0],
            u = i[1],
            s = Object(h.useMemo)(
              function () {
                return Object(K.c)(t, n, !1);
              },
              [t, n]
            ),
            m = Object(h.useCallback)(
              function (e) {
                u(e.currentTarget.value);
              },
              [u]
            ),
            d = Object(h.useCallback)(
              function () {
                u(s);
              },
              [s, u]
            );
          return E.a.createElement(
            fe.a,
            null,
            E.a.createElement(pe.a, { text: "Deposit ".concat(c) }),
            E.a.createElement(ve.a, {
              value: l,
              onSelectMax: d,
              onChange: m,
              max: s,
              symbol: c,
            }),
            E.a.createElement(
              be.a,
              null,
              E.a.createElement(
                I.a,
                {
                  color: "primary",
                  variant: "contained",
                  onClick: function () {
                    return a(l);
                  },
                },
                "Confirm"
              )
            )
          );
        },
        he = function (e) {
          var t = e.onConfirm,
            n = (e.onDismiss, e.max),
            a = e.tokenName,
            r = void 0 === a ? "" : a,
            c = e.decimals,
            o = void 0 === c ? 18 : c,
            i = Object(h.useState)(""),
            l = Object(v.a)(i, 2),
            u = l[0],
            s = l[1],
            m = Object(h.useMemo)(
              function () {
                return Object(K.c)(n, o, !1);
              },
              [n, o]
            ),
            d = Object(h.useCallback)(
              function (e) {
                s(e.currentTarget.value);
              },
              [s]
            ),
            f = Object(h.useCallback)(
              function () {
                s(m);
              },
              [m, s]
            );
          return E.a.createElement(
            fe.a,
            null,
            E.a.createElement(pe.a, { text: "Withdraw ".concat(r) }),
            E.a.createElement(ve.a, {
              onSelectMax: f,
              onChange: d,
              value: u,
              max: m,
              symbol: r,
            }),
            E.a.createElement(
              be.a,
              null,
              E.a.createElement(
                I.a,
                {
                  color: "primary",
                  variant: "contained",
                  onClick: function () {
                    return t(u);
                  },
                },
                "Confirm"
              )
            )
          );
        },
        Ee = n(862),
        ge = k.d.div(
          o ||
            (o = Object(O.a)([
              "\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n",
            ]))
        ),
        je = k.d.div(
          i ||
            (i = Object(O.a)([
              "\n  display: flex;\n  justify-content: center;\n  margin-top: 28px;\n  width: 100%;\n",
            ]))
        ),
        xe = k.d.div(
          l || (l = Object(O.a)(["\n  height: ", "px;\n  width: ", "px;\n"])),
          function (e) {
            return e.theme.spacing[4];
          },
          function (e) {
            return e.theme.spacing[4];
          }
        ),
        ke = k.d.div(
          u ||
            (u = Object(O.a)([
              "\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n",
            ]))
        ),
        ye = function (e) {
          var t = e.bank,
            n = Object(re.b)(t.depositToken, t.address),
            a = Object(v.a)(n, 2),
            r = a[0],
            c = a[1],
            o = Object(h.useContext)(k.a).color,
            i = Object(me.a)(t.depositToken),
            l = ue(t.contract, t.poolId),
            u = Object(se.a)(t.depositTokenName, t.depositToken),
            s = Object(h.useMemo)(
              function () {
                return u || null;
              },
              [u]
            ),
            m = (
              Number(s) * Number(Object(K.b)(l, t.depositToken.decimal))
            ).toFixed(2),
            d = ie(t).onStake,
            f = Object(le.a)(t).onZap,
            b = de(t).onWithdraw,
            p = Object(ce.a)(
              E.a.createElement(Oe, {
                max: i,
                decimals: t.depositToken.decimal,
                onConfirm: function (e) {
                  Number(e) <= 0 || isNaN(Number(e)) || (d(e), j());
                },
                tokenName: t.depositTokenName,
              })
            ),
            O = Object(v.a)(p, 2),
            g = O[0],
            j = O[1],
            x = Object(ce.a)(
              E.a.createElement(Ee.a, {
                decimals: t.depositToken.decimal,
                onConfirm: function (e, t, n) {
                  Number(n) <= 0 || isNaN(Number(n)) || (f(e, t, n), w());
                },
                tokenName: t.depositTokenName,
              })
            ),
            y = Object(v.a)(x, 2),
            N = y[0],
            w = y[1],
            P = Object(ce.a)(
              E.a.createElement(he, {
                max: l,
                decimals: t.depositToken.decimal,
                onConfirm: function (e) {
                  Number(e) <= 0 || isNaN(Number(e)) || (b(e), D());
                },
                tokenName: t.depositTokenName,
              })
            ),
            A = Object(v.a)(P, 2),
            S = A[0],
            D = A[1];
          return E.a.createElement(
            T.a,
            null,
            E.a.createElement(
              C.a,
              null,
              E.a.createElement(
                ke,
                null,
                E.a.createElement(
                  ge,
                  null,
                  E.a.createElement(
                    R.a,
                    null,
                    E.a.createElement(Z.a, {
                      symbol: t.depositToken.symbol,
                      size: 54,
                    })
                  ),
                  E.a.createElement(F.a, {
                    value: Object(K.b)(l, t.depositToken.decimal),
                  }),
                  E.a.createElement(M.a, { text: "\u2248 $".concat(m) }),
                  E.a.createElement(M.a, {
                    text: "".concat(t.depositTokenName, " Staked"),
                  })
                ),
                E.a.createElement(
                  je,
                  null,
                  r !== re.a.APPROVED
                    ? E.a.createElement(
                        I.a,
                        {
                          disabled:
                            t.closedForStaking ||
                            r === re.a.PENDING ||
                            r === re.a.UNKNOWN,
                          onClick: c,
                          color: "primary",
                          variant: "contained",
                          style: { marginTop: "20px" },
                        },
                        "Approve ".concat(t.depositTokenName)
                      )
                    : E.a.createElement(
                        E.a.Fragment,
                        null,
                        E.a.createElement(
                          ae.a,
                          { onClick: S },
                          E.a.createElement(ee.b, null)
                        ),
                        E.a.createElement(xe, null),
                        E.a.createElement(
                          ae.a,
                          {
                            disabled: t.closedForStaking,
                            onClick: function () {
                              return t.closedForStaking ? null : N();
                            },
                          },
                          E.a.createElement(ne.a, {
                            style: { color: o.grey[400] },
                          })
                        ),
                        E.a.createElement(xe, null),
                        E.a.createElement(
                          ae.a,
                          {
                            disabled: t.closedForStaking,
                            onClick: function () {
                              return t.closedForStaking ? null : g();
                            },
                          },
                          E.a.createElement(ee.a, null)
                        )
                      )
                )
              )
            )
          );
        },
        Ne = n(282),
        we = function (e) {
          return Object(h.useContext)(Ne.a).banks.find(function (t) {
            return t.contract === e;
          });
        },
        Te = function (e) {
          var t = Object(L.a)(),
            n = Object(h.useState)(),
            a = Object(v.a)(n, 2),
            r = a[0],
            c = a[1],
            o = Object(h.useCallback)(
              Object(V.a)(
                U.a.mark(function n() {
                  return U.a.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          return (n.t0 = c), (n.next = 3), t.getPoolAPRs(e);
                        case 3:
                          (n.t1 = n.sent), (0, n.t0)(n.t1);
                        case 5:
                        case "end":
                          return n.stop();
                      }
                  }, n);
                })
              ),
              [t, e]
            );
          return (
            Object(h.useEffect)(
              function () {
                o().catch(function (e) {
                  return console.error(
                    "Failed to fetch TBOND price: ".concat(e.stack)
                  );
                });
                var e = setInterval(o, B.b.refreshInterval);
                return function () {
                  return clearInterval(e);
                };
              },
              [c, t, o]
            ),
            r
          );
        },
        Ce = function (e) {
          var t = Object(L.a)(),
            n = Object(_.a)();
          return {
            onRedeem: Object(h.useCallback)(
              function () {
                n(t.exit(e.contract, e.poolId), "Redeem ".concat(e.contract));
              },
              [e, t, n]
            ),
          };
        },
        Pe = Object(y.a)(function (e) {
          return {
            gridItem: Object(x.a)({ height: "100%" }, e.breakpoints.up("md"), {
              height: "90px",
            }),
          };
        }),
        Ie = function (e) {
          var t,
            n,
            a = e.bank,
            r = Object(L.a)(),
            c = r.MBird.address,
            o = r.MBird.address;
          return (
            a.depositTokenName.includes("MBird")
              ? ((t = "TOMB-FTM pair"),
                (n = "https://spookyswap.finance/add/FTM/" + c))
              : ((t = "TSHARE-FTM pair"),
                (n = "https://spookyswap.finance/add/FTM/" + o)),
            E.a.createElement(
              T.a,
              null,
              E.a.createElement(
                C.a,
                null,
                E.a.createElement(
                  De,
                  { href: n, target: "_blank" },
                  "\ud83d\udc7b Provide liquidity for ".concat(
                    t,
                    " now on SpookySwap \ud83d\udc7b"
                  )
                )
              )
            )
          );
        },
        Ae = function () {
          return E.a.createElement(
            Fe,
            null,
            E.a.createElement(A.a, {
              icon: "\ud83c\udfda",
              title: "Not Found",
              subtitle: "You've hit a bank just robbed by unicorns.",
            })
          );
        },
        Se = k.d.div(
          s ||
            (s = Object(O.a)([
              "\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n",
            ]))
        ),
        De = k.d.a(
          m ||
            (m = Object(O.a)([
              "\n  font-weight: 700;\n  text-decoration: none;\n  color: ",
              ";\n",
            ])),
          function (e) {
            return e.theme.color.primary.main;
          }
        ),
        Re = k.d.div(
          d ||
            (d = Object(O.a)([
              "\n  display: flex;\n  width: 600px;\n  @media (max-width: 768px) {\n    width: 100%;\n    flex-flow: column nowrap;\n    align-items: center;\n  }\n",
            ]))
        ),
        Me = k.d.div(
          f ||
            (f = Object(O.a)([
              "\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  @media (max-width: 768px) {\n    width: 80%;\n  }\n",
            ]))
        ),
        Fe = k.d.div(
          b ||
            (b = Object(O.a)([
              "\n  display: flex;\n  flex: 1;\n  align-items: center;\n  justify-content: center;\n",
            ]))
        ),
        ze = function () {
          Object(h.useEffect)(function () {
            return window.scrollTo(0, 0);
          });
          var e = Pe(),
            t = Object(j.f)().bankId,
            n = we(t),
            a = Object(g.h)().account,
            r = Ce(n).onRedeem,
            c = Te(n);
          return a && n
            ? E.a.createElement(
                E.a.Fragment,
                null,
                E.a.createElement(A.a, {
                  icon: "\ud83c\udfe6",
                  subtitle: "Deposit "
                    .concat(
                      null === n || void 0 === n ? void 0 : n.depositTokenName,
                      " and earn "
                    )
                    .concat(
                      null === n || void 0 === n ? void 0 : n.earnTokenName
                    ),
                  title: null === n || void 0 === n ? void 0 : n.name,
                }),
                E.a.createElement(
                  N.a,
                  null,
                  E.a.createElement(
                    w.a,
                    {
                      container: !0,
                      justify: "center",
                      spacing: 3,
                      style: { marginBottom: "50px" },
                    },
                    E.a.createElement(
                      w.a,
                      { item: !0, xs: 12, md: 2, lg: 2, className: e.gridItem },
                      E.a.createElement(
                        T.a,
                        { className: e.gridItem },
                        E.a.createElement(
                          C.a,
                          { style: { textAlign: "center" } },
                          E.a.createElement(P.a, null, "APR"),
                          E.a.createElement(
                            P.a,
                            null,
                            n.closedForStaking
                              ? "0.00"
                              : null === c || void 0 === c
                              ? void 0
                              : c.yearlyAPR,
                            "%"
                          )
                        )
                      )
                    ),
                    E.a.createElement(
                      w.a,
                      { item: !0, xs: 12, md: 2, lg: 2, className: e.gridItem },
                      E.a.createElement(
                        T.a,
                        { className: e.gridItem },
                        E.a.createElement(
                          C.a,
                          { style: { textAlign: "center" } },
                          E.a.createElement(P.a, null, "Daily APR"),
                          E.a.createElement(
                            P.a,
                            null,
                            n.closedForStaking
                              ? "0.00"
                              : null === c || void 0 === c
                              ? void 0
                              : c.dailyAPR,
                            "%"
                          )
                        )
                      )
                    ),
                    E.a.createElement(
                      w.a,
                      { item: !0, xs: 12, md: 2, lg: 2, className: e.gridItem },
                      E.a.createElement(
                        T.a,
                        { className: e.gridItem },
                        E.a.createElement(
                          C.a,
                          { style: { textAlign: "center" } },
                          E.a.createElement(P.a, null, "TVL"),
                          E.a.createElement(
                            P.a,
                            null,
                            "$",
                            null === c || void 0 === c ? void 0 : c.TVL
                          )
                        )
                      )
                    )
                  )
                ),
                E.a.createElement(
                  N.a,
                  { mt: 5 },
                  E.a.createElement(
                    Se,
                    null,
                    E.a.createElement(
                      Re,
                      null,
                      E.a.createElement(
                        Me,
                        null,
                        E.a.createElement(X, { bank: n })
                      ),
                      E.a.createElement(S.a, null),
                      E.a.createElement(
                        Me,
                        null,
                        E.a.createElement(ye, { bank: n })
                      )
                    ),
                    E.a.createElement(S.a, { size: "lg" }),
                    n.depositTokenName.includes("LP") &&
                      E.a.createElement(Ie, { bank: n }),
                    E.a.createElement(S.a, { size: "lg" }),
                    E.a.createElement(
                      "div",
                      null,
                      E.a.createElement(
                        I.a,
                        { onClick: r, color: "primary", variant: "contained" },
                        "Claim & Withdraw"
                      )
                    ),
                    E.a.createElement(S.a, { size: "lg" })
                  )
                )
              )
            : n
            ? E.a.createElement(D.a, null)
            : E.a.createElement(Ae, null);
        },
        Ue = n(811),
        Ve = n(898),
        We = n(277),
        Le = n(86),
        Be = n(5),
        He = n(11),
        _e = (n(18), n(15)),
        Ge = n(20),
        Ke = h.forwardRef(function (e, t) {
          var n = e.disableSpacing,
            a = void 0 !== n && n,
            r = e.classes,
            c = e.className,
            o = Object(He.a)(e, ["disableSpacing", "classes", "className"]);
          return h.createElement(
            "div",
            Object(Be.a)(
              { className: Object(_e.a)(r.root, c, !a && r.spacing), ref: t },
              o
            )
          );
        }),
        Ze = Object(Ge.a)(
          {
            root: { display: "flex", alignItems: "center", padding: 8 },
            spacing: { "& > :not(:first-child)": { marginLeft: 8 } },
          },
          { name: "MuiCardActions" }
        )(Ke),
        $e = function (e) {
          var t = e.bank;
          return E.a.createElement(
            w.a,
            { item: !0, xs: 12, md: 4, lg: 4 },
            E.a.createElement(
              T.a,
              { variant: "outlined" },
              E.a.createElement(
                C.a,
                null,
                E.a.createElement(
                  N.a,
                  { style: { position: "relative" } },
                  E.a.createElement(
                    N.a,
                    {
                      style: {
                        position: "absolute",
                        right: "0px",
                        top: "-5px",
                        height: "48px",
                        width: "48px",
                        borderRadius: "40px",
                        backgroundColor: "white",
                        alignItems: "center",
                        display: "flex",
                        justifyContent: "center",
                      },
                    },
                    E.a.createElement(Z.a, {
                      size: 32,
                      symbol: t.depositTokenName,
                    })
                  ),
                  E.a.createElement(
                    P.a,
                    { variant: "h5", component: "h2" },
                    t.depositTokenName
                  ),
                  E.a.createElement(
                    P.a,
                    { color: "textSecondary" },
                    "Deposit ",
                    t.depositTokenName.toUpperCase(),
                    " Earn ",
                    " ".concat(t.earnTokenName)
                  )
                )
              ),
              E.a.createElement(
                Ze,
                { style: { justifyContent: "flex-end" } },
                E.a.createElement(
                  I.a,
                  {
                    color: "primary",
                    size: "small",
                    variant: "contained",
                    component: Le.b,
                    to: "/cemetery/".concat(t.contract),
                  },
                  "View"
                )
              )
            )
          );
        },
        qe = n(885),
        Je = n.n(qe),
        Ye = function () {
          return [Object(h.useContext)(Ne.a).banks];
        },
        Qe = Object(k.c)(
          p ||
            (p = Object(O.a)([
              "\n  body {\n    background: url(",
              ") no-repeat !important;\n    background-size: cover !important;\n  }\n",
            ])),
          Je.a
        ),
        Xe = function () {
          var e = Ye(),
            t = Object(v.a)(e, 1)[0],
            n = Object(j.g)().path,
            a = Object(g.h)().account,
            r = t.filter(function (e) {
              return !e.finished;
            });
          return E.a.createElement(
            j.c,
            null,
            E.a.createElement(
              We.a,
              null,
              E.a.createElement(
                j.a,
                { exact: !0, path: n },
                E.a.createElement(Qe, null),
                a
                  ? E.a.createElement(
                      Ue.a,
                      { maxWidth: "lg" },
                      E.a.createElement(
                        P.a,
                        {
                          color: "textPrimary",
                          align: "center",
                          variant: "h3",
                          gutterBottom: !0,
                        },
                        "Cemetery"
                      ),
                      E.a.createElement(
                        N.a,
                        { mt: 5 },
                        E.a.createElement(
                          "div",
                          {
                            hidden:
                              0 ===
                              r.filter(function (e) {
                                return 2 === e.sectionInUI;
                              }).length,
                          },
                          E.a.createElement(
                            P.a,
                            {
                              color: "textPrimary",
                              variant: "h4",
                              gutterBottom: !0,
                            },
                            "Earn MShare by staking LP"
                          ),
                          E.a.createElement(
                            w.a,
                            { container: !0, spacing: 3 },
                            r
                              .filter(function (e) {
                                return 2 === e.sectionInUI;
                              })
                              .map(function (e) {
                                return E.a.createElement(
                                  E.a.Fragment,
                                  { key: e.name },
                                  E.a.createElement($e, { bank: e })
                                );
                              })
                          )
                        ),
                        E.a.createElement(
                          "div",
                          {
                            hidden:
                              0 ===
                              r.filter(function (e) {
                                return 1 === e.sectionInUI;
                              }).length,
                          },
                          E.a.createElement(
                            P.a,
                            {
                              color: "textPrimary",
                              variant: "h4",
                              gutterBottom: !0,
                              style: { marginTop: "20px" },
                            },
                            "Earn MBird by staking LP"
                          ),
                          E.a.createElement(
                            Ve.a,
                            { variant: "filled", severity: "warning" },
                            "All below pools have ended. Please unstake and collect your rewards."
                          ),
                          E.a.createElement(
                            w.a,
                            {
                              container: !0,
                              spacing: 3,
                              style: { marginTop: "20px" },
                            },
                            r
                              .filter(function (e) {
                                return 1 === e.sectionInUI;
                              })
                              .map(function (e) {
                                return E.a.createElement(
                                  E.a.Fragment,
                                  { key: e.name },
                                  E.a.createElement($e, { bank: e })
                                );
                              })
                          )
                        ),
                        E.a.createElement(
                          "div",
                          {
                            hidden:
                              0 ===
                              r.filter(function (e) {
                                return 0 === e.sectionInUI;
                              }).length,
                          },
                          E.a.createElement(
                            P.a,
                            {
                              color: "textPrimary",
                              variant: "h4",
                              gutterBottom: !0,
                              style: { marginTop: "20px" },
                            },
                            "Genesis Pools"
                          ),
                          E.a.createElement(
                            w.a,
                            { container: !0, spacing: 3 },
                            r
                              .filter(function (e) {
                                return 0 === e.sectionInUI;
                              })
                              .map(function (e) {
                                return E.a.createElement(
                                  E.a.Fragment,
                                  { key: e.name },
                                  E.a.createElement($e, { bank: e })
                                );
                              })
                          )
                        )
                      )
                    )
                  : E.a.createElement(D.a, null)
              ),
              E.a.createElement(
                j.a,
                { path: "".concat(n, "/:bankId") },
                E.a.createElement(Qe, null),
                E.a.createElement(ze, null)
              )
            )
          );
        };
    },
  },
]);
