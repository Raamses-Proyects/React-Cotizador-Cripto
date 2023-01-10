import { useState, useEffect } from 'react';
import styled from '@emotion/styled'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'
import Error from './Error'

// Estilos/componets
const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    font-size: 20px;
    margin-top: 30px;
    border-radius: 5px;
    transition-property: background-color;
    transition-duration: .3s;

    &:hover {
        cursor: pointer;
        background-color: #7A7DFE;
    }
`

// Componente   
function Formulario({setMonedas}) {

  // State local
  const [criptos, setCriptos] = useState([])
  const [error, setError] = useState(false)
  

  // Usando el Hook propio
  const [ moneda, SelectMonedas ] = useSelectMonedas('Elije tu moneda', monedas)
  const [ criptoMoneda, SelectCriptos ] = useSelectMonedas('Elije tu criptomoneda', criptos)


  // Mandando a llamar a API y filtrando datos para crear el array arrayCriptos
  useEffect(() => {
    const consultarAPI = async () => {
        try {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'
            const respuesta = await fetch(url)
            const datosAPI = await respuesta.json()
            const arrayCriptos = datosAPI.Data.map( (dato) => {
                const objeto = {
                    id: dato.CoinInfo.Name,
                    nombre: dato.CoinInfo.FullName
                }
                return objeto
            })
            setCriptos(arrayCriptos)
        } catch (error) {
            console.error(error)
        }
    }
    consultarAPI()
  }, [])


  // Funciones
  const handleSubmit = (e) => {
    e.preventDefault()
    if( [moneda, criptoMoneda].includes('') ) {
        setError(true)
        return
    }
    setError(false)
    setMonedas({
        moneda,
        criptoMoneda
    })
  } 

  
  return (
    <>
        { error && <Error>Todos los campos son obligatorios</Error> }
        <form onSubmit={ handleSubmit }>
            <SelectMonedas />
            <SelectCriptos />
            <InputSubmit type="submit" value="Cotizar" />
        </form>
    </>
  )
}

export default Formulario