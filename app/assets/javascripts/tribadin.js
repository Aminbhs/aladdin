function findGetParameter() {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          result = decodeURIComponent(tmp[1]);
        if (document.getElementById(tmp[0]))    {
            if (document.getElementById(tmp[0]).tagName == "IMG") {
                document.getElementById(tmp[0]).setAttribute("src", result);
                console.log(tmp[1])
            } else {
                document.getElementById(tmp[0]).innerHTML = result
            }
        }
        });
}
findGetParameter()

