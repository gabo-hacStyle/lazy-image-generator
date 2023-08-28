'use client'
import {useState} from 'react'
import type { MouseEventHandler } from 'react';
import { LazyImage } from "@/components/RandomImage"

//Generates a random numer from 1 - 123 to get the foxes
const random = () => Math.floor(Math.random() * 123)+ 1 ;

//Generates a simple unique id to simulate a api 
const generateId = () => Math.random().toString(36).substr(2,9)

type ImageItem = {id: string, url: string}

export default function Home() {
  const [images, setImages] = useState<Array<ImageItem>>([])

  const addNewImage: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    const newImageItem:ImageItem = {
      id: generateId(),
       url: 'https://randomfox.ca//images/'+ random() + '.jpg'
    }
    setImages([
      ...images,
      newImageItem
    ])
  }
  return (
    <>
      <nav className='fixed text-center bg-dark-orange w-full text- rounded pt-6'>
          <h1 className="text-5xl text-light-yellow">
            Random <b className='text-black'>Fox</b> generator
          </h1>

          <button 
            className='p-1 bg-light-yellow mt-6 mb-2 rounded p-1 pr-2 pl-2 text-black'
            onClick={addNewImage}> See a new fox!</button>
      </nav>

      <main className="flex min-h-screen flex-col items-center justify-between p-24 pt-32">
  
        
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
        
        
        {
          images.map(({id, url}) => (
            <div className="p-4"
              key={id}
            >
              <LazyImage 
                title="RandomFox"
                src={url}
                width={300}
                height='auto'
                className="rounded bg-gray-300"  
              />

            </div>
          ))
        }
        
      </div>
      </main>
    </>
    
  )
}
