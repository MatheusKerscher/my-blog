import { Outlet } from "react-router-dom"

import Banner from "components/Banner"

const DefaultPage = ({ children }) => {
    return (
        <main>
            <Banner />

            <Outlet />

            {children}
        </main>
    )
}

export default DefaultPage