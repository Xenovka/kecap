import gsap from "gsap/gsap-core";
import SplitType from "split-type";

const tl1 = gsap.timeline({ defaults: { ease: "power4.out" } });
const tl2 = gsap.timeline({ defaults: { ease: "power4.out" } });

const navItem = gsap.utils.toArray([".nav-works", ".nav-about"]);

navItem.forEach((item) => {
    const splitNavWorks = SplitType.create(item.querySelectorAll(".nav-item-works"));
    const splitNavWorksTop = SplitType.create(splitNavWorks.elements[0]);
    const splitNavWorksBottom = SplitType.create(splitNavWorks.elements[1]);
    const splitNavAbout = SplitType.create(item.querySelectorAll(".nav-item-about"));
    const splitNavAboutTop = SplitType.create(splitNavAbout.elements[0]);
    const splitNavAboutBottom = SplitType.create(splitNavAbout.elements[1]);

    item.addEventListener("mouseenter", () => {
        if (item.classList.contains("nav-works")) {
            animateBottomLine(".nav-works .bottom-line");

            animateChars(tl1, splitNavWorksBottom.chars, splitNavWorksTop.chars);
        } else {
            animateBottomLine(".nav-about .bottom-line");

            animateChars(tl2, splitNavAboutBottom.chars, splitNavAboutTop.chars);
        }
    });

    item.addEventListener("mouseleave", () => {
        if (item.classList.contains("nav-works")) {
            animateBottomLine(".nav-works .bottom-line", true);
            tl1.reverse();
        } else {
            animateBottomLine(".nav-about .bottom-line", true);
            tl2.reverse();
        }
    });
});

function animateChars(timeline, charsBottom, charsTop) {
    return timeline
        .to(charsBottom, {
            y: "100%",
            duration: 0.5,
            stagger: 0.05
        })
        .to(
            charsTop,
            {
                y: "100%",
                duration: 0.5,
                stagger: 0.05
            },
            "<.25"
        )
        .play();
}

function animateBottomLine(className, isReverse = false) {
    if (isReverse) {
        return gsap.to(className, {
            xPercent: -100,
            duration: 1
        });
    }

    return gsap.to(className, {
        xPercent: 100,
        duration: 1
    });
}
