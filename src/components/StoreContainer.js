import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import StoreCategory from './StoreCategory'
import { PartContext } from "../contexts/PartContext"

export default function StoreContainer(props) {
    const { parts } = useContext(PartContext)
    const categories = []
    for (let obj in parts) {
        categories.push({ name: obj, image: parts[obj][0].url })
    }
    console.log(categories)
    return (
        <div>
            {categories.map((item, index) => {
                return (
                    <Link to={`/category/${index}`} key={index}>
                        <StoreCategory name={item.name} image={item.image} id={index} />
                    </Link>
                )
            })}
        </div>
    )
}