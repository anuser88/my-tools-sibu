!async function() {
  const txt = await fetch("https://raw.githubusercontent.com/anuser88/my-tools-sibu/master/targets.txt").then(x => x.text());
  const targets = txt.split(/\r?\n/).filter(Boolean);
  while (!0) {
    for (const target of targets) {
      bv(target);
      await sleep(400);
    }
  }
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  function bv(fid) {
    const user = localStorage.getItem("danv_user");
    if (!user?.username) return;
    fetch("https://app.studiodanv.workers.dev/api/project/action", {
      "headers": {
        "accept": "*/*",
        "accept-language": "vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5",
        "content-type": "application/json",
        "x-client-type": "StudioDANV-Web"
      },
      "referrer": "https://turbows.pages.dev/",
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": JSON.stringify({
        fileId: fid,
        action: "add_view",
        username: user.username,
        sessionToken: user.sessionToken
      }),
      "method": "POST",
      "mode": "cors",
      "credentials": "omit"
    });
  }
}();
// javascript:!async function(){const e=(await fetch("https://raw.githubusercontent.com/anuser88/my-tools-sibu/master/targets.txt").then(e=>e.text())).split(/\r?\n/).filter(Boolean);for(;;)for(const o of e)n(o),await t(400);function t(e){return new Promise(t=>setTimeout(t,e))}function n(e){const t=localStorage.getItem("danv_user");t?.username&&fetch("https://app.studiodanv.workers.dev/api/project/action",{headers:{accept:"*/*","accept-language":"vi-VN,vi;q=0.9,fr-FR;q=0.8,fr;q=0.7,en-US;q=0.6,en;q=0.5","content-type":"application/json","x-client-type":"StudioDANV-Web"},referrer:"https://turbows.pages.dev/",referrerPolicy:"strict-origin-when-cross-origin",body:JSON.stringify({fileId:e,action:"add_view",username:t.username,sessionToken:t.sessionToken}),method:"POST",mode:"cors",credentials:"omit"})}}();
