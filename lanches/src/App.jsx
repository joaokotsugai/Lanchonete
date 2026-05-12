import { useState } from 'react'
import './App.css'
import imgComida1 from './assets/hambuguer.png'
import imgComida2 from './assets/morango.png'

function App() {
  const [tipoComida, setTipoComida] = useState('hambuguer');

  const alterarComida = () => {
    setTipoComida(tipoComida === 'hambuguer' ? 'morango' : 'hambuguer');
  }

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

  return (
    <>
      <div className="container">
        <h1>Escolha a sua refeição</h1>
        <button>Mudar Refeição</button>
      </div>
    </>
  )
}

export default App
