import React, {useState} from 'react'

export const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window
    return { width, height }
}

export const useWindowDimensions = (pageHeader: React.RefObject<HTMLDivElement>) => {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions())

    // @ts-ignore
    React.useEffect(() => {
        const handleResize = () => {
            setWindowDimensions(getWindowDimensions())
        }
        window.addEventListener('resize', handleResize)

        if (window.innerWidth < 991) {
            const updateScroll = () => {
                const windowScrollTop = window.pageYOffset / 3

                if (pageHeader.current) {pageHeader.current.style.transform = 'translate3d(0,' + windowScrollTop + 'px,0)'}
                else {console.error('WindowController:useWindowDimensions: Could not determine window with.')}
            }

            window.addEventListener('scroll', updateScroll)

            return function cleanup() {
                window.removeEventListener('scroll', updateScroll)
                window.removeEventListener('resize', handleResize)
            }
        }
        return function cleanup() {
            window.removeEventListener('resize', handleResize)
        }
    })
    return windowDimensions
}