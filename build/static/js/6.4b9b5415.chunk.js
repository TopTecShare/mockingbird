(this["webpackJsonptomb.finance"] =
  this["webpackJsonptomb.finance"] || []).push([
  [6],
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
        return l;
      }),
        n.d(t, "a", function () {
          return u;
        });
      var a = n(0),
        r = n(58),
        c = n(430),
        o = n(105);
      function l() {
        var e = Object(c.h)(),
          t = e.chainId,
          n = e.account,
          l = Object(r.b)();
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
              l(
                Object(o.a)({
                  hash: i,
                  from: n,
                  chainId: t,
                  approval: c,
                  summary: r,
                })
              );
            }
          },
          [l, t, n]
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
        return g;
      });
      var a,
        r,
        c,
        o,
        l,
        i,
        u = n(27),
        s = n(0),
        m = n.n(s),
        f = n(22),
        d = n(818),
        b = f.d.div(
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
        p = f.d.input(
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
            b,
            null,
            !!r && r,
            m.a.createElement(p, { placeholder: a, value: c, onChange: n }),
            !!t && t
          );
        },
        h = f.d.div(c || (c = Object(u.a)([""]))),
        v = f.d.div(
          o || (o = Object(u.a)(["\n  width: ", "px;\n"])),
          function (e) {
            return e.theme.spacing[3];
          }
        ),
        j = f.d.div(
          l ||
            (l = Object(u.a)(["\n  align-items: center;\n  display: flex;\n"]))
        ),
        E = f.d.div(
          i ||
            (i = Object(u.a)([
              "\n  align-items: center;\n  color: ",
              ";\n  display: flex;\n  font-size: 14px;\n  font-weight: 700;\n  height: 44px;\n  justify-content: flex-end;\n",
            ])),
          function (e) {
            return e.theme.color.grey[400];
          }
        ),
        g = function (e) {
          var t = e.max,
            n = e.symbol,
            a = e.onChange,
            r = e.onSelectMax,
            c = e.value;
          return m.a.createElement(
            h,
            null,
            m.a.createElement(
              E,
              null,
              t.toLocaleString(),
              " ",
              n,
              " Available"
            ),
            m.a.createElement(O, {
              endAdornment: m.a.createElement(
                j,
                null,
                m.a.createElement(v, null),
                m.a.createElement(
                  "div",
                  null,
                  m.a.createElement(
                    d.a,
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
        return d;
      });
      var a,
        r,
        c,
        o = n(27),
        l = n(0),
        i = n.n(l),
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
        f = u.d.div(
          c || (c = Object(o.a)(["\n  width: ", "px;\n"])),
          function (e) {
            return e.theme.spacing[4];
          }
        ),
        d = function (e) {
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
                t < n - 1 && i.a.createElement(f, null)
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
        l = n(0),
        i = n(430);
      t.a = function (e, t, n) {
        var a = Object(l.useState)(null),
          u = Object(o.a)(a, 2),
          s = u[0],
          m = u[1],
          f = Object(i.h)().account,
          d = Object(l.useCallback)(
            Object(c.a)(
              r.a.mark(function n() {
                var a;
                return r.a.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (n.next = 2), e.allowance(f, t);
                      case 2:
                        (a = n.sent), m(a);
                      case 4:
                      case "end":
                        return n.stop();
                    }
                }, n);
              })
            ),
            [f, t, e]
          );
        return (
          Object(l.useEffect)(
            function () {
              f &&
                t &&
                e &&
                d().catch(function (e) {
                  return console.log(
                    "Failed to fetch allowance: ".concat(e.stack)
                  );
                });
            },
            [f, t, e, n, d]
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
        o = n.n(c),
        l = n(22).d.div(
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
          return o.a.createElement(l, null, t);
        };
    },
    844: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return l;
      });
      var a = n(0),
        r = n.n(a),
        c = n(831),
        o = n(219),
        l = function () {
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
        l = n(0),
        i = n(96),
        u = n(42);
      t.a = function () {
        var e = Object(l.useState)(),
          t = Object(o.a)(e, 2),
          n = t[0],
          a = t[1],
          s = Object(i.a)(),
          m = Object(l.useCallback)(
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
          Object(l.useEffect)(
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
        l = n(98),
        i = n(34),
        u = n(0),
        s = n(838),
        m = n(841),
        f = l.ethers.constants.MaxUint256,
        d = i.a.from("1000000000000000000000000");
      !(function (e) {
        (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
          (e[(e.NOT_APPROVED = 1)] = "NOT_APPROVED"),
          (e[(e.PENDING = 2)] = "PENDING"),
          (e[(e.APPROVED = 3)] = "APPROVED");
      })(a || (a = {})),
        (t.b = function (e, t) {
          var n = Object(s.a)(e.address, t),
            r = Object(m.a)(e, t, n),
            l = Object(u.useMemo)(
              function () {
                return r
                  ? r.lt(d)
                    ? n
                      ? a.PENDING
                      : a.NOT_APPROVED
                    : a.APPROVED
                  : a.UNKNOWN;
              },
              [r, n]
            ),
            i = Object(s.b)(),
            b = Object(u.useCallback)(
              Object(o.a)(
                c.a.mark(function n() {
                  var r;
                  return c.a.wrap(function (n) {
                    for (;;)
                      switch ((n.prev = n.next)) {
                        case 0:
                          if (l === a.NOT_APPROVED) {
                            n.next = 3;
                            break;
                          }
                          return (
                            console.error("approve was called unnecessarily"),
                            n.abrupt("return")
                          );
                        case 3:
                          return (n.next = 5), e.approve(t, f);
                        case 5:
                          (r = n.sent),
                            i(r, {
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
              [l, e, t, i]
            );
          return [l, b];
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
        l = n(22),
        i = l.d.div(
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
            r = Object(c.useContext)(l.a).spacing;
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
          return o.a.createElement(i, { size: t });
        };
    },
    850: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return i;
      });
      var a,
        r = n(27),
        c = n(0),
        o = n.n(c),
        l = n(22).d.div(
          a ||
            (a = Object(r.a)(["\n  font-size: 36px;\n  font-weight: 700;\n"]))
        ),
        i = function (e) {
          var t = e.value;
          return o.a.createElement(l, null, t);
        };
    },
    859: function (e, t, n) {
      "use strict";
      var a = n(2),
        r = n.n(a),
        c = n(14),
        o = n(24),
        l = n(0),
        i = n(96),
        u = n(42);
      t.a = function (e, t) {
        var n = Object(l.useState)("0"),
          a = Object(o.a)(n, 2),
          s = a[0],
          m = a[1],
          f = Object(i.a)(),
          d = null === f || void 0 === f ? void 0 : f.isUnlocked,
          b = Object(l.useCallback)(
            Object(c.a)(
              r.a.mark(function n() {
                var a;
                return r.a.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (n.next = 2), f.getDepositTokenPriceInDollars(e, t)
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
            [t, e, f]
          );
        return (
          Object(l.useEffect)(
            function () {
              if (d) {
                b().catch(function (e) {
                  return console.error(e.stack);
                });
                var e = setInterval(b, u.b.refreshInterval);
                return function () {
                  return clearInterval(e);
                };
              }
            },
            [d, m, f, b]
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
        l = n(27),
        i = o.d.div(a || (a = Object(l.a)([""]))),
        u = function (e) {
          var t = e.children;
          return c.a.createElement(i, null, t);
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
    864: function (e, t, n) {
      "use strict";
      n.d(t, "a", function () {
        return f;
      });
      var a,
        r,
        c = n(27),
        o = n(0),
        l = n.n(o),
        i = n(22),
        u = n(86),
        s = i.d.button(
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
        m = Object(i.d)(u.b)(
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
        f = function (e) {
          var t = e.children,
            n = e.disabled,
            a = e.onClick,
            r = e.to;
          return l.a.createElement(
            s,
            { disabled: n, onClick: a },
            r ? l.a.createElement(m, { to: r }, t) : t
          );
        };
    },
    887: function (e, t, n) {
      e.exports = n.p + "static/media/masonry.042cb5a6.png";
    },
    910: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "default", function () {
          return Ke;
        });
      var a,
        r,
        c,
        o,
        l,
        i,
        u,
        s,
        m,
        f,
        d,
        b,
        p,
        O,
        h,
        v = n(61),
        j = n(27),
        E = n(0),
        g = n.n(E),
        x = n(430),
        k = n(263),
        y = n.n(k),
        w = n(22),
        C = n(849),
        N = n(831),
        I = n(867),
        S = n(883),
        A = n(818),
        M = n(177),
        T = n(180),
        D = n(179),
        P = n(850),
        F = n(843),
        R = n(24),
        U = n(96),
        z = function () {
          var e = Object(E.useState)({ from: new Date(), to: new Date() }),
            t = Object(R.a)(e, 2),
            n = t[0],
            a = t[1],
            r = Object(U.a)();
          return (
            Object(E.useEffect)(
              function () {
                r && r.getUserClaimRewardTime().then(a);
              },
              [r]
            ),
            n
          );
        },
        W = n(2),
        B = n.n(W),
        H = n(14),
        V = n(42),
        L = function () {
          var e = Object(E.useState)(!1),
            t = Object(R.a)(e, 2),
            n = t[0],
            a = t[1],
            r = Object(U.a)(),
            c = null === r || void 0 === r ? void 0 : r.isUnlocked,
            o = Object(E.useCallback)(
              Object(H.a)(
                B.a.mark(function e() {
                  return B.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.t0 = a),
                            (e.next = 3),
                            r.canUserClaimRewardFromMasonry()
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
            Object(E.useEffect)(
              function () {
                if (c) {
                  o().catch(function (e) {
                    return console.error(e.stack);
                  });
                  var e = setInterval(o, V.b.refreshInterval);
                  return function () {
                    return clearInterval(e);
                  };
                }
              },
              [c, o, r]
            ),
            n
          );
        },
        _ = n(886),
        G = w.d.p(
          a ||
            (a = Object(j.a)([
              "\n  // font-size: 14px;\n  font-weight: 700;\n  // color: ",
              ";\n  margin: 0 0 6px 0;\n",
            ])),
          function (e) {
            return e.theme.color.grey[100];
          }
        ),
        K = w.d.div(
          r ||
            (r = Object(j.a)([
              "\n  width: 100%;\n  height: 8px;\n  border-radius: 3px;\n  background: ",
              ";\n",
            ])),
          function (e) {
            return e.theme.color.grey[700];
          }
        ),
        q = w.d.div(
          c ||
            (c = Object(j.a)([
              "\n  width: ",
              "%;\n  height: 100%;\n  border-radius: 3px;\n  background: ",
              ";\n",
            ])),
          function (e) {
            return e.progress;
          },
          function (e) {
            return e.theme.color.grey[100];
          }
        ),
        J = w.d.div(
          o ||
            (o = Object(j.a)([
              "\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  // padding: ",
              "px ",
              "px;\n",
            ])),
          function (e) {
            return e.theme.spacing[2];
          },
          function (e) {
            return e.theme.spacing[4];
          }
        ),
        $ = function (e) {
          var t = e.base,
            n = e.deadline,
            a = e.hideBar,
            r =
              (e.description,
              Date.now() >= n.getTime()
                ? 100
                : ((Date.now() - t.getTime()) / (n.getTime() - t.getTime())) *
                  100);
          return g.a.createElement(
            J,
            null,
            g.a.createElement(_.a, {
              key: new Date().getTime(),
              date: n,
              renderer: function (e) {
                var t = e.days,
                  n = e.hours,
                  a = e.minutes,
                  r = e.seconds,
                  c = String(24 * t + n),
                  o = String(a),
                  l = String(r);
                return g.a.createElement(
                  G,
                  null,
                  c.padStart(2, "0"),
                  ":",
                  o.padStart(2, "0"),
                  ":",
                  l.padStart(2, "0")
                );
              },
            }),
            a
              ? ""
              : g.a.createElement(
                  K,
                  null,
                  g.a.createElement(q, { progress: r })
                )
          );
        },
        Q = n(837),
        X = function () {
          var e = Object(U.a)(),
            t = Object(Q.a)();
          return {
            onReward: Object(E.useCallback)(
              function () {
                t(e.harvestCashFromMasonry(), "Claim TOMB from Masonry");
              },
              [e, t]
            ),
          };
        },
        Y = n(34),
        Z = function () {
          var e = Object(E.useState)(Y.a.from(0)),
            t = Object(R.a)(e, 2),
            n = t[0],
            a = t[1],
            r = Object(U.a)(),
            c = null === r || void 0 === r ? void 0 : r.isUnlocked,
            o = Object(E.useCallback)(
              Object(H.a)(
                B.a.mark(function e() {
                  return B.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.t0 = a), (e.next = 3), r.getEarningsOnMasonry()
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
            Object(E.useEffect)(
              function () {
                if (c) {
                  o().catch(function (e) {
                    return console.error(e.stack);
                  });
                  var e = setInterval(o, V.b.refreshInterval);
                  return function () {
                    return clearInterval(e);
                  };
                }
              },
              [c, a, o, r]
            ),
            n
          );
        },
        ee = n(845),
        te = n(30),
        ne = w.d.div(
          l ||
            (l = Object(j.a)([
              "\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n",
            ]))
        ),
        ae = w.d.div(
          i ||
            (i = Object(j.a)([
              "\n  display: flex;\n  justify-content: center;\n  margin-top: ",
              "px;\n  width: 100%;\n",
            ])),
          function (e) {
            return e.theme.spacing[6];
          }
        ),
        re = w.d.div(
          u ||
            (u = Object(j.a)([
              "\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n",
            ]))
        ),
        ce = function () {
          var e = Object(ee.a)(),
            t = X().onReward,
            n = Z(),
            a = L(),
            r = Object(E.useMemo)(
              function () {
                return e ? Number(e.priceInDollars).toFixed(2) : null;
              },
              [e]
            ),
            c = (Number(r) * Number(Object(te.b)(n))).toFixed(2),
            o = z(),
            l = o.from,
            i = o.to;
          return g.a.createElement(
            N.a,
            null,
            g.a.createElement(
              I.a,
              null,
              g.a.createElement(
                S.a,
                null,
                g.a.createElement(
                  re,
                  null,
                  g.a.createElement(
                    ne,
                    null,
                    g.a.createElement(
                      F.a,
                      null,
                      g.a.createElement(T.a, { symbol: "MBird" })
                    ),
                    g.a.createElement(P.a, { value: Object(te.b)(n) }),
                    g.a.createElement(D.a, { text: "\u2248 $".concat(c) }),
                    g.a.createElement(D.a, { text: "MBird Earned" })
                  ),
                  g.a.createElement(
                    ae,
                    null,
                    g.a.createElement(
                      A.a,
                      {
                        onClick: t,
                        color: "primary",
                        variant: "contained",
                        disabled: n.eq(0) || !a,
                      },
                      "Claim Reward"
                    )
                  )
                )
              )
            ),
            g.a.createElement(
              N.a,
              { mt: 2, style: { color: "#FFF" } },
              a
                ? ""
                : g.a.createElement(
                    I.a,
                    null,
                    g.a.createElement(
                      S.a,
                      null,
                      g.a.createElement(
                        M.a,
                        { style: { textAlign: "center" } },
                        "Claim possible in"
                      ),
                      g.a.createElement($, {
                        hideBar: !0,
                        base: l,
                        deadline: i,
                        description: "Claim available in",
                      })
                    )
                  )
            )
          );
        },
        oe = n(861),
        le = n(864),
        ie = n(847),
        ue = n(276),
        se = n(181),
        me = function () {
          var e = Object(E.useState)(!1),
            t = Object(R.a)(e, 2),
            n = t[0],
            a = t[1],
            r = Object(U.a)(),
            c = null === r || void 0 === r ? void 0 : r.isUnlocked,
            o = Object(E.useCallback)(
              Object(H.a)(
                B.a.mark(function e() {
                  return B.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.t0 = a),
                            (e.next = 3),
                            r.canUserUnstakeFromMasonry()
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
            Object(E.useEffect)(
              function () {
                if (c) {
                  o().catch(function (e) {
                    return console.error(e.stack);
                  });
                  var e = setInterval(o, V.b.refreshInterval);
                  return function () {
                    return clearInterval(e);
                  };
                }
              },
              [c, o, r]
            ),
            n
          );
        },
        fe = n(273),
        de = n(840),
        be = n(274),
        pe = n(839),
        Oe = function (e) {
          var t = e.max,
            n = e.onConfirm,
            a = (e.onDismiss, e.tokenName),
            r = void 0 === a ? "" : a,
            c = Object(E.useState)(""),
            o = Object(R.a)(c, 2),
            l = o[0],
            i = o[1],
            u = Object(E.useMemo)(
              function () {
                return Object(te.c)(t, "USDC" === r ? 6 : 18);
              },
              [t, r]
            ),
            s = Object(E.useCallback)(
              function (e) {
                i(e.currentTarget.value);
              },
              [i]
            ),
            m = Object(E.useCallback)(
              function () {
                i(u);
              },
              [u, i]
            );
          return g.a.createElement(
            fe.a,
            null,
            g.a.createElement(be.a, { text: "Deposit ".concat(r) }),
            g.a.createElement(pe.a, {
              value: l,
              onSelectMax: m,
              onChange: s,
              max: u,
              symbol: r,
            }),
            g.a.createElement(
              de.a,
              null,
              g.a.createElement(
                A.a,
                {
                  color: "primary",
                  variant: "contained",
                  onClick: function () {
                    return n(l);
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
            c = Object(E.useState)(""),
            o = Object(R.a)(c, 2),
            l = o[0],
            i = o[1],
            u = Object(E.useMemo)(
              function () {
                return Object(te.c)(n);
              },
              [n]
            ),
            s = Object(E.useCallback)(
              function (e) {
                i(e.currentTarget.value);
              },
              [i]
            ),
            m = Object(E.useCallback)(
              function () {
                i(u);
              },
              [u, i]
            );
          return g.a.createElement(
            fe.a,
            null,
            g.a.createElement(be.a, { text: "Withdraw ".concat(r) }),
            g.a.createElement(pe.a, {
              onSelectMax: m,
              onChange: s,
              value: l,
              max: u,
              symbol: r,
            }),
            g.a.createElement(
              de.a,
              null,
              g.a.createElement(
                A.a,
                {
                  color: "primary",
                  variant: "contained",
                  onClick: function () {
                    return t(l);
                  },
                },
                "Confirm"
              )
            )
          );
        },
        ve = function () {
          var e = Object(E.useState)(Y.a.from(0)),
            t = Object(R.a)(e, 2),
            n = t[0],
            a = t[1],
            r = Object(U.a)(),
            c = null === r || void 0 === r ? void 0 : r.isUnlocked,
            o = Object(E.useCallback)(
              Object(H.a)(
                B.a.mark(function e() {
                  return B.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.t0 = a),
                            (e.next = 3),
                            r.getStakedSharesOnMasonry()
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
            Object(E.useEffect)(
              function () {
                if (c) {
                  o().catch(function (e) {
                    return console.error(e.stack);
                  });
                  var e = setInterval(o, V.b.refreshInterval);
                  return function () {
                    return clearInterval(e);
                  };
                }
              },
              [a, c, r, o]
            ),
            n
          );
        },
        je = n(859),
        Ee = function () {
          var e = Object(E.useState)({ from: new Date(), to: new Date() }),
            t = Object(R.a)(e, 2),
            n = t[0],
            a = t[1],
            r = Object(U.a)();
          return (
            Object(E.useEffect)(
              function () {
                r && r.getUserUnstakeTime().then(a);
              },
              [r]
            ),
            n
          );
        },
        ge = function () {
          var e = Object(U.a)(),
            t = Object(Q.a)();
          return {
            onStake: Object(E.useCallback)(
              function (n) {
                t(
                  e.stakeShareToMasonry(n),
                  "Stake ".concat(n, " TSHARE to the masonry")
                );
              },
              [e, t]
            ),
          };
        },
        xe = function () {
          var e = Object(U.a)(),
            t = Object(Q.a)();
          return {
            onWithdraw: Object(E.useCallback)(
              function (n) {
                t(
                  e.withdrawShareFromMasonry(n),
                  "Withdraw ".concat(n, " TSHARE from the masonry")
                );
              },
              [e, t]
            ),
          };
        },
        ke = w.d.div(
          s ||
            (s = Object(j.a)([
              "\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n",
            ]))
        ),
        ye = w.d.div(
          m ||
            (m = Object(j.a)([
              "\n  display: flex;\n  justify-content: center;\n  margin-top: 28px;\n  width: 100%;\n",
            ]))
        ),
        we = w.d.div(
          f || (f = Object(j.a)(["\n  height: ", "px;\n  width: ", "px;\n"])),
          function (e) {
            return e.theme.spacing[4];
          },
          function (e) {
            return e.theme.spacing[4];
          }
        ),
        Ce = w.d.div(
          d ||
            (d = Object(j.a)([
              "\n  align-items: center;\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  justify-content: space-between;\n",
            ]))
        ),
        Ne = function () {
          var e = Object(U.a)(),
            t = Object(ie.b)(e.MShare, e.contracts.Masonry.address),
            n = Object(R.a)(t, 2),
            a = n[0],
            r = n[1],
            c = Object(se.a)(e.MShare),
            o = ve(),
            l = Ee(),
            i = l.from,
            u = l.to,
            s = Object(je.a)("MShare", e.MShare),
            m = Object(E.useMemo)(
              function () {
                return s
                  ? (Number(s) * Number(Object(te.b)(o))).toFixed(2).toString()
                  : null;
              },
              [s, o]
            ),
            f = ge().onStake,
            d = xe().onWithdraw,
            b = me(),
            p = Object(ue.a)(
              g.a.createElement(Oe, {
                max: c,
                onConfirm: function (e) {
                  f(e), v();
                },
                tokenName: "MShare",
              })
            ),
            O = Object(R.a)(p, 2),
            h = O[0],
            v = O[1],
            j = Object(ue.a)(
              g.a.createElement(he, {
                max: o,
                onConfirm: function (e) {
                  d(e), y();
                },
                tokenName: "MShare",
              })
            ),
            x = Object(R.a)(j, 2),
            k = x[0],
            y = x[1];
          return g.a.createElement(
            N.a,
            null,
            g.a.createElement(
              I.a,
              null,
              g.a.createElement(
                S.a,
                null,
                g.a.createElement(
                  Ce,
                  null,
                  g.a.createElement(
                    ke,
                    null,
                    g.a.createElement(
                      F.a,
                      null,
                      g.a.createElement(T.a, { symbol: "Mbond" })
                    ),
                    g.a.createElement(P.a, { value: Object(te.b)(o) }),
                    g.a.createElement(D.a, { text: "\u2248 $".concat(m) }),
                    g.a.createElement(D.a, { text: "MShare Staked" })
                  ),
                  g.a.createElement(
                    ye,
                    null,
                    a !== ie.a.APPROVED
                      ? g.a.createElement(
                          A.a,
                          {
                            disabled: a !== ie.a.NOT_APPROVED,
                            variant: "contained",
                            color: "primary",
                            style: { marginTop: "20px" },
                            onClick: r,
                          },
                          "Approve MShare"
                        )
                      : g.a.createElement(
                          g.a.Fragment,
                          null,
                          g.a.createElement(
                            le.a,
                            { disabled: !b, onClick: k },
                            g.a.createElement(oe.b, null)
                          ),
                          g.a.createElement(we, null),
                          g.a.createElement(
                            le.a,
                            { onClick: h },
                            g.a.createElement(oe.a, null)
                          )
                        )
                  )
                )
              )
            ),
            g.a.createElement(
              N.a,
              { mt: 2, style: { color: "#FFF" } },
              b
                ? ""
                : g.a.createElement(
                    I.a,
                    null,
                    g.a.createElement(
                      S.a,
                      null,
                      g.a.createElement(
                        M.a,
                        { style: { textAlign: "center" } },
                        "Withdraw possible in"
                      ),
                      g.a.createElement($, {
                        hideBar: !0,
                        base: i,
                        deadline: u,
                        description: "Withdraw available in",
                      })
                    )
                  )
            )
          );
        },
        Ie = n(810),
        Se = n(812),
        Ae = n(898),
        Me = n(844),
        Te = n(277),
        De = function (e) {
          var t = Object(U.a)(),
            n = Object(Q.a)();
          return {
            onRedeem: Object(E.useCallback)(
              function () {
                var a = e || "Redeem TSHARE from Masonry";
                n(t.exitFromMasonry(), a);
              },
              [t, e, n]
            ),
          };
        },
        Pe = function () {
          var e = Object(E.useState)(Y.a.from(0)),
            t = Object(R.a)(e, 2),
            n = t[0],
            a = t[1],
            r = Object(U.a)(),
            c = Object(E.useCallback)(
              Object(H.a)(
                B.a.mark(function e() {
                  return B.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.t0 = a), (e.next = 3), r.getCurrentEpoch();
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
            Object(E.useEffect)(
              function () {
                c().catch(function (e) {
                  return console.error(
                    "Failed to fetch TOMB price: ".concat(e.stack)
                  );
                });
                var e = setInterval(c, V.b.refreshInterval);
                return function () {
                  return clearInterval(e);
                };
              },
              [a, r, c]
            ),
            n
          );
        },
        Fe = function () {
          var e = Object(E.useState)(0),
            t = Object(R.a)(e, 2),
            n = t[0],
            a = t[1],
            r = Object(U.a)(),
            c = Object(E.useCallback)(
              Object(H.a)(
                B.a.mark(function e() {
                  return B.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.t0 = a), (e.next = 3), r.getMasonryAPR();
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
            Object(E.useEffect)(
              function () {
                c().catch(function (e) {
                  return console.error(
                    "Failed to fetch masonry apr: ".concat(e.stack)
                  );
                });
                var e = setInterval(c, V.b.refreshInterval);
                return function () {
                  return clearInterval(e);
                };
              },
              [a, r, c]
            ),
            n
          );
        },
        Re = function () {
          var e = Object(E.useState)(),
            t = Object(R.a)(e, 2),
            n = t[0],
            a = t[1],
            r = Object(U.a)(),
            c = Object(E.useCallback)(
              Object(H.a)(
                B.a.mark(function e() {
                  return B.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.t0 = a),
                            (e.next = 3),
                            r.getTombStatInEstimatedTWAP()
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
            Object(E.useEffect)(
              function () {
                c().catch(function (e) {
                  return console.error(
                    "Failed to fetch TOMB price: ".concat(e.stack)
                  );
                });
                var e = setInterval(c, V.b.refreshInterval);
                return function () {
                  return clearInterval(e);
                };
              },
              [a, r, c]
            ),
            n
          );
        },
        Ue = function () {
          var e = Object(E.useState)({ from: new Date(), to: new Date() }),
            t = Object(R.a)(e, 2),
            n = t[0],
            a = t[1],
            r = Object(U.a)();
          return (
            Object(E.useEffect)(
              function () {
                r && r.getTreasuryNextAllocationTime().then(a);
              },
              [r]
            ),
            n
          );
        },
        ze = function () {
          var e = Object(E.useState)(Y.a.from(0)),
            t = Object(R.a)(e, 2),
            n = t[0],
            a = t[1],
            r = Object(U.a)(),
            c = null === r || void 0 === r ? void 0 : r.isUnlocked,
            o = Object(E.useCallback)(
              Object(H.a)(
                B.a.mark(function e() {
                  return B.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.t0 = a),
                            (e.next = 3),
                            r.getTotalStakedInMasonry()
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
            Object(E.useEffect)(
              function () {
                if (c) {
                  o().catch(function (e) {
                    return console.error(e.stack);
                  });
                  var e = setInterval(o, V.b.refreshInterval);
                  return function () {
                    return clearInterval(e);
                  };
                }
              },
              [c, o, r]
            ),
            n
          );
        },
        We = n(887),
        Be = n.n(We),
        He = Object(w.c)(
          b ||
            (b = Object(j.a)([
              "\n  body, html {\n    background: url(",
              ") no-repeat !important;\n    background-size: cover !important;\n  }\n",
            ])),
          Be.a
        ),
        Ve = Object(Ie.a)(function (e) {
          return {
            gridItem: Object(v.a)({ height: "100%" }, e.breakpoints.up("md"), {
              height: "90px",
            }),
          };
        }),
        Le = w.d.div(
          p ||
            (p = Object(j.a)([
              "\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  @media (max-width: 768px) {\n    width: 100%;\n  }\n",
            ]))
        ),
        _e = w.d.div(
          O ||
            (O = Object(j.a)([
              "\n  display: flex;\n  width: 600px;\n  @media (max-width: 768px) {\n    width: 100%;\n    flex-flow: column nowrap;\n    align-items: center;\n  }\n",
            ]))
        ),
        Ge = w.d.div(
          h ||
            (h = Object(j.a)([
              "\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  @media (max-width: 768px) {\n    width: 80%;\n  }\n",
            ]))
        ),
        Ke = function () {
          var e = Ve(),
            t = Object(x.h)().account,
            n = De().onRedeem,
            a = ve(),
            r = Pe(),
            c = Re(),
            o = ze(),
            l = Fe(),
            i = L(),
            u = me(),
            s = Object(E.useMemo)(
              function () {
                return c ? Number(c.priceInDollars).toFixed(4) : null;
              },
              [c]
            ),
            m = Ue().to;
          return g.a.createElement(
            Te.a,
            null,
            g.a.createElement(He, null),
            t
              ? g.a.createElement(
                  g.a.Fragment,
                  null,
                  g.a.createElement(
                    M.a,
                    {
                      color: "textPrimary",
                      align: "center",
                      variant: "h3",
                      gutterBottom: !0,
                    },
                    "Masonry"
                  ),
                  g.a.createElement(
                    N.a,
                    { mt: 5 },
                    g.a.createElement(
                      Se.a,
                      { container: !0, justify: "center", spacing: 3 },
                      g.a.createElement(
                        Se.a,
                        {
                          item: !0,
                          xs: 12,
                          md: 2,
                          lg: 2,
                          className: e.gridItem,
                        },
                        g.a.createElement(
                          I.a,
                          { className: e.gridItem },
                          g.a.createElement(
                            S.a,
                            null,
                            g.a.createElement(
                              M.a,
                              { style: { textAlign: "center" } },
                              "Next Epoch"
                            ),
                            g.a.createElement($, {
                              base: y()().toDate(),
                              hideBar: !0,
                              deadline: m,
                              description: "Next Epoch",
                            })
                          )
                        )
                      ),
                      g.a.createElement(
                        Se.a,
                        {
                          item: !0,
                          xs: 12,
                          md: 2,
                          lg: 2,
                          className: e.gridItem,
                        },
                        g.a.createElement(
                          I.a,
                          { className: e.gridItem },
                          g.a.createElement(
                            S.a,
                            { align: "center" },
                            g.a.createElement(M.a, null, "Current Epoch"),
                            g.a.createElement(M.a, null, Number(r))
                          )
                        )
                      ),
                      g.a.createElement(
                        Se.a,
                        {
                          item: !0,
                          xs: 12,
                          md: 2,
                          lg: 2,
                          className: e.gridItem,
                        },
                        g.a.createElement(
                          I.a,
                          { className: e.gridItem },
                          g.a.createElement(
                            S.a,
                            { align: "center" },
                            g.a.createElement(
                              M.a,
                              null,
                              "MBird Price",
                              g.a.createElement("small", null, "(TWAP)")
                            ),
                            g.a.createElement(M.a, null, s)
                          )
                        )
                      ),
                      g.a.createElement(
                        Se.a,
                        {
                          item: !0,
                          xs: 12,
                          md: 2,
                          lg: 2,
                          className: e.gridItem,
                        },
                        g.a.createElement(
                          I.a,
                          { className: e.gridItem },
                          g.a.createElement(
                            S.a,
                            { align: "center" },
                            g.a.createElement(M.a, null, "APR"),
                            g.a.createElement(M.a, null, l.toFixed(2), "%")
                          )
                        )
                      ),
                      g.a.createElement(
                        Se.a,
                        { item: !0, xs: 12, md: 2, lg: 2 },
                        g.a.createElement(
                          I.a,
                          { className: e.gridItem },
                          g.a.createElement(
                            S.a,
                            { align: "center" },
                            g.a.createElement(M.a, null, "MShares Staked"),
                            g.a.createElement(M.a, null, Object(te.b)(o))
                          )
                        )
                      )
                    ),
                    g.a.createElement(
                      Se.a,
                      { container: !0, justify: "center" },
                      g.a.createElement(
                        N.a,
                        { mt: 3, style: { width: "600px" } },
                        g.a.createElement(
                          Ae.a,
                          { variant: "filled", severity: "warning" },
                          "Staked MShares can only be withdrawn after 6 epochs since deposit."
                        )
                      )
                    ),
                    g.a.createElement(
                      N.a,
                      { mt: 4 },
                      g.a.createElement(
                        Le,
                        null,
                        g.a.createElement(
                          _e,
                          null,
                          g.a.createElement(
                            Ge,
                            null,
                            g.a.createElement(ce, null)
                          ),
                          g.a.createElement(C.a, null),
                          g.a.createElement(
                            Ge,
                            null,
                            g.a.createElement(Ne, null)
                          )
                        )
                      )
                    )
                  ),
                  g.a.createElement(
                    N.a,
                    { mt: 5 },
                    g.a.createElement(
                      Se.a,
                      { container: !0, justify: "center", spacing: 3, mt: 10 },
                      g.a.createElement(
                        A.a,
                        {
                          disabled: a.eq(0) || (!u && !i),
                          onClick: n,
                          color: "primary",
                          variant: "contained",
                        },
                        "Claim and Withdraw"
                      )
                    )
                  )
                )
              : g.a.createElement(Me.a, null)
          );
        };
    },
  },
]);
