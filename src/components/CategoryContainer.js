import React, { useState, useContext } from 'react'
import { Link, Route, useParams, useRouteMatch } from 'react-router-dom'
import PartsCard from './PartsCard'
import { PartContext } from "../contexts/PartContext"
import { createGlobalStyle } from 'styled-components'

export default function CategoryContainer(props) {
    const { parts } = useContext(PartContext);
    console.log("parts", parts);
    const { id } = useParams()
    const match = useRouteMatch()

    const categories = []
    for (let obj in parts) {
        categories.push({ name: obj, image: parts[obj][0].url })
    }

    return (
        <div>
            {categories.length > 0 && parts[`${categories[id].name}`].map((item, index) => {
                return (
                    <Link to={`${match.url}/part/${item.id}`} key={index}>
                        <PartsCard part={item} />
                    </Link>
                )
            })}
        </div>
    )
}
