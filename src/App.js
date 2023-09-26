import { Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import Page404 from "./pages/Page404";
import './styles.css'

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/homepage" element={<HomePage />} />
				<Route path="/contact" element={<ContactPage />} />
				<Route path="*" element={<Page404 />} />
			</Routes>
			<Footer />
		</>
	);
}
export default App;