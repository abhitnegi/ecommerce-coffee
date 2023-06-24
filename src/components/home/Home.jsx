import React from 'react'
import picture1 from '../assets/1st.jpg'
import picture2 from '../assets/download.jpg'
import './Home.css'

export default function Home() {
  return (
    <>
    <img src={picture1} alt="Coffee" />
    <div className="box">
      <div className="container">
        <br />
        <p>Coffee is a beverage prepared from roasted coffee beans. Darkly colored, bitter, and slightly acidic, coffee has a stimulating effect on humans, primarily due to its caffeine content. It has the highest sales in the world market for hot drinks. <br /><br />
        Seeds of the Coffea plant's fruits are separated to produce unroasted green coffee beans. The beans are roasted and then ground into fine particles that are typically steeped in hot water before being filtered out, producing a cup of coffee. It is usually served hot, although chilled or iced coffee is common. Coffee can be prepared and presented in a variety of ways (e.g., espresso, French press, caffè latte, or already-brewed canned coffee). Sugar, sugar substitutes, milk, and cream are often used to mask the bitter taste or enhance the flavor.</p>
      </div>
      <div className="image">
        <img src={picture2} alt="Coffee" />
      </div>
    </div>
    </>
  )
}
