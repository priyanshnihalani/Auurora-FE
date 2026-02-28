import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import TermsConditions from "./pages/termsconditions";
import StaticLayout from "./Layout/StaticLayout";
import PrivacyPolicy from "./pages/privacypolicy";
import ContactUs from "./pages/contactus";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <StaticLayout />,
      children: [
        { path: "", element: <Home /> },
        { path: "terms-conditions", element: <TermsConditions /> },
        { path: "privacypolicy", element: <PrivacyPolicy /> },
        { path: "contactus", element: <ContactUs /> }
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
export default App
