function ItemFormulario(props) {
    return(
        <p>
            <label for={props.nome}>{props.label} </label>
            <input type={props.tipo} name={props.nome} id={props.nome} placeholder={props.ph} />
        </p>
    )
}

export default ItemFormulario