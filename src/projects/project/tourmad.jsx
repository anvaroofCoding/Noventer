import React from 'react'
import projects1 from '../../assets/images/png/projects1.png'
import tourmad1 from '../../assets/images/png/tourmad/tourmad1.png'
import tourmad2 from '../../assets/images/png/tourmad/tourmad2.png'
import tourmad3 from '../../assets/images/png/tourmad/tourmad3.png'
import tourmad4 from '../../assets/images/png/tourmad/tourmad4.png'
import tourmad5 from '../../assets/images/png/tourmad/tourmad5.png'

const Tourmad = () => {
	return (
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
							Tourmad loyihasi
						</h1>
					</div>
				</div>
				<div className='w-full  mt-[100px] flex flex-col items-start justify-center gap-[50px]'>
					<p
						data-aos='fade-up'
						data-aos-anchor-placement='top-bottom'
						className='text-white text-[18px] font-[400]'
					>
						Tourmad – O‘zbekistonning ichki turizimini rivojlantirish maqsadida
						ishlab chiqilgan bu web sayt o‘zida bir necha service larni o‘z
						ichiga jamlagan bo‘lib ulardan: Mehmonxona xizmari, Restoran
						xizmati, Gitlik xizmati, Mashinada sayohat qilish uchun haydovchilar
						xizmari va boshqa ko‘plab xizmarlarni o‘z ichiga oladi. Bundan
						tashqari saytdan o‘zingiz uchun qayerlarga boorish kerakligini va
						qayerlarda xizmat ko‘satish qancha ekanligini ko‘rishingiz va
						o‘zingiz uchun oldindan buyurtma qilishingiz mumkin.
					</p>
					<img
						data-aos='fade-up'
						data-aos-anchor-placement='top-bottom'
						src={tourmad1}
						alt='tourmad1'
						className='w-full'
					/>
					<p
						data-aos='fade-up'
						data-aos-anchor-placement='top-bottom'
						className='text-white text-[18px] font-[400]'
					>
						Bu yerda siz o’zgiz bomoqchi bo’lgan diqqatga sazovor joylarni va
						ularga yaqin bolgan mehmonxona, Restoran lar haqida ma’muot
						olishigiz mumkin
					</p>
					<img
						data-aos='fade-up'
						data-aos-anchor-placement='top-bottom'
						src={tourmad2}
						alt='tourmad2'
						className='w-full'
					/>
					<p
						data-aos='fade-up'
						data-aos-anchor-placement='top-bottom'
						className='text-white text-[18px] font-[400]'
					>
						Ular haqida shu yerda to’liq ma’lumotlarni o’qib olishingiz mumkin.
						Ya’ni har bir joy haqada ma’lumotlar kelitrib o’tigan
					</p>
					<img
						data-aos='fade-up'
						data-aos-anchor-placement='top-bottom'
						src={tourmad3}
						alt='tourmad3'
						className='w-full'
					/>
					<p
						data-aos='fade-up'
						data-aos-anchor-placement='top-bottom'
						className='text-white text-[18px] font-[400]'
					>
						Unda tashqari siz bormoqchi bo’gan joydagi mehmonxonalar ro’yharlar
						ularni narxalari haqida xam to’liq ma’lumotlar olishingiz va ularni
						band qilish imkonyati xam bor.
					</p>
					<img
						data-aos='fade-up'
						data-aos-anchor-placement='top-bottom'
						src={tourmad4}
						alt='tourmad4'
						className='w-full'
					/>
					<p
						data-aos='fade-up'
						data-aos-anchor-placement='top-bottom'
						className='text-white text-[18px] font-[400]'
					>
						Qo’shimchasiga siz Taksi hizmatida foydalanishigiz xam mumkin boladi
						ya’ni siz bormoqchi bolgan manzilni kirib o’zigizni qulay bo’lgan
						narxda taksi bron qilishgiz xam mumkin bo’ladi.
					</p>
					<img
						data-aos='fade-up'
						data-aos-anchor-placement='top-bottom'
						src={tourmad5}
						alt='tourmad5'
						className='w-full'
					/>
					<p
						data-aos='fade-up'
						data-aos-anchor-placement='top-bottom'
						className='text-white text-[18px] font-[400]'
					>
						Siz tanlamoqchi bo’lgan taksi haqida to’liq ma’lumot olishigiz
						mumkin bo’ladi va unga boshqa mijozlar bergan fikilarni xam
						ko’rishigiz mumkin bo’adi va ozigizga qulay bolgan haydovchini
						tanlashigiz mumkin.
					</p>
				</div>
			</div>
		</div>
	)
}

export default Tourmad
