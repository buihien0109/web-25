import useRandomColor from './useRandomColor';

function ColorBox() {
    const [color, handleChangeColor] = useRandomColor();

    return (
        <div
            onClick={handleChangeColor}
            style={{ width: 200, height: 200, backgroundColor: color }}
        ></div>
    )
}

export default ColorBox