import './App.scss'
import Button from './components/01-atoms/Button/Button'

function App() {
  const handleClick = () => {
    console.log('¡Botón clickeado!');
  };

  return (
    <>
      <h1 className='my-element'>Ejemplos de Botones</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '2rem' }}>
        {/* Botón Primary Large */}
        <Button 
          buttonText="Más programas"
          onClick={handleClick}
        />

        {/* Botón Secondary con icono */}
        <Button 
          buttonClass="btnSecondaryMedium"
          buttonText="Ver más"
          iconRight={true}
          onClick={handleClick}
        />

        {/* Botón Tertiary Small */}
        <Button 
          buttonClass="btnTertiarySmall"
          buttonText="Cancelar"
          onClick={handleClick}
        />

        {/* Botón como Link */}
        <Button 
          buttonText="Ir a Google"
          href="https://www.google.com"
          target="_blank"
        />

        {/* Botón Full Width */}
        <Button 
          buttonText="Botón completo"
          full={true}
          onClick={handleClick}
        />
      </div>
    </>
  )
}

export default App