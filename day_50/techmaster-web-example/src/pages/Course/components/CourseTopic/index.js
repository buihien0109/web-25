import React, { useContext, useState } from "react";
import Context from "../../../../context/Context";

function CourseTopic(props) {
    const { topics } = useContext(Context);

    return (
        <div class="col-md-3">
            <h2 class="fs-5 mb-4">Chủ đề</h2>
            <div class="topic-container">
                {topics.map((topic, index) => (
                    <div key={index} class="topic-item input-group d-flex align-items-center mb-1">
                        <input
                            type="radio"
                            value={topic.value}
                            id={topic.value}
                        />
                        <label htmlFor={topic.value} class="ms-2 fs-5">
                            {topic.name}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CourseTopic;
