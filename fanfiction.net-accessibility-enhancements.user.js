// ==UserScript==
// @name         fanfiction.net Accessibility Enhancements
// @version      0.1
// @description  Turns fanfiction titles into heading for easier navigation
// @author       Meisam Amini
// @match        https://www.fanfiction.net/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Get the titles and turn them into heading
    let titles = document.querySelectorAll("a.stitle");
    titles.forEach(turnToHeading);

    function turnToHeading(title, index, titles) {
        // Turn titles into heading
        title.innerHTML = `<h2>${title.textContent}</h2>`;

        // Force the summary to start from a new line
        const parent = title.parentNode;
        const summary = parent.querySelector("div");
        summary.innerHTML = `<p>${summary.innerHTML}</p>`;
    }
})();