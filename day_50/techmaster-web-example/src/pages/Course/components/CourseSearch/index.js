import React, { useState } from "react";

function CourseSearch(props) {

    return (
        <div className="row">
            <div className="col-md-4">
                <div className="seach-form d-flex align-items-center rounded shadow-sm mb-4 pe-3">
                    <input type="text" placeholder="Tìm kiếm khóa học"
                        className="form-control border-0 seach-form-input" />
                    <span className="text-black-50 seach-form-button"><i
                        className="fa-solid fa-magnifying-glass"></i></span>
                </div>
            </div>
        </div>
    );
}

export default CourseSearch;