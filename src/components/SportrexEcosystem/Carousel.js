import React from 'react';


const Carousel = ({ children, ...props }) => {
    
    return (
    <div className="carousel" {...props}>
        {children}
    </div>
)
}

export default Carousel;