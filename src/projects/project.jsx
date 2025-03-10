import React from 'react'
import { Link } from 'react-router-dom'
import projects1 from '../assets/images/png/projects1.png'
import projects2 from '../assets/images/png/projects2.png'
import projects3 from '../assets/images/png/projects3.png'

const Project = () => {
	return (
		<div className='mt-[100px]'>
			<div className='container min-h-[1540px] relative ' id='loyha'>
				<div
					data-aos='fade-up'
					data-aos-anchor-placement='top-bottom'
					className='Project-title text-center'
				>
					<h2 className='text-white text-[48px] font-[700]'>Loyihalarimiz</h2>
					<h3 className='text-[18px] text-white'>biz haqimizda gapirsin !</h3>
				</div>

				{/* Birinchi kontent */}
				<div
					data-aos='fade-up'
					data-aos-anchor-placement='top-bottom'
					className='projects-elements flex flex-col mt-[50px] '
				>
					<div className='w-full h-[1000px] lg:h-[363px]  grid lg:grid-cols-2 grid-cols-1'>
						<div className='overflow-hidden lg:block hidden'>
							<img src={projects1} alt='projects' className='rounded-lg' />
						</div>
						<div className='overflow-hidden lg:hidden block w-full h-full '>
							<img
								src={projects1}
								alt='projects'
								className='rounded-lg w-full h-full object-cover'
							/>
						</div>
						<div className='text-white h-full flex flex-col items-start justify-center gap-3 px-4'>
							<h2 className='text-[24px] font-[600]'>Tourmad loyihasi</h2>
							<p className='text-[18px] font-[400] mt-[20px]'>
								Tourmad – O‘zbekistonning ichki turizimini rivojlantirish
								maqsadida ishlab chiqilgan bu web sayt o‘zida bir necha service
								larni o‘z ichiga jamlagan bo‘lib ulardan: Mehmonxona xizmari,
								Restoran xizmati, Gitlik xizmati, Mashinada sayohat qilish uchun
								haydovchilar xizmari va boshqa ko‘plab xizmarlarni o‘z ichiga
								oladi. Bundan tashqari saytdan o‘zingiz uchun qayerlarga boorish
								kerakligini va qayerlarda xizmat ko‘satish qancha ekanligini
								ko‘rishingiz va o‘zingiz uchun oldindan buyurtma qilishingiz
								mumkin.
							</p>
							<Link to={'/tourmad'}>
								<button className='w-[153px] h-[47px] borderRed border border-white/30 bg-white/20 rounded-lg hover:bg-white hover:text-main duration-300 font-bold text-white'>
									Loyihani Ko'rish
								</button>
							</Link>
						</div>
					</div>
				</div>

				{/* Ikkinchisi kontent desktop versiya */}
				<div
					data-aos='fade-up'
					data-aos-anchor-placement='top-bottom'
					className='projects-elements  flex-col mt-[50px]  lg:flex hidden'
				>
					<div className='w-full h-[500px] lg:h-[363px]   grid lg:grid-cols-2 grid-cols-1'>
						<div className='text-white h-full flex flex-col items-end justify-center gap-3 pr-4'>
							<h2 className='text-[24px] font-[600]'>ProRun loyihasi</h2>
							<p className='text-[18px] font-[400] mt-[20px] text-end'>
								<a href='https://prorun.uz/'>Prorun.uz</a> – bu saytda tez-tez
								bo‘lib o‘tadigan yugurish bo‘yicha musobaqalar bo‘lib o‘tadi va
								siz saytdan ro‘ yxatdan o‘tgan holda istalgan yoki har bir
								musobaqada qatnashishingiz mumkin.  Nima uchun sayt qurilgan?
								Musobaqalarda chet ellik ishtirokchilar bo‘lgani bois ularga va
								boshqa qatnashchilarga ro‘yxatdan o‘tishni oson qilish uchun
								yangi web ilova ishlab chiqildi.
							</p>
							<Link to={'/protun'}>
								<button
									className='w-[153px]
								 h-[47px] 
								 borderRed border border-white/30 bg-white/20 rounded-lg
							 hover:bg-white hover:text-main duration-300 font-bold text-white'
								>
									Loyihani Ko'rish
								</button>
							</Link>
						</div>
						<div className='overflow-hidden  w-full h-full flex justify-end'>
							<img src={projects2} alt='projects' className='rounded-lg' />
						</div>
					</div>
				</div>

				{/* ikkinchisi va bu mobile versiya */}
				<div
					data-aos='fade-up'
					data-aos-anchor-placement='top-bottom'
					className='projects-elements  flex-col mt-[50px]  lg:hidden flex'
				>
					<div className='w-full h-[1000px] lg:h-[363px]  grid lg:grid-cols-2 grid-cols-1'>
						<div className='overflow-hidden lg-block hidden'>
							<img src={projects2} alt='projects' className='rounded-lg ' />
						</div>
						<div className='overflow-hidden lg:hidden block w-full h-full'>
							<img
								src={projects2}
								alt='projects'
								className='rounded-lg w-full h-full object-cover'
							/>
						</div>
						<div className='text-white h-full flex flex-col items-start justify-center gap-3 px-4 '>
							<h2 className='text-[24px] font-[600]'>ProRun loyihasi</h2>
							<p className='text-[18px] font-[400] mt-[20px]'>
								<a href='https://prorun.uz/'>Prorun.uz</a> – bu saytda tez-tez
								bo‘lib o‘tadigan yugurish bo‘yicha musobaqalar bo‘lib o‘tadi va
								siz saytdan ro‘ yxatdan o‘tgan holda istalgan yoki har bir
								musobaqada qatnashishingiz mumkin.  Nima uchun sayt qurilgan?
								Musobaqalarda chet ellik ishtirokchilar bo‘lgani bois ularga va
								boshqa qatnashchilarga ro‘yxatdan o‘tishni oson qilish uchun
								yangi web ilova ishlab chiqildi.
							</p>
							<Link to={'/protun'}>
								<button
									className='w-[153px]
								 h-[47px] 
								 borderRed border border-white/30 bg-white/20 rounded-lg
							 hover:bg-white hover:text-main duration-300 font-bold text-white'
								>
									Loyihani Ko'rish
								</button>
							</Link>
						</div>
					</div>
				</div>

				{/* Uchinchi elements */}
				<div
					data-aos='fade-up'
					data-aos-anchor-placement='top-bottom'
					className='projects-elements flex flex-col mt-[50px] '
				>
					<div className='w-full h-[1000px] lg:h-[363px]  grid grid-cols-1 lg:grid-cols-2'>
						<div className='overflow-hidden lg:block hidden'>
							<img src={projects3} alt='projects' className='rounded-lg' />
						</div>
						<div className='overflow-hidde lg:hidden block w-full h-full'>
							<img
								src={projects3}
								alt='projects'
								className='rounded-lg w-full h-full object-cover'
							/>
						</div>
						<div className='text-white h-full flex flex-col items-start justify-center gap-3 px-4'>
							<h2 className='text-[24px] font-[600]'>Xalq trans loyihasi</h2>
							<p className='text-[18px] font-[400] mt-[20px]'>
								Bu yerda esa yana ko’proq ma’lumotlar berilishi kerak. Lorem
								Ipsum is simply dummy text of the printing and typesetting
								industry. Lorem Ipsum has been the industry's standard dummy
								text ever since the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen book. It has
								survived not only five centuries, but also the leap into
								electronic typesetting, remaining essentially unchanged.
							</p>
							<button className='w-[153px] h-[47px] borderRed border border-white/30 bg-white/20 rounded-lg hover:bg-white hover:text-main duration-300 font-bold text-white'>
								Loyihani Ko'rish
							</button>
						</div>
					</div>
				</div>

				{/* button */}
				<div
					data-aos='fade-up'
					data-aos-anchor-placement='top-bottom'
					className='w-full h-[100px] mt-[70px] flex justify-center items-start'
				>
					<Link to={'/portfolio'}>
						<button className='w-[233px] h-[47px] bg-main text-white font-bold rounded-md duration-300 hover:bg-white hover:text-main'>
							Boshqa loyihalarni ko’rish
						</button>
					</Link>
				</div>

				{/* nur */}
				<div className='absolute s-shadow top-0 right-[200px]'></div>
				<div className='absolute s-shadow top-[500px] left-[100px]'></div>
				<div className='absolute s-shadows bottom-[200px] right-30'></div>
			</div>
		</div>
	)
}

export default Project
