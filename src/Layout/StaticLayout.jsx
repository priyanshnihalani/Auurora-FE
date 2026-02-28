import { Outlet } from "react-router-dom"
import Header from "../component/header"
import Footer from "../component/footer"
import ScrollToTop from "../component/scrollToTop"

const StaticLayout = () => {
    return (
        <>
            <ScrollToTop />
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default StaticLayout