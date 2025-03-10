import React from 'react'
import xizmatlar2 from '../assets/images/png/xizmatlar2.png'
import xizmatlar3 from '../assets/images/png/xizmatlar3.png'
import xizmatlar1 from '../assets/images/png/xizmlatlar1.png'
import AsosiyXizmatlar from '../assets/pages/asosiyXizmatlar'

const Xizmatlar = () => {
	return (
		<div className='bg-midnight'>
			<div className='container  h-[600px] lg:h-[800px] '>
				<div className='w-full  h-[100%] flex justify-between flex-col md:flex-row lg:flex-row  items-center '>
					<div className=' mt-[50px] md:mt-0'>
						<h1 className='lg:text-[48px]/15 text-[27px] font-[700] flex flex-col text-white '>
							<span data-aos='fade-up' data-aos-anchor-placement='top-bottom'>
								Har bir xizmat turini
							</span>
							<span
								data-aos='fade-up'
								data-aos-anchor-placement='top-bottom'
								className='font-[300]'
							>
								har bir mijoz uchun
							</span>
							<span
								data-aos='fade-up'
								data-aos-anchor-placement='top-bottom'
								className='text-main'
							>
								alohida ahamiyatli
							</span>
							<span data-aos='fade-up' data-aos-anchor-placement='top-bottom'>
								deb yondoshamiz !
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
							src={xizmatlar1}
							alt='xizmatlar1'
							className='rounded-2xl left-[200px] top-[150px] absolute'
						/>
						<img
							src={xizmatlar2}
							alt=''
							className='absolute top-[80px] left-[20px]'
						/>
						<img
							src={xizmatlar3}
							alt=''
							className='absolute bottom-[30px] left-[20px]'
						/>
					</div>
					{/* desktop */}

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
							src={xizmatlar1}
							alt='xizmatlar1'
							className='rounded-2xl  absolute w-[120px] right-[20px] top-[100px]'
						/>
						<img src={xizmatlar2} alt='' className='absolute  top-3 left-3' />
						<img
							src={xizmatlar3}
							alt=''
							className='absolute w-[120px] bottom-4 left-3'
						/>
					</div>
				</div>
			</div>
			<AsosiyXizmatlar />
		</div>
	)
}

export default Xizmatlar
