import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({product}) {
  return (
    <Link to={`/products/${product.id}`}>
    <div className="border p-4 rounded-lg hover:shadow-lg transition">
        <img src={product.image} className="h-60 w-full object-cover" />
        <h3 className="mt-2 font-semibold">{product.title}</h3>
        <p>${product.price}</p>
      </div>
    </Link>
  )
}
