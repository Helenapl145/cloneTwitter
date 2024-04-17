
import { Route, Routes } from "react-router-dom";
import { Status } from "../pages/Status";
import { Timeline } from "../pages/Timeline";



export function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Timeline />}/>
            <Route path="/status/:content" element={<Status />}/>
        </Routes>
    )
}

