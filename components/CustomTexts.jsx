"use client";

import { motion } from "framer-motion";

import { textContainer, textVariant2 } from "../utils/motion.js";

export const TypingText = ({ title, textStyle }) => (
	<motion.p
		variants={textContainer}
		className={`font-normal text-[20px] text-secondary-white ${textStyle}`}
	>
		{Array.from(title).map((Letter, index) => (
			<motion.span variants={textVariant2} key={index}>
				{Letter === " " ? "\u00A0" : Letter}
			</motion.span>
		))}
	</motion.p>
);

export const TitleText = ({ title, textStyle }) => <h2>Title Text</h2>;
