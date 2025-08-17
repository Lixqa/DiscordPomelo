let socket;
$(window).on("load", async function () {
  showMessage(
    "message-4",
    "<strong>Check the new V2 version at <a href='https://lix.qa/pomelo/'>pomelo.lixqa.cc</a>.</strong>"
  );

  await new Promise((resolve) => setTimeout(resolve, 250));

  alert(
    "New version is available at https://pomelo.lixqa.cc. This version is discontinued."
  );

  const answer = confirm("Do you want to get redirected to the new version?");
  if (answer) {
    window.location.href = "https://pomelo.lixqa.cc";
  }

  await printApiStatus();

  $(".check").on("click", async function (e) {
    let val = $(".username").val().trim().toLowerCase();
    if (val == "") {
      showMessage(
        "message-3",
        `
            ⚠️Username can't be empty!
            `
      );
      return;
    }
    if (!apiStatus) {
      showMessage(
        "message-3",
        `
            🚨API not available, try again in one hour!
            `
      );
      return;
    }
    showMessage(
      "message-5",
      `
            🔍Checking...
        `
    );
    $(".check").attr("disabled", "disabled");
    $(".check").val("● ● ●");
    let res = await sendApi({
      url: "https://api.lixqa.de/v3/discord/pomelo/" + encodeURI(val),
    });
    console.log(res);
    $(".check").val("Check");
    if (res.code == "RATE_LIMITED") {
      setTimeout(function () {
        $(".check").removeAttr("disabled");
      }, 1000);
    } else {
      $(".check").removeAttr("disabled");
    }
    hideMessage();
    if (!res.error) {
      if (res.data.check.status == 0) {
        showMessage(
          "message-3",
          "🚨Error(s):<br>" +
            res.data.check.errors.map((e) => e.message).join("<br><hr>")
        );
      } else if (res.data.check.status == 1) {
        showMessage(
          "message-3",
          "🚨Looks like all <strong>" +
            res.data.check.attempt +
            "</strong> attempts to check your username failed. If this error still occurs in 1 hour, contact us on discord."
        );
      } else if (res.data.check.status == 2) {
        showMessage(
          "message-1",
          `
                ✔️You're lucky!<br>
                <strong><span style="text-decoration:underline;">` +
            val +
            `</span> is available.</strong>
                `
        );
      } else if (res.data.check.status == 3) {
        showMessage(
          "message-2",
          `
                😭Sorry...<br>
                <strong><span style="text-decoration:underline;">` +
            val +
            `</span> is taken or reserved.</strong>
                `
        );
      } else {
        showMessage(
          "message-3",
          "🚨 Something went wrong. Check console and report on discord"
        );
      }
    } else {
      if (res.code == "RATE_LIMITED")
        return showMessage(
          "message-3",
          "⌛ Slow down for " +
            Math.floor(res.data.retryAfter / 1000) +
            " seconds!"
        );
      if (res.code == "TEMPORARILY_DISABLED")
        return showMessage(
          "message-3",
          "🚨Temporarily disabled for maintenance"
        );
      showMessage(
        "message-3",
        "🚨" +
          res.message +
          " | If this still happends in a hour, report on: <a href='https://discord.gg/8n7kfX6S4h'>discord.gg/8n7kfX6S4h</a>"
      );
    }
  });
  $(".username").on("input", function (e) {
    hideMessage();
  });
  socket = new WebSocket("wss://lixqa.de:2319");
  socket.addEventListener("open", function (event) {
    socket.send(
      JSON.stringify({
        channel: "SYSTEM",
        action: "authorization",
        name: "PomeloV1-" + (Math.random() + 1).toString(36).substring(7),
        wsKey: "8gGzif3T4YVqV8d8",
        channels: ["Pomelo", "StatusSystem"],
      })
    );
    socket.addEventListener("message", async function (event) {
      let socketData = JSON.parse(event.data);
      if (
        socketData.channel != "Pomelo" &&
        socketData.channel != "StatusSystem"
      )
        return;

      if (socketData.action == "connectedClients") {
        $(".counterValue").html(
          socketData.clients.filter((client) =>
            client?.name?.includes("Pomelo")
          ).length
        );
      } else if (socketData.action == "alert") {
        alert(socketData.value);
      } else if (socketData.action == "reload") {
        window.location.reload();
      }
    });
  });
});
function showMessage(type, message) {
  let element = $(".message");
  element.removeClass("message-1");
  element.removeClass("message-2");
  element.removeClass("message-3");
  element.removeClass("message-4");
  element.removeClass("message-5");
  element.html(message);
  element.addClass(type);
  element.show();
}

function hideMessage() {
  $(".message").hide();
}
