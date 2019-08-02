import React from 'react'

const TableContent = props => {
    return (
        <div className="table-container">
            <ul className="table-header">
                <li className="table-header__id">ID</li>
                <li className="table-header__title">Titulo</li>
                <li className="table-header__message">Mensaje</li>
                <li className="table-header__actions">Acciones</li>
            </ul>
            <ul className="table-content">
                {/* Aqui ocurre la magia */}
                {props.data.map(item => (
                    <li key={item.id} className="table-item">
                        <div className="table-item__id">{item.id}</div>
                        <div className="table-item__title">{`${item.title.substr(0, 30)}...`}</div>
                        <div className="table-item__message">{`${item.body.substr(0, 50)}...`}</div>
                        <div className="table-item__actions">
                            <button className="table-button-edit">Editar</button>
                            <button className="table-button-delete">Eliminar</button>
                        </div>
                    </li>
                ))}


            </ul>
        </div>
    )
}

export default TableContent
