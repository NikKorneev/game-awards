import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Button from "./Button";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
	const [hasClicked, setHasClicked] = useState(false);
	const [curIndex, setCurIndex] = useState(1);
	const [prevIndex, setPrevIndex] = useState(1);
	const [isLoading, setIsLoading] = useState(true);
	const [loadedVideos, setLoadedVideos] = useState(0);

	const totalVideos = 3;
	const nextVideoRef = useRef<HTMLVideoElement>(null);

	const handleVideoLoad = () => {
		setLoadedVideos((prev) => prev + 1);
	};

	const upcomingVideoIndex = (curIndex % totalVideos) + 1;

	const handleMiniVideoClick = () => {
		setHasClicked(true);

		setCurIndex(upcomingVideoIndex);
	};

	useGSAP(
		() => {
			if (hasClicked) {
				gsap.set("#next-video", {
					visibility: "visible",
				});

				gsap.to("#next-video", {
					transformOrigin: "center center",
					scale: 1,
					width: "100%",
					height: "100%",
					duration: 1,
					ease: "power1.inOut",
					onStart: () => {
						nextVideoRef.current?.play();
					},
				});

				gsap.from("#current-video", {
					transformOrigin: "center center",
					scale: 0,
					duration: 1.5,
					ease: "power1.inOut",
				});

				gsap.fromTo(
					"#prev-video",
					{
						opacity: 1,
					},
					{
						opacity: 0.5,
						duration: 1.5,
					}
				);
			}
		},
		{
			dependencies: [curIndex],
			revertOnUpdate: true,
		}
	);

	useGSAP(() => {
		gsap.set("#video-frame", {
			clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
		});

		gsap.from("#video-frame", {
			clipPath: " polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
			ease: "power1.inOut",
			scrollTrigger: {
				trigger: "#video-frame",
				start: "center center",
				end: "bottom center",
				scrub: true,
			},
		});
	});

	const getVideoSrc = (index: number) => `videos/hero-${index}.mp4`;

	useEffect(() => {
		const timeout = setTimeout(() => {
			setPrevIndex(curIndex);
		}, 500);

		return () => {
			clearTimeout(timeout);
		};
	}, [curIndex]);

	useEffect(() => {
		if (loadedVideos === totalVideos) {
			setIsLoading(false);
		}
	}, [loadedVideos]);

	return (
		<div className="relative h-dvh w-screen overflow-x-hidden">
			{isLoading && (
				<div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
					<div className="three-body">
						<div className="three-body__dot"></div>
						<div className="three-body__dot"></div>
						<div className="three-body__dot"></div>
					</div>
				</div>
			)}
			<div
				className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75"
				id="video-frame"
			>
				<div>
					<div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
						<div
							onClick={handleMiniVideoClick}
							className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
						>
							<video
								ref={nextVideoRef}
								loop
								muted
								id="current-video"
								onLoadedData={handleVideoLoad}
								className="size-64 origin-center scale-150 object-cover object-center "
								src={getVideoSrc(upcomingVideoIndex)}
							/>
						</div>
					</div>

					<video
						ref={nextVideoRef}
						id="next-video"
						className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
						onLoadedData={handleVideoLoad}
						loop
						muted
						src={getVideoSrc(curIndex)}
					/>
					<video
						src={getVideoSrc(prevIndex)}
						id="prev-video"
						muted
						autoPlay
						loop
						onLoadedData={handleVideoLoad}
						className="absolute left-0 top-0 size-full object-cover object-center"
					/>
				</div>

				<h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
					G<b>a</b>ming
				</h1>

				<div className="absolute left-0 top-0 z-40 size-full go-down">
					<div className="mt-24 px-5 sm:px-10">
						<h1 className="special-font hero-heading text-blue-100">
							redefi<b>n</b>e
						</h1>
						<p className="mb-5 max-w-64 font-robert-regular text-blue-100">
							Enter the Metagame Layer <br />
							Unleash the Play Economy
						</p>
						<Button
							id="watch-trailer"
							title="Watch Trailer"
							leftIcon={<TiLocationArrow />}
							containerClass="!bg-yellow-300 flex-center gap-1"
						/>
					</div>
				</div>
			</div>
			<div className="absolute left-0 top-0  size-full -z-10 go-down">
				<div className="mt-24 px-5 sm:px-10">
					<h1 className="special-font hero-heading text-black">
						redefi<b>n</b>e
					</h1>
					<p className="mb-5 max-w-64 font-robert-regular text-black">
						Enter the Metagame Layer <br />
						Unleash the Play Economy
					</p>
					<Button
						id="watch-trailer"
						title="Watch Trailer"
						leftIcon={<TiLocationArrow />}
						containerClass="bg-violet-300 flex-center gap-1 text-white"
					/>
				</div>
			</div>
			<h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
				G<b>a</b>ming
			</h1>
		</div>
	);
};

export default Hero;
