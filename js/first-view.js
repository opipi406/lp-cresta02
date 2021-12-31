$(function () {
    const $fvImgs = $.makeArray($(".fv-slider > img")).map(x => $(x));
    const
        fadeInterval_ms = 1000, // フェードイン・アウトの間隔
        showInterval_ms = 5000; // 次の画像切り替えまでの間隔

    setInterval(() => {
        
        for (let i = 0; i < $fvImgs.length; i++) {
            const $fv = $fvImgs[i];

            if (!$fv.hasClass("hide")) {
                const j = (i + 1) % $fvImgs.length;
                $fv.fadeOut(fadeInterval_ms, function () {
                    $(this).addClass("hide");
                });
                $fvImgs[j].fadeIn(fadeInterval_ms);
                $fvImgs[j].removeClass("hide");
                break;
            }
        }

    }, showInterval_ms);
});