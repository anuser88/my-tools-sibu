// ==UserScript==
// @name         sibuBu
// @namespace    http://tampermonkey.net/
// @version      2026-07-19
// @description  RIP studio
// @author       You
// @match        https://scratch.mit.edu/projects/*
// @icon         https://scratch.mit.edu/favicon.ico
// @grant        none
// ==/UserScript==

!async function () {
    "use strict";
	const button = document.createElement("button");

    button.textContent = "Add to studios";
    button.id = "SIBU";
    button.onclick = async function () {
        const SIBU = document.getElementById("SIBU");
        const SiBu = window.location.href.match(/\/projects\/(\d+)/);
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        SIBU.disabled = true;
        SIBU.textContent = "Adding...";
        if (SiBu) {
            console.log(SiBu[1]);
            const sibu = await fetch("https://scratch.mit.edu/session/", {
                "headers": {
                    "accept": "*/*",
                    "accept-language": "en, en;q=0.8",
                    "x-requested-with": "XMLHttpRequest"
                },
                "body": null,
                "method": "GET",
                "mode": "cors",
                "credentials": "include"
            }).then(x => x.json());
            async function haha(studio) {
                await fetch(`https://api.scratch.mit.edu/studios/${studio}/project/${SiBu[1]}`, {
                    "headers": {
                        "accept": "*/*",
                        "accept-language": "en, en;q=0.8",
                        "x-token": sibu.user.token
                    },
                    "body": null,
                    "method": "DELETE",
                    "mode": "cors",
                    "credentials": "omit"
                });
                fetch(`https://api.scratch.mit.edu/studios/${studio}/project/${SiBu[1]}`, {
                    "headers": {
                        "accept": "*/*",
                        "accept-language": "en, en;q=0.8",
                        "x-token": sibu.user.token
                    },
                    "body": null,
                    "method": "POST",
                    "mode": "cors",
                    "credentials": "omit"
                });
            }
            async function hehe(studios) {
                for (const studio of studios) {
                    haha(studio);
                    await sleep(200);
                }
            }
            let siBu = [ //free studios
                ""
            ];
            await hehe(siBu);
            SIBU.textContent = "Done!";
        } else {
            console.log("This page is not a valid project.");
        }
        await sleep(1700);
        SIBU.remove();
    }

    document.getElementById("navigation").append(button);
    button.click();
}();
