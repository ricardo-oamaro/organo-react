import Member from '../Member';
import './Teams.css';

const Teams = (props) => {

    return (
        <section className="team" style={{ backgroundColor: props.corSecundaria }}>
            <h3 style={{ borderColor: props.corPrimaria }}>{props.nome}</h3>
            {props.colaboradores.map(colaborador => <Member
                key={colaborador.nome}
                nome={colaborador.nome}
                cargo={colaborador.cargo}
                imagem={colaborador.imagem}
                corPrimaria={props.corPrimaria}
            />)}
        </section>
    )

}

export default Teams;