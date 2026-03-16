export const VpSimpleConfig = {
  "srcDir": "./docs",
  "vpsimple": {
    "shellBaseDir": "D:\\fxtwd\\radar-docs",
    "gitBaseDir": "D:\\fxtwd\\radar-docs",
    "cmdDocsDev": "npm run docs:dev",
    "cmdDocsBuild": "npm run docs:build",
    "cmdNpmInstall": "npm install",
    "cmdGitInit": "git init",
    "cmdGitPull": "git pull",
    "cmdGitAdd": "git add .",
    "cmdGitCommit": "git commit -m 'autoupdate'",
    "cmdGitPush": "git push"
  },
  "assetsDir": "static",
  "sitemap": {
    "hostname": "https://example.com",
    "lastmodDateOnly": false
  },
  "themeConfig": {
    "externalLinkIcon": false,
    "i18nRouting": true,
    "logo": "\\images\\logo.jpg",
    "socialLinks": [
      {
        "icon": "github",
        "link": "https://github.com/supershunan/radar-docs.git"
      }
    ],
    "outline": {
      "level": "1",
      "label": "On this page"
    },
    "search": {
      "provider": "local",
      "options": {
        "appId": "",
        "apiKey": "",
        "indexName": "",
        "locales": {
          "zh": {
            "placeholder": "搜索文档",
            "translations": {
              "button": {
                "buttonText": "搜索文档",
                "buttonAriaLabel": "搜索文档"
              },
              "modal": {
                "searchBox": {
                  "resetButtonTitle": "清除查询条件",
                  "resetButtonAriaLabel": "清除查询条件",
                  "cancelButtonText": "取消",
                  "cancelButtonAriaLabel": "取消"
                },
                "startScreen": {
                  "recentSearchesTitle": "搜索历史",
                  "noRecentSearchesText": "没有搜索历史",
                  "saveRecentSearchButtonTitle": "保存至搜索历史",
                  "removeRecentSearchButtonTitle": "从搜索历史中移除",
                  "favoriteSearchesTitle": "收藏",
                  "removeFavoriteSearchButtonTitle": "从收藏中移除"
                },
                "errorScreen": {
                  "titleText": "无法获取结果",
                  "helpText": "你可能需要检查你的网络连接"
                },
                "footer": {
                  "selectText": "选择",
                  "navigateText": "切换",
                  "closeText": "关闭",
                  "searchByText": "搜索提供者"
                },
                "noResultsScreen": {
                  "noResultsText": "无法找到相关结果",
                  "suggestedQueryText": "你可以尝试查询",
                  "reportMissingResultsText": "你认为该查询应该有结果？",
                  "reportMissingResultsLinkText": "点击反馈"
                }
              }
            }
          },
          "en": {
            "placeholder": "Search docs",
            "translations": {
              "button": {
                "buttonText": "Search docs",
                "buttonAriaLabel": "Search docs"
              },
              "modal": {
                "searchBox": {
                  "resetButtonTitle": "Clear query",
                  "resetButtonAriaLabel": "Clear query",
                  "cancelButtonText": "Cancel",
                  "cancelButtonAriaLabel": "Cancel"
                },
                "startScreen": {
                  "recentSearchesTitle": "Recent searches",
                  "noRecentSearchesText": "No recent searches",
                  "saveRecentSearchButtonTitle": "Save search",
                  "removeRecentSearchButtonTitle": "Remove search",
                  "favoriteSearchesTitle": "Favorites",
                  "removeFavoriteSearchButtonTitle": "Remove from favorites"
                },
                "errorScreen": {
                  "titleText": "Unable to fetch results",
                  "helpText": "You may want to check your network connection"
                },
                "footer": {
                  "selectText": "select",
                  "navigateText": "navigate",
                  "closeText": "close",
                  "searchByText": "Search by"
                },
                "noResultsScreen": {
                  "noResultsText": "No results for",
                  "suggestedQueryText": "You can try searching for",
                  "reportMissingResultsText": "You think it should have results?",
                  "reportMissingResultsLinkText": "Click here to report it"
                }
              }
            }
          }
        }
      }
    },
    "langMenuLabel": "多语言",
    "returnToTopLabel": "回到顶部",
    "sidebarMenuLabel": "菜单",
    "darkModeSwitchLabel": "主题",
    "lightModeSwitchTitle": "切换到浅色模式",
    "darkModeSwitchTitle": "切换到深色模式",
    "editLink": {
      "text": "Edit this page on GitHub",
      "pattern": "https://github.com/zhangdi168/VitePressSimple/edit/main/docs/:path"
    },
    "docFooter": {
      "prev": "Previous page",
      "next": "Next Page"
    },
    "nav": [],
    "sidebar": {
      "/zh/操作手册/": [
        {
          "text": "入门",
          "items": [
            {
              "text": "产品介绍",
              "link": "/zh/操作手册/入门/产品介绍"
            },
            {
              "text": "联系我们",
              "link": "/zh/操作手册/入门/联系我们"
            }
          ]
        },
        {
          "text": "功能介绍",
          "items": [
            {
              "text": "三维页面",
              "link": "/zh/操作手册/功能介绍/三维页面"
            },
            {
              "text": "首页",
              "link": "/zh/操作手册/功能介绍/首页"
            }
          ]
        }
      ]
    },
    "siteTitle": "Mypattern",
    "footer": {
      "message": "",
      "copyright": ""
    }
  },
  "locales": {
    "zh": {
      "label": "简体中文",
      "lang": "zh",
      "themeConfig": {
        "langMenuLabel": "多语言",
        "returnToTopLabel": "回到顶部",
        "sidebarMenuLabel": "菜单",
        "darkModeSwitchLabel": "主题",
        "lightModeSwitchTitle": "切换到浅色模式",
        "darkModeSwitchTitle": "切换到深色模式",
        "externalLinkIcon": true,
        "editLink": {
          "text": "Edit this page on GitHub",
          "pattern": ""
        },
        "docFooter": {
          "prev": "Previous page",
          "next": "Next Page"
        },
        "nav": [
          {
            "text": "帮助文档",
            "link": "/zh/操作手册/入门/产品介绍"
          }
        ],
        "sidebar": {
          "/en/操作手册/": [
            {
              "text": "入门",
              "items": [
                {
                  "text": "产品介绍",
                  "link": "/en/操作手册/入门/产品介绍"
                },
                {
                  "text": "联系我们",
                  "link": "/en/操作手册/入门/联系我们"
                }
              ]
            },
            {
              "text": "功能介绍",
              "items": [
                {
                  "text": "三维页面",
                  "link": "/en/操作手册/功能介绍/三维页面"
                },
                {
                  "text": "首页",
                  "link": "/en/操作手册/功能介绍/首页"
                }
              ]
            }
          ],
          "/zh/操作手册/": [
            {
              "text": "入门",
              "items": [
                {
                  "text": "产品介绍",
                  "link": "/zh/操作手册/入门/产品介绍"
                },
                {
                  "text": "联系我们",
                  "link": "/zh/操作手册/入门/联系我们"
                }
              ]
            },
            {
              "text": "功能介绍",
              "items": [
                {
                  "text": "三维页面",
                  "link": "/zh/操作手册/功能介绍/三维页面"
                },
                {
                  "text": "首页",
                  "link": "/zh/操作手册/功能介绍/首页"
                }
              ]
            }
          ]
        },
        "i18nRouting": true,
        "siteTitle": "边坡监测预警平台文档",
        "footer": {
          "message": "",
          "copyright": "Copyright © 2017-2026 MyPattern.All rights reserved"
        }
      }
    },
    "en": {
      "label": "English",
      "lang": "en",
      "themeConfig": {
        "langMenuLabel": "多语言",
        "returnToTopLabel": "回到顶部",
        "sidebarMenuLabel": "菜单",
        "darkModeSwitchLabel": "主题",
        "lightModeSwitchTitle": "切换到浅色模式",
        "darkModeSwitchTitle": "切换到深色模式",
        "externalLinkIcon": true,
        "editLink": {
          "text": "Edit this page on GitHub",
          "pattern": ""
        },
        "docFooter": {
          "prev": "Previous page",
          "next": "Next Page"
        },
        "nav": [
          {
            "text": "Help Documentation",
            "link": "/en/操作手册/入门/产品介绍"
          }
        ],
        "sidebar": {
          "/en/操作手册/": [
            {
              "text": "入门",
              "items": [
                {
                  "text": "产品介绍",
                  "link": "/en/操作手册/入门/产品介绍"
                },
                {
                  "text": "联系我们",
                  "link": "/en/操作手册/入门/联系我们"
                }
              ]
            },
            {
              "text": "功能介绍",
              "items": [
                {
                  "text": "三维页面",
                  "link": "/en/操作手册/功能介绍/三维页面"
                },
                {
                  "text": "首页",
                  "link": "/en/操作手册/功能介绍/首页"
                }
              ]
            }
          ]
        },
        "i18nRouting": true,
        "siteTitle": "Mypattern",
        "footer": {
          "message": "",
          "copyright": "边坡监测预警平台文档"
        }
      }
    },
    "ru": {
      "label": "Русский",
      "lang": "ru",
      "themeConfig": {
        "langMenuLabel": "多语言",
        "returnToTopLabel": "回到顶部",
        "sidebarMenuLabel": "菜单",
        "darkModeSwitchLabel": "主题",
        "lightModeSwitchTitle": "切换到浅色模式",
        "darkModeSwitchTitle": "切换到深色模式",
        "externalLinkIcon": true,
        "editLink": {
          "text": "Edit this page on GitHub",
          "pattern": ""
        },
        "docFooter": {
          "prev": "Previous page",
          "next": "Next Page"
        },
        "nav": [],
        "sidebar": {
          "/en/操作手册/": [
            {
              "text": "入门",
              "items": [
                {
                  "text": "产品介绍",
                  "link": "/en/操作手册/入门/产品介绍"
                },
                {
                  "text": "联系我们",
                  "link": "/en/操作手册/入门/联系我们"
                }
              ]
            },
            {
              "text": "功能介绍",
              "items": [
                {
                  "text": "三维页面",
                  "link": "/en/操作手册/功能介绍/三维页面"
                },
                {
                  "text": "首页",
                  "link": "/en/操作手册/功能介绍/首页"
                }
              ]
            }
          ],
          "/zh/操作手册/": [
            {
              "text": "入门",
              "items": [
                {
                  "text": "产品介绍",
                  "link": "/zh/操作手册/入门/产品介绍"
                },
                {
                  "text": "联系我们",
                  "link": "/zh/操作手册/入门/联系我们"
                }
              ]
            },
            {
              "text": "功能介绍",
              "items": [
                {
                  "text": "三维页面",
                  "link": "/zh/操作手册/功能介绍/三维页面"
                },
                {
                  "text": "首页",
                  "link": "/zh/操作手册/功能介绍/首页"
                }
              ]
            }
          ]
        },
        "i18nRouting": true,
        "siteTitle": "边坡监测预警平台文档",
        "footer": {
          "message": "",
          "copyright": "边坡监测预警平台文档"
        }
      }
    }
  },
  "cacheDir": "./.vitepress/cache",
  "title": "Mypattern",
  "titleTemplate": "| Mypattern",
  "description": "",
  "lang": "en-US",
  "base": "/mypatterndocs/",
  "outDir": "./.vitepress/dist",
  "cleanUrls": false,
  "rewrites": {
    "packages/pkg-a/src/pkg-a-docs.md": "pkg-a/index.md",
    "packages/pkg-b/src/pkg-b-docs.md": "pkg-b/index.md",
    "/mypatterndocs/": "/"
  },
  "cachePath": false
};
