import './Form.css'
import TextField from "../TextField";
import ComboBox from "../ComboBox";
import Button from '../Button';
import { useState } from 'react';

const Form = (props) => {
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')


    const onSave = (e) => {
        e.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className="formulario">
            <form onSubmit={onSave}>
                <h2>Preencha os dados para criar o card do colaborador:</h2>
                <TextField
                    required={true}
                    label="Nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <TextField
                    required={true}
                    label="Cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <TextField
                    label="Imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ComboBox
                    label="Time"
                    itens={props.teams}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default Form;