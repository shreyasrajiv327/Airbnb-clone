import React from "react"
import Navbar from "../../airbnbclone/src/components/Navbar"
import Hero from "../../airbnbclone/src/components/Hero"
import './index.css'
import Card from "../../airbnbclone/src/components/Card"
import data from "./data"
/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

export default function App() {
            // <Hero />
    const cards = data.map(item => {
        return (
            <Card 
                key ={item.id}//unique identifier basically like a primary key
                item={item}
                //{  /*img={item.coverImg}
                //rating={item.stats.rating}
                //reviewCount={item.stats.reviewCount}
                //location={item.location}
                //title={item.title}
                //price={item.price}*/}
               
                
            />
        )
    })        
  
    return (
        <div>
            <Navbar />
            <Hero/>
            <section className="cards-list">
                {cards}
            </section>
        </div>
    )
}