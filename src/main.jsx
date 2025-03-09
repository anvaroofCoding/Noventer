import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
			{/* <Routes> */}
			{/* <Route path='/' element={<App />}>
					<Route path='/' element={<Home />} />
					<Route path='/' element={<About />} />
				</Route> */}
			<App />
			{/* </Routes> */}
		</BrowserRouter>
	</StrictMode>
)
