import React from 'react'
import projects1 from '../../assets/images/png/projects2.png'
import protun1 from '../../assets/images/png/protun/protun1.png'
import protun2 from '../../assets/images/png/protun/protun2.png'
import protun3 from '../../assets/images/png/protun/protun3.png'
import protun4 from '../../assets/images/png/protun/protun4.png'
import protun5 from '../../assets/images/png/protun/protun5.png'

const Protun = () => {
	return (
		<div>
			<div className='bg-midnight'>
				<div className='container min-h-[1000px] pt-[100px]'>
					<div
						data-aos='fade-up'
						data-aos-anchor-placement='top-bottom'
						className="w-full h-[327px] rounded-2xl bg-[url('../../assets/images/png/projects1.png')] bg-cover bg-center overflow-hidden relative z-0"
						style={{
							backgroundImage: `url(${projects1})`,
							backgroundSize: 'cover',
							backgroundPosition: 'center',
							// background: 'rgba(255, 255, 255, 0.102)',
						}}
					>
						<div className='w-full h-full bg-main/50  relative z-10 flex justify-center items-center'>
							<h1 className='text-white text-[48px] font-bold text-center'>
								Protun loyihasi
							</h1>
						</div>
					</div>
					<div className='w-full  mt-[100px] flex flex-col items-start justify-center gap-[50px]'>
						<p
							data-aos='fade-up'
							data-aos-anchor-placement='top-bottom'
							className='text-white text-[18px] font-[400]'
						>
							<a href='https://prorun.uz/'>Prorun.uz</a> – bu saytda tez-tez
							bo‘lib o‘tadigan yugurish bo‘yicha musobaqalar bo‘lib o‘tadi va
							siz saytdan ro‘ yxatdan o‘tgan holda istalgan yoki har bir
							musobaqada qatnashishingiz mumkin.  Nima uchun sayt qurilgan?
							Musobaqalarda chet ellik ishtirokchilar bo‘lgani bois ularga va
							boshqa qatnashchilarga ro‘yxatdan o‘tishni oson qilish uchun yangi
							web ilova ishlab chiqildi. 
						</p>
						<p
							data-aos='fade-up'
							data-aos-anchor-placement='top-bottom'
							className='text-white text-[18px] font-[400]'
						>
							Bu yerda asosan siz oldinda bo’lib o’tadigan ro’yhatlarni
							ko’rishing mumkin va ularda qatnashish imkonyatni beradi. Yugurish
							musobaqalarda yig’ilgan pullar aososan ASB (Autizm spektrining
							buzilishi) bilan kasallangan bolalar oilalariga beriladi. 
						</p>
						<img
							data-aos='fade-up'
							data-aos-anchor-placement='top-bottom'
							src={protun1}
							alt='tourmad1'
							className='w-full'
						/>
						<p
							data-aos='fade-up'
							data-aos-anchor-placement='top-bottom'
							className='text-white text-[18px] font-[400]'
						>
							Siz oldin bo’lib o’tgan musobaqalar va ularning natijasini xam
							kuzatib borish imkoniyatiga ega bo’lasiz.
						</p>
						<img
							data-aos='fade-up'
							data-aos-anchor-placement='top-bottom'
							src={protun2}
							alt='tourmad2'
							className='w-full'
						/>
						<p
							data-aos='fade-up'
							data-aos-anchor-placement='top-bottom'
							className='text-white text-[18px] font-[400]'
						>
							Bu yerda siz har bitta bo’ib o’tgan musobaqaning to’liq
							ma’lumotlarni ko’rib chiqishingiz mumkin bo’ladi
						</p>
						<img
							data-aos='fade-up'
							data-aos-anchor-placement='top-bottom'
							src={protun3}
							alt='tourmad3'
							className='w-full'
						/>
						<p
							data-aos='fade-up'
							data-aos-anchor-placement='top-bottom'
							className='text-white text-[18px] font-[400]'
						>
							Undan tashqari siz boshqa tadbirlar va yangiliklar  haqida
							ma’lumotlar olishingiz mumkin bo’ladi 
						</p>
						<img
							data-aos='fade-up'
							data-aos-anchor-placement='top-bottom'
							src={protun4}
							alt='tourmad4'
							className='w-full'
						/>

						<img
							data-aos='fade-up'
							data-aos-anchor-placement='top-bottom'
							src={protun5}
							alt='tourmad5'
							className='w-full'
						/>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Protun
