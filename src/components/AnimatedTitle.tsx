import gsap from "gsap";
import { useEffect, useRef } from "react";
interface Props {
	title: string;
	containerClass?: string;
}
const AnimatedTitle = ({ title, containerClass }: Props) => {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const context = gsap.context(() => {
			const titleAnimation = gsap.timeline({
				scrollTrigger: {
					trigger: containerRef.current,
					start: "100 bottom",
					end: "center bottom",
					toggleActions: "play none none reverse",
				},
			});

			titleAnimation.to(".animated-word", {
				opacity: 1,
				transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
				ease: "power2.out",
				stagger: 0.02,
			});
		}, containerRef);

		return () => context.revert();
	}, []);

	return (
		<div
			ref={containerRef}
			className={`${containerClass} animated-title  text-4xl uppercase leading-[0.8] md:text-[6rem]`}
		>
			{title.split("<br/>").map((line, index) => (
				<div
					key={index}
					className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
				>
					{line.split(" ").map((word, i) => (
						<span
							key={i}
							className="animated-word"
							dangerouslySetInnerHTML={{ __html: word }}
						/>
					))}
				</div>
			))}
		</div>
	);
};

export default AnimatedTitle;
