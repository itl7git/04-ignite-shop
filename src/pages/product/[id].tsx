import { ImageContainer, ProductContainer, ProductDetails } from '@/styles/pages/product'
import Image from 'next/image'
import { useRouter } from 'next/router'

export default function Product() {
  const { query } = useRouter()
  
  return (
    <ProductContainer>
      <ImageContainer>
        
      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, aliquid voluptas consequatur repudiandae voluptatibus at, magnam doloremque pariatur quam dolorem laboriosam modi corporis voluptatum veniam quaerat eveniet ipsum. Deleniti, expedita?</p>
      
        <button>
          Comprar agora
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}