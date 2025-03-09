import Aos from 'aos'
import Navbar from './assets/Layout/navbar/navbar'
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
		</>
	)
}

export default App
