import { createBrowserRouter } from "react-router-dom";
import { Timeline } from "./pages/Timeline";
import { Status } from "./pages/Status";
import { Default } from "./layout/Dafult";
import { Profile } from "./pages/Profile";
import { Search } from "./pages/Search";
import { More } from "./pages/More";


export const router = createBrowserRouter([
    {
        path: '/',
        element:  <Default />,
        children: [
            {
                path: '/',
                element: <Timeline />
            },
            {
                path: '/status/:content',
                element: <Status />
            },
            {
                path: '/user',
                element: <Profile />
            },
            {
                path: '/search',
                element: <Search />
            },
            {
                path: '/more',
                element: <More />
            },
        ]
    }
])