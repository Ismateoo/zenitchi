import Hero from '../Hero/Hero'
import CategoriasGrid from '../CategoriasGrid/CategoriasGrid'
import LoMasBuscado from '../LoMasBuscado/LoMasBuscado'
import Newsletter from '../Newsletter/Newsletter'
import './home.css'

export default function Home() {
  return (
    <div className="home">
      <Hero />
      <CategoriasGrid />
      <LoMasBuscado />
      <Newsletter />
    </div>
  )
}
