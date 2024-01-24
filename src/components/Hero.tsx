import logo from '../assets/learning.png';

const Hero = () => {
	return (
		<header className='w-full flex justify-center items-center flex-col'>
			<nav className='flex justify-center items-center w-full mt-4 pt-3'>
				<img
					src={logo}
					alt='logo'
					className='w-24 object-contain'
				/>
			</nav>
			<h1 className='head_text'>
				<span className='multi_gradient '>Summarize</span>
				<br className='max-md:hidden' /> Articles with
				<br className='max-md:hidden' />
				<span className='multi_gradient'> AI</span>
			</h1>
		</header>
	);
};
export default Hero;
