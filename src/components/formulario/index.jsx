import {useState} from 'react'
import React from 'react'
import Button from '@mui/material/Button'
import { TextField, Switch, FormControlLabel } from '@mui/material'
import { getAllByPlaceholderText } from '@testing-library/react'


function Formulario() {

    const [nome, setNome] = useState([''])
    const [sobrenome, setSobrenome] = useState([''])
    const [email, setEmail] = useState([''])
    const [idade, setIdade] = useState([''])
    const [novidades, setNovidades] = useState(true)

    return (
        <div>
            <form onSubmit={()=>{
                alert(`Seus dados foram salvos com sucesso
                Nome: ${nome}
                Sobrenome: ${sobrenome}
                E-mail: ${email}
                Idade: ${idade}
                Receber Novidades: ${novidades}`)
                console.log(nome,sobrenome,email,idade)
            }}>

                <TextField value={nome} onChange={(e)=>setNome(e.target.value)}
                id="nome" label="Nome" variant="filled" fullWidth />
                <br />
                <TextField value={sobrenome} onChange={(e)=>setSobrenome(e.target.value)}
                 id="sobrenome" label="Sobrenome" variant="filled" fullWidth />
                <br />
                <TextField value={email} onChange={(e)=>setEmail(e.target.value)}
                 id="email" label="E-mail" variant="filled" fullWidth />
                <br />
                <TextField value={idade} onChange={(e)=>setIdade(e.target.value)}
                 id="idade" label="Idade" variant="filled" fullWidth />
                <br />



                <FormControlLabel control={
                <Switch onChange={(e)=>setNovidades(e.target.checked)} checked={novidades}
                 name="novidades"  />} label="Receber novidades" />

                <Button type="submit" variant="contained" color="primary">Cadastrar</Button>

            </form>
            
        </div>
    )
    
}


export default Formulario