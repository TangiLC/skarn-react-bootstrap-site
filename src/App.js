import { Routes, Route, useNavigate } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Page404 />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
