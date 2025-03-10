import React from 'react'
import port1 from '../assets/images//png//port1.png'
import port2 from '../assets/images//png//port2.png'
import port3 from '../assets/images//png//port3.png'
import Project from './project'

const Portfolio = () => {
	return (
		<div className='bg-midnight'>
			<div className='container  h-[600px] lg:h-[800px] '>
				<div className='w-full  h-[100%] flex justify-between flex-col md:flex-row lg:flex-row  items-center '>
					<div className=' mt-[50px] md:mt-0'>
						<h1 className='lg:text-[48px]/15 text-[27px] font-[700] flex flex-col text-white '>
							<span data-aos='fade-up' data-aos-anchor-placement='top-bottom'>
								Tajribamiz davomida
							</span>
							<span
								data-aos='fade-up'
								data-aos-anchor-placement='top-bottom'
								className='font-[300]'
							>
								turli xil hajmdagi
							</span>
							<span
								data-aos='fade-up'
								data-aos-anchor-placement='top-bottom'
								className='text-main'
							>
								IT loyihalarini
							</span>
							<span data-aos='fade-up' data-aos-anchor-placement='top-bottom'>
								ishga tushira oldik
							</span>
						</h1>
					</div>
					{/* desktop */}
					<div
						data-aos='fade-up'
						data-aos-anchor-placement='top-bottom'
						className='w-[500px]  h-[500px] relative lg:block hidden'
					>
						{/* <img src={xizmatlar} alt='xizmatlar' className='absotule' /> */}
						<div className='absolute w-[200px] h-[200px] rounded-2xl bg-main/10'></div>
						<div className='absolute w-[200px] h-[200px] bottom-0 right-0 rounded-2xl bg-main/10'></div>
						<div className='absolute w-[150px] h-[150px] rounded-2xl bg-main/10 bottom-0'></div>

						<div className='absolute s-shadows bottom-[250px] right-[350px]'></div>
						<img
							src={port2}
							alt='xizmatlar1'
							className='rounded-2xl left-[200px] top-[150px] absolute'
						/>
						<img
							src={port1}
							alt=''
							className='absolute top-[80px] left-[20px]'
						/>
						<img
							src={port3}
							alt=''
							className='absolute bottom-[30px] left-[20px]'
						/>
					</div>
					{/* res */}

					<div
						data-aos='fade-up'
						data-aos-anchor-placement='top-bottom'
						className='w-[300px] h-[300px] relative  block lg:hidden'
					>
						<div className='absolute w-[100px] h-[100px] rounded-2xl bg-main/10'></div>
						<div className='absolute w-[150px] h-[150px] bottom-0 right-0 rounded-2xl bg-main/10'></div>
						<div className='absolute w-[70px] h-[70px] rounded-2xl bg-main/10 bottom-0'></div>

						<div className='absolute s-shadows bottom-[250px] right-[350px]'></div>
						<img
							src={port2}
							alt='xizmatlar1'
							className='rounded-2xl  absolute w-[120px] right-[20px] top-[100px]'
						/>
						<img src={port1} alt='' className='absolute  top-3 left-3' />
						<img
							src={port3}
							alt=''
							className='absolute w-[120px] bottom-4 left-3'
						/>
					</div>
				</div>
			</div>
			<Project />
		</div>
	)
}

export default Portfolio
