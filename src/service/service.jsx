import React from 'react'
import icon1 from '../assets/images/icons/icon/icon1.svg'
import icon2 from '../assets/images/icons/icon/icon2.svg'
import icon3 from '../assets/images/icons/icon/icon3.svg'
import icon4 from '../assets/images/icons/icon/icon4.svg'
import icon5 from '../assets/images/icons/icon/icon5.svg'
import icon6 from '../assets/images/icons/icon/icon6.svg'
import icon7 from '../assets/images/icons/icon/Icon7.svg'
import icon8 from '../assets/images/icons/icon/icon8.svg'
import icon9 from '../assets/images/icons/icon/icon9.svg'

const Service = () => {
	return (
		<div className='mt-[100px]'>
			<div className='container min-h-[1000px]'>
				{/* serive title */}
				<div className='text-center'>
					<h2 className='text-[48px] font-bold text-white'>Xizmat turlari</h2>
					<p className='text-white text-[18px] font-[400]'>
						Dasturlash sohasidagi eng talabgir xizmat turlaridan quyidagilar:
					</p>
				</div>
				{/* service title */}
				{/* cards */}
				<div className='mt-[50px] border  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px] pb-10 relative'>
					<div className='h-[500px] border border-white/30 bg-white/10 rounded-2xl hover:bg-white/30 duration-300 overflow-hidden'>
						<div className='w-full h-[50%]  flex justify-center items-end'>
							<div className='w-[150px] h-[150px] rounded-2xl bg-white/30'>
								<img src={icon1} alt='Landing sahifalar' />
							</div>
						</div>
						<div className='w-full h-[50%]  flex-col flex justify-start items-center px-[34px] mt-[24px]'>
							<h3 className='text-[30px] font-[600] text-white'>
								Landing Sahifalar
							</h3>
							<p className='text-[18px] font-[400] text-white text-center mt-[8px]'>
								Qisqa, ta'sirli va maqsadli sahifalar, mijozlarni alohida
								harakatga undash uchun mo'ljallangan.
							</p>
						</div>
					</div>

					<div className='h-[500px] border border-white/30 bg-white/10 rounded-2xl hover:bg-white/30 duration-300 overflow-hidden'>
						<div className='w-full h-[50%]  flex justify-center items-end'>
							<div className='w-[150px] h-[150px] rounded-2xl bg-white/30 flex justify-center items-center'>
								<img src={icon2} alt='Landing sahifalar' />
							</div>
						</div>
						<div className='w-full h-[50%]  flex-col flex justify-start items-center px-[20px] lg:px-[34px] mt-[24px]'>
							<h3 className='text-[30px] font-[600] text-white text-center'>
								Korporativ veb-sayt
							</h3>
							<p className='text-[18px] font-[400] text-white text-center mt-[8px]'>
								Kompaniyaning umumiy ma'lumotini taqdim etish, xizmatlar yoki
								mahsulotlar haqida ma'lumot berish.
							</p>
						</div>
					</div>

					<div className='h-[500px] border border-white/30 bg-white/10 rounded-2xl hover:bg-white/30 duration-300 overflow-hidden'>
						<div className='w-full h-[50%]  flex justify-center items-end'>
							<div className='w-[150px] h-[150px] rounded-2xl bg-white/30 flex justify-center items-center'>
								<img src={icon3} alt='Landing sahifalar' />
							</div>
						</div>
						<div className='w-full h-[50%]  flex-col flex justify-start items-center px-[20px] lg:px-[34px] mt-[24px]'>
							<h3 className='text-[30px] font-[600] text-white'>
								Online do’kon
							</h3>
							<p className='text-[18px] font-[400] text-white text-center mt-[8px]'>
								Mahsulotlar yoki xizmatlarni onlayn tarzda sotish. To‘lov
								tizimlari va mahsulotni boshqarish tizimi mavjud.
							</p>
						</div>
					</div>

					<div className='h-[500px] border border-white/30 bg-white/10 rounded-2xl hover:bg-white/30 duration-300 overflow-hidden'>
						<div className='w-full h-[50%]  flex justify-center items-end'>
							<div className='w-[150px] h-[150px] rounded-2xl bg-white/30 flex justify-center items-center'>
								<img src={icon4} alt='Landing sahifalar' />
							</div>
						</div>
						<div className='w-full h-[50%]  flex-col flex justify-start items-center px-[20px] lg:px-[34px] mt-[24px]'>
							<h3 className='text-[30px] font-[600] text-white'>CRM tizimi</h3>
							<p className='text-[18px] font-[400] text-white text-center mt-[8px]'>
								Mijozlar bilan ishlashni avtomatlashtirish va boshqarish. Katta
								kompaniyalar yoki mijozlar bilan faol ishlaydigan tashkilotlar.
							</p>
						</div>
					</div>

					<div className='h-[500px] border border-white/30 bg-white/10 rounded-2xl hover:bg-white/30 duration-300 overflow-hidden'>
						<div className='w-full h-[50%]  flex justify-center items-end'>
							<div className='w-[150px] h-[150px] rounded-2xl bg-white/30 flex justify-center items-center'>
								<img src={icon5} alt='Landing sahifalar' />
							</div>
						</div>
						<div className='w-full h-[50%]  flex-col flex justify-start items-center px-[20px] lg:px-[34px] mt-[24px]'>
							<h3 className='text-[30px] font-[600] text-white'>
								Portfolio saytlari
							</h3>
							<p className='text-[18px] font-[400] text-white text-center mt-[8px]'>
								Shaxsiy yoki kompaniya ishlarini ko‘rsatish. Freelancerlar yoki
								ijodkorlar uchun o‘z ishlarini targ‘ib qilishda.
							</p>
						</div>
					</div>

					<div className='h-[500px] border border-white/30 bg-white/10 rounded-2xl hover:bg-white/30 duration-300 overflow-hidden'>
						<div className='w-full h-[50%]  flex justify-center items-end'>
							<div className='w-[150px] h-[150px] rounded-2xl bg-white/30 flex justify-center items-center'>
								<img src={icon6} alt='Landing sahifalar' />
							</div>
						</div>
						<div className='w-full h-[50%]  flex-col flex justify-start items-center px-[20px] lg:px-[34px] mt-[24px]'>
							<h3 className='text-[30px] font-[600] text-white'>
								Blog sahifalari
							</h3>
							<p className='text-[18px] font-[400] text-white text-center mt-[8px]'>
								O‘z fikrlari, yangiliklari yoki ma'lumotlarini o‘rtoqlashish.
								Ma'lumot yetkazish, auditoriyani jalb qilish va reklama qilish
								uchun.
							</p>
						</div>
					</div>

					<div className='h-[500px] border border-white/30 bg-white/10 rounded-2xl hover:bg-white/30 duration-300 overflow-hidden'>
						<div className='w-full h-[50%]  flex justify-center items-end'>
							<div className='w-[150px] h-[150px] rounded-2xl bg-white/30 flex justify-center items-center'>
								<img src={icon7} alt='Landing sahifalar' />
							</div>
						</div>
						<div className='w-full h-[50%]  flex-col flex justify-start items-center px-[20px] lg:px-[34px] mt-[24px]'>
							<h3 className='text-[30px] font-[600] text-white'>
								Ta’lim platformasi
							</h3>
							<p className='text-[18px] font-[400] text-white text-center mt-[8px]'>
								Ta'lim kurslari, videodarsliklar, yoki online testlar uchun.
								O‘quv muassasalari yoki onlayn dars beruvchi kompaniyalar uchun.
							</p>
						</div>
					</div>

					<div className='h-[500px] border border-white/30 bg-white/10 rounded-2xl hover:bg-white/30 duration-300 overflow-hidden'>
						<div className='w-full h-[50%]  flex justify-center items-end'>
							<div className='w-[150px] h-[150px] rounded-2xl bg-white/30 flex justify-center items-center'>
								<img src={icon8} alt='Landing sahifalar' />
							</div>
						</div>
						<div className='w-full h-[50%]  flex-col flex justify-start items-center px-[20px] lg:px-[34px] mt-[24px]'>
							<h3 className='text-[30px] font-[600] text-white'>
								ERP platformasi
							</h3>
							<p className='tmd:text-[18px] text-[14px] font-[400] text-white text-center mt-[8px]'>
								ERP platformasi korxona yoki tashkilotning barcha jarayonlarini
								birlashtiruvchi kompleks dasturiy ta'minotdir. U tashkilotning
								moliyaviy, ishlab chiqarish, logistika, kadrlar boshqaruvi va
								boshqa bo‘limlarini avtomatlashtirish uchun
							</p>
						</div>
					</div>

					<div className='h-[500px] border border-white/30 bg-main rounded-2xl group duration-300 overflow-hidden'>
						<div className='w-full h-[50%]  flex justify-center items-end'>
							<div className='w-[150px] h-[150px] rounded-2xl bg-white/30 flex justify-center group-hover:bg-white/60 items-center'>
								<img src={icon9} alt='Landing sahifalar' />
							</div>
						</div>
						<div className='w-full h-[50%]  flex-col flex justify-start items-center px-[10px] lg:px-[34px] mt-[24px]'>
							<h3 className='text-[30px] font-[600] text-white'>
								Alohida loyihami ?
							</h3>
							<p className='md:text-[14px] text-[15px] font-[400] text-white text-center mt-[8px]'>
								Biz yangi startap loyihalarni ham rivojlantirishda yordam
								beramiz. Agarda sizda yangi startap g’oya mavjud bo’lsa biz siz
								bilan uni rivojlantirish ustida ishlashga tayyormiz. G’oyadan
								boshlab ishlash uchun tayyor dasturgacha shakllantiramiz.
							</p>
						</div>
					</div>
					<div className='absolute s-shadows top-[-180px] left-0'></div>
					<div className='absolute s-shadows top-[420px] right-10'></div>
					<div className='absolute s-shadows top-[480px] left-[330px]'></div>
					<div className='absolute s-shadows bottom-[10px] '></div>
				</div>
				{/* cards */}
			</div>
		</div>
	)
}

export default Service
