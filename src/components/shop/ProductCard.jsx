import { Heart, ShoppingBag } from 'lucide-react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { useWishlist } from '../../context/WishlistContext'

export default function ProductCard({ product }) {
  const { addItem } = useCart()
  const { toggle, has } = useWishlist()
  return (
    <motion.article className="product-card" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: .55, ease: [0.22, 1, 0.36, 1] }}>
      <div className="product-media">
        <Link to={`/product/${product.id}`} aria-label={`View ${product.name}`}>
          <img className="primary" src={product.image} alt={product.name} />
          <img className="secondary" src={product.imageAlt} alt="" />
        </Link>
        {product.badge && <span className={`badge ${product.badge === 'Sale' ? 'sale' : ''}`}>{product.badge}</span>}
        <button className={`wish ${has(product.id) ? 'active' : ''}`} onClick={() => toggle(product)} aria-label="Toggle wishlist"><Heart size={17} fill={has(product.id) ? 'currentColor' : 'none'} /></button>
        <button className="quick" onClick={() => addItem(product)}><ShoppingBag size={16} /> Quick add</button>
      </div>
      <div className="product-info">
        <div><Link to={`/product/${product.id}`}><h3>{product.name}</h3></Link><p>{product.category}</p></div>
        <div className="price"><strong>${product.price}</strong>{product.oldPrice && <del>${product.oldPrice}</del>}</div>
      </div>
      <div className="swatches">{product.colors.map((color) => <span key={color} style={{ background: color }} />)}</div>
    </motion.article>
  )
}
