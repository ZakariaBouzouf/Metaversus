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

export const TitleText = ({ title, textStyle }) => (
	<motion.h2
		variants={textVariant2}
		initial='hidden'
		whileInView='show'
		className={`mt-[8px] font-bold md:text-[64px] text-[40px] text-white ${textStyle}`}
	>
		{title}
	</motion.h2>
);
