import { useState } from 'react'
import './App.css'
import imgComida1 from './assets/hambuguer.png'
import imgComida2 from './assets/morango.png'
import CardProduto from './components/CardProduto'

function App() {
  const [tipoComida, setTipoComida] = useState('hambuguer');


  const dadosComida = {
    hambuguer: {
      imagem: imgComida1,
      titulo: 'Hambuguer de pistache',
      preco: 'R$ 67,00',
      descricao: 'Um hambuguer de pistache com queijo e picles'
    },
    morango: {
      imagem: imgComida2,
      titulo: 'Morango caramelizado',
      preco: 'R$ 42,00',
      descricao: 'Morangos cobertos de calda chocolate e caramelo'
    }
  }

    const alterarComida = () => {
    setTipoComida(tipoComida === 'hambuguer' ? 'morango' : 'hambuguer');
  }

    const dados = dadosComida[tipoComida]

  return (
    <>
      <div className="container">
        <h1>Escolha a sua refeição</h1>
        <button onClick={alterarComida}>Mudar Refeição</button>
        <CardProduto
          imagem={dados.imagem}
          titulo={dados.titulo}
          preco={dados.preco}
          descricao={dados.descricao}
        />

      </div>
    </>
  )
}

export default App
