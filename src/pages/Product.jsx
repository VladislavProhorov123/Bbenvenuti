import React from 'react'
import { products } from '../data/products';
import { useParams } from 'react-router-dom';

export default function Product() {
  const { id } = useParams();

  const product = products.find(p => p.id === Number(id));

  if (!product) return <p>Not found</p>;
  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} />
      <p>{product.price}</p>
    </div>
  )
}
