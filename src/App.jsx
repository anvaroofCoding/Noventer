import Aos from 'aos'
import Navbar from './assets/Layout/navbar/navbar'
import Comunications from './assets/pages/comunications.jsx'
import Router from './router/router.jsx'

function App() {
	Aos.init()

	return (
		<>
			<Navbar />
			<Router />
			{/* <Outlet /> */}
			{/* <About /> */}
			{/* <Footer /> */}
			<Comunications />
		</>
	)
}

export default App
