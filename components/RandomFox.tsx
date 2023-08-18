import { useEffect, useRef } from "react"

type Props = { image: string}
export const RandomFox = ({image} : Props): JSX.Element => {
    
    const node = useRef<HTMLImageElement>(null)
    useEffect(() => {
        //New observer
        const observer = new window.IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if(entry.isIntersecting){
                    console.log('Hey')
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
    }, [])
    

    return (
        <img 
            ref={node}
            src={image} 
            width={320}
            height="auto"
            className="rounded"
        />
    )
}