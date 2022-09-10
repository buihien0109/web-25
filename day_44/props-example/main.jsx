// Component App
const App = () => {
    const hobbyList = [
        { id: 1, name: "Chơi game" },
        { id: 2, name: "Đá bóng" },
        { id: 3, name: "Nghe nhạc" },
    ];

    const showInfo = (name) => {
        alert(name);
    };

    const user = {
        name: "Bùi Hiên",
        email: "hien@techmaster.vn",
        age: 25,
        address: "Thái bình",
        status: true,
    };

    return (
        <React.Fragment>
            <Hobby hobbyList={hobbyList} showInfo={showInfo} />
            <User user={user} {...user} />
        </React.Fragment>
    );
    // {...user} = name={user.name} email={user.email} age={user.age} address={user.address} status={user.status}
};

App.displayName = "Ứng dụng";

// Hiển thị thông tin user
const User = (props) => {
    console.log(props);
    const { name, email } = props.user;
    return (
        <div>
            <h2>Name : {name}</h2>
            <p>Email : {email}</p>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
        email: PropTypes.string,
        age: PropTypes.number,
        address: PropTypes.string,
        status: PropTypes.boolean,
    }),
};


// Hiển thị danh sách Sở thích (Component Hobby)
const Hobby = (props) => {
    const { hobbyList, showInfo } = props;
    console.log(hobbyList);

    return (
        <ul>
            {hobbyList.length > 0 &&
                hobbyList.map((hobby) => (
                    <li key={hobby.id} onClick={() => showInfo(hobby.name)}>
                        {hobby.name}
                    </li>
                ))}

            {hobbyList.length == 0 && <li>Không có sở thích</li>}
        </ul>
    );
};

Hobby.displayName = "Sở thích";

// Propstype checking
Hobby.propTypes = {
    hobbyList: PropTypes.array.isRequired,
    showInfo: PropTypes.func.isRequired,
};

// default props
Hobby.defaultProps = {
    hobbyList: [],
    showInfo: () => {
        alert("clicked");
    },
};

// Tạo Root dom để render dữ liệu
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render dữ liệu
root.render(<App />);
