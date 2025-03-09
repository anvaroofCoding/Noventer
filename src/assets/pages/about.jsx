import React from 'react'
import section1 from '../images/png/section1.png'
import section2 from '../images/png/section2.png'
import section3 from '../images/png/section3.png'

const About = () => {
	return (
		<div className=''>
			<div className='w-full bg-main'>
				<div className='container h-[150px] flex justify-center items-start flex-col'>
					<h2 className='text-[48px] font-[700] text-white'>Biz haqimizda</h2>
					<p className='text-[18px] text-white'>Qisqacha ma’lumot</p>
				</div>
			</div>
			<div className='container min-h-[1000px] md:min-h-[650px] lg:min-h-[800px] relative'>
				<div className='cards grid grid-cols-1 md:grid-cols-3 gap-[70px] md:gap-[30px] lg:gap-[70px] mt-[50px]'>
					{/* birinchi elemnt */}
					<div className='border border-white/30 bg-white/10 h-[580px] md:h-[360px] lg:h-[580px] rounded-lg overflow-hidden  lg:hover:-translate-y-5 duration-200 hover:bg-white/20 relative z-50'>
						<img src={section1} alt='var2' className='w-full' />
						<div className=' px-[28px] pr-[50px] md:px-[20px] lg:pr-[135px] mt-[20px] '>
							<h2 className='text-[24px] md:text-[15px] lg:text-[24px] font-[600] text-white'>
								Boshlanishi
							</h2>
							<p className='text-white text-[18px] md:text-[12px] lg:text-[18px] mt-1 relative z-10'>
								Biz --- dan ish boshladik va ---- larni oldimizga maqsad qilib
								qo’ydik
							</p>
						</div>
					</div>

					{/* ikkinchi elemtn */}
					<div className='border border-white/30 bg-white/10 h-[580px] md:h-[360px] lg:h-[580px] rounded-lg overflow-hidden  lg:hover:-translate-y-5 duration-200 hover:bg-white/20 relative z-50'>
						<img src={section2} alt='var2' className='w-full' />
						<div className=' px-[28px] pr-[50px] md:px-[20px] lg:pr-[135px] mt-[20px] '>
							<h2 className='text-[24px] md:text-[15px] lg:text-[24px] font-[600] text-white'>
								Uzoq muddatli loyihalar
							</h2>
							<p className='text-white text-[18px] md:text-[12px] lg:text-[18px] mt-1 relative z-50'>
								Tajribamiz davomida umumiy hisobda - - loyiha uchun -- -
								muddatda ishlab topshirdik
							</p>
						</div>
					</div>

					{/* uchinchi elemtn */}
					<div className='border border-white/30 bg-white/10 h-[580px] md:h-[360px] lg:h-[580px] rounded-lg overflow-hidden  lg:hover:-translate-y-5 duration-200 hover:bg-white/20 relative z-50'>
						<img src={section3} alt='var2' className='w-full' />
						<div className=' px-[28px] pr-[50px] md:px-[20px] lg:pr-[100px] mt-[20px] '>
							<h2 className='text-[24px] md:text-[15px] lg:text-[24px] font-[600] text-white'>
								Jamoamiz kengaymoqda
							</h2>
							<p className='text-white text-[18px] md:text-[12px] lg:text-[18px] mt-1'>
								Jamoamiz safi esa tobora kengaymoqda. Boshida - kishidan
								boshlangan faoliyatimiz hozirda -- kishi bilan davom etmoqda
							</p>
						</div>
					</div>
				</div>

				{/* paski text */}
				<div className='lg:mt-[100px] md:mt-[50px] mt-[30px]'>
					<p className='text-white text-[18px] text-center md:text-start relative z-50'>
						Bu yerda esa yana ko’proq ma’lumotlar berilishi kerak. Lorem
						Ipsum is simply dummy text of the printing and typesetting industry.
						Lorem Ipsum has been the industry's standard dummy text ever since
						the 1500s, when an unknown printer took a galley of type and
						scrambled it to make a type specimen book. It has survived not only
						five centuries, but also the leap into electronic typesetting,
						remaining essentially unchanged.
					</p>
				</div>
				<div className='absolute s-shadow bottom-[400px] left-[26%]'></div>
				<div className='absolute s-shadow bottom-[400px] right-[0%]'></div>
				<div className='absolute s-shadow top-[-20px] right-[500px]'></div>
			</div>
		</div>
	)
}

export default About
