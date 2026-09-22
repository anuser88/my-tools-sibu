!async function() {
  const accounts = [];
  accounts.forEach((sime)=>bb(sime[0],sime[1]));
  async function login(username, pw) {
    return await fetch("https://app.studiodanv.workers.dev/api/auth/login", {
      "headers": {
        "accept": "*/*",
        "accept-language": "vi,en-US;q=0.9,en;q=0.8,zh-CN;q=0.7,zh;q=0.6,eo;q=0.5",
        "content-type": "application/json",
        "x-client-type": "StudioDANV-Web"
      },
      "referrer": "https://turbows.pages.dev/",
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": JSON.stringify({loginId: username, password: pw}),
      "method": "POST",
      "mode": "cors",
      "credentials": "omit"
    }).then(x=>x.json());
  }
  async function bb(username, pw) {
    let acc;
    let wow;
    try {
      acc = await login(username, pw);
      acc = {username, sessionToken: acc.sessionToken};
      wow = acc.WOW;
      if (acc.error) throw new Error(acc.error);
    }
    catch (e) {
      alert(e);
      return;
    }
    try {
      const bubu = await daily(acc);
      if (bubu.error) throw new Error(bubu.error);
    }
    catch (e) {
      console.warn(e);
    }
    try {
      const bubu = await tip(acc, wow);
      if (bubu.error) throw new Error(bubu.error);
    }
    catch (e) {
      alert(e);
      return;
    }
    return true;
  }
  async function daily(acc) {
    return await fetch("https://app.studiodanv.workers.dev/api/store/daily", {
      "headers": {
        "accept": "*/*",
        "accept-language": "vi,en-US;q=0.9,en;q=0.8,zh-CN;q=0.7,zh;q=0.6,eo;q=0.5",
        "content-type": "application/json",
        "x-client-type": "StudioDANV-Web"
      },
      "referrer": "https://turbows.pages.dev/",
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": JSON.stringify(acc),
      "method": "POST",
      "mode": "cors",
      "credentials": "omit"
    }).then(x=>x.json());
  } 
  async function tip(acc, amt) {
    return await fetch("https://app.studiodanv.workers.dev/api/project/tip", {
      "headers": {
        "accept": "*/*",
        "accept-language": "vi,en-US;q=0.9,en;q=0.8,zh-CN;q=0.7,zh;q=0.6,eo;q=0.5",
        "content-type": "text/plain;charset=UTF-8",
        "x-client-type": "StudioDANV-Web"
      },
      "referrer": "https://turbows.pages.dev/",
      "referrerPolicy": "strict-origin-when-cross-origin",
      "body": JSON.stringify({"fileId":"BQACAgUAAyEGAAMBAm7g1wADQ2qZPPHQAbrzfHDVBU_LcKFFqD63AAJvJAAC5enIVE48G-ozGpPcPQQ", "amount":amt, "message":"phephan", username: acc.username, sessionToken: acc.sessionToken}),
      "method": "POST",
      "mode": "cors",
      "credentials": "omit"
    }).then(x=>x.json());
  }
}();
