import { useState } from "react";

const useToggle = (initValue) => {
    const [isShow, setIsShow] = useState(initValue);

    const handleToggle = () => {
        setIsShow(!isShow);
    }

    return [isShow, handleToggle];
}

export default useToggle;