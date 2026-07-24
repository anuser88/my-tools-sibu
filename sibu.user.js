// ==UserScript==
// @name         sibu
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
            const Sibu = await fetch(`https://api.scratch.mit.edu/users/${sibu.user.username}/studios/curate`, {
                "headers": {
                    "accept": "*/*",
                    "accept-language": "en, en;q=0.8",
                    "x-requested-with": "XMLHttpRequest"
                },
                "body": null,
                "method": "GET",
                "mode": "cors"
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
                "51658230",
                "51048635",
                "247962",
                "9088764",
                "51808329",
                "26908329",
                "51557258",
                "51822784",
                "51783669",
                "51691695",
                "50796368",
                "51046271",
                "51583469",
                "51404869",
                "51307043",
                "33630370",
                "51602411",
                "51748774",
                "34931797",
                "51720906",
                "51644562",
                "50998004",
                "50599386",
                "51334223",
                "51821201",
                "51808329",
                "51743064",
                "51760507",
                "51783742",
                "51670557",
                "51810699",
                "51801378",
                "51808219",
                "51808857",
                "51674492",
                "51576107",
                "51045545",
                "51801726",
                "51794971",
                "51799027",
                "50837620",
                "51787636",
                "51798734",
                "51794883",
                "51780519",
                "51768453",
                "51768336",
                "51721096",
                "51763095",
                "51773181",
                "51763267",
                "51758110",
                "51759037",
                "51651378",
                "51720910",
                "51748131",
                "51573718",
                "51742170",
                "51729431",
                "51709098",
                "51501564",
                "51597191",
                "51352251",
                "51723583",
                "51719935",
                "51124654",
                "51601736",
                "51606129",
                "51528088",
                "51433923",
                "51690219",
                "51580775",
                "51629676",
                "51706312",
                "50941074",
                "51694630",
                "51694633",
                "51710313",
                "34300341",
                "51691363",
                "51730473",
                "51804179",
                "51726206",
                "51668883",
                "51780271",
                "51787179",
                "51735145",
                "51672631",
                "56"
            ];
            siBu = [...siBu, ...Sibu.map(x => x.id)];
            siBu = [...new Set(siBu)];
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
