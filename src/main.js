import gsap from "gsap";
import SplitType from "split-type";

const name = SplitType.create(".name");
const role = SplitType.create(".role");
const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

tl.fromTo(
    name.chars,
    {
        y: "100%",
        opacity: 0
    },
    {
        y: "0%",
        opacity: 1,
        duration: 1,
        stagger: 0.05
    }
);

tl.fromTo(
    role.chars,
    {
        y: "100%",
        opacity: 0
    },
    {
        y: "0%",
        opacity: 1,
        duration: 1,
        stagger: 0.05
    },
    "<.75"
);
