import React from 'react'

function CourseDetail() {
    return (
        <div className="course-container my-5">
            <div className="container">
                <div className="mb-4">
                    <nav style={{ '--bs-breadcrumb-divider': '>' }} aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <a href='#'>Khóa học</a>
                            </li>
                            <li className="breadcrumb-item active" aria-current="page">
                                Lập trình Javascript
                            </li>
                        </ol>
                    </nav>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="main p-4 shadow-sm">
                            <h2 className="course-title fs-5">
                                Lập trình Javascript
                            </h2>

                            <hr />

                            <div className="supporter d-flex align-items-center">
                                <div className="supporter-image">
                                    <img src=""
                                        alt="tư vấn viên" className="rounded-circle" />
                                </div>
                                <div className="ms-4 supporter-info">
                                    <p>
                                        <b>Tư vấn viên :</b>
                                        Nguyễn Đức Thịnh
                                    </p>
                                    <p>
                                        <b>Email :</b>
                                        thinh@techmaster.vn
                                    </p>
                                    <p className="mb-0">
                                        <b>Số điện thoại :</b>
                                        0987655441
                                    </p>
                                </div>
                            </div>

                            <hr />

                            <h2 className="course-title fs-5">
                                Thông tin khóa học
                            </h2>

                            <div className="course-description">
                                <p>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum labore fugiat voluptate, dicta veritatis maiores illo provident excepturi quisquam ut temporibus perferendis non eos eligendi vel magni beatae earum exercitationem? Eos pariatur dolorum distinctio quaerat quibusdam voluptas commodi, alias iste porro in illum nam odio esse veniam, suscipit quidem est rerum quos ab. Officia, ut harum labore minus iusto, iure excepturi fugiat soluta obcaecati in natus quidem possimus blanditiis delectus animi ratione quasi hic culpa, voluptas velit error mollitia unde dolorum totam. Illo, maiores recusandae dicta illum architecto consequuntur autem reprehenderit commodi dolores ipsa, cumque optio voluptates ducimus libero est sunt dignissimos soluta? Voluptatum tempore quo quae adipisci commodi error delectus totam sunt, fuga reiciendis iusto, atque enim excepturi eum quidem harum itaque amet nostrum magnam. Sunt cum facere unde ad qui repellendus obcaecati eius delectus possimus ipsum consequatur voluptatem distinctio tempore voluptates, suscipit voluptas sit facilis, alias, sequi dolore quas deleniti at? Voluptatem saepe voluptate asperiores ut quo culpa modi cum, illo, rem nesciunt fugit cupiditate magni, iste quod totam quis animi dolorem! Quasi nostrum minima, animi enim ratione hic illo culpa perferendis, sapiente nulla molestiae ad vel vitae optio saepe? Id suscipit tenetur, tempore iure fugit nihil placeat?
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="p-4 shadow-sm">
                            <div className="course-image mb-4">
                                <img src="https://media.techmaster.vn/api/static/36/bu7v9ks51co41h2qcttg" alt="Lập trình Javascript" />
                            </div>
                            <p>
                                Học phí :
                                <span className="fw-bold course-price">9.000.000 VND</span>
                            </p>
                            <p>
                                Hình thức học :
                                <span className="fw-bold course-type">onlab</span>
                            </p>
                            <button className="btn btn-success">
                                Thêm vào giỏ hàng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseDetail