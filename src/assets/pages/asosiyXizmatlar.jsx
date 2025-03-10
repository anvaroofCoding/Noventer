import React from 'react'
import tangaIcon from '../images//icons/tanga.svg'
import buyIcon from '../images/icons/buy.svg'
import serviceIcon from '../images/icons/document.svg'
import shopIcon from '../images/icons/icon/shop.svg'
import usersIcon from '../images/icons/users.svg'
import asosiyXizmatlarimiz from '../images/png/asosiyXizmatlarimiz.png'

const AsosiyXizmatlar = () => {
	return (
		<div>
			<div className='container min-h-[1000px] relative flex flex-col gap-[74px]'>
				{/* 1 */}
				<div
					className='w-full h-[705px] border border-white/30 bg-white/10 rounded-2xl flex-row overflow-hidden lg:flex hidden '
					data-aos='fade-up'
					data-aos-anchor-placement='top-bottom'
				>
					<div className='w-[60%] h-full  relative px-[74px] py-[66px] flex flex-col justify-between items-start text-white'>
						<h2 className='text-[48px] font-bold'>Landing sahifalar</h2>
						<div className='flex gap-[30px]'>
							<div className=' w-[283px] h-[139px]'>
								<div className=' flex items-center gap-1'>
									<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
									<h2 className='text-[24px] font-[600]'>Qisqa va ta'sirli</h2>
								</div>
								<p className='text-[16px]'>
									Mijozni birinchi qarashda qiziqtiradigan va uni keyingi
									qadamga undaydigan muhim ma'lumotlarni taqdim etadi.
								</p>
							</div>
							<div className=' w-[283px] h-[139px]'>
								<div className=' flex items-center gap-1'>
									<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
									<h2 className='text-[24px] font-[600]'>Maqsadli</h2>
								</div>
								<p className='text-[16px]'>
									Aniq maqsadga yo'naltirilgan bo'lib, mijozni maxsus harakatga
									undashga xizmat qiladi.
								</p>
							</div>
						</div>
						<div className=' w-[283px] h-[139px]'>
							<div className='flex items-center gap-1'>
								<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
								<h2 className='text-[24px] font-[600]'>Tez yuklanuvchi</h2>
							</div>
							<p className='text-[16px]'>
								Mijozlarning sabr-toqatiga ta'sir qilmaslik uchun iloji boricha
								tez yuklanadi.
							</p>
						</div>
						<div>
							<p className='text-[18px] mt-[10px]'>
								Texnik vazifa tayyorlab berish: 1 kun
							</p>
							<p className='text-[18px] mt-[10px]'>
								Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismdan
								iborat bo’ladi.)
							</p>
							<p className='text-[18px] mt-[10px]'>
								Veb Dizayn: 10-15 soatlik mehnat.
							</p>
						</div>
						<button className='w-[153px] h-[47px] borderRed border border-white/30 bg-white/20 rounded-lg hover:bg-white hover:text-main duration-300 font-bold'>
							Buyurtma Berish
						</button>
						<img
							src={serviceIcon}
							alt='documents icons'
							className='absolute bottom-0 right-1'
						/>
					</div>
					<div className='w-[40%] h-full '>
						<img
							src={asosiyXizmatlarimiz}
							alt='Sayt xizmatlari'
							className='w-full'
						/>
					</div>
				</div>

				{/* 2 */}
				<div
					className='w-full h-[705px] border border-white/30 bg-white/10 rounded-2xl flex-row overflow-hidden lg:flex hidden '
					data-aos='fade-up'
					data-aos-anchor-placement='top-bottom'
				>
					<div className='w-[60%] h-full  relative px-[74px] py-[66px] flex flex-col justify-between items-start text-white'>
						<h2 className='text-[48px] font-bold'>Katalog sahifalari</h2>
						<div className='flex gap-[30px]'>
							<div className=' w-[283px] h-[139px]'>
								<div className=' flex items-center gap-1'>
									<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
									<h2 className='text-[24px] font-[600]'>
										Mahsulotlar tavsifi
									</h2>
								</div>
								<p className='text-[16px]'>
									Har bir mahsulotning batafsil tavsifi, xususiyatlari,
									afzalliklari va rasmlari bilan berilgan.
								</p>
							</div>
							<div className=' w-[283px] h-[139px]'>
								<div className=' flex items-center gap-1'>
									<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
									<h2 className='text-[24px] font-[600]'>Turli filtrlar</h2>
								</div>
								<p className='text-[16px]'>
									Mijozlarning qidirishni osonlashtirish uchun turli xil
									filtrlar va saralash imkoniyatlari taqdim etiladi.
								</p>
							</div>
						</div>
						<div className=' w-[283px] h-[139px]'>
							<div className='flex items-center gap-1'>
								<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
								<h2 className='text-[24px] font-[600]'> Navigatsiya</h2>
							</div>
							<p className='text-[16px]'>
								Katalog bo'ylab oson va intuitiv harakatlanish uchun qulay
								navigatsiya tizimi yaratilgan.
							</p>
						</div>
						<div>
							<p className='text-[18px] mt-[10px]'>
								Texnik vazifa tayyorlab berish: 1 kun
							</p>
							<p className='text-[18px] mt-[10px]'>
								Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismdan
								iborat bo’ladi.)
							</p>
							<p className='text-[18px] mt-[10px]'>
								Veb Dizayn: 10-15 soatlik mehnat. Narxi: $100
							</p>
						</div>
						<button className='w-[153px] h-[47px] borderRed border border-white/30 bg-white/20 rounded-lg hover:bg-white hover:text-main duration-300 font-bold'>
							Buyurtma Berish
						</button>
						<img
							src={shopIcon}
							alt='documents icons'
							className='absolute bottom-0 right-3'
						/>
					</div>
					<div className='w-[40%] h-full '>
						<img
							src={asosiyXizmatlarimiz}
							alt='Sayt xizmatlari'
							className='w-full'
						/>
					</div>
					<div className='absolute s-shadows bottom-0 left-[-100px]'></div>
				</div>
				{/* 3 */}
				<div
					className='w-full h-[705px] border border-white/30 bg-white/10 rounded-2xl flex-row overflow-hidden lg:flex hidden '
					data-aos='fade-up'
					data-aos-anchor-placement='top-bottom'
				>
					<div className='w-[60%] h-full  relative px-[74px] py-[66px] flex flex-col justify-between items-start text-white'>
						<h2 className='text-[48px] font-bold'>eCommerce Sahifalari</h2>
						<div className='flex gap-[30px]'>
							<div className=' w-[283px] h-[139px]'>
								<div className=' flex items-center gap-1'>
									<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
									<h2 className='text-[24px] font-[600]'>Onlayn sotish</h2>
								</div>
								<p className='text-[16px]'>
									Mijozlarga tovarlarni to'g'ridan-to'g'ri onlayn sotib olish
									imkoniyatini beradi.
								</p>
							</div>
							<div className=' w-[283px] h-[139px]'>
								<div className=' flex items-center gap-1'>
									<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
									<h2 className='text-[24px] font-[600]'>Xavfsiz to'lov</h2>
								</div>
								<p className='text-[16px]'>
									Turli xil xavfsiz to'lov usullarini qo'llab-quvvatlaydi.
								</p>
							</div>
						</div>
						<div className=' w-[283px] h-[139px]'>
							<div className='flex items-center gap-1'>
								<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
								<h2 className='text-[24px] font-[600]'> Yetkazib berish</h2>
							</div>
							<p className='text-[16px]'>
								Mijozlarga buyurtmalarni tez va qulay tarzda yetkazib berish
								xizmatini taqdim etadi.
							</p>
						</div>
						<div>
							<p className='text-[18px] mt-[10px]'>
								Texnik vazifa tayyorlab berish: 3-4 kun
							</p>
							<p className='text-[18px] mt-[10px]'>
								Sayt sahifalar soni: har bir sahifa minimum 5 ta qismdan iborat
								bo’ladi.
							</p>
							<p className='text-[18px] mt-[10px]'>
								Veb Dizayn: 7-10 kun mehnat. Narxi: $200-300
							</p>
						</div>
						<button className='w-[153px] h-[47px] borderRed border border-white/30 bg-white/20 rounded-lg hover:bg-white hover:text-main duration-300 font-bold'>
							Buyurtma Berish
						</button>
						<img
							src={buyIcon}
							alt='documents icons'
							className='absolute bottom-0 right-1'
						/>
					</div>
					<div className='w-[40%] h-full '>
						<img
							src={asosiyXizmatlarimiz}
							alt='Sayt xizmatlari'
							className='w-full'
						/>
					</div>
					<div className='absolute s-shadows top-[400px] right-[50%]'></div>
				</div>
				{/* 4 */}
				<div
					className='w-full h-[705px] border border-white/30 bg-white/10 rounded-2xl flex-row overflow-hidden lg:flex hidden '
					data-aos='fade-up'
					data-aos-anchor-placement='top-bottom'
				>
					<div className='w-[60%] h-full  relative px-[74px] py-[66px] flex flex-col justify-between items-start text-white'>
						<h2 className='text-[48px] font-bold'>CRM Sahifalari</h2>
						<div className='flex gap-[30px]'>
							<div className=' w-[283px] h-[139px]'>
								<div className=' flex items-center gap-1'>
									<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
									<h2 className='text-[24px] font-[600]'>
										Mijozlar ma'lumotlari
									</h2>
								</div>
								<p className='text-[16px]'>
									Mijozlar haqida muhim ma'lumotlarni to'plash va saqlash uchun
									mo'ljallangan.
								</p>
							</div>
							<div className=' w-[283px] h-[139px]'>
								<div className=' flex items-center gap-1'>
									<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
									<h2 className='text-[24px] font-[600]'>
										Mijozlar bilan muloqot
									</h2>
								</div>
								<p className='text-[16px]'>
									Mijozlar bilan samarali aloqa o'rnatish va ularni
									qo'llab-quvvatlashga imkon beradi.
								</p>
							</div>
						</div>
						<div className=' w-[283px] h-[139px]'>
							<div className='flex items-center gap-1'>
								<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
								<h2 className='text-[24px] font-[600]'> Tahlil</h2>
							</div>
							<p className='text-[16px]'>
								Mijozlar haqida to'plangan ma'lumotlarni tahlil qilish va
								qarorlar qabul qilishga yordam beradi.
							</p>
						</div>
						<div>
							<p className='text-[18px] mt-[10px]'>
								Texnik vazifa tayyorlab berish: 5-10 kun
							</p>
							<p className='text-[18px] mt-[10px]'>
								Sayt sahifalar soni: 10 yoki undan yuqori
							</p>
							<p className='text-[18px] mt-[10px]'>
								Veb Dizayn: 7-10 kun mehnat. Narxi: $300-500
							</p>
						</div>
						<button className='w-[153px] h-[47px] borderRed border border-white/30 bg-white/20 rounded-lg hover:bg-white hover:text-main duration-300 font-bold'>
							Buyurtma Berish
						</button>
						<img
							src={usersIcon}
							alt='documents icons'
							className='absolute bottom-0 right-1'
						/>
					</div>
					<div className='w-[40%] h-full '>
						<img
							src={asosiyXizmatlarimiz}
							alt='Sayt xizmatlari'
							className='w-full'
						/>
					</div>
					<div className='absolute s-shadows top-[0] left-0'></div>
				</div>
				{/* 5 */}
				<div
					className='w-full h-[705px] border border-white/30 bg-white/10 rounded-2xl flex-row overflow-hidden lg:flex hidden '
					data-aos='fade-up'
					data-aos-anchor-placement='top-bottom'
				>
					<div className='w-[60%] h-full  relative px-[74px] py-[66px] flex flex-col justify-between items-start text-white'>
						<h2 className='text-[48px] font-bold'>ERP sahifalari</h2>
						<div className='flex gap-[30px]'>
							<div className=' w-[283px] h-[139px]'>
								<div className='flex items-center gap-1'>
									<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
									<h2 className='text-[24px] font-[600]'>
										{' '}
										Tahlil va xabarnoma
									</h2>
								</div>
								<p className='text-[16px]'>
									Korxona faoliyatini tahlil qilish va muhim xabarnomalarni
									olish imkonini beradi.
								</p>
							</div>
							<div className=' w-[283px] h-[139px]'>
								<div className=' flex items-center gap-1'>
									<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
									<h2 className='text-[24px] font-[600]'>Avtomatlashtirish</h2>
								</div>
								<p className='text-[16px]'>
									Ko'pgina jarayonlarni avtomatlashtirib, vaqt va resurslarni
									tejaydi.
								</p>
							</div>
						</div>
						<div className=' w-[350px] h-[139px]'>
							<div className=' flex items-center gap-1'>
								<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
								<h2 className='text-[24px] font-[600]'>
									Butun Korxona Integratsiyasi
								</h2>
							</div>
							<p className='text-[16px]'>
								Turli bo'limlarni birlashtirib, ma'lumot almashinuvini
								optimallashtiradi.
							</p>
						</div>
						<div>
							<p className='text-[18px] mt-[10px]'>
								Texnik vazifa tayyorlab berish: 5-10 kun
							</p>
							<p className='text-[18px] mt-[10px]'>
								Texnik vazifa tayyorlab berish: 5-10 kun
							</p>
							<p className='text-[18px] mt-[10px]'>
								Veb Dizayn: 7-10 kun mehnat. Narxi: $300-500
							</p>
						</div>
						<button className='w-[153px] h-[47px] borderRed border border-white/30 bg-white/20 rounded-lg hover:bg-white hover:text-main duration-300 font-bold'>
							Buyurtma Berish
						</button>
						<img
							src={tangaIcon}
							alt='documents icons'
							className='absolute bottom-0 right-1'
						/>
					</div>
					<div className='w-[40%] h-full '>
						<img
							src={asosiyXizmatlarimiz}
							alt='Sayt xizmatlari'
							className='w-full'
						/>
					</div>
					<div className='absolute s-shadows top-[50%] right-[65%]'></div>
				</div>
				{/* 6 */}
				<div
					className='w-full h-[705px] border border-white/30 bg-white/10 rounded-2xl flex-row overflow-hidden lg:flex hidden '
					data-aos='fade-up'
					data-aos-anchor-placement='top-bottom'
				>
					<div className='w-[60%] h-full  relative px-[74px] py-[66px] flex flex-col justify-between items-start text-white'>
						<h2 className='text-[48px] font-bold'>Landing sahifalar</h2>
						<div className='flex gap-[30px]'>
							<div className=' w-[283px] h-[139px]'>
								<div className=' flex items-center gap-1'>
									<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
									<h2 className='text-[24px] font-[600]'>Qisqa va ta'sirli</h2>
								</div>
								<p className='text-[16px]'>
									Mijozni birinchi qarashda qiziqtiradigan va uni keyingi
									qadamga undaydigan muhim ma'lumotlarni taqdim etadi.
								</p>
							</div>
							<div className=' w-[283px] h-[139px]'>
								<div className=' flex items-center gap-1'>
									<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
									<h2 className='text-[24px] font-[600]'>Maqsadli</h2>
								</div>
								<p className='text-[16px]'>
									Aniq maqsadga yo'naltirilgan bo'lib, mijozni maxsus harakatga
									undashga xizmat qiladi.
								</p>
							</div>
						</div>
						<div className=' w-[283px] h-[139px]'>
							<div className='flex items-center gap-1'>
								<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
								<h2 className='text-[24px] font-[600]'>Tez yuklanuvchi</h2>
							</div>
							<p className='text-[16px]'>
								Mijozlarning sabr-toqatiga ta'sir qilmaslik uchun iloji boricha
								tez yuklanadi.
							</p>
						</div>
						<div>
							<p className='text-[18px] mt-[10px]'>
								Texnik vazifa tayyorlab berish: 1 kun
							</p>
							<p className='text-[18px] mt-[10px]'>
								Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismdan
								iborat bo’ladi.)
							</p>
							<p className='text-[18px] mt-[10px]'>
								Veb Dizayn: 10-15 soatlik mehnat.
							</p>
						</div>
						<button className='w-[153px] h-[47px] borderRed border border-white/30 bg-white/20 rounded-lg hover:bg-white hover:text-main duration-300 font-bold'>
							Buyurtma Berish
						</button>
						<img
							src={serviceIcon}
							alt='documents icons'
							className='absolute bottom-0 right-1'
						/>
					</div>
					<div className='w-[40%] h-full '>
						<img
							src={asosiyXizmatlarimiz}
							alt='Sayt xizmatlari'
							className='w-full'
						/>
					</div>
					<div className='absolute s-shadows top-[400px] left-[-100px]'></div>
					<div className='absolute s-shadows top-[400px] left-[50%]'></div>
				</div>
				{/* 7 */}
				<div
					className='w-full h-[705px] border border-white/30 bg-white/10 rounded-2xl flex-row overflow-hidden lg:flex hidden '
					data-aos='fade-up'
					data-aos-anchor-placement='top-bottom'
				>
					<div className='w-[60%] h-full  relative px-[74px] py-[66px] flex flex-col justify-between items-start text-white'>
						<h2 className='text-[48px] font-bold'>Landing sahifalar</h2>
						<div className='flex gap-[30px]'>
							<div className=' w-[283px] h-[139px]'>
								<div className=' flex items-center gap-1'>
									<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
									<h2 className='text-[24px] font-[600]'>Qisqa va ta'sirli</h2>
								</div>
								<p className='text-[16px]'>
									Mijozni birinchi qarashda qiziqtiradigan va uni keyingi
									qadamga undaydigan muhim ma'lumotlarni taqdim etadi.
								</p>
							</div>
							<div className=' w-[283px] h-[139px]'>
								<div className=' flex items-center gap-1'>
									<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
									<h2 className='text-[24px] font-[600]'>Maqsadli</h2>
								</div>
								<p className='text-[16px]'>
									Aniq maqsadga yo'naltirilgan bo'lib, mijozni maxsus harakatga
									undashga xizmat qiladi.
								</p>
							</div>
						</div>
						<div className=' w-[283px] h-[139px]'>
							<div className='flex items-center gap-1'>
								<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
								<h2 className='text-[24px] font-[600]'>Tez yuklanuvchi</h2>
							</div>
							<p className='text-[16px]'>
								Mijozlarning sabr-toqatiga ta'sir qilmaslik uchun iloji boricha
								tez yuklanadi.
							</p>
						</div>
						<div>
							<p className='text-[18px] mt-[10px]'>
								Texnik vazifa tayyorlab berish: 1 kun
							</p>
							<p className='text-[18px] mt-[10px]'>
								Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismdan
								iborat bo’ladi.)
							</p>
							<p className='text-[18px] mt-[10px]'>
								Veb Dizayn: 10-15 soatlik mehnat.
							</p>
						</div>
						<button className='w-[153px] h-[47px] borderRed border border-white/30 bg-white/20 rounded-lg hover:bg-white hover:text-main duration-300 font-bold'>
							Buyurtma Berish
						</button>
						<img
							src={serviceIcon}
							alt='documents icons'
							className='absolute bottom-0 right-1'
						/>
					</div>
					<div className='w-[40%] h-full '>
						<img
							src={asosiyXizmatlarimiz}
							alt='Sayt xizmatlari'
							className='w-full'
						/>
					</div>
					<div className='absolute s-shadows top-[440px] left-[400px]'></div>
				</div>
				{/* 8 */}
				<div
					className='w-full h-[705px] border border-white/30 bg-white/10 rounded-2xl flex-row overflow-hidden lg:flex hidden '
					data-aos='fade-up'
					data-aos-anchor-placement='top-bottom'
				>
					<div className='w-[60%] h-full  relative px-[74px] py-[66px] flex flex-col justify-between items-start text-white'>
						<h2 className='text-[48px] font-bold'>Landing sahifalar</h2>
						<div className='flex gap-[30px]'>
							<div className=' w-[283px] h-[139px]'>
								<div className=' flex items-center gap-1'>
									<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
									<h2 className='text-[24px] font-[600]'>Qisqa va ta'sirli</h2>
								</div>
								<p className='text-[16px]'>
									Mijozni birinchi qarashda qiziqtiradigan va uni keyingi
									qadamga undaydigan muhim ma'lumotlarni taqdim etadi.
								</p>
							</div>
							<div className=' w-[283px] h-[139px]'>
								<div className=' flex items-center gap-1'>
									<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
									<h2 className='text-[24px] font-[600]'>Maqsadli</h2>
								</div>
								<p className='text-[16px]'>
									Aniq maqsadga yo'naltirilgan bo'lib, mijozni maxsus harakatga
									undashga xizmat qiladi.
								</p>
							</div>
						</div>
						<div className=' w-[283px] h-[139px]'>
							<div className='flex items-center gap-1'>
								<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
								<h2 className='text-[24px] font-[600]'>Tez yuklanuvchi</h2>
							</div>
							<p className='text-[16px]'>
								Mijozlarning sabr-toqatiga ta'sir qilmaslik uchun iloji boricha
								tez yuklanadi.
							</p>
						</div>
						<div>
							<p className='text-[18px] mt-[10px]'>
								Texnik vazifa tayyorlab berish: 1 kun
							</p>
							<p className='text-[18px] mt-[10px]'>
								Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismdan
								iborat bo’ladi.)
							</p>
							<p className='text-[18px] mt-[10px]'>
								Veb Dizayn: 10-15 soatlik mehnat.
							</p>
						</div>
						<button className='w-[153px] h-[47px] borderRed border border-white/30 bg-white/20 rounded-lg hover:bg-white hover:text-main duration-300 font-bold'>
							Buyurtma Berish
						</button>
						<img
							src={serviceIcon}
							alt='documents icons'
							className='absolute bottom-0 right-1'
						/>
					</div>
					<div className='w-[40%] h-full '>
						<img
							src={asosiyXizmatlarimiz}
							alt='Sayt xizmatlari'
							className='w-full'
						/>
					</div>
					<div className='absolute s-shadows top-[400px] left-[50%]'></div>
					<div className='absolute s-shadows bottom-0 left-[-100px]'></div>
				</div>

				{/* desktop version */}
				<div className='absolute s-shadows top-[400px] left-[-100px]'></div>
				{/* responsive
				 */}

				{/* 1 */}
				<div
					className='w-full min-h-[1000px] border border-white/30 bg-white/10 rounded-2xl flex-col overflow-hidden flex lg:hidden mt-[100px]'
					data-aos='fade-up'
					data-aos-anchor-placement='top-bottom'
				>
					<div className='w-[100%] h-[332px] '>
						<img
							src={asosiyXizmatlarimiz}
							alt='Sayt xizmatlari'
							className='w-full object-cover h-full'
						/>
					</div>
					<div className='w-[100%] min-h-[400px] relative px-5 py-10 flex flex-col justify-between gap-[15px] items-start text-white'>
						<h2 className='text-[30px] font-bold'>Landing sahifalar</h2>

						<div className=' w-[283px] h-[100px]'>
							<div className=' flex items-center gap-1 '>
								<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
								<h2 className='text-[20px] font-[600]'>Qisqa va ta'sirli</h2>
							</div>
							<p className='text-[14px]'>
								Mijozni birinchi qarashda qiziqtiradigan va uni keyingi qadamga
								undaydigan muhim ma'lumotlarni taqdim etadi.
							</p>
						</div>
						<div className=' w-[283px] h-[100px]'>
							<div className=' flex items-center gap-1'>
								<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
								<h2 className='text-[20px] font-[600]'>Maqsadli</h2>
							</div>
							<p className='text-[14px]'>
								Aniq maqsadga yo'naltirilgan bo'lib, mijozni maxsus harakatga
								undashga xizmat qiladi.
							</p>
						</div>
						<div className=' w-[283px] h-[100px]'>
							<div className='flex items-center gap-1'>
								<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
								<h2 className='text-[20px] font-[600]'>Tez yuklanuvchi</h2>
							</div>
							<p className='text-[14px]'>
								Mijozlarning sabr-toqatiga ta'sir qilmaslik uchun iloji boricha
								tez yuklanadi.
							</p>
						</div>
						<div>
							<p className='text-[14px] mt-[10px]'>
								Texnik vazifa tayyorlab berish: 1 kun
							</p>
							<p className='text-[14px] mt-[10px]'>
								Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismdan
								iborat bo’ladi.)
							</p>
							<p className='text-[14px] mt-[10px]'>
								Veb Dizayn: 10-15 soatlik mehnat.
							</p>
						</div>
						<button className='w-[153px] h-[47px] borderRed border border-white/30 bg-white/20 rounded-lg hover:bg-white hover:text-main duration-300 font-bold'>
							Buyurtma Berish
						</button>
						{/* <img
							src={serviceIcon}
							alt='documents icons'
							className='absolute bottom-0 right-1'
						/> */}
					</div>
				</div>
				{/* 2 */}
				<div
					className='w-full min-h-[1000px] border border-white/30 bg-white/10 rounded-2xl flex-col overflow-hidden flex lg:hidden mt-[100px]'
					data-aos='fade-up'
					data-aos-anchor-placement='top-bottom'
				>
					<div className='w-[100%] h-[332px] '>
						<img
							src={asosiyXizmatlarimiz}
							alt='Sayt xizmatlari'
							className='w-full object-cover h-full'
						/>
					</div>
					<div className='w-[100%] min-h-[400px] relative px-5 py-10 flex flex-col justify-between gap-[15px] items-start text-white'>
						<h2 className='text-[30px] font-bold'>Katalog sahifalari</h2>

						<div className=' w-[283px] h-[100px]'>
							<div className=' flex items-center gap-1 '>
								<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
								<h2 className='text-[20px] font-[600]'>Mahsulotlar tavsifi</h2>
							</div>
							<p className='text-[14px]'>
								Har bir mahsulotning batafsil tavsifi, xususiyatlari,
								afzalliklari va rasmlari bilan berilgan.
							</p>
						</div>
						<div className=' w-[283px] h-[100px]'>
							<div className=' flex items-center gap-1'>
								<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
								<h2 className='text-[20px] font-[600]'>Turli filtrlar</h2>
							</div>
							<p className='text-[14px]'>
								Mijozlarning qidirishni osonlashtirish uchun turli xil filtrlar
								va saralash imkoniyatlari taqdim etiladi.
							</p>
						</div>
						<div className=' w-[283px] h-[100px]'>
							<div className='flex items-center gap-1'>
								<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
								<h2 className='text-[20px] font-[600]'>Navigatsiya</h2>
							</div>
							<p className='text-[14px]'>
								Katalog bo'ylab oson va intuitiv harakatlanish uchun qulay
								navigatsiya tizimi yaratilgan.
							</p>
						</div>
						<div>
							<p className='text-[14px] mt-[10px]'>
								Texnik vazifa tayyorlab berish: 1 kun
							</p>
							<p className='text-[14px] mt-[10px]'>
								Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismdan
								iborat bo’ladi.)
							</p>
							<p className='text-[14px] mt-[10px]'>
								Veb Dizayn: 10-15 soatlik mehnat.
							</p>
						</div>
						<button className='w-[153px] h-[47px] borderRed border border-white/30 bg-white/20 rounded-lg hover:bg-white hover:text-main duration-300 font-bold'>
							Buyurtma Berish
						</button>
						<img
							src={shopIcon}
							alt='documents icons'
							className='absolute bottom-0 right-4 w-[98px]'
						/>
					</div>
					<div className='absolute s-shadows bottom-0'></div>
				</div>
				{/* 3 */}
				<div
					className='w-full min-h-[1000px] border border-white/30 bg-white/10 rounded-2xl flex-col overflow-hidden flex lg:hidden mt-[100px]'
					data-aos='fade-up'
					data-aos-anchor-placement='top-bottom'
				>
					<div className='w-[100%] h-[332px] '>
						<img
							src={asosiyXizmatlarimiz}
							alt='Sayt xizmatlari'
							className='w-full object-cover h-full'
						/>
					</div>
					<div className='w-[100%] min-h-[400px] relative px-5 py-10 flex flex-col justify-between gap-[15px] items-start text-white'>
						<h2 className='text-[30px] font-bold'>eCommerce Sahifalari</h2>

						<div className=' w-[283px] h-[100px]'>
							<div className=' flex items-center gap-1 '>
								<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
								<h2 className='text-[20px] font-[600]'>Onlayn sotish</h2>
							</div>
							<p className='text-[14px]'>
								Mijozlarga tovarlarni to'g'ridan-to'g'ri onlayn sotib olish
								imkoniyatini beradi.
							</p>
						</div>
						<div className=' w-[283px] h-[100px]'>
							<div className=' flex items-center gap-1'>
								<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
								<h2 className='text-[20px] font-[600]'>Xavfsiz to'lov</h2>
							</div>
							<p className='text-[14px]'>
								Turli xil xavfsiz to'lov usullarini qo'llab-quvvatlaydi.
							</p>
						</div>
						<div className=' w-[283px] h-[100px]'>
							<div className='flex items-center gap-1'>
								<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
								<h2 className='text-[20px] font-[600]'>Yetkazib berish</h2>
							</div>
							<p className='text-[14px]'>
								Mijozlarga buyurtmalarni tez va qulay tarzda yetkazib berish
								xizmatini taqdim etadi.
							</p>
						</div>
						<div>
							<p className='text-[14px] mt-[10px]'>
								Texnik vazifa tayyorlab berish: 3-4 kun
							</p>
							<p className='text-[14px] mt-[10px]'>
								Sayt sahifalar soni: har bir sahifa minimum 5 ta qismdan iborat
								bo’ladi.
							</p>
							<p className='text-[14px] mt-[10px]'>
								Veb Dizayn: 7-10 kun mehnat. Narxi: $200-300
							</p>
						</div>
						<button className='w-[153px] h-[47px] borderRed border border-white/30 bg-white/20 rounded-lg hover:bg-white hover:text-main duration-300 font-bold'>
							Buyurtma Berish
						</button>
						<img
							src={buyIcon}
							alt='documents icons'
							className='absolute bottom-0 right-4 w-[98px]'
						/>
					</div>
					<div className='absolute s-shadows bottom-[30%] left-3'></div>
				</div>
				{/* 4 */}
				<div
					className='w-full min-h-[1000px] border border-white/30 bg-white/10 rounded-2xl flex-col overflow-hidden flex lg:hidden mt-[100px]'
					data-aos='fade-up'
					data-aos-anchor-placement='top-bottom'
				>
					<div className='w-[100%] h-[332px] '>
						<img
							src={asosiyXizmatlarimiz}
							alt='Sayt xizmatlari'
							className='w-full object-cover h-full'
						/>
					</div>
					<div className='w-[100%] min-h-[400px] relative px-5 py-10 flex flex-col justify-between gap-[15px] items-start text-white'>
						<h2 className='text-[30px] font-bold'>CRM Sahifalari</h2>

						<div className=' w-[283px] h-[100px]'>
							<div className=' flex items-center gap-1 '>
								<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
								<h2 className='text-[20px] font-[600]'>
									Mijozlar ma'lumotlari
								</h2>
							</div>
							<p className='text-[14px]'>
								Mijozlar haqida muhim ma'lumotlarni to'plash va saqlash uchun
								mo'ljallangan.
							</p>
						</div>
						<div className=' w-[283px] h-[100px]'>
							<div className=' flex items-center gap-1'>
								<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
								<h2 className='text-[20px] font-[600]'>
									Mijozlar bilan muloqot
								</h2>
							</div>
							<p className='text-[14px]'>
								Mijozlar bilan samarali aloqa o'rnatish va ularni
								qo'llab-quvvatlashga imkon beradi.
							</p>
						</div>
						<div className=' w-[283px] h-[100px]'>
							<div className='flex items-center gap-1'>
								<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
								<h2 className='text-[20px] font-[600]'>Tahlil</h2>
							</div>
							<p className='text-[14px]'>
								Mijozlar haqida to'plangan ma'lumotlarni tahlil qilish va
								qarorlar qabul qilishga yordam beradi.
							</p>
						</div>
						<div>
							<p className='text-[14px] mt-[10px]'>
								Texnik vazifa tayyorlab berish: 5-10 kun
							</p>
							<p className='text-[14px] mt-[10px]'>
								Sayt sahifalar soni: 10 yoki undan yuqori
							</p>
							<p className='text-[14px] mt-[10px]'>
								Veb Dizayn: 7-10 kun mehnat. Narxi: $300-500
							</p>
						</div>
						<button className='w-[153px] h-[47px] borderRed border border-white/30 bg-white/20 rounded-lg hover:bg-white hover:text-main duration-300 font-bold'>
							Buyurtma Berish
						</button>
						<img
							src={usersIcon}
							alt='documents icons'
							className='absolute bottom-0 right-4 w-[98px]'
						/>
					</div>
					<div className='absolute s-shadows bottom-[30%] right-3'></div>
					<div className='absolute s-shadows bottom-[50%] left-0'></div>
				</div>
				{/* 5 */}
				<div
					className='w-full min-h-[1000px] border border-white/30 bg-white/10 rounded-2xl flex-col overflow-hidden flex lg:hidden mt-[100px]'
					data-aos='fade-up'
					data-aos-anchor-placement='top-bottom'
				>
					<div className='w-[100%] h-[332px] '>
						<img
							src={asosiyXizmatlarimiz}
							alt='Sayt xizmatlari'
							className='w-full object-cover h-full'
						/>
					</div>
					<div className='w-[100%] min-h-[400px] relative px-5 py-10 flex flex-col justify-between gap-[15px] items-start text-white'>
						<h2 className='text-[30px] font-bold'>ERP sahifalari</h2>

						<div className=' w-[283px] h-[100px]'>
							<div className=' flex items-center gap-1 '>
								<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
								<h2 className='text-[20px] font-[600]'>
									Butun Korxona Integratsiyasi
								</h2>
							</div>
							<p className='text-[14px]'>
								Turli bo'limlarni birlashtirib, ma'lumot almashinuvini
								optimallashtiradi.
							</p>
						</div>
						<div className=' w-[283px] h-[100px]'>
							<div className=' flex items-center gap-1'>
								<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
								<h2 className='text-[20px] font-[600]'>Avtomatlashtirish</h2>
							</div>
							<p className='text-[14px]'>
								Ko'pgina jarayonlarni avtomatlashtirib, vaqt va resurslarni
								tejaydi.
							</p>
						</div>
						<div className=' w-[283px] h-[100px]'>
							<div className='flex items-center gap-1'>
								<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
								<h2 className='text-[20px] font-[600]'>Tahlil va xabarnoma</h2>
							</div>
							<p className='text-[14px]'>
								Korxona faoliyatini tahlil qilish va muhim xabarnomalarni olish
								imkonini beradi.
							</p>
						</div>
						<div>
							<p className='text-[14px] mt-[10px]'>
								Texnik vazifa tayyorlab berish: 5-10 kun
							</p>
							<p className='text-[14px] mt-[10px]'>
								Sayt sahifalar soni: 10 yoki undan yuqori
							</p>
							<p className='text-[14px] mt-[10px]'>
								Veb Dizayn: 7-10 kun mehnat. Narxi: $300-500
							</p>
						</div>
						<button className='w-[153px] h-[47px] borderRed border border-white/30 bg-white/20 rounded-lg hover:bg-white hover:text-main duration-300 font-bold'>
							Buyurtma Berish
						</button>
						<img
							src={tangaIcon}
							alt='documents icons'
							className='absolute bottom-0 right-4 w-[98px]'
						/>
					</div>
					<div className='absolute s-shadows bottom-0 '></div>
					<div className='absolute s-shadows bottom-[50%] left-0'></div>
				</div>
				{/* 6 */}
				<div
					className='w-full min-h-[1000px] border border-white/30 bg-white/10 rounded-2xl flex-col overflow-hidden flex lg:hidden mt-[100px]'
					data-aos='fade-up'
					data-aos-anchor-placement='top-bottom'
				>
					<div className='w-[100%] h-[332px] '>
						<img
							src={asosiyXizmatlarimiz}
							alt='Sayt xizmatlari'
							className='w-full object-cover h-full'
						/>
					</div>
					<div className='w-[100%] min-h-[400px] relative px-5 py-10 flex flex-col justify-between gap-[15px] items-start text-white'>
						<h2 className='text-[30px] font-bold'>Landing sahifalar</h2>

						<div className=' w-[283px] h-[100px]'>
							<div className=' flex items-center gap-1 '>
								<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
								<h2 className='text-[20px] font-[600]'>Qisqa va ta'sirli</h2>
							</div>
							<p className='text-[14px]'>
								Mijozni birinchi qarashda qiziqtiradigan va uni keyingi qadamga
								undaydigan muhim ma'lumotlarni taqdim etadi.
							</p>
						</div>
						<div className=' w-[283px] h-[100px]'>
							<div className=' flex items-center gap-1'>
								<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
								<h2 className='text-[20px] font-[600]'>Maqsadli</h2>
							</div>
							<p className='text-[14px]'>
								Aniq maqsadga yo'naltirilgan bo'lib, mijozni maxsus harakatga
								undashga xizmat qiladi.
							</p>
						</div>
						<div className=' w-[283px] h-[100px]'>
							<div className='flex items-center gap-1'>
								<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
								<h2 className='text-[20px] font-[600]'>Tez yuklanuvchi</h2>
							</div>
							<p className='text-[14px]'>
								Mijozlarning sabr-toqatiga ta'sir qilmaslik uchun iloji boricha
								tez yuklanadi.
							</p>
						</div>
						<div>
							<p className='text-[14px] mt-[10px]'>
								Texnik vazifa tayyorlab berish: 1 kun
							</p>
							<p className='text-[14px] mt-[10px]'>
								Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismdan
								iborat bo’ladi.)
							</p>
							<p className='text-[14px] mt-[10px]'>
								Veb Dizayn: 10-15 soatlik mehnat.
							</p>
						</div>
						<button className='w-[153px] h-[47px] borderRed border border-white/30 bg-white/20 rounded-lg hover:bg-white hover:text-main duration-300 font-bold'>
							Buyurtma Berish
						</button>
						{/* <img
							src={serviceIcon}
							alt='documents icons'
							className='absolute bottom-0 right-1'
						/> */}
					</div>
					<div className='absolute s-shadows bottom-3 right-3'></div>
				</div>
				{/* 7*/}
				<div
					className='w-full min-h-[1000px] border border-white/30 bg-white/10 rounded-2xl flex-col overflow-hidden flex lg:hidden mt-[100px]'
					data-aos='fade-up'
					data-aos-anchor-placement='top-bottom'
				>
					<div className='w-[100%] h-[332px] '>
						<img
							src={asosiyXizmatlarimiz}
							alt='Sayt xizmatlari'
							className='w-full object-cover h-full'
						/>
					</div>
					<div className='w-[100%] min-h-[400px] relative px-5 py-10 flex flex-col justify-between gap-[15px] items-start text-white'>
						<h2 className='text-[30px] font-bold'>Landing sahifalar</h2>

						<div className=' w-[283px] h-[100px]'>
							<div className=' flex items-center gap-1 '>
								<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
								<h2 className='text-[20px] font-[600]'>Qisqa va ta'sirli</h2>
							</div>
							<p className='text-[14px]'>
								Mijozni birinchi qarashda qiziqtiradigan va uni keyingi qadamga
								undaydigan muhim ma'lumotlarni taqdim etadi.
							</p>
						</div>
						<div className=' w-[283px] h-[100px]'>
							<div className=' flex items-center gap-1'>
								<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
								<h2 className='text-[20px] font-[600]'>Maqsadli</h2>
							</div>
							<p className='text-[14px]'>
								Aniq maqsadga yo'naltirilgan bo'lib, mijozni maxsus harakatga
								undashga xizmat qiladi.
							</p>
						</div>
						<div className=' w-[283px] h-[100px]'>
							<div className='flex items-center gap-1'>
								<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
								<h2 className='text-[20px] font-[600]'>Tez yuklanuvchi</h2>
							</div>
							<p className='text-[14px]'>
								Mijozlarning sabr-toqatiga ta'sir qilmaslik uchun iloji boricha
								tez yuklanadi.
							</p>
						</div>
						<div>
							<p className='text-[14px] mt-[10px]'>
								Texnik vazifa tayyorlab berish: 1 kun
							</p>
							<p className='text-[14px] mt-[10px]'>
								Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismdan
								iborat bo’ladi.)
							</p>
							<p className='text-[14px] mt-[10px]'>
								Veb Dizayn: 10-15 soatlik mehnat.
							</p>
						</div>
						<button className='w-[153px] h-[47px] borderRed border border-white/30 bg-white/20 rounded-lg hover:bg-white hover:text-main duration-300 font-bold'>
							Buyurtma Berish
						</button>
						{/* <img
							src={serviceIcon}
							alt='documents icons'
							className='absolute bottom-0 right-1'
						/> */}
					</div>
					<div className='absolute s-shadows bottom-3 right-3'></div>
				</div>
				{/* responsive */}
				{/* 8 */}
				<div
					className='w-full min-h-[1000px] border border-white/30 bg-white/10 rounded-2xl flex-col overflow-hidden flex lg:hidden mt-[100px]'
					data-aos='fade-up'
					data-aos-anchor-placement='top-bottom'
				>
					<div className='w-[100%] h-[332px] '>
						<img
							src={asosiyXizmatlarimiz}
							alt='Sayt xizmatlari'
							className='w-full object-cover h-full'
						/>
					</div>
					<div className='w-[100%] min-h-[400px] relative px-5 py-10 flex flex-col justify-between gap-[15px] items-start text-white'>
						<h2 className='text-[30px] font-bold'>Landing sahifalar</h2>

						<div className=' w-[283px] h-[100px]'>
							<div className=' flex items-center gap-1 '>
								<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
								<h2 className='text-[20px] font-[600]'>Qisqa va ta'sirli</h2>
							</div>
							<p className='text-[14px]'>
								Mijozni birinchi qarashda qiziqtiradigan va uni keyingi qadamga
								undaydigan muhim ma'lumotlarni taqdim etadi.
							</p>
						</div>
						<div className=' w-[283px] h-[100px]'>
							<div className=' flex items-center gap-1'>
								<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
								<h2 className='text-[20px] font-[600]'>Maqsadli</h2>
							</div>
							<p className='text-[14px]'>
								Aniq maqsadga yo'naltirilgan bo'lib, mijozni maxsus harakatga
								undashga xizmat qiladi.
							</p>
						</div>
						<div className=' w-[283px] h-[100px]'>
							<div className='flex items-center gap-1'>
								<div className='bg-white w-[20px] h-[20px] rounded-md'></div>
								<h2 className='text-[20px] font-[600]'>Tez yuklanuvchi</h2>
							</div>
							<p className='text-[14px]'>
								Mijozlarning sabr-toqatiga ta'sir qilmaslik uchun iloji boricha
								tez yuklanadi.
							</p>
						</div>
						<div>
							<p className='text-[14px] mt-[10px]'>
								Texnik vazifa tayyorlab berish: 1 kun
							</p>
							<p className='text-[14px] mt-[10px]'>
								Sayt sahifalar soni: 1 (har bir sahifa minimum 5 ta qismdan
								iborat bo’ladi.)
							</p>
							<p className='text-[14px] mt-[10px]'>
								Veb Dizayn: 10-15 soatlik mehnat.
							</p>
						</div>
						<button className='w-[153px] h-[47px] borderRed border border-white/30 bg-white/20 rounded-lg hover:bg-white hover:text-main duration-300 font-bold'>
							Buyurtma Berish
						</button>
						{/* <img
							src={serviceIcon}
							alt='documents icons'
							className='absolute bottom-0 right-1'
						/> */}
					</div>
					<div className='absolute s-shadows bottom-3 right-3'></div>
				</div>
			</div>
		</div>
	)
}

export default AsosiyXizmatlar
