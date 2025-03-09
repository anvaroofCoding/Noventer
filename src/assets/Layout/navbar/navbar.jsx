import { Button, Dropdown, Space } from 'antd'
import React from 'react'
import { IoMenu } from 'react-icons/io5'

import logo from '../../images/svg/cite logo.svg'

const Navbar = () => {
	const items = [
		{
			key: '1',
			label: (
				<a
					target='_blank'
					rel='noopener noreferrer'
					// href='https://www.antgroup.com'
				>
					Ru
				</a>
			),
		},
		{
			key: '2',
			label: (
				<a
					target='_blank'
					rel='noopener noreferrer'
					// href='https://www.aliyun.com'
				>
					En
				</a>
			),
		},
	]
	return (
		<div className='bg-midnight sticky top-0 z-1000'>
			<div className='container h-[99px] hidden lg:flex justify-between items-center text-white'>
				<div>
					<img src={logo} alt='Noventer' />
				</div>
				<ul className='flex gap-[38px]'>
					<li>Bosh Sahifa</li>
					<li>Portfolio</li>
					<li>Xizmatlar</li>
					<li>Aloqa</li>
				</ul>
				<div className='flex gap-[30px] items-center justify-center'>
					<Space direction='vertical'>
						<Space wrap>
							<Dropdown
								menu={{
									items,
								}}
								placement='bottomLeft'
								arrow
							>
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
					</Space>
					{/* button bor
					 */}
					<button className='w-[153px] h-[47px] borderRed border border-white/30 bg-white/20 rounded-lg hover:bg-white hover:text-main duration-300 font-bold'>
						Loyiha bormi ?
					</button>
				</div>
			</div>
			<div className='container h-[68px]  flex justify-between items-center lg:hidden'>
				<div>
					<Space direction='vertical'>
						<Space wrap>
							<Dropdown
								menu={{
									items,
								}}
								placement='bottomLeft'
								arrow
							>
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
					</Space>
				</div>
				<div>
					<img src={logo} alt='noventer' className='w-[179px]' />
				</div>
				<div className='w-[73px] h-[48px] flex justify-center items-center '>
					<IoMenu className='text-white text-[20px]' />
				</div>
			</div>
		</div>
	)
}

export default Navbar
