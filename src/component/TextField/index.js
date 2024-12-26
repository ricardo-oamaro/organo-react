
import './TextField.css';

const TextField = (props) => {

    const aoDigitado = (e) => {
        props.aoAlterado(e.target.value)
    }

    return(
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.valor} onChange={aoDigitado} required={props.required} placeholder={`Digite seu ${props.label.toLowerCase()}...`} />
        </div>
    )
}

export default TextField;