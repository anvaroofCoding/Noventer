import React from 'react'
import Project from '../../projects/project'
import Service from '../../service/service'
import vector1 from '../images/icons/v1.svg'
import vector2 from '../images/icons/v2.svg'
import vector3 from '../images/icons/v3.svg'
import vector4 from '../images/icons/v4.svg'
import headers from '../images/png/header.png'
import About from './about'
import Comunications from './comunications'

const Home = () => {
	return (
		<div className='bg-midnight'>
			<div className='container h-[600px] lg:h-[800px] flex flex-col gap-[60px] relative'>
				<div className='w-full  lg:h-[80%]  h-[63%] flex justify-start items-center'>
					<div>
						<h1 className='lg:text-[48px]/15 text-[27px] font-[700] flex flex-col text-white '>
							<span data-aos='fade-up' data-aos-anchor-placement='top-bottom'>
								Yuqori sifatdagi
							</span>
							<span
								data-aos='fade-up'
								data-aos-anchor-placement='top-bottom'
								className='font-[300]'
							>
								aniqlikka asoslanib
							</span>
							<span
								data-aos='fade-up'
								data-aos-anchor-placement='top-bottom'
								className='text-main'
							>
								istalgan turdagi{' '}
							</span>
							<span data-aos='fade-up' data-aos-anchor-placement='top-bottom'>
								dasturlarni tayyorlaymiz
							</span>
						</h1>
						<button
							data-aos='fade-up'
							data-aos-anchor-placement='top-bottom'
							className='bg-main mt-[30px] w-[167px] rounded-[12px] font-semibold text-white h-[47px] duration-300 hover:bg-white hover:text-main'
						>
							Xizmatlar haqida
						</button>
					</div>
				</div>
				<div className='lg:w-full w-[70%]  lg:h-[20%] h-[25%] relative z-[100] grid grid-cols-2 lg:grid-cols-4 gap-[20px]'>
					<div
						data-aos='fade-up'
						data-aos-anchor-placement='top-bottom'
						className='border border-white/20 h-[59px] lg:h-[120px] bg-white/10 rounded-xl flex justify-center items-center gap-0.5  lg:gap-3 backdrop-blur-lg hover:bg-white/20 duration-300'
					>
						<img
							src={vector1}
							alt='ajriba'
							className='lg:w-[68px] lg:h-[68px] w-[33px] h-[33px]'
						/>
						<div className='text-white'>
							<h2 className='font-[700] text-[12px] lg:text-[24px]'>
								7+ yillik
							</h2>
							<p className='text-[8.92px] lg:text-[18px] font-[400]'>
								Umumiy tajriba
							</p>
						</div>
					</div>
					<div
						data-aos='fade-up'
						data-aos-anchor-placement='top-bottom'
						className='border border-white/20 h-[59px] lg:h-[120px] bg-white/10 rounded-xl flex justify-center items-center gap-0.5  lg:gap-3 backdrop-blur-lg hover:bg-white/20 duration-300'
					>
						<img
							src={vector2}
							alt='ajriba'
							className='lg:w-[68px] lg:h-[68px] w-[33px] h-[33px]'
						/>
						<div className='text-white'>
							<h2 className='font-[700] text-[12px] lg:text-[24px]'>5+</h2>
							<p className='text-[8.92px] lg:text-[18px] font-[400]'>
								Yirik loyihalar
							</p>
						</div>
					</div>
					<div
						data-aos='fade-up'
						data-aos-anchor-placement='top-bottom'
						className='border border-white/20 h-[59px] lg:h-[120px] bg-white/10 rounded-xl flex justify-center items-center gap-0.5  lg:gap-3 backdrop-blur-lg hover:bg-white/20 duration-300'
					>
						<img
							src={vector3}
							alt='ajriba'
							className='lg:w-[68px] lg:h-[68px] w-[33px] h-[33px]'
						/>
						<div className='text-white'>
							<h2 className='font-[700] text-[12px] lg:text-[24px]'>8+</h2>
							<p className='text-[8.92px] lg:text-[18px] font-[400]'>
								Xizmat turlari
							</p>
						</div>
					</div>
					<div
						data-aos='fade-up'
						data-aos-anchor-placement='top-bottom'
						className='border border-white/20 h-[59px] lg:h-[120px] bg-white/10 rounded-xl flex justify-center items-center gap-0.5  lg:gap-3 backdrop-blur-lg hover:bg-white/20 duration-300'
					>
						<img
							src={vector4}
							alt='ajriba'
							className='lg:w-[68px] lg:h-[68px] w-[33px] h-[33px]'
						/>
						<div className='text-white'>
							<h2 className='font-[700] text-[12px] lg:text-[24px]'>100%</h2>
							<p className='text-[8.92px] lg:text-[18px] font-[400]'>
								Xavfsizlik
							</p>
						</div>
					</div>
				</div>
				<img
					src={headers}
					alt='headers'
					className='absolute bottom-0 right-0 lg:right-[-100px] z-50 w-full lg:w-[1000px]'
				/>
				<div className='w-[300px] h-[700px] hidden lg:flex bg-main/10 rounded-xl absolute bottom-0 right-40  justify-center items-center border border-main/30'>
					<div className='bg-main/70  shadow-cos rounded-[50%]'></div>
				</div>
				<div className='w-[500px] h-[300px] hidden lg:flex bg-main/10 rounded-xl absolute bottom-0 right-115  justify-end items-center border border-main/30'>
					<div className='bg-main  shadow-cos rounded-[50%]'></div>
				</div>
			</div>
			<About />
			<Project />
			<Service />
			<Comunications />
		</div>
	)
}

export default Home
