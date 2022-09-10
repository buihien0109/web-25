const Counter = () => {
    const [count, setCount] = React.useState(0);
    const [color, setColor] = React.useState("#333333");

    const plusCount = () => {
        let newCount = count + 1;
        changeColor(newCount);
        setCount(newCount); // Hàm setState là những hàm bất đồng bộ
    };

    const minusCount = () => {
        let newCount = count - 1;
        changeColor(newCount);
        setCount(newCount); // Hàm setState là những hàm bất đồng bộ
    };

    // Cách 1:
    // React.useEffect(() => {
    //     changeColor();
    // }, [count])

    const changeColor = (newCount) => {
        if(newCount > 0) {
            setColor("green");
        } else if(newCount == 0) {
            setColor("#333333")
        } else {
            setColor("red")
        }
    }

    return (
        <div className="main-container">
            <h1 className="title">Đếm số</h1>
            <h1 id="counter" style={{ color: color }}>
                {count}
            </h1>
            <div className="btn-container">
                <button className="btn counterBtn prevBtn" onClick={minusCount}>
                    Trừ
                </button>
                <button className="btn counterBtn nextBtn" onClick={plusCount}>
                    Cộng
                </button>
            </div>
        </div>
    );
};

// Tạo Root dom để render dữ liệu
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render dữ liệu
root.render(<Counter />);
