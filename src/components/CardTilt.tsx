import React, { useRef, useState } from "react";
interface Props {
	children: React.ReactNode;
	className: string;
}

const CardTilt = ({ children, className }: Props) => {
	const [transformStyle, setTransformStyle] = useState("");
	const itemRef = useRef<HTMLDivElement>(null);

	const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
		if (!itemRef.current) return;

		const { left, top, width, height } =
			itemRef.current.getBoundingClientRect();

		const mouseX = (e.clientX - left) / width;
		const mouseY = (e.clientY - top) / height;

		const tiltX = (mouseY - 0.5) * 10;
		const tiltY = (mouseX - 0.5) * -10;

		const transform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;

		setTransformStyle(transform);
	};

	const handleMouseLeave: React.MouseEventHandler<HTMLDivElement> = () => {
		setTransformStyle("");
	};

	return (
		<div
			className={`${className} `}
			style={{ transform: transformStyle }}
			ref={itemRef}
			onMouseMove={handleMouseMove}
			onMouseLeave={handleMouseLeave}
		>
			{children}
		</div>
	);
};

export default CardTilt;
