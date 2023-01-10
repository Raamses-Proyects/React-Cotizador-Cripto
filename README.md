# React-Cotizador-Cripto
Sobre el proyecto

    Es un cotizador de criptomonedas que funciona por medio de la API de https://www.cryptocompare.com


CSS

    Styled Components ( Video 136. ¿Qué son los Styled Components? ) :
        1.- ¿Que es?
            En JSX podemos utilizar HTML con expresiones JavaScript, pero también es posible
            crear un elemento HTML con la sintaxis de un componente y añadir propiedades de un
            componente y añadir CSS.

            En lugar de utilizar una hoja de estilos o una librería externa, se escribe el codigo
            CSS en cada componente (CSS en JS).

        2.- Ventajas:
            Si eliminas el componente se elimina también el CSS.
            Sigues teniendo la ventaja de reutilizar el CSS.

        3.- Instalar:
            npm install @emotion/react @emotion/styled

        4.- Utilizar:
            Se tiene que importar: 
                import styled from '@emotion/styled'
        
            Se crea el componente de estilos por encima del componente
            el cual va a utilizar esos estilos, y el componente de estilos
            en lugar de usar {} va a usar template strings ( `` ), ejemplo:

            // Importando
            import styled from '@emotion/styled'

            // Componente de estilos
            const Heading = styled.h1`
            font-family: 'Lato', sans-serif;
            color: #FFF;
            `
            
            // Componente normal que va a usar los estilos creados
            function App() {
            return (
                <div className="App">
                    // Mandando a llamar a los componentes de estilos
                    <Heading>Desde App</Heading>
                </div>
                )
            }
        
        5.- Para que visual studio code te ayude a escribir el css dentro de los ``
            se instala la extensión de vscode-styled-components
    
    Añadiendo un Spinner ( Video 152. Añadiendo un Spinner )
        Ir al sitio de https://tobiasahlin.com/spinkit

        ¿Que es un Modulo de CSS en React?
            Es crear una carpeta solo para el CSS y que sea especial solo para un componente 


REACT

    1.- Crear un Hook ( Video 139. Primeros pasos creando un Custom Hook, 140, 141, 142, 143 )
        Una de las razones para crear un Hook seria para reutilizar una función, pero
        para esto se puede crear una carpeta de helpers y agregarlas allí.

        ¿Entonces para que crear un Hook propio?
            Para reutilizar la función si, pero también para hacer uso de los states, effects etc.
        
        Los Hooks que crees tienen que ser reutilizables para varios lugares de tu proyecto o incluso
        en otros.


JavaScript/Funcionalidades

    Para consultar a las APIs se utilizo async await y ya de allí no hay mucho que mencionar ya que
    casi no se utilizaron funcionalidades con puro JS para este proyecto.
