    var images = ["img/high/truck-331499_1920.png", "img/high/shipping-containers-1150062_1920.jpg", "img/high/truck-856345_1920.jpg", "img/high/china-cargo-airlines-884399_1920.jpg", "img/high/plane-170272_1920.jpg", "img/high/truck-1499377_1920.jpg", "img/high/port-1569694_1920.jpg", "img/high/containers-2018438_1920.jpg"];
    $(function () {
        var i = 0;
        $(".gallery").css("background-image", "url(" + images[i] + ")");

        setInterval(function () {
            i++;
            if (i == images.length) {
                i = 0;
            }

            $(".gallery").fadeOut("slow", function () {
                $(this).fadeIn("fast");
                $(this).css("background-image", "url(" + images[i] + ")");
            });

        }, 5000);
    });
