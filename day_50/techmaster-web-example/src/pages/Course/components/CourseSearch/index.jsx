import React, { useState } from "react";

function CourseSearch(props) {
    const { onSearchTerm } = props;
    const [value, setValue] = useState("");

    // Xử lý phần tìm kiếm
    const handleSearchTerm = () => {
        // Gửi giá trị cần tìm => component cha (Course)
        onSearchTerm(value)
    }

    return (
        <div className="row">
            <div className="col-md-4">
                <div className="seach-form d-flex align-items-center rounded shadow-sm mb-4 pe-3">
                    <input
                        type="text"
                        placeholder="Tìm kiếm khóa học"
                        className="form-control border-0 seach-form-input"
                        value={value}
                        onChange={e => setValue(e.target.value)}
                    />
                    <span className="text-black-50 seach-form-button" onClick={handleSearchTerm}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default CourseSearch;
