import React from 'react'

function CourseItem(props) {
    return (
        <div class="col-md-4">
            <a href="./detail.html?id=1">
                <div class="course-item shadow-sm rounded mb-4">
                    <div class="course-item-image">
                        <img src="https://media.techmaster.vn/api/static/8028/bpfneoc51co8tcg6lek0"
                            alt="khoa hoc" />
                    </div>
                    <div class="course-item-info p-3">
                        <h2 class="fs-5 mb-4 text-dark">
                            Spring Boot - Web Back End
                        </h2>
                        <div
                            class="d-flex justify-content-between align-items-center fw-light text-black-50">
                            <p class="type">Trực tuyến</p>
                            <p class="rating">
                                5
                                <span class="text-warning"><i class="fa-solid fa-star"></i></span>
                            </p>
                        </div>
                        <p class="price text-danger fs-5">
                            1.000.000 VND
                        </p>
                    </div>
                </div>
            </a>
        </div>
    )
}

export default CourseItem