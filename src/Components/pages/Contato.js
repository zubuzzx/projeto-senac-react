import ItemFormulario from "../ItemFormulario"
function Contato(){
    return(
        <div>
            <h1>Formulario para contato</h1>
            <ItemFormulario name="nome" label="Nome: " tipo="text" ph="digite seu nome"/>
            <ItemFormulario name="nome" label="Email: " tipo="email" ph="digite seu email"/>
            <ItemFormulario name="nome" label="Assunto: " tipo="text" ph="sobre oque se trata"/>
            
            <p>Mensagem:</p>
            <textarea placeholder="digite sua mensagem"/>
        </div>
    )
}

export default Contato