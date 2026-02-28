import { Outlet } from "react-router-dom"
import Header from "../component/header"
import Footer from "../component/footer"

const StaticLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default StaticLayout