'use strict';
let global = 0, nowshowing = function () {
    let c = new Map;
    return {
        getShowtimes: function () {
            let a = new XMLHttpRequest, d = "";
            document.getElementsByClassName("showtime");
            let e, b = "";
            const f = {hour12: !0, hour: "2-digit", minute: "2-digit"};
            a.open("POST", "getShowtimes.action");
            a.onreadystatechange = function () {
                if (a.readyState === XMLHttpRequest.DONE) switch (a.status) {
                    case 200:
                        e = JSON.parse(a.responseText), 0 < e.length && e.forEach(function (a) {
                            a.showTimeList.forEach(function (a) {
                                b = "" === b ? (new Date(a.showTime)).toLocaleTimeString("en-US",
                                    f).split(" ")[0] : b + " / " + (new Date(a.showTime)).toLocaleTimeString("en-US", f).split(" ")[0]
                            });
                            document.getElementById("showtime" + a.movieId).innerHTML = b ? b : "No Shows Today";
                            b = ""
                        })
                }
            };
            c.set("scheduleId", document.getElementById("scheduleId").value);
            c.set("scheduleDaysOffset", document.getElementById("scheduleDaysOffset").value);
            c.set("showDate", document.getElementById("showDate").value);
            for (let [a, b] of c) d = d + a + "=" + encodeURIComponent(b) + "&";
            a.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            a.send(d)
        }, newShowDate: function () {
            let a = document.getElementById("showDate").value;
            window.open("/c5/nowshowing/display.action?showDate=" + a, "_self")
        }
    }
}();

