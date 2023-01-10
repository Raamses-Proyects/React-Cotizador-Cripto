import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
`
const Texto = styled.p`
  font-size: 18px;
    span {
        font-weight: 700;
    }
`
const Imagen = styled.img`
    display: block;
    width: 150px;
    margin: 25px auto;
`
const Precio = styled.p`
    font-size: 30px;
    margin-top: 0;
    span {
        font-weight: 700;
    }
`

function Resultado({resultado}) {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado
  return (
    <Contenedor>
        <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen de criptomoneda" />
        <Precio>El precio es de <span>{PRICE}</span></Precio>
        <Texto>El precio mas alto del día <span>{HIGHDAY}</span></Texto>
        <Texto>El precio mas bajo del día <span>{LOWDAY}</span></Texto>
        <Texto>Variación ultimas 24hrs<span>{CHANGEPCT24HOUR}</span></Texto>
        <Texto>Ultimas actualización <span>{LASTUPDATE}</span></Texto>
    </Contenedor>
  )
}

export default Resultado