import React from 'react'

const Result = (props) => {
    const { data } = props
  return (
    <div>
      <div className="product">
        <img src={data.productImage} alt="" />
        <div className="description">
          <p>
              <b>{data.title}</b>
          </p>
          <p>
              <b>{data.price}</b>
          </p>
      </div>
      </div>
    </div>
  )
}

export default Result