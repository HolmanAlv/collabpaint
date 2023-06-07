import React, { useState } from 'react';
import { ChromePicker } from 'react-color';
import ColorCard from './ColorCard';

function ColorPicker({ handleUtensil }) {
    const [isVisible, setIsVisible] = useState(false);
    const [color, setColor] = useState('#000000');

    const handleClick = () => {
        setIsVisible(!isVisible);
    };

    const handleChange = (newColor) => {
        setColor(newColor.hex);
    };

    return (
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '1px' }}>

            <ColorCard handleUtensil={handleUtensil} key={color} color={color} />
            <button class="toolButton" onClick={handleClick}>🎨</button>

            {isVisible && (
                <div
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        zIndex: 9999,
                    }}
                >
                    <ChromePicker color={color} onChange={handleChange} />
                </div>
            )}
        </div>
    );
}

export default ColorPicker;
