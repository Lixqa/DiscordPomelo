$(window).on("load", async function() {
    await printApiStatus();

    $(".check").on("click", async function(e) {
        let val = $(".username").val().trim().toLowerCase();
        let message = $(".message");
        let res = await sendApi({
            url: "https://api.lixqa.de/v2/discord/pomelo-lookup/?username=" + val
        });
        console.log(res);

        if(val == "") {
            showMessage("message-3", `
            Username can't be empty!
            `);
            return;
        }

        if(!res.error) {
            if(res.message == "Available") {
                showMessage("message-1", `
                You're lucky!<br>
                <strong><span style="text-decoration:underline;">` + val + `</span> is available.</strong>
                `);
            } else if(res.message == "Taken") {
                showMessage("message-2", `
                Sorry...<br>
                <strong><span style="text-decoration:underline;">` + val + `</span> is taken.</strong>
                `);
            }
        } else {
            let error = res.data?.errors?.username?._errors[0]?.message || res.message;
            showMessage("message-3", error);
        }
    });

    $(".username").on("input", function(e) {
        hideMessage();
    });
});

function showMessage(type, message) {
    let element = $(".message");

    element.show();

    element.removeClass("message-1");
    element.removeClass("message-2");
    element.removeClass("message-3");

    element.html(message);
    element.addClass(type);
}

function hideMessage() {
    $(".message").hide();
}