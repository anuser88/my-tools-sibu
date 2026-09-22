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
    const user = JSON.parse(localStorage.getItem("danv_user"));
    if (!user?.username) return;
    fetch("https://app.studiodanv.workers.dev/api/project/action", {
      "headers": {
        "x-client-type": "StudioDANV-Web"
      },
      "body": JSON.stringify({
        fileId: fid,
        action: "add_view",
        username: user.username,
        sessionToken: user.sessionToken
      }),
      "method": "POST",
      "credentials": "omit"
    });
  }
}();
// javascript:!async function(){const t=(await fetch("https://raw.githubusercontent.com/anuser88/my-tools-sibu/master/targets.txt").then(t=>t.text())).split(/\r?\n/).filter(Boolean);for(;;)for(const o of t)n(o),await e(400);function e(t){return new Promise(e=>setTimeout(e,t))}function n(t){const e=JSON.parse(localStorage.getItem("danv_user"));e?.username&&fetch("https://app.studiodanv.workers.dev/api/project/action",{headers:{"x-client-type":"StudioDANV-Web"},body:JSON.stringify({fileId:t,action:"add_view",username:e.username,sessionToken:e.sessionToken}),method:"POST",credentials:"omit"})}}();
