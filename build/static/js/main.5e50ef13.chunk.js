(this.webpackJsonpscoreboard = this.webpackJsonpscoreboard || []).push([
  [0],
  {
    166: function (e, t) {},
    168: function (e, t) {},
    178: function (e, t) {},
    180: function (e, t) {},
    205: function (e, t) {},
    207: function (e, t) {},
    208: function (e, t) {},
    213: function (e, t) {},
    215: function (e, t) {},
    234: function (e, t) {},
    246: function (e, t) {},
    249: function (e, t) {},
    273: function (e, t, n) {
      "use strict";
      n.r(t), (t.default = n.p + "static/media/img.b3e50773.png");
    },
    274: function (e, t, n) {},
    275: function (e, t, n) {
      "use strict";
      n.r(t);
      var c = n(2),
        a = n(0),
        r = n(20),
        s = n.n(r),
        i = (n(158), n(8)),
        o = n.n(i),
        l = n(13),
        u = n(9),
        d = function (e) {
          var t = e.title,
            n = e.body,
            a = e.author,
            r = e.imgurl;
          return Object(c.jsx)("div", {
            className: "grid",
            children: Object(c.jsxs)("div", {
              className: "card card__body",
              children: [
                Object(c.jsx)("h1", { className: "tit", children: t }),
                Object(c.jsx)("figure", {
                  className: "card__img",
                  children: Object(c.jsx)("img", {
                    className: "mainimg",
                    alt: "an img",
                    src: r,
                  }),
                }),
                Object(c.jsx)("div", { className: "card__desc", children: n }),
                Object(c.jsxs)("h3", { children: ["by:", a] }),
              ],
            }),
          });
        },
        j = n(0).useState,
        h = function (e) {
          var t = e.filter,
            n = j(),
            a = Object(u.a)(n, 2),
            r = a[0],
            s = a[1];
          return Object(c.jsxs)("div", {
            className: "search-container",
            children: [
              Object(c.jsx)("input", {
                onChange: function (e) {
                  s(e.target.value);
                },
                type: "text",
                id: "search-bar",
                placeholder: "What can I help you with today?",
              }),
              Object(c.jsx)("button", {
                onClick: function () {
                  return t(r);
                },
                className: "sbmbut",
                type: "submit",
                children: "search",
              }),
            ],
          });
        },
        b = n.p + "static/media/logo.9fe07583.png",
        p = function (e) {
          var t,
            n = e.article,
            a = e.news,
            r = e.logout,
            s = e.profile,
            i = e.toggle,
            o = e.admin,
            l = e.switchadd,
            u = e.add,
            d = function () {
              if (s)
                return Object(c.jsx)("li", {
                  children: Object(c.jsx)("a", { children: s }),
                });
            };
          return Object(c.jsxs)("nav", {
            className: "nav-wrapper-flex",
            children: [
              Object(c.jsx)("img", { src: b, width: "100px" }),
              Object(c.jsx)("i", {
                className: "material-icons",
                id: "mobile-menu",
              }),
              ((t = o),
              t
                ? t
                  ? Object(c.jsxs)("ul", {
                      className: "nav-links",
                      children: [
                        Object(c.jsx)("li", {
                          children: Object(c.jsx)("a", {
                            onClick: function () {
                              return r();
                            },
                            children: "logout",
                          }),
                        }),
                        Object(c.jsx)("li", {
                          children: Object(c.jsx)("a", {
                            onClick: function () {
                              return l();
                            },
                            children: u ? "delete" : "add",
                          }),
                        }),
                        d(),
                      ],
                    })
                  : void 0
                : Object(c.jsxs)("ul", {
                    className: "nav-links",
                    children: [
                      Object(c.jsx)("li", {
                        children: Object(c.jsx)("a", {
                          onClick: function () {
                            return a();
                          },
                          children: "news",
                        }),
                      }),
                      Object(c.jsx)("li", {
                        children: Object(c.jsx)("a", {
                          onClick: function () {
                            return n();
                          },
                          children: "articles",
                        }),
                      }),
                      Object(c.jsx)("li", {
                        children: Object(c.jsx)("a", {
                          onClick: function () {
                            return r();
                          },
                          children: "logout",
                        }),
                      }),
                      Object(c.jsx)("li", {
                        children: Object(c.jsx)("a", {
                          onClick: function () {
                            return i();
                          },
                          children: "search",
                        }),
                      }),
                      d(),
                    ],
                  })),
            ],
          });
        },
        x = n(160),
        m = n(0).useState,
        f = function (e) {
          var t = e.login,
            n = e.signup,
            a = m({ email: "" }),
            r = Object(u.a)(a, 2),
            s = r[0],
            i = r[1],
            d = m({ password: "" }),
            j = Object(u.a)(d, 2),
            h = j[0],
            b = j[1],
            p = m(!1),
            f = Object(u.a)(p, 2),
            O = f[0],
            v = f[1];
          return Object(c.jsxs)("div", {
            className: "login",
            children: [
              Object(c.jsx)("div", { className: "login-triangle" }),
              !0 === O
                ? Object(c.jsxs)("div", {
                    children: [
                      " ",
                      Object(c.jsx)("h2", {
                        className: "login-header",
                        children: "Log in",
                      }),
                      Object(c.jsxs)("form", {
                        onSubmit: function (e) {
                          e.preventDefault(), i({ email: "" });
                        },
                        className: "login-container",
                        children: [
                          Object(c.jsx)("p", {
                            children: Object(c.jsx)("input", {
                              onChange: function (e) {
                                i({ email: e.target.value });
                              },
                              type: "text",
                              placeholder: "Email",
                              required: "required",
                            }),
                          }),
                          Object(c.jsx)("p", {
                            children: Object(c.jsx)("input", {
                              onChange: function (e) {
                                b({ password: e.target.value });
                              },
                              type: "password",
                              placeholder: "Password",
                              required: "required",
                            }),
                          }),
                          Object(c.jsx)("p", {
                            children: Object(c.jsx)("input", {
                              onClick: Object(l.a)(
                                o.a.mark(function e() {
                                  return o.a.wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (e.next = 2),
                                            t({
                                              email: s.email,
                                              pass: h.password,
                                            })
                                          );
                                        case 2:
                                          return e.abrupt("return", e.sent);
                                        case 3:
                                        case "end":
                                          return e.stop();
                                      }
                                  }, e);
                                })
                              ),
                              type: "submit",
                              value: "Log in",
                            }),
                          }),
                        ],
                      }),
                    ],
                  })
                : !1 === O
                ? Object(c.jsxs)("div", {
                    children: [
                      " ",
                      Object(c.jsx)("h2", {
                        className: "login-header",
                        children: "Sign up",
                      }),
                      Object(c.jsxs)("form", {
                        onSubmit: function (e) {
                          e.preventDefault(), b({ password: "" });
                        },
                        className: "login-container",
                        children: [
                          Object(c.jsx)("p", {
                            children: Object(c.jsx)("input", {
                              onChange: function (e) {
                                i({ email: e.target.value });
                              },
                              type: "text",
                              placeholder: "Email",
                              required: "required",
                            }),
                          }),
                          Object(c.jsx)("p", {
                            children: Object(c.jsx)("input", {
                              onChange: function (e) {
                                b({ password: e.target.value });
                              },
                              type: "password",
                              placeholder: "Password",
                              required: "required",
                            }),
                          }),
                          Object(c.jsx)("p", {
                            children: Object(c.jsx)("input", {
                              onClick: Object(l.a)(
                                o.a.mark(function e() {
                                  return o.a.wrap(function (e) {
                                    for (;;)
                                      switch ((e.prev = e.next)) {
                                        case 0:
                                          return (
                                            (e.next = 2),
                                            n({
                                              email: s.email,
                                              pass: x.hashSync(h.password, 8),
                                            })
                                          );
                                        case 2:
                                          return e.abrupt("return", e.sent);
                                        case 3:
                                        case "end":
                                          return e.stop();
                                      }
                                  }, e);
                                })
                              ),
                              type: "submit",
                              value: "signup",
                            }),
                          }),
                        ],
                      }),
                    ],
                  })
                : void 0,
              Object(c.jsx)("input", {
                onClick: function () {
                  v(!O);
                },
                type: "submit",
                value: O ? "signup" : "login",
              }),
            ],
          });
        },
        O = n(76),
        v = n(47),
        g = function (e) {
          var t = e.title,
            n = e.body,
            r = e.author,
            s = e.imgurl,
            i = e.is,
            d = Object(a.useState)(),
            j = Object(u.a)(d, 2),
            h = j[0],
            b = j[1];
          function p() {
            window.location.reload(!0);
          }
          var x = (function () {
            var e = Object(l.a)(
              o.a.mark(function e(t, n) {
                return o.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            v.post(
                              "https://nameless-crag-56133.herokuapp.com/ /delete",
                              { title: t, is: n }
                            )
                          );
                        case 3:
                          b(!h), (e.next = 9);
                          break;
                        case 6:
                          (e.prev = 6),
                            (e.t0 = e.catch(0)),
                            console.error(e.t0);
                        case 9:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 6]]
                );
              })
            );
            return function (t, n) {
              return e.apply(this, arguments);
            };
          })();
          return Object(c.jsx)("div", {
            className: "grid",
            children: Object(c.jsxs)("div", {
              className: "card card__body",
              children: [
                Object(c.jsx)("h1", { className: "tit", children: t }),
                Object(c.jsx)("figure", {
                  className: "card__img",
                  children: Object(c.jsx)("img", {
                    className: "mainimg",
                    alt: "an img",
                    src: s,
                  }),
                }),
                Object(c.jsx)("div", { className: "card__desc", children: n }),
                Object(c.jsxs)("div", {
                  className: "authn",
                  children: [
                    Object(c.jsxs)("h3", { children: ["by:", r] }),
                    Object(c.jsx)("input", {
                      onClick: function () {
                        !(function (e, t, n, c) {
                          n(e, t), c();
                        })(t, i, x, p);
                      },
                      className: "myButton",
                      type: "submit",
                      value: "delete",
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        w = n(299),
        N = n(298),
        k = [
          { key: "article", text: "article", value: "article" },
          { key: "news", text: "news", value: "news" },
        ],
        y = function (e) {
          var t = e.set;
          return Object(c.jsx)(N.a, {
            onChange: function (e, n) {
              var c = n.value;
              t({ value: c });
            },
            placeholder: "Select type",
            fluid: !0,
            selection: !0,
            options: k,
          });
        },
        C = n(137),
        S = n(0).useState,
        A = n(47),
        q = function () {
          var e = S(""),
            t = Object(u.a)(e, 2),
            n = t[0],
            a = t[1],
            r = S(""),
            s = Object(u.a)(r, 2),
            i = s[0],
            d = s[1],
            j = S(""),
            h = Object(u.a)(j, 2),
            b = h[0],
            p = h[1],
            x = S(""),
            m = Object(u.a)(x, 2),
            f = m[0],
            O = m[1];
          function v() {
            window.location.reload(!0);
          }
          var g = (function () {
            var e = Object(l.a)(
              o.a.mark(function e(t) {
                return o.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        if ("" !== n && "" !== i && "" !== b && f) {
                          e.next = 4;
                          break;
                        }
                        alert(
                          "make sure you havent left anything empty and type must be either news or article"
                        ),
                          (e.next = 10);
                        break;
                      case 4:
                        return (
                          (e.next = 6),
                          A.post(
                            "https://nameless-crag-56133.herokuapp.com/ /add",
                            {
                              title: i,
                              body: n,
                              imgurl: b,
                              type: f.value,
                              username: C.get("name"),
                            }
                          )
                        );
                      case 6:
                        a(""), p(""), O(null), d("");
                      case 10:
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
          return Object(c.jsxs)("div", {
            className: "add-cont",
            children: [
              Object(c.jsxs)("div", {
                className: "group",
                children: [
                  Object(c.jsx)("input", {
                    onChange: function (e) {
                      d(e.target.value);
                    },
                    placeholder: "title",
                    type: "text",
                    required: "required",
                  }),
                  Object(c.jsx)("span", { className: "highlight" }),
                  Object(c.jsx)("span", { className: "bar" }),
                ],
              }),
              Object(c.jsxs)("div", {
                className: "group",
                children: [
                  Object(c.jsx)("input", {
                    onChange: function (e) {
                      p(e.target.value);
                    },
                    placeholder: "image url",
                    type: "text",
                    required: "required",
                  }),
                  Object(c.jsx)("span", { className: "highlight" }),
                  Object(c.jsx)("span", { className: "bar" }),
                ],
              }),
              Object(c.jsxs)("div", {
                className: "group",
                children: [
                  Object(c.jsx)("textarea", {
                    onChange: function (e) {
                      a(e.target.value);
                    },
                    placeholder: "your story",
                    type: "text",
                    required: "required",
                    className: "comment",
                  }),
                  Object(c.jsx)("span", { className: "highlight" }),
                  Object(c.jsx)("span", { className: "bar" }),
                ],
              }),
              Object(c.jsxs)("div", {
                className: "group",
                children: [
                  Object(c.jsx)(y, {
                    set: function (e) {
                      O(e);
                    },
                  }),
                  Object(c.jsx)("span", { className: "highlight" }),
                  Object(c.jsx)("span", { className: "bar" }),
                ],
              }),
              Object(c.jsx)(w.a, {
                onClick: function (e) {
                  !(function (e, t, n) {
                    t(e), n();
                  })(e, g, v);
                },
                className: "sendbut",
                variant: "contained",
                color: "primary",
                children: "add",
              }),
            ],
          });
        },
        T = function () {
          return Object(c.jsxs)("div", {
            className: "noposts",
            children: [
              Object(c.jsx)("img", {
                className: "imgnot",
                alt: "",
                src: n(273),
              }),
              Object(c.jsx)("h3", { children: "no posts to show" }),
            ],
          });
        },
        E = n(0).useState,
        _ = n(0).useEffect,
        P = n(47),
        J = {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          withCredentials: !0,
          "Access-Control-Allow-Credentials": "true",
        },
        D = function (e) {
          var t = e.add,
            n = E(),
            a = Object(u.a)(n, 2),
            r = a[0],
            s = a[1];
          _(
            Object(l.a)(
              o.a.mark(function e() {
                var t, n, c, a;
                return o.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.prev = 0),
                            (e.next = 3),
                            P.get(
                              "https://nameless-crag-56133.herokuapp.com/ /admindata",
                              { headers: J }
                            )
                          );
                        case 3:
                          (t = e.sent),
                            (n = t.data.articles),
                            (c = t.data.news),
                            (a = [].concat(Object(O.a)(n), Object(O.a)(c))),
                            s(a),
                            (e.next = 13);
                          break;
                        case 10:
                          (e.prev = 10),
                            (e.t0 = e.catch(0)),
                            console.error(e.t0);
                        case 13:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[0, 10]]
                );
              })
            ),
            []
          );
          return Object(c.jsx)("div", {
            className: "admin-cont",
            children: Object(c.jsx)("div", {
              className: "posts",
              children:
                r && !t
                  ? r.length < 1
                    ? Object(c.jsx)(T, {})
                    : r.map(function (e, t) {
                        return Object(c.jsx)(
                          g,
                          {
                            title: e.title,
                            body: e.body,
                            imgurl: e.imgurl,
                            author: e.author,
                            is: !!e.isarticle,
                          },
                          t
                        );
                      })
                  : r && t
                  ? Object(c.jsx)(q, {})
                  : void 0,
            }),
          });
        },
        I = n(137),
        L = n(0).useState,
        U = n(0).useEffect,
        B = n(47),
        G = {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
          withCredentials: !0,
          "Access-Control-Allow-Credentials": "true",
        },
        H = function () {
          var e = L(),
            t = Object(u.a)(e, 2),
            n = t[0],
            a = t[1],
            r = L("news"),
            s = Object(u.a)(r, 2),
            i = s[0],
            j = s[1],
            b = L(),
            x = Object(u.a)(b, 2),
            m = x[0],
            O = x[1],
            v = L(!1),
            g = Object(u.a)(v, 2),
            w = g[0],
            N = g[1],
            k = L(!1),
            y = Object(u.a)(k, 2),
            C = y[0],
            S = y[1],
            A = (function () {
              var e = Object(l.a)(
                o.a.mark(function e() {
                  var t;
                  return o.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              B.get(
                                "https://nameless-crag-56133.herokuapp.com/ /articles",
                                { headers: G }
                              )
                            );
                          case 3:
                            (t = e.sent).data && (j("articles"), a(t.data)),
                              (e.next = 10);
                            break;
                          case 7:
                            (e.prev = 7),
                              (e.t0 = e.catch(0)),
                              console.error(e.t0);
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
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            q = function (e) {
              var t = Array.from(e).indexOf("=");
              return e.slice(t + 1);
            },
            E = (function () {
              var e = Object(l.a)(
                o.a.mark(function e(t) {
                  var c, r;
                  return o.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (t) {
                              e.next = 13;
                              break;
                            }
                            return (
                              (e.prev = 1),
                              (e.next = 4),
                              B.get(
                                "https://nameless-crag-56133.herokuapp.com/ /home",
                                { headers: G }
                              )
                            );
                          case 4:
                            (c = e.sent), a(c.data), (e.next = 11);
                            break;
                          case 8:
                            (e.prev = 8),
                              (e.t0 = e.catch(1)),
                              console.error(e.t0);
                          case 11:
                            e.next = 15;
                            break;
                          case 13:
                            (r = n.filter(function (e) {
                              return e.title.includes(t) || e.body.includes(t);
                            })),
                              a(r);
                          case 15:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 8]]
                  );
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            _ = (function () {
              var e = Object(l.a)(
                o.a.mark(function e(t) {
                  return o.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            (e.next = 2),
                            B.post(
                              "https://nameless-crag-56133.herokuapp.com/ /signup",
                              t,
                              { headers: G }
                            )
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
            })(),
            P = (function () {
              var e = Object(l.a)(
                o.a.mark(function e(t) {
                  var n, c;
                  return o.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              B.post(
                                "https://nameless-crag-56133.herokuapp.com/ /login",
                                t,
                                { headers: G }
                              )
                            );
                          case 3:
                            (n = e.sent).data.token &&
                              (n.data.isadmin && I.set("ad", !0),
                              (c = JSON.parse(JSON.stringify(n.data))),
                              (document.cookie = "token  =  ".concat(
                                c.token,
                                " ; path=/"
                              )),
                              O(q(document.cookie)),
                              I.set("name", c.name)),
                              (e.next = 10);
                            break;
                          case 7:
                            (e.prev = 7),
                              (e.t0 = e.catch(0)),
                              console.error(e.t0);
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
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })(),
            J = (function () {
              var e = Object(l.a)(
                o.a.mark(function e() {
                  var t;
                  return o.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              (e.prev = 0),
                              (e.next = 3),
                              B.get(
                                "https://nameless-crag-56133.herokuapp.com/ /home",
                                { headers: G }
                              )
                            );
                          case 3:
                            (t = e.sent).data && (a(t.data), j("news")),
                              (e.next = 10);
                            break;
                          case 7:
                            (e.prev = 7),
                              (e.t0 = e.catch(0)),
                              console.error(e.t0);
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
              );
              return function () {
                return e.apply(this, arguments);
              };
            })(),
            H = function () {
              S(!C);
            },
            M = function () {
              N(!w);
            },
            W = function () {
              I.remove("name"),
                I.remove("ad"),
                O(""),
                (document.cookie =
                  "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;");
            };
          return (
            U(
              Object(l.a)(
                o.a.mark(function e() {
                  var t;
                  return o.a.wrap(
                    function (e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              document.cookie && O(q(document.cookie)),
                              (e.prev = 1),
                              (e.next = 4),
                              B.get(
                                "https://nameless-crag-56133.herokuapp.com/ /home",
                                { headers: G }
                              )
                            );
                          case 4:
                            (t = e.sent), a(t.data), (e.next = 11);
                            break;
                          case 8:
                            (e.prev = 8),
                              (e.t0 = e.catch(1)),
                              console.error(e.t0);
                          case 11:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[1, 8]]
                  );
                })
              ),
              [m]
            ),
            Object(c.jsxs)("div", {
              children: [
                (function () {
                  if (m)
                    return Object(c.jsx)(p, {
                      add: C,
                      switchadd: H,
                      admin: I.get("ad"),
                      toggle: M,
                      profile: I.get("name"),
                      logout: W,
                      news: J,
                      article: A,
                    });
                })(),
                Object(c.jsxs)("div", {
                  children: [
                    " ",
                    (function () {
                      if (w) {
                        if ("articles" === i && m)
                          return Object(c.jsx)(h, { filter: E });
                        if ("news" === i && m)
                          return Object(c.jsx)(h, { filter: E });
                      }
                    })(),
                  ],
                }),
                Object(c.jsx)("div", {
                  className: "cont",
                  children: Object(c.jsx)("div", {
                    className: "cardcont",
                    children: I.get("ad")
                      ? Object(c.jsx)(D, { add: C })
                      : (n && "news" === i && m) || (n && "articles" === i && m)
                      ? n.length < 1
                        ? Object(c.jsx)(T, {})
                        : n.map(function (e, t) {
                            return Object(c.jsx)(
                              d,
                              {
                                imgurl: e.imgurl,
                                author: e.author,
                                title: e.title,
                                body: e.body,
                                admin: e.isadmin,
                              },
                              t
                            );
                          })
                      : Object(c.jsx)(f, { signup: _, login: P }),
                  }),
                }),
              ],
            })
          );
        };
      n(274);
      s.a.render(Object(c.jsx)(H, {}), document.getElementById("root"));
    },
  },
  [[275, 1, 2]],
]);
//# sourceMappingURL=main.5e50ef13.chunk.js.map
