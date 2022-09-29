import React, { useContext, useState } from "react";
import Context from "../../../../context/Context";

function CourseTopic(props) {
    const { onChangeTopic } = props
    const { topics } = useContext(Context);
    const [checked, setChecked] = useState();

    const handleChangeTopic = (e) => {
        let topic = e.target.value;

        setChecked(topic)
        onChangeTopic(topic)
    }

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
                            onChange={e => handleChangeTopic(e)}
                            checked={topic.value === checked}
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
