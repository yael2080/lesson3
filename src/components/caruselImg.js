import React, { useState } from 'react';

export default function CaruselImg(props) {
   
    const [img, setImg] = useState([]);
    const [currentImage, setCurrentImage] = useState(0);
    const imageCount = React.Children.count(props.children);

    function returnCurrntImage(pageIndex) {
        const allChildProps = {  img, setImg };

        const child = React.Children.toArray(props.children)[pageIndex];
        return React.cloneElement(child, allChildProps);
    }
    
    return (
        <>
        <button
                disabled={currentImage === 0}
                onClick={(e) => setCurrentImage(v => v - 1)}
            >&lt; Previous Page
        </button>

        <button
        disabled={currentImage >= imageCount -1}
        onClick={(e) => setCurrentImage(v => v + 1)}
        >Next page &gt;</button>
        <br></br>
        {returnCurrntImage(currentImage)}
        
        </>
    );
}
