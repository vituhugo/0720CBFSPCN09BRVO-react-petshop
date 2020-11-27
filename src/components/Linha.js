import React from 'react';

export default function Linha({nome, data_nascimento, email}) {
    return (
    <tr>
        <td>{nome}</td>
        <td>{data_nascimento}</td>
        <td>{email}</td>
        <td>
            <a href="/dono/1/visualizar">Ver</a>
            
            <span className="text-primary"> | </span>

            <a href="/dono/1/editar">Editar</a>

            <span className="text-primary"> | </span>

            <form action="/dono/1/remover" className="d-inline">
                <button className="btn btn-link p-0">Deletar</button>
            </form>
        </td>
    </tr>
)};