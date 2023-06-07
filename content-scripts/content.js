chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {

    const cyclists = request.message.split("\n").map(element => element.split(" ")[1]);
    const cyclists2 = request.message.split("\n").map(element => element.split(" ")[2].split("\t")[0]);

    console.log(cyclists);
    console.log(cyclists2);

    cyclists.forEach((cyclist, index) => {
        const selector = `tr[cyclist-lastname='${cyclist.replace("'", "\\'")}'][cyclist-firstname='${cyclists2[index].replace("'", "\\'")}']`;
        $(selector).css("background-color", "yellow");
    });

});
