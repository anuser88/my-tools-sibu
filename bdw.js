!async function() {
  const txt = await fetch("https://raw.githubusercontent.com/anuser88/my-tools-sibu/master/targets.txt").then(x => x.text());
  const targets = txt.split(/\r?\n/).filter(Boolean);
  let i = 0;
  while (!0) {
    await bv();
  }
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function bv() {
    const user = JSON.parse(localStorage.getItem("danv_user"));
    if (!user?.username) return;
    fetch("https://app.studiodanv.workers.dev/api/project/action", {
      "headers": {
        "x-client-type": "StudioDANV-Web"
      },
      "body": JSON.stringify({
        fileId: targets[i],
        action: "add_view",
        username: user.username,
        sessionToken: user.sessionToken
      }),
      "method": "POST",
      "credentials": "omit"
    });
    i++;
    i%=targets.length;
    await sleep(400);
  }
}();
// javascript:!async function(){const e=(await fetch("https://raw.githubusercontent.com/anuser88/my-tools-sibu/master/targets.txt").then(e=>e.text())).split(/\r?\n/).filter(Boolean);let t=0;for(;;)await s();async function s(){const s=JSON.parse(localStorage.getItem("danv_user"));var n;s?.username&&(fetch("https://app.studiodanv.workers.dev/api/project/action",{headers:{"x-client-type":"StudioDANV-Web"},body:JSON.stringify({fileId:e[t],action:"add_view",username:s.username,sessionToken:s.sessionToken}),method:"POST",credentials:"omit"}),t++,t%=e.length,await(n=400,new Promise(e=>setTimeout(e,n))))}}();
