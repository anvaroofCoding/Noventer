import { useRoutes } from 'react-router-dom'
import Home from '../assets/pages/home.jsx'

const Router = () => {
	return useRoutes([
		{
			path: '/',
			element: <Home />,
		},
		// {
		// 	path: '/',
		// 	element: <About />,
		// },
	])
}

export default Router
