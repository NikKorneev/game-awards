import { TiLocationArrow } from "react-icons/ti";
import CardTilt from "./CardTilt";
import GalleryCard from "./GalleryCard";

const Features = () => {
	return (
		<section className="bg-black pb-52">
			<div className="container mx-auto px-3 md:px-10">
				<div className="px-5 py-32">
					<p className="font-circular text-lg text-blue-50">
						Into the Metagame Layer
					</p>
					<p className="max-w-md font-circular text-lg text-blue-50 opacity-50">
						Immerse yourself in a rich and immersive Metaverse world
						where you can explore, create, and connect with others.
					</p>
				</div>

				<CardTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
					<GalleryCard
						src="videos/feature-1.mp4"
						title={
							<>
								radi<b>n</b>t
							</>
						}
						descr="Discover the endless possibilities of the Metaverse and its potential impact on our lives."
						isComingSoon
					/>
				</CardTilt>

				<div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
					<CardTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
						<GalleryCard
							src="videos/feature-2.mp4"
							title={
								<>
									o<b>m</b>ega
								</>
							}
							descr="Connect with like-minded individuals and create meaningful connections in the Metaverse."
						/>
					</CardTilt>
					<CardTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
						<GalleryCard
							src="videos/feature-3.mp4"
							title={
								<>
									op<b>e</b>n
								</>
							}
							descr="Engage in collaborative projects and share your creativity with others in the Metaverse."
						/>
					</CardTilt>
					<CardTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
						<GalleryCard
							src="videos/feature-4.mp4"
							title={
								<>
									Meta<b>V</b>erse
								</>
							}
							descr="Explore the Metaverse and discover new possibilities for your creativity and connections."
						/>
					</CardTilt>

					<CardTilt className="bento-tilt_2">
						<div className="flex rounded-md size-full  flex-col justify-between bg-violet-300 p-5">
							<h1 className="bento-title special-font max-w-64 text-black">
								Mo<b>r</b>e coming s<b>oo</b>n!
							</h1>
							<TiLocationArrow className="m-5 scale-[5] self-end" />
						</div>
					</CardTilt>

					<CardTilt className="bento-tilt_2">
						<video
							src="videos/feature-5.mp4"
							loop
							muted
							autoPlay
							className="size-full object-cover object-center"
						/>
					</CardTilt>
				</div>
			</div>
		</section>
	);
};

export default Features;
