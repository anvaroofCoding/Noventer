import { useRoutes } from 'react-router-dom'
import Home from '../assets/pages/home.jsx'
import Portfolio from '../projects/portfolio.jsx'
import Protun from '../projects/project/protun.jsx'
import Tourmad from '../projects/project/tourmad.jsx'
import Xizmatlar from '../service/xizmatlar.jsx'

const Router = () => {
	return useRoutes([
		{
			path: '/',
			element: <Home />,
		},
		{
			path: '/xizmatlar',
			element: <Xizmatlar />,
		},
		{
			path: '/portfolio',
			element: <Portfolio />,
		},
		{
			path: '/tourmad',
			element: <Tourmad />,
		},
		{
			path: '/protun',
			element: <Protun />,
		},
	])
}

export default Router
