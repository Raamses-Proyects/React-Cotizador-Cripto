import { useState } from 'react'
import styled from '@emotion/styled'

// Estilos/componets
const Label = styled.label`
    color: #FFF;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
    margin: 15px 0;
`
const Select = styled.select`
    width: 100%;
    font-size: 18px;
    padding: 12px;
    border-radius: 10px;
`

// Hook
function useSelectMonedas(label, opcionesArray) {

  // State
  const [state, setState] = useState('')

    const SelectMonedas = () => ( 
    <>
        <Label>{label}</Label>
        <Select
            value={state}
            onChange={ e => setState(e.target.value) }
        >
            <option value="">--Seleccione--</option>
            { opcionesArray.map( (i) => (
                <option key={i.id} value={i.id}>
                    {i.nombre}
                </option>
            )) }
        </Select>
    </> )
    return [state, SelectMonedas]
}

export default useSelectMonedas