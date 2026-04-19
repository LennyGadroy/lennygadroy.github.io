document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".Comparaisons").forEach(function (wrap) {
        var overlay = wrap.querySelector(".Overlay");
        var slider = wrap.querySelector(".Slider");
        var oldImg = wrap.querySelector(".OldImage");
        var dragging = false;

        function syncWidth() {
            if (oldImg) oldImg.style.width = wrap.offsetWidth + "px";
        }

        function move(e) {
            if (!dragging) return;
            var rect = wrap.getBoundingClientRect();
            var x = (e.changedTouches ? e.changedTouches[0].clientX : e.clientX) - rect.left;
            x = Math.max(0, Math.min(x, wrap.offsetWidth));
            overlay.style.width = x + "px";
            slider.style.left = x + "px";
        }
        window.addEventListener("resize", syncWidth);
        syncWidth();
        if (!slider) return;
        slider.addEventListener("mousedown", function (e) {
            e.preventDefault();
            dragging = true;
        });
        slider.addEventListener("touchstart", function (e) {
            e.preventDefault();
            dragging = true;
        }, {
            passive: false
        });
        window.addEventListener("mouseup", function () {
            dragging = false;
        });
        window.addEventListener("touchend", function () {
            dragging = false;
        });
        window.addEventListener("mousemove", move);
        window.addEventListener("touchmove", move, {
            passive: false
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("main.Projets ul.InlineMenu").forEach(function (menu) {
        var btns = menu.querySelectorAll("li");
        var panels = [];
        var sibling = menu.nextElementSibling;
        while (sibling && sibling.classList.contains("Comparaisons")) {
            panels.push(sibling);
            sibling = sibling.nextElementSibling;
        }
        panels.forEach(function (p, i) {
            if (i !== 0) p.style.display = "none";
        });
        if (btns.length) btns[0].classList.add("active");
        btns.forEach(function (li, i) {
            li.addEventListener("click", function () {
                btns.forEach(function (b) {
                    b.classList.remove("active");
                });
                li.classList.add("active");
                panels.forEach(function (p) {
                    p.style.display = "none";
                });
                if (panels[i]) panels[i].style.display = "block";
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".ProjectShowcase").forEach(function (sc) {
        var tabs = sc.querySelectorAll(".MenuTab");
        var panels = sc.querySelectorAll(".ContentPanel");
        tabs.forEach(function (tab, i) {
            tab.addEventListener("click", function () {
                tabs.forEach(function (t) {
                    t.classList.remove("active");
                });
                panels.forEach(function (p) {
                    p.classList.remove("active");
                });
                tab.classList.add("active");
                if (panels[i]) panels[i].classList.add("active");
            });
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    var filterBtns = document.querySelectorAll(".Filters");
    var blocks = document.querySelectorAll(".ProjectBlock");
    var countEl = document.getElementById("FiltersCount");

    function refreshScrollTrigger() {
        if (typeof ScrollTrigger !== "undefined") {
            setTimeout(function () { ScrollTrigger.refresh(); }, 420);
        }
    }

    function applyFilter(filter) {
        var visible = 0;

        filterBtns.forEach(function (b) {
            b.classList.toggle("active", b.dataset.filter === filter);
        });

        blocks.forEach(function (block) {
            var tags = (block.dataset.tags || "").split(" ");
            var match = filter === "all" || tags.includes(filter);
            if (match) {
                block.style.display = "";
                block.classList.remove("PB-hidden");
                visible++;
            } else {
                block.classList.add("PB-hidden");
                (function (b) {
                    setTimeout(function () {
                        if (b.classList.contains("PB-hidden")) b.style.display = "none";
                    }, 380);
                })(block);
            }
        });

        if (countEl) {
            countEl.textContent = visible + " projet" + (visible > 1 ? "s" : "");
        }

        refreshScrollTrigger();
    }

    filterBtns.forEach(function (btn) {
        btn.addEventListener("click", function () {
            applyFilter(btn.dataset.filter);
        });
    });

    var hash = window.location.hash.replace("#", "");
    if (hash) {
        var target = document.getElementById(hash);
        if (target) {
            var tags = (target.dataset.tags || "").split(" ");
            var firstTag = tags.find(function (t) { return t && t !== "ui" && t !== "ux"; });
            if (firstTag) applyFilter(firstTag);
            setTimeout(function () {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }, 400);
        }
    }
});