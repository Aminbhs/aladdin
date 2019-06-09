function replace_id_with_params() {
    document.querySelectorAll("[id^='trb']").forEach(function (item) {
        const urlParams = new URLSearchParams(window.location.search);
        const myParam = urlParams.get(item.id);
        const span = document.getElementById(item.id)
        if (myParam && span) {
                if (span.tagName == "IMG") {
                    span.setAttribute("src", myParam);
                } else {
                    span.replaceWith(myParam);
                }

        }else if (span){
            span.replaceWith(span.textContent);
        }

    });
}
replace_id_with_params()
