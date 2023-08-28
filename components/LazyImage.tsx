import { useEffect, useRef, useState } from "react"
import type {ImgHTMLAttributes} from 'react'

type LazyImageProps = { 
        src: string,
    }
type ImageNative = ImgHTMLAttributes<HTMLImageElement>;

type Props = LazyImageProps & ImageNative

export const LazyImage = ({src, ...imageProps} : Props): JSX.Element => {
    const [currentSrc, setCurrentSrc] = useState(
        "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIwIiBoZWlnaHQ9IjMyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiLz4="
    )
    const node = useRef<HTMLImageElement>(null)
    useEffect(() => {
        //New observer
        const observer = new window.IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    console.log('Hey')
                    setCurrentSrc(src)
                }
            })
        })

        //Observe node
        if(node.current){
            observer.observe(node.current)
        }

        //Disconnect
        return () => {
            observer.disconnect()
        }
    }, [src])
    

    return (
        <img 
            ref={node}
            src={currentSrc} 
            {...imageProps}
        />
    )
}