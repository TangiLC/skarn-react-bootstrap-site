import { Routes, Route, useNavigate } from "react-router-dom";


function App() {
  return (
    <Routes>
				<Route path="/" element={<HomePage />} />
        
    </Routes>
  );
}

export default App;
