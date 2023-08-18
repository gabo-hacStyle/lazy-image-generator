'use client'
import {useState} from 'react'
import type { MouseEventHandler } from 'react';
import { RandomFox } from "@/components/RandomFox"

//Generates a random numer from 1 - 123 to get the foxes
const random = () => Math.floor(Math.random() * 123)+ 1 ;

//Generates a simple unique id to simulate a api 
const generateId = () => Math.random().toString(36).substr(2,9)

type ImageItem = {id: string, url: string}

export default function Home() {
  const [images, setImages] = useState<Array<ImageItem>>([])

  const addNewfox: MouseEventHandler<HTMLButtonElement> = (e) => {
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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
  

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <h1 className="text-5xl underline">
          Random Fox generator
        </h1>
        <button
          onClick={addNewfox}  
        >

          See a new fox!

        </button>
        {
          images.map((image, index) => (
            <div className="p-4"
              key={index}
            >
              <RandomFox image={image.url}/>
            </div>
          ))
        }
        
      </div>
    </main>
  )
}
