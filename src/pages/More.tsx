import './More.css'

export function More() {
    return(
        <div className='wrapperMore'>
            <h1>Sobre o projeto</h1>
            <p> O projeto consiste na criação de um clone do Twitter utilizando React sem banco de dados, 
                por isso não tem todas as funcionalidades do Twitter(x).
                O principal objetivo é aprimorar minhas habilidades em React e também criar
                uma aplicação realista com alguma funcionalidades como: 
            </p>
                <ol>
                    <li>
                        <strong>Feed de tweets: </strong> com a possibilidade do usuário criar seu próprio 
                    tweet que será armazenado no localStorage.
                    </li>
                    <li>
                        <strong>Detalhe do tweet:</strong> a partir de funcionalidaes do React foi possivel
                        realizar a rota de cada tweet de forma personalizada. 
                    </li>
                    <li>
                        <strong>Exploração de tweets:</strong> foi feito outras abas além da timeline como o explorer
                        que não conta com a barra de pesquisa funcional, mas tem tweet que poderia estar em alta como
                        exemplo visual.
                    </li>
                    <li>
                        <strong>Profile:</strong> nessa aba é possível ver um pouco mais sobre a autora desse projeto
                        sendo inspirada na pagina do próprio Twitter. 
                    </li>
                </ol>

                <ul>
                    <h3>Tecnologias utilizada:</h3>
                    <ul>
                        <li>
                            <strong>React:</strong> Foi a principal tecnologia usada para construir a interface de usuário da aplicação, 
                            permitindo a criação de componentes reutilizáveis e uma experiência de usuário fluida.
                        </li>

                        <li>
                            <strong>React Router:</strong> Utilizado para gerenciar as rotas da aplicação e navegação 
                            entre páginas de forma eficiente.
                        </li>

                        <li>
                            <strong>Phosphor React:</strong> Teve como função integrar ícones facilmente em suas aplicações React, 
                            personalizando cores, tamanhos e estilos conforme necessário.
                        </li>

                        <li>
                            <strong>React Modal:</strong> Foi usada para permitir exibir conteúdo adicional em janelas sobrepostas à página principal,
                            garantindo uma experiência de usuário personalizada e acessível em diferentes dispositivos.
                        </li>
                    </ul>
                </ul>
        </div>
    )
}