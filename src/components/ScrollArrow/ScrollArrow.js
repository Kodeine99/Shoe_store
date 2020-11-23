import React, { useState } from 'react';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import './ScrollArrow.css';


function ScrollArrow() {
    
    const [showScroll, setScroll] = useState(false);

    const checkScrollTop = () => {
        if (!showScroll && window.pageYOffset > 400) {
            setScroll(true);
        } else if (showScroll && window.pageYOffset <= 400) {
            setScroll(false);
        }
    };

    const scrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', checkScrollTop)

    return (
        <div>
            <ArrowUpwardIcon
                className="scrollTop"
                onClick={scrollTop}
                style={{height: 40, display: showScroll ? 'flex' : 'none'}}
            />    
        </div>
    );
}

export default ScrollArrow;
