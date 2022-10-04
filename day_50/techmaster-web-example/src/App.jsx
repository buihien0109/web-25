import Checkout from "pages/Checkout/index";
import Login from "pages/Login/index";
import OrderHistory from "pages/private/OrderHistory/index";
import PrivateRoutes from "pages/private/PrivateRoutes/index";
import Profile from "pages/private/Profile/index";
import SecurityAccount from "pages/private/SecurityAccount/index";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Course from "./pages/Course";
import CourseDetail from "./pages/Course/CourseDetail";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Project from "./pages/Project";
import ShoppingCart from "./pages/ShoppingCart";
import Track from "./pages/Track";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="lo-trinh" element={<Track />} />

                    <Route path="khoa-hoc">
                        <Route index element={<Course />} />
                        <Route path=":courseId" element={<CourseDetail />} />
                    </Route>

                    <Route path="san-pham-hoc-vien" element={<Project />} />
                    <Route path="bai-viet" element={<Blog />} />
                    <Route path="trung-tam" element={<About />} />
                    <Route path="gio-hang" element={<ShoppingCart />} />
                    <Route path="thanh-toan" element={<Checkout />} />
                    <Route path="login" element={<Login />} />

                    <Route element={<PrivateRoutes />}>
                        <Route path="ho-so-ca-nhan" element={<Profile />} />
                        <Route
                            path="lich-su-mua-hang"
                            element={<OrderHistory />}
                        />
                        <Route
                            path="bao-mat-tai-khoan"
                            element={<SecurityAccount />}
                        />
                    </Route>

                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </>
    );
}

export default App;
