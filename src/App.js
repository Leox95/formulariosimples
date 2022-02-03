import Formulario from './components/formulario'
import {Container, Typography} from '@mui/material'
import '@fontsource/roboto/400.css'



function App() {
  return (
    <div >
    <Container maxWidth="sm" >
      <Typography variant="h3" align='center'>Formulário de cadastro</Typography>
      <Formulario/>
    </Container>
    </div>
  );
}

export default App;
