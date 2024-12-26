import { useState } from "react";
import Banner from "./component/Banner";
import Form from "./component/Form";
import Teams from "./component/Teams";


function App() {

    const teams = [
        {
            nome: 'Programação',
            corPrimaria: '#61D095',
            corSecundaria: '#E8FFF0',
        },
        {
            nome: 'Front-End',
            corPrimaria: '#82CFFA',
            corSecundaria: '#E8F8FF',
        },
        {
            nome: 'Data Science',
            corPrimaria: '#A6D157',
            corSecundaria: '#F0F8E2',
        },
        {
            nome: 'Devops',
            corPrimaria: '#E06B69',
            corSecundaria: '#FDE7E8',
        },
        {
            nome: 'UX e Design',
            corPrimaria: '#D86EBF',
            corSecundaria: '#FAE5F5',
        },
        {
            nome: 'Mobile',
            corPrimaria: '#FEBA05',
            corSecundaria: '#FFF5D9',
        },
        {
            nome: 'Inovação e Gestão',
            corPrimaria: '#FF8A29',
            corSecundaria: '#FFEEDF',
        }
    ]

    const [colaboradores, setColaboradores] = useState([])

    const aoNovoColaboradorAdicionado = (colaborador) => {

        console.log("Colab", colaborador)
        setColaboradores([...colaboradores, colaborador])

    }

    return (
        <div className="App">
            <Banner />
            <Form teams={teams.map(teams => teams.nome)} aoColaboradorCadastrado={colab => aoNovoColaboradorAdicionado(colab)} />
            {teams.map(teams => <Teams
                key={teams.nome}
                nome={teams.nome}
                corPrimaria={teams.corPrimaria}
                corSecundaria={teams.corSecundaria}
                colaboradores={colaboradores.filter(colab => colab.time === teams.nome)}
            />)}
        </div>
    )
}

export default App;