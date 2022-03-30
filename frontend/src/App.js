import { Route, Routes } from "react-router-dom";
import AddMusic from "./Pages/AddMusic";
import Musics from "./Pages/Musics";
import { ToastContainer } from "react-toastify"
function App() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Musics />} />
                <Route path='/add' element={<AddMusic />} />

            </Routes>
            <ToastContainer
                draggable
                pauseOnHover />
        </>
    );
}

export default App;
