import styles from "../styles";

const NewFeatures = ({ imgUrl, title, subtitle }) => (
	<div className='flex-1 flex flex-col items-center sm:max-w-[250px] min-w-[210px]'>
		<div className={`${styles.flexCenter} h-16 w-16 rounded-[24px] bg-[#323f5d]`}>
			<img src={imgUrl} alt='icon' className='w-1/2 h-1/2 object-contain' />
		</div>
		<h1 className='mt-[26px] text-center font-bold leading-7 text-white'>Title {title}</h1>
		<p className='flex-1 text-center mt-4 font-normal text-lg text-[#B0B0B0] leading-8'>
			{subtitle}
		</p>
	</div>
);

export default NewFeatures;
