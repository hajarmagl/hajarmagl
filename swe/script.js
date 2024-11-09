// Sidebar Toggle
try {
    document.querySelectorAll(".sidebar_toggler").forEach(function (toggler) {
        toggler.addEventListener("click", function () {
            const sidebar = document.querySelector(".sidebar");
            if (sidebar) {
                sidebar.classList.toggle("sidebar_expand");
                // show class for mobile
                sidebar.classList.toggle("show"); 
            } else {
                console.warn("Sidebar element not found.");
            }
        });
    });
} catch (error) {
    console.error("An error occurred in sidebar toggling:", error);
}





// Return day Count
(function () {
    try {
        const second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        let today = new Date(),
            dd = String(today.getDate()).padStart(2, "0"),
            mm = String(today.getMonth() + 1).padStart(2, "0"),
            yyyy = today.getFullYear(),
            year = yyyy,
            dayMonth = "11/11/",
            birthday = dayMonth + yyyy;

        today = mm + "/" + dd + "/" + yyyy;
        if (today > birthday) {
            birthday = dayMonth + (year + 1);
        }

        const countDown = new Date(birthday).getTime(),
            x = setInterval(function () {
                try {
                    const now = new Date().getTime(),
                        distance = countDown - now;

                    document.getElementById("days").innerText = String(Math.floor(distance / day)).padStart(2, "0");
                    document.getElementById("hours").innerText = String(Math.floor((distance % day) / hour)).padStart(2, "0");
                    document.getElementById("minutes").innerText = String(Math.floor((distance % hour) / minute)).padStart(2, "0");
                    String(Math.floor((distance % minute) / second)).padStart(2, "0")

                    if (distance < 0) {
                        clearInterval(x);
                    }
                } catch (error) {
                    clearInterval(x);
                }
            }, 1000);
    } catch (error) {
        console.error("An error occurred in the countdown initialization:", error);
    }
})();
