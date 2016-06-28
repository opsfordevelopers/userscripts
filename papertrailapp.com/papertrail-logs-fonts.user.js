// ==UserScript==
// @name        Papertrail Logs
// @namespace   http://userstyles.org
// @description Prettier fonts for Papertrail logs
// @version     1
// @grant       GM_addStyle
// @include     https://papertrailapp.com/*events*
// @run-at      document-end
// ==/UserScript==
GM_addStyle(".event-list .event { font-family: 'Source Code Pro', 'Fira Mono', monospace; }");
