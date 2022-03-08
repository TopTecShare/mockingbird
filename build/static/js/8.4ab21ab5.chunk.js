(this["webpackJsonptomb.finance"] =
  this["webpackJsonptomb.finance"] || []).push([
  [8],
  {
    838: function (e, n, t) {
      "use strict";
      t.d(n, "b", function () {
        return i;
      }),
        t.d(n, "a", function () {
          return u;
        });
      var a = t(0),
        r = t(58),
        c = t(430),
        o = t(105);
      function i() {
        var e = Object(c.h)(),
          n = e.chainId,
          t = e.account,
          i = Object(r.b)();
        return Object(a.useCallback)(
          function (e) {
            var a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : {},
              r = a.summary,
              c = a.approval;
            if (t && n) {
              var l = e.hash;
              if (!l) throw Error("No transaction hash found.");
              i(
                Object(o.a)({
                  hash: l,
                  from: t,
                  chainId: n,
                  approval: c,
                  summary: r,
                })
              );
            }
          },
          [i, n, t]
        );
      }
      function l() {
        var e,
          n = Object(c.h)().chainId,
          t = Object(r.c)(function (e) {
            return e.transactions;
          });
        return n && null !== (e = t[n]) && void 0 !== e ? e : {};
      }
      function u(e, n) {
        var t = l();
        return Object(a.useMemo)(
          function () {
            return (
              "string" === typeof e &&
              "string" === typeof n &&
              Object.keys(t).some(function (a) {
                var r = t[a];
                if (!r) return !1;
                if (r.receipt) return !1;
                var c = r.approval;
                return (
                  !!c &&
                  c.spender === n &&
                  c.tokenAddress === e &&
                  (function (e) {
                    return new Date().getTime() - e.addedTime < 864e5;
                  })(r)
                );
              })
            );
          },
          [t, n, e]
        );
      }
    },
    839: function (e, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return j;
      });
      var a,
        r,
        c,
        o,
        i,
        l,
        u = t(27),
        s = t(0),
        d = t.n(s),
        m = t(22),
        f = t(818),
        p = m.d.div(
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
        b = m.d.input(
          r ||
            (r = Object(u.a)([
              "\n  background: none;\n  border: 0;\n  color: ",
              ";\n  font-size: 18px;\n  flex: 1;\n  height: 56px;\n  margin: 0;\n  padding: 0;\n  outline: none;\n",
            ])),
          function (e) {
            return e.theme.color.grey[600];
          }
        ),
        h = function (e) {
          var n = e.endAdornment,
            t = e.onChange,
            a = e.placeholder,
            r = e.startAdornment,
            c = e.value;
          return d.a.createElement(
            p,
            null,
            !!r && r,
            d.a.createElement(b, { placeholder: a, value: c, onChange: t }),
            !!n && n
          );
        },
        g = m.d.div(c || (c = Object(u.a)([""]))),
        x = m.d.div(
          o || (o = Object(u.a)(["\n  width: ", "px;\n"])),
          function (e) {
            return e.theme.spacing[3];
          }
        ),
        O = m.d.div(
          i ||
            (i = Object(u.a)(["\n  align-items: center;\n  display: flex;\n"]))
        ),
        v = m.d.div(
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
          var n = e.max,
            t = e.symbol,
            a = e.onChange,
            r = e.onSelectMax,
            c = e.value;
          return d.a.createElement(
            g,
            null,
            d.a.createElement(
              v,
              null,
              n.toLocaleString(),
              " ",
              t,
              " Available"
            ),
            d.a.createElement(h, {
              endAdornment: d.a.createElement(
                O,
                null,
                d.a.createElement(x, null),
                d.a.createElement(
                  "div",
                  null,
                  d.a.createElement(
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
    840: function (e, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return f;
      });
      var a,
        r,
        c,
        o = t(27),
        i = t(0),
        l = t.n(i),
        u = t(22),
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
        d = u.d.div(r || (r = Object(o.a)(["\n  flex: 1;\n"]))),
        m = u.d.div(
          c || (c = Object(o.a)(["\n  width: ", "px;\n"])),
          function (e) {
            return e.theme.spacing[4];
          }
        ),
        f = function (e) {
          var n = e.children,
            t = l.a.Children.toArray(n).length;
          return l.a.createElement(
            s,
            null,
            l.a.Children.map(n, function (e, n) {
              return l.a.createElement(
                l.a.Fragment,
                null,
                l.a.createElement(d, null, e),
                n < t - 1 && l.a.createElement(m, null)
              );
            })
          );
        };
    },
    841: function (e, n, t) {
      "use strict";
      var a = t(2),
        r = t.n(a),
        c = t(14),
        o = t(24),
        i = t(0),
        l = t(430);
      n.a = function (e, n, t) {
        var a = Object(i.useState)(null),
          u = Object(o.a)(a, 2),
          s = u[0],
          d = u[1],
          m = Object(l.h)().account,
          f = Object(i.useCallback)(
            Object(c.a)(
              r.a.mark(function t() {
                var a;
                return r.a.wrap(function (t) {
                  for (;;)
                    switch ((t.prev = t.next)) {
                      case 0:
                        return (t.next = 2), e.allowance(m, n);
                      case 2:
                        (a = t.sent), d(a);
                      case 4:
                      case "end":
                        return t.stop();
                    }
                }, t);
              })
            ),
            [m, n, e]
          );
        return (
          Object(i.useEffect)(
            function () {
              m &&
                n &&
                e &&
                f().catch(function (e) {
                  return console.log(
                    "Failed to fetch allowance: ".concat(e.stack)
                  );
                });
            },
            [m, n, e, t, f]
          ),
          s
        );
      };
    },
    844: function (e, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return i;
      });
      var a = t(0),
        r = t.n(a),
        c = t(831),
        o = t(219),
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
    847: function (e, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return a;
      });
      var a,
        r = t(2),
        c = t.n(r),
        o = t(14),
        i = t(98),
        l = t(34),
        u = t(0),
        s = t(838),
        d = t(841),
        m = i.ethers.constants.MaxUint256,
        f = l.a.from("1000000000000000000000000");
      !(function (e) {
        (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
          (e[(e.NOT_APPROVED = 1)] = "NOT_APPROVED"),
          (e[(e.PENDING = 2)] = "PENDING"),
          (e[(e.APPROVED = 3)] = "APPROVED");
      })(a || (a = {})),
        (n.b = function (e, n) {
          var t = Object(s.a)(e.address, n),
            r = Object(d.a)(e, n, t),
            i = Object(u.useMemo)(
              function () {
                return r
                  ? r.lt(f)
                    ? t
                      ? a.PENDING
                      : a.NOT_APPROVED
                    : a.APPROVED
                  : a.UNKNOWN;
              },
              [r, t]
            ),
            l = Object(s.b)(),
            p = Object(u.useCallback)(
              Object(o.a)(
                c.a.mark(function t() {
                  var r;
                  return c.a.wrap(function (t) {
                    for (;;)
                      switch ((t.prev = t.next)) {
                        case 0:
                          if (i === a.NOT_APPROVED) {
                            t.next = 3;
                            break;
                          }
                          return (
                            console.error("approve was called unnecessarily"),
                            t.abrupt("return")
                          );
                        case 3:
                          return (t.next = 5), e.approve(n, m);
                        case 5:
                          (r = t.sent),
                            l(r, {
                              summary: "Approve ".concat(e.symbol),
                              approval: { tokenAddress: e.address, spender: n },
                            });
                        case 7:
                        case "end":
                          return t.stop();
                      }
                  }, t);
                })
              ),
              [i, e, n, l]
            );
          return [i, p];
        });
    },
    849: function (e, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return u;
      });
      var a,
        r = t(27),
        c = t(0),
        o = t.n(c),
        i = t(22),
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
          var n,
            t = e.size,
            a = void 0 === t ? "md" : t,
            r = Object(c.useContext)(i.a).spacing;
          switch (a) {
            case "lg":
              n = r[6];
              break;
            case "sm":
              n = r[2];
              break;
            case "md":
            default:
              n = r[4];
          }
          return o.a.createElement(l, { size: n });
        };
    },
    856: function (e, n, t) {
      "use strict";
      var a = t(2),
        r = t.n(a),
        c = t(14),
        o = t(24),
        i = t(0),
        l = t(96),
        u = t(42);
      n.a = function () {
        var e = Object(i.useState)(),
          n = Object(o.a)(e, 2),
          t = n[0],
          a = n[1],
          s = Object(l.a)(),
          d = Object(i.useCallback)(
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
          Object(i.useEffect)(
            function () {
              d().catch(function (e) {
                return console.error(
                  "Failed to fetch TBOND price: ".concat(e.stack)
                );
              });
              var e = setInterval(d, u.b.refreshInterval);
              return function () {
                return clearInterval(e);
              };
            },
            [a, s, d]
          ),
          t
        );
      };
    },
    863: function (e, n, t) {
      "use strict";
      t.d(n, "a", function () {
        return f;
      });
      var a,
        r,
        c,
        o = t(27),
        i = t(0),
        l = t.n(i),
        u = t(22),
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
        d = u.d.h1(
          r ||
            (r = Object(o.a)([
              "\n  color: ",
              ";\n  font-size: 36px;\n  font-weight: 700;\n  margin: 0;\n  padding: 0;\n",
            ])),
          function (e) {
            return e.theme.color.grey[100];
          }
        ),
        m = u.d.h3(
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
          var n = e.subtitle,
            t = e.title;
          return l.a.createElement(
            s,
            null,
            l.a.createElement(d, null, t),
            l.a.createElement(m, null, n)
          );
        };
    },
    888: function (e, n, t) {
      e.exports = t.p + "static/media/pit.268bf984.png";
    },
    913: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, "default", function () {
          return ze;
        });
      var a,
        r,
        c,
        o = t(2),
        i = t.n(o),
        l = t(14),
        u = t(27),
        s = t(0),
        d = t.n(s),
        m = t(277),
        f = t(888),
        p = t.n(f),
        b = t(22),
        h = t(50),
        g = t(430),
        x = t(844),
        O = t(863),
        v = t(24),
        j = t(867),
        E = t(818),
        k = t(394),
        y = t(96),
        w = t(179),
        N = t(180),
        A = t(889),
        C = t(891),
        P = t(276),
        T = t(86),
        z = b.d.button(
          a ||
            (a = Object(u.a)([
              "\n  align-items: center;\n  background-color: ",
              ";\n  border: 0;\n  border-radius: 12px;\n  box-shadow: ",
              ";\n  color: ",
              ";\n  cursor: pointer;\n  display: flex;\n  font-size: ",
              "px;\n  font-weight: 700;\n  height: ",
              "px;\n  justify-content: center;\n  outline: none;\n  padding-left: ",
              "px;\n  padding-right: ",
              "px;\n  pointer-events: ",
              ";\n  width: 100%;\n  &:hover {\n    background-color: ",
              ";\n    color: ",
              ";\n  }\n",
            ])),
          function (e) {
            return e.theme.color.grey[900];
          },
          function (e) {
            return e.boxShadow;
          },
          function (e) {
            return e.disabled ? "".concat(e.color, "55") : e.color;
          },
          function (e) {
            return e.fontSize;
          },
          function (e) {
            return e.size;
          },
          function (e) {
            return e.padding;
          },
          function (e) {
            return e.padding;
          },
          function (e) {
            return e.disabled ? "none" : void 0;
          },
          function (e) {
            return e.color;
          },
          function (e) {
            return e.theme.color.grey[900];
          }
        ),
        D = Object(b.d)(T.b)(
          r ||
            (r = Object(u.a)([
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
        R = b.d.a(
          c ||
            (c = Object(u.a)([
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
        H = function (e) {
          var n,
            t,
            a,
            r,
            c = e.children,
            o = e.disabled,
            i = e.href,
            l = e.onClick,
            u = e.size,
            m = e.text,
            f = e.to,
            p = e.variant,
            h = Object(s.useContext)(b.a),
            g = h.color,
            x = h.spacing;
          switch (p) {
            case "secondary":
              n = g.teal[200];
              break;
            case "default":
            default:
              n = g.primary.main;
          }
          switch (u) {
            case "sm":
              (a = x[3]), (t = 36), (r = 14);
              break;
            case "lg":
              (a = x[4]), (t = 72), (r = 16);
              break;
            case "md":
            default:
              (a = x[4]), (t = 56), (r = 16);
          }
          var O = Object(s.useMemo)(
            function () {
              return f
                ? d.a.createElement(D, { to: f }, m)
                : i
                ? d.a.createElement(R, { href: i, target: "__blank" }, m)
                : m;
            },
            [i, m, f]
          );
          return d.a.createElement(
            z,
            {
              boxShadow: void 0,
              color: n,
              disabled: o,
              fontSize: r,
              onClick: l,
              padding: a,
              size: t,
            },
            c,
            O
          );
        },
        I = t(273),
        W = t(840),
        S = t(274),
        L = t(839),
        M = t(30),
        F = function (e) {
          var n = e.max,
            t = e.title,
            a = e.description,
            r = e.onConfirm,
            c = e.onDismiss,
            o = e.action,
            i = e.tokenName,
            l = Object(s.useState)(""),
            u = Object(v.a)(l, 2),
            m = u[0],
            f = u[1],
            p = Object(s.useMemo)(
              function () {
                return Object(M.c)(n);
              },
              [n]
            ),
            b = Object(s.useCallback)(
              function (e) {
                return f(e.currentTarget.value);
              },
              [f]
            ),
            h = Object(s.useCallback)(
              function () {
                f(p);
              },
              [p, f]
            );
          return d.a.createElement(
            I.a,
            null,
            d.a.createElement(S.a, { text: t }),
            d.a.createElement(L.a, {
              value: m,
              onSelectMax: h,
              onChange: b,
              max: p,
              symbol: i,
            }),
            d.a.createElement(w.a, { text: a }),
            d.a.createElement(
              W.a,
              null,
              d.a.createElement(H, {
                text: "Cancel",
                variant: "secondary",
                onClick: c,
              }),
              d.a.createElement(H, {
                text: o,
                onClick: function () {
                  return r(m);
                },
              })
            )
          );
        },
        B = t(181),
        U = t(847),
        V = t(124);
      var _,
        G,
        K,
        J,
        q,
        Q,
        X,
        Y,
        Z,
        $,
        ee,
        ne,
        te,
        ae,
        re,
        ce = function () {
          var e = Object(V.b)();
          return Object(s.useCallback)(
            function (n) {
              var t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "Unexpected error is occurred.";
              n.catch(function (n) {
                n.message.includes("User denied") ||
                  (console.error("Uncaught exception: ".concat(n.stack)),
                  e({ error: { message: t, stack: n.stack } }));
              });
            },
            [e]
          );
        },
        oe = b.d.div(
          _ ||
            (_ = Object(u.a)([
              "\n  align-items: center;\n  display: flex;\n  font-size: 20px;\n  font-weight: 700;\n  height: 64px;\n  justify-content: center;\n  margin-top: ",
              "px;\n",
            ])),
          function (e) {
            return -e.theme.spacing[3];
          }
        ),
        ie = b.d.div(
          G ||
            (G = Object(u.a)([
              "\n  background-color: ",
              ";\n  width: 72px;\n  height: 72px;\n  border-radius: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: ",
              "px;\n",
            ])),
          function (e) {
            return e.theme.color.grey[900];
          },
          function (e) {
            return e.theme.spacing[2];
          }
        ),
        le = b.d.div(
          K ||
            (K = Object(u.a)([
              "\n  align-items: center;\n  display: flex;\n  margin-bottom: ",
              "px;\n",
            ])),
          function (e) {
            return e.theme.spacing[5];
          }
        ),
        ue = b.d.div(
          J ||
            (J = Object(u.a)([
              "\n  font-size: 20px;\n  padding-left: ",
              "px;\n  padding-right: ",
              "px;\n  padding-bottom: ",
              "px;\n",
            ])),
          function (e) {
            return e.theme.spacing[3];
          },
          function (e) {
            return e.theme.spacing[3];
          },
          function (e) {
            return e.theme.spacing[4];
          }
        ),
        se = b.d.div(
          q ||
            (q = Object(u.a)([
              "\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  font-weight: 600;\n",
            ]))
        ),
        de = b.d.div(
          Q ||
            (Q = Object(u.a)([
              "\n  display: flex;\n  justify-content: center;\n  margin-top: ",
              "px;\n  width: 100%;\n",
            ])),
          function (e) {
            return e.theme.spacing[3];
          }
        ),
        me = b.d.span(X || (X = Object(u.a)([""]))),
        fe = b.d.div(
          Y ||
            (Y = Object(u.a)([
              "\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n",
            ]))
        ),
        pe = function (e) {
          var n = e.action,
            t = e.fromToken,
            a = e.fromTokenName,
            r = e.toToken,
            c = e.toTokenName,
            o = e.priceDesc,
            i = e.onExchange,
            l = e.disabled,
            u = void 0 !== l && l,
            s = e.disabledDescription,
            m = ce(),
            f = Object(y.a)().contracts.Treasury,
            p = Object(U.b)(t, f.address),
            b = Object(v.a)(p, 2),
            h = b[0],
            g = b[1],
            x = Object(B.a)(t),
            O = Object(P.a)(
              d.a.createElement(F, {
                title: n,
                description: o,
                max: x,
                onConfirm: function (e) {
                  i(e), D();
                },
                action: n,
                tokenName: a,
              })
            ),
            T = Object(v.a)(O, 2),
            z = T[0],
            D = T[1];
          return d.a.createElement(
            j.a,
            null,
            d.a.createElement(
              k.a,
              null,
              d.a.createElement(
                fe,
                null,
                d.a.createElement(oe, null, "".concat(n, " ").concat(c)),
                d.a.createElement(
                  le,
                  null,
                  d.a.createElement(
                    se,
                    null,
                    d.a.createElement(
                      ie,
                      null,
                      d.a.createElement(N.a, { symbol: t.symbol, size: 54 })
                    ),
                    d.a.createElement(w.a, { text: a, variant: "normal" })
                  ),
                  d.a.createElement(
                    ue,
                    null,
                    d.a.createElement(A.a, { icon: C.a })
                  ),
                  d.a.createElement(
                    se,
                    null,
                    d.a.createElement(
                      ie,
                      null,
                      d.a.createElement(N.a, { symbol: r.symbol, size: 54 })
                    ),
                    d.a.createElement(w.a, { text: c, variant: "normal" })
                  )
                ),
                d.a.createElement(me, null, o),
                d.a.createElement(
                  de,
                  null,
                  h === U.a.APPROVED || u
                    ? d.a.createElement(
                        E.a,
                        {
                          color: "primary",
                          variant: "contained",
                          onClick: z,
                          disabled: u,
                        },
                        s || n
                      )
                    : d.a.createElement(
                        E.a,
                        {
                          color: "primary",
                          variant: "contained",
                          disabled: h === U.a.PENDING || h === U.a.UNKNOWN,
                          onClick: function () {
                            return m(g(), "Unable to approve ".concat(a));
                          },
                        },
                        "Approve ".concat(a)
                      )
                )
              )
            )
          );
        },
        be = t(849),
        he = t(856),
        ge = t(42),
        xe = t(34),
        Oe = function () {
          var e = Object(s.useState)(xe.a.from(0)),
            n = Object(v.a)(e, 2),
            t = n[0],
            a = n[1],
            r = Object(y.a)(),
            c = Object(s.useCallback)(
              Object(l.a)(
                i.a.mark(function e() {
                  return i.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.t0 = a), (e.next = 3), r.getTombPriceInLastTWAP()
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
              [r]
            );
          return (
            Object(s.useEffect)(
              function () {
                c().catch(function (e) {
                  return console.error(
                    "Failed to fetch TOMB price: ".concat(e.stack)
                  );
                });
                var e = setInterval(c, ge.b.refreshInterval);
                return function () {
                  return clearInterval(e);
                };
              },
              [a, r, c]
            ),
            t
          );
        },
        ve = t(838),
        je = b.d.div(
          Z ||
            (Z = Object(u.a)([
              "\n  font-size: 20px;\n  font-weight: 700;\n  margin-bottom: ",
              "px;\n",
            ])),
          function (e) {
            return e.theme.spacing[2];
          }
        ),
        Ee = b.d.span(
          $ ||
            ($ = Object(u.a)(["\n  //color: ", ";\n  text-align: center;\n"])),
          function (e) {
            return e.theme.color.grey[300];
          }
        ),
        ke = b.d.div(
          ee ||
            (ee = Object(u.a)([
              "\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: ",
              "px;\n",
            ])),
          function (e) {
            return e.theme.spacing[2];
          }
        ),
        ye = function (e) {
          var n = e.tokenName,
            t = e.description,
            a = e.price;
          return d.a.createElement(
            j.a,
            null,
            d.a.createElement(
              ke,
              null,
              d.a.createElement(
                je,
                null,
                "\ud83d\udcb0 ".concat(n, " = ").concat(a, " FTM")
              ),
              d.a.createElement(Ee, null, t)
            )
          );
        },
        we = xe.a.from(10).pow(18),
        Ne = we.mul(101).div(100),
        Ae = Object(b.c)(
          ne ||
            (ne = Object(u.a)([
              "\n  body {\n    background: url(",
              ") no-repeat !important;\n    background-size: cover !important;\n  }\n",
            ])),
          p.a
        ),
        Ce = b.d.div(
          te ||
            (te = Object(u.a)([
              "\n  display: flex;\n  @media (max-width: 768px) {\n    width: 100%;\n    flex-flow: column nowrap;\n    align-items: center;\n  }\n",
            ]))
        ),
        Pe = b.d.div(
          ae ||
            (ae = Object(u.a)([
              "\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  @media (max-width: 768px) {\n    width: 80%;\n  }\n",
            ]))
        ),
        Te = b.d.div(
          re ||
            (re = Object(u.a)([
              "\n  display: flex;\n  flex: 0.8;\n  margin: 0 20px;\n  flex-direction: column;\n\n  @media (max-width: 768px) {\n    width: 80%;\n    margin: 16px 0;\n  }\n",
            ]))
        ),
        ze = function () {
          var e = Object(h.g)().path,
            n = Object(g.h)().account,
            t = Object(y.a)(),
            a = Object(ve.b)(),
            r = Object(he.a)(),
            c = Oe(),
            o = Object(B.a)(null === t || void 0 === t ? void 0 : t.Mbond),
            u = Object(s.useCallback)(
              (function () {
                var e = Object(l.a)(
                  i.a.mark(function e(n) {
                    var r;
                    return i.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), t.buyBonds(n);
                          case 2:
                            (r = e.sent),
                              a(r, {
                                summary: "Buy "
                                  .concat(Number(n).toFixed(2), " Mbond with ")
                                  .concat(n, " MBird"),
                              });
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (n) {
                  return e.apply(this, arguments);
                };
              })(),
              [t, a]
            ),
            f = Object(s.useCallback)(
              (function () {
                var e = Object(l.a)(
                  i.a.mark(function e(n) {
                    var r;
                    return i.a.wrap(function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), t.redeemBonds(n);
                          case 2:
                            (r = e.sent),
                              a(r, { summary: "Redeem ".concat(n, " TBOND") });
                          case 4:
                          case "end":
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function (n) {
                  return e.apply(this, arguments);
                };
              })(),
              [t, a]
            ),
            p = Object(s.useMemo)(
              function () {
                return c.gt(Ne);
              },
              [c]
            ),
            b = Object(s.useMemo)(
              function () {
                return (
                  Number(null === r || void 0 === r ? void 0 : r.tokenInFtm) < 1
                );
              },
              [r]
            );
          return d.a.createElement(
            h.c,
            null,
            d.a.createElement(
              m.a,
              null,
              d.a.createElement(Ae, null),
              n
                ? d.a.createElement(
                    d.a.Fragment,
                    null,
                    d.a.createElement(
                      h.a,
                      { exact: !0, path: e },
                      d.a.createElement(O.a, {
                        icon: "\ud83c\udfe6",
                        title: "Buy & Redeem Bonds",
                        subtitle: "Earn premiums upon redemption",
                      })
                    ),
                    d.a.createElement(
                      Ce,
                      null,
                      d.a.createElement(
                        Pe,
                        null,
                        d.a.createElement(pe, {
                          action: "Purchase",
                          fromToken: t.MBird,
                          fromTokenName: "MBird",
                          toToken: t.MShare,
                          toTokenName: "MShare",
                          priceDesc: b
                            ? "".concat(
                                Math.floor(
                                  100 / Number(r.priceInDollars) - 100
                                ),
                                "% return when MBird > 1.1POS"
                              )
                            : "MBird is over peg",
                          onExchange: u,
                          disabled: !r || p,
                        })
                      ),
                      d.a.createElement(
                        Te,
                        null,
                        d.a.createElement(ye, {
                          tokenName: "MBird",
                          description: "Last-Hour TWAP Price",
                          price: Object(M.b)(c, 18, 2),
                        }),
                        d.a.createElement(be.a, { size: "md" }),
                        d.a.createElement(ye, {
                          tokenName: "Mbond",
                          description: "Current Price: (MBird)^2",
                          price:
                            Number(
                              null === r || void 0 === r ? void 0 : r.tokenInFtm
                            ).toFixed(2) || "-",
                        })
                      ),
                      d.a.createElement(
                        Pe,
                        null,
                        d.a.createElement(pe, {
                          action: "Redeem",
                          fromToken: t.Mbond,
                          fromTokenName: "Mbond",
                          toToken: t.MBird,
                          toTokenName: "MBird",
                          priceDesc: "".concat(
                            Object(M.b)(o),
                            " Mbond Available"
                          ),
                          onExchange: f,
                          disabled: !r || o.eq(0) || !p,
                          disabledDescription: p
                            ? null
                            : "Enabled when MBird > ".concat(1.01, "POS"),
                        })
                      )
                    )
                  )
                : d.a.createElement(x.a, null)
            )
          );
        };
    },
  },
]);
