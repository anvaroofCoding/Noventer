// import { Button, Drawer, Dropdown, Space } from 'antd'
// import { Divide as Hamburger } from 'hamburger-react'
// import React, { useState } from 'react'

// import { Link } from 'react-router-dom'
// import logo from '../../images/svg/cite logo.svg'

// const Navbar = () => {
// 	const [Open, setOpen] = useState(false)
// 	const showDrawer = () => {
// 		setOpen(true)
// 	}
// 	const onClose = () => {
// 		setOpen(false)
// 	}

// 	const items = [
// 		{
// 			key: '1',
// 			label: (
// 				<a
// 					target='_blank'
// 					rel='noopener noreferrer'
// 					// href='https://www.antgroup.com'
// 				>
// 					Ru
// 				</a>
// 			),
// 		},
// 		{
// 			key: '2',
// 			label: (
// 				<a
// 					target='_blank'
// 					rel='noopener noreferrer'
// 					// href='https://www.aliyun.com'
// 				>
// 					En
// 				</a>
// 			),
// 		},
// 	]
// 	return (
// 		<div className='bg-midnight sticky top-0 z-1000'>
// 			<div className='container h-[99px] hidden lg:flex justify-between items-center text-white'>
// 				<div>
// 					<img src={logo} alt='Noventer' />
// 				</div>
// 				<ul className='flex gap-[38px]'>
// 					<Link to={'/'}>
// 						<li className='hover:bg-white/10 border border-midnight p-2 hover:border-white/30 rounded-xl duration-200'>
// 							Bosh Sahifa
// 						</li>
// 					</Link>
// 					<Link to={'/portfolio'}>
// 						<li className='hover:bg-white/10 border border-midnight p-2 hover:border-white/30 rounded-xl duration-200'>
// 							Portfolio
// 						</li>
// 					</Link>
// 					<Link to={'/xizmatlar'}>
// 						<li className='hover:bg-white/10 border border-midnight p-2 hover:border-white/30 rounded-xl duration-200'>
// 							Xizmatlar
// 						</li>
// 					</Link>
// 					<a href='#aloqa'>
// 						<li className='hover:bg-white/10 border border-midnight p-2 hover:border-white/30 rounded-xl duration-200'>
// 							Aloqa
// 						</li>
// 					</a>
// 				</ul>
// 				<div className='flex gap-[30px] items-center justify-center'>
// 					<Space direction='vertical'>
// 						<Space wrap>
// 							<Dropdown
// 								menu={{
// 									items,
// 								}}
// 								placement='bottomLeft'
// 								arrow
// 							>
// 								<Button
// 									style={{
// 										height: '47px',
// 										width: '73px',
// 										background: 'transparent',
// 										color: 'white',
// 										border: 'none',
// 									}}
// 								>
// 									Uz
// 								</Button>
// 							</Dropdown>
// 						</Space>
// 					</Space>
// 					{/* button bor
// 					 */}
// 					<a href='#loyha'>
// 						<button className='w-[153px] h-[47px] borderRed border border-white/30 bg-white/20 rounded-lg hover:bg-white hover:text-main duration-300 font-bold'>
// 							Loyiha bormi ?
// 						</button>
// 					</a>
// 				</div>
// 			</div>
// 			<div className='container h-[68px]  flex justify-between items-center lg:hidden'>
// 				<div>
// 					<Space direction='vertical'>
// 						<Space wrap>
// 							<Dropdown
// 								menu={{
// 									items,
// 								}}
// 								placement='bottomLeft'
// 								arrow
// 							>
// 								<Button
// 									style={{
// 										height: '47px',
// 										width: '73px',
// 										background: 'transparent',
// 										color: 'white',
// 										border: 'none',
// 									}}
// 								>
// 									Uz
// 								</Button>
// 							</Dropdown>
// 						</Space>
// 					</Space>
// 				</div>
// 				<div>
// 					<img src={logo} alt='noventer' className='w-[179px]' />
// 				</div>
// 				<div className='w-[73px] h-[48px] flex justify-center items-center '>
// 					{/* <IoMenu className='text-white text-[20px]' /> */}
// 					<Hamburger
// 						toggled={Open}
// 						toggle={setOpen}
// 						color='white'
// 						size={20}
// 						onToggle={showDrawer}
// 						// onClick={showDrawer}
// 					/>
// 				</div>
// 			</div>
// 			<Drawer title='Basic Drawer' onClose={onClose} open={open}>
// 				<p>Some contents...</p>
// 				<p>Some contents...</p>
// 				<p>Some contents...</p>
// 			</Drawer>
// 		</div>
// 	)
// }

// export default Navbar

import { Button, Drawer, Dropdown, Space } from 'antd'
import { Divide as Hamburger } from 'hamburger-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/svg/cite logo.svg'

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false) // state nomini o'zgartirdik

	const showDrawer = () => {
		setIsOpen(true)
	}

	const onClose = () => {
		setIsOpen(false)
	}

	const items = [
		{
			key: '1',
			label: <a href='#'>Ru</a>,
		},
		{
			key: '2',
			label: <a href='#'>En</a>,
		},
	]

	return (
		<div className='bg-midnight sticky top-0 z-1000'>
			<div className='container h-[99px] hidden lg:flex justify-between items-center text-white'>
				<div>
					<img src={logo} alt='Noventer' />
				</div>
				<ul className='flex gap-[38px]'>
					<Link to={'/'}>
						<li className='hover:bg-white/10 border border-midnight p-2 hover:border-white/30 rounded-xl duration-200'>
							Bosh Sahifa
						</li>
					</Link>
					<Link to={'/portfolio'}>
						<li className='hover:bg-white/10 border border-midnight p-2 hover:border-white/30 rounded-xl duration-200'>
							Portfolio
						</li>
					</Link>
					<Link to={'/xizmatlar'}>
						<li className='hover:bg-white/10 border border-midnight p-2 hover:border-white/30 rounded-xl duration-200'>
							Xizmatlar
						</li>
					</Link>
					<a href='#aloqa'>
						<li className='hover:bg-white/10 border border-midnight p-2 hover:border-white/30 rounded-xl duration-200'>
							Aloqa
						</li>
					</a>
				</ul>
				<div className='flex gap-[30px] items-center justify-center'>
					<Space direction='vertical'>
						<Dropdown menu={{ items }} placement='bottomLeft' arrow>
							<Button
								style={{
									height: '47px',
									width: '73px',
									background: 'transparent',
									color: 'white',
									border: 'none',
								}}
							>
								Uz
							</Button>
						</Dropdown>
					</Space>
					<a href='#loyha'>
						<button className='w-[153px] h-[47px] borderRed border border-white/30 bg-white/20 rounded-lg hover:bg-white hover:text-main duration-300 font-bold'>
							Loyiha bormi ?
						</button>
					</a>
				</div>
			</div>

			{/* Mobil versiya */}
			<div className='container h-[68px] flex justify-between items-center lg:hidden'>
				<Dropdown menu={{ items }} placement='bottomLeft' arrow>
					<Button
						style={{
							height: '47px',
							width: '73px',
							background: 'transparent',
							color: 'white',
							border: 'none',
						}}
					>
						Uz
					</Button>
				</Dropdown>

				<img src={logo} alt='noventer' className='w-[179px]' />

				<div className='w-[73px] h-[48px] flex justify-center items-center '>
					<Hamburger
						toggled={isOpen}
						toggle={setIsOpen}
						color='white'
						size={20}
					/>
				</div>
			</div>

			{/* Drawer modal */}
			<Drawer
				title='Menu'
				style={{
					background: 'black',
					color: 'white',
				}}
				closeIcon={<span style={{ color: 'white', fontSize: '20px' }}>✖</span>}
				onClose={onClose}
				open={isOpen}
			>
				<ul>
					<li className=' font-bold'>
						<Link to={'/'} onClick={onClose}>
							Bosh Sahifa
						</Link>
					</li>
					<li className=' font-bold'>
						<Link to={'/portfolio'} onClick={onClose}>
							Portfolio
						</Link>
					</li>
					<li className=' font-bold'>
						<Link to={'/xizmatlar'} onClick={onClose}>
							Xizmatlar
						</Link>
					</li>
					<li className=' font-bold'>
						<a href='#aloqa' onClick={onClose}>
							Aloqa
						</a>
					</li>
				</ul>
			</Drawer>
		</div>
	)
}

export default Navbar
