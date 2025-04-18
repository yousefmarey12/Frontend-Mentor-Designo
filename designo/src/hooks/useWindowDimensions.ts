import { useEffect, useState } from "react";
function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height
    };
}

function getViewportDeviceType(viewport: number) {
    if (+viewport > 1200) {
        return 'desktop'
    }
    else if (+viewport > 768) {
        return 'tablet'
    }
    else {
        return 'mobile'
    }

}
export default function useWindowDimensions() {
    const [viewport, setViewport] = useState(getViewportDeviceType(getWindowDimensions().width))
    useEffect(() => {
        function handleResize() {

            if (getViewportDeviceType(getWindowDimensions().width) != viewport) {

                setViewport(getViewportDeviceType(getWindowDimensions().width))
            }
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [viewport]);

    return viewport;
}