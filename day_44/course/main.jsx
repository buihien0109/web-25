const App = () => {
    return (
        <React.Fragment>
            <Header />

            <div class="course-container mt-5 mb-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                            <CourseFilter />
                        </div>

                        <div class="col-md-9">
                            <div class="row">
                                <div class="col-md-4">
                                    <CourseSearch />
                                </div>
                            </div>
                            <CourseList />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment>
    );
};

const Header = () => {
    return (
        <header className="header d-flex align-items-center">
            <div className="container-fluid">
                <div className="d-flex justify-content-start align-items-center">
                    <div className="logo">
                        <a href="#">
                            <img
                                src="https://techmaster.vn/resources/image/logo-techmaster/white/white_200x74.png"
                                alt="logo"
                            />
                        </a>
                    </div>
                    <div className="menu">
                        <a className="text-white text-uppercase ms-5" href="#">
                            Phòng lab
                        </a>
                        <a className="text-white text-uppercase ms-3" href="#">
                            Trực tuyến
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

const Footer = () => {
    return (
        <footer className="pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <h3 className="fs-5 mb-4">CHỦ SỞ HỮU WEBSITE</h3>
                        <p>Công ty TNHH TechMaster Vietnam Ltd</p>
                        <p>Số ĐKDN: 0105392153</p>
                        <p>Ngày cấp: 4-7-2011</p>
                        <p>Nơi cấp: Sở kế hoạch - đầu tư Hà nội</p>
                        <p>Người đại diện pháp luật: Lê Minh Thu</p>
                        <p>Phụ trách nội dung: Trịnh Minh Cường</p>
                    </div>
                    <div className="col-lg-3">
                        <h3 className="fs-5 mb-4">GIỚI THIỆU</h3>
                        <p>Học viện CNTT TechMaster</p>
                        <p>Giảng viên</p>
                        <p>Quy định</p>
                        <p>Hướng dẫn mua khóa học</p>
                        <p>Ưu đãi và hoàn trả học phí</p>
                        <p>Bảo vệ thông tin khách hàng</p>
                    </div>
                    <div className="col-lg-3">
                        <h3 className="fs-5 mb-4">TƯ VẤN TUYỂN SINH</h3>
                        <p>Phạm Thị Mẫn - 0963023185</p>
                        <p>manpham@techmaster.vn</p>
                        <p>Dương Đức Thịnh - 0987273764</p>
                        <p>thinh@techmaster.vn</p>
                        <p>Nguyễn Thanh Hương - 0382416368</p>
                        <p>huong@techmaster.vn</p>
                    </div>
                    <div className="col-lg-3">
                        <h3 className="fs-5 mb-4">ĐỊA CHỈ</h3>
                        <p>
                            Cơ sở 1: 14 ngõ 4, Nguyễn Đình Chiểu, Quận Hai Bà
                            Trưng, Hà Nội
                        </p>
                        <p>
                            Cơ sở 2: Tầng 12A, tòa nhà Viwaseen Tower, số 48, Tố
                            Hữu, Lê Văn Lương kéo dài, Hà Nội
                        </p>
                        <p>
                            Cơ sở 3: Tầng 5, số 13 Dịch Vọng Hậu, Cầu Giấy, Hà
                            Nội
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const CourseFilter = () => {
    return (
        <React.Fragment>
            <h2 className="fs-5 mb-4">Chủ đề</h2>
            <div className="topic-item input-group d-flex align-items-center mb-1">
                <input type="radio" value="Backend" id="backend" name="topic" />
                <label for="backend" className="ms-2 fs-5">Lập trình Backend</label>
            </div>
            <div className="topic-item input-group d-flex align-items-center mb-1">
                <input type="radio" value="Frontend" id="frontend" name="topic" />
                <label for="frontend" className="ms-2 fs-5">Lập trình Frontend</label>
            </div>
            <div className="topic-item input-group d-flex align-items-center mb-1">
                <input type="radio" value="Di động" id="mobile" name="topic" />
                <label for="mobile" className="ms-2 fs-5">Lập trình di động</label>
            </div>
            <div className="topic-item input-group d-flex align-items-center mb-1">
                <input type="radio" value="Database" id="database" name="topic" />
                <label for="database" className="ms-2 fs-5">Cơ sở dữ liệu</label>
            </div>
        </React.Fragment>
    )
}

const CourseSearch = () => {
    return (
        <div className="seach-form d-flex align-items-center rounded shadow-sm mb-4 pe-3">
            <input type="text" placeholder="Tìm kiếm khóa học" className="form-control border-0 seach-form-input" />
            <span className="text-black-50 seach-form-button"><i className="fa-solid fa-magnifying-glass"></i></span>
        </div>
    )
}

const CourseList = () => {
    return (
        <div className="course-list row">
            {[1,2,3,4,5,6].map(ele => <CourseItem key={ele}/>)}
        </div>
    )
}

const CourseItem = () => {
    return (
        <div className="col-md-4">
            <a href="#">
                <div className="course-item shadow-sm rounded mb-4">
                    <div className="course-item-image">
                        <img src="https://media.techmaster.vn/api/static/8028/bpfneoc51co8tcg6lek0"
                            alt="khoa hoc" />
                    </div>
                    <div className="course-item-info p-3">
                        <h2 className="fs-5 mb-3 text-dark">Spring Boot - Web Back End</h2>
                        <p className="type fw-light text-black-50">Trực tuyến</p>
                    </div>
                </div>
            </a>
        </div>
    )
}

// Tạo Root dom để render dữ liệu
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render dữ liệu
root.render(<App />);
