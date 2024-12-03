import gsap from "gsap";
import { useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import RoundedCorners from "./RoundedCorners";

const Story = () => {
	const frameRef = useRef<HTMLImageElement>(null);

	const handleMouseLeave: React.MouseEventHandler<HTMLImageElement> = () => {
		const elem = frameRef.current;
		gsap.to(elem, {
			rotateX: 0,
			rotateY: 0,
			duration: 0.3,
			ease: "power1.inOut",
		});
	};

	const handleMouseMove: React.MouseEventHandler<HTMLImageElement> = (e) => {
		const { clientX, clientY } = e;
		const elem = frameRef.current;
		if (!elem) return;

		const rect = elem.getBoundingClientRect();
		const x = clientX - rect.left;
		const y = clientY - rect.top;

		const centerX = rect.width / 2;
		const centerY = rect.height / 2;

		const rotateX = ((y - centerY) / centerY) * -10;
		const rotateY = ((x - centerX) / centerX) * 10;

		gsap.to(elem, {
			rotateX: rotateX,
			rotateY: rotateY,
			duration: 0.3,
			transformPerspective: 500,
			ease: "power1.inOut",
		});
	};

	return (
		<section
			id="story"
			className="min-h-dvh w-screen bg-black text-blue-50"
		>
			<div className="flex size-full flex-col items-center py-10 pb-24">
				<p className="font-general text-sm uppercase md:text-[10px] ">
					The multiversal worlds
				</p>

				<div className="relative size-full">
					<AnimatedTitle
						containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
						title="The st<b>o</b>ry of <br/> a hidden realm"
					/>

					<div className="story-img-container">
						<div className="story-img-mask">
							<div className="story-img-content">
								<img
									ref={frameRef}
									src="/img/entrance.webp"
									onMouseLeave={handleMouseLeave}
									onMouseUp={handleMouseLeave}
									onMouseEnter={handleMouseLeave}
									onMouseMove={handleMouseMove}
									alt="entrance"
									className="object-contain"
								/>
							</div>
						</div>

						<RoundedCorners />
					</div>
				</div>

				<div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
					<div className="flex h-full w-fit flex-col items-center md:items-start">
						<p className="mt-3 max-w-sm text-center font-circular text-violet-50 md:text-start">
							A story of a hidden realm, a place where the
							multiversal worlds converge.
						</p>
						<Button
							id="realm-btn"
							title="Unlock the Realm"
							containerClass="mt-5"
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Story;
