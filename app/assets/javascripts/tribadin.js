function findGetParameter() {
    var result = null,
        tmp = [];
    location.search
        .substr(1)
        .split("&")
        .forEach(function (item) {
          tmp = item.split("=");
          result = decodeURIComponent(tmp[1]);
        if (document.getElementById(tmp[0])) document.getElementById(tmp[0]).innerHTML = result
        });
    return result;
}

findGetParameter()

