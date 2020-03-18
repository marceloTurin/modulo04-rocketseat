import React from 'react';
import PropTypes from 'prop-types';

function TechItem({ tech, onDelete }) {
    return (
        <li key={tech}>
            {tech}
            <button onClick={onDelete} type="button">Remover</button>   
        </li>
    )
}

//Define propriedades padroes caso o usuário nao passe nenhum dado
TechItem.defaultProps = {
    tech: 'Oculto',
};

//Define o tipo de propriedade ou seja se é uma string, função e etc..
TechItem.PropTypes = {
    tech: PropTypes.string,
    onDelete: PropTypes.func.isRequired,
}

export default TechItem;