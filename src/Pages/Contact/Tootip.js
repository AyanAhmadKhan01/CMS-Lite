import React, {useState } from "react";

const Tootip = ({ children, tooltipText}) => {
    const [isVisible, setIsVisible] = useState(false);

    const showTooltip = () => {
        setIsVisible(true);
    };

    const hideTooltip = () => {
        setIsVisible(false);
    };

    return (
        <div 
        className="tooltip-container" 
        onMouseEnter={showTooltip} 
        onMouseLeave={hideTooltip}
      >
        {children}
        {isVisible && <div className="tooltip-box">{tooltipText}</div>}
      </div>
    );
};

export default Tootip;