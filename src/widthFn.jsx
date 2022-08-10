import { useState, useLayoutEffect } from 'react';

export let width=0;

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    });
    return (width=size[0]>size[1]?size[0]:size[1]);
}


export default useWindowSize;