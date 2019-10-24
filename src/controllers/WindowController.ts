import React, {useState} from 'react'

export const getWindowDimensions = () => {
    const {innerWidth: width, innerHeight: height} = window
    return {width, height}
}

export const isMobileWidth = (totalWidth: number): boolean => {
    return totalWidth < 500
}

/** Also reduces top position, but does not increase font size. */
export const isSmallerHeight = (totalHeight: number): boolean => {
    return totalHeight < 700
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

                if (pageHeader.current) {
                    pageHeader.current.style.transform = 'translate3d(0,' + windowScrollTop + 'px,0)'
                } else {
                    console.error('WindowController:useWindowDimensions: Could not determine window with.')
                }
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
