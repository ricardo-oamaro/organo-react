import './Member.css';

const Member = ({nome, cargo, imagem, corPrimaria}) => {
    console.log("Imagem", imagem)    
    return (
        <div className="member">
            <div className="cabecalho" style={{backgroundColor: corPrimaria}}>
                <img src={imagem} alt='' />
            </div>
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    );
};

export default Member;