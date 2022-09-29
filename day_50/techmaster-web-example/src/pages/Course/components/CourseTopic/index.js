import React, { useState } from "react";

function CourseTopic(props) {
    return (
        <div class="col-md-3">
            <h2 class="fs-5 mb-4">Chủ đề</h2>
            <div class="topic-container">
                <div class="topic-item input-group d-flex align-items-center mb-1">
                    <input type="radio" value="Backend" id="backend" name="topic" />
                    <label for="backend" class="ms-2 fs-5">Lập trình Backend</label>
                </div>
                <div class="topic-item input-group d-flex align-items-center mb-1">
                    <input type="radio" value="Frontend" id="frontend" name="topic" />
                    <label for="frontend" class="ms-2 fs-5">Lập trình Frontend</label>
                </div>
                <div class="topic-item input-group d-flex align-items-center mb-1">
                    <input type="radio" value="Di động" id="mobile" name="topic" />
                    <label for="mobile" class="ms-2 fs-5">Lập trình di động</label>
                </div>
                <div class="topic-item input-group d-flex align-items-center mb-1">
                    <input type="radio" value="Database" id="database" name="topic" />
                    <label for="database" class="ms-2 fs-5">Cơ sở dữ liệu</label>
                </div>
            </div>
        </div>
    );
}

export default CourseTopic;