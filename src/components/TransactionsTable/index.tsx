import { useContext, useEffect, useState } from "react";
import { TransactionsContext } from "../../TransactionsContext";
import { ContainerTable } from "./styles";



export function TransactionsTable() {

const {transactions} = useContext(TransactionsContext);
    
    return (
        <ContainerTable>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map(transaction =>
                    (

                        <tr key={transaction.id}>
                            <td>{transaction.title}</td>
                            <td className={transaction.type}>{new Intl.NumberFormat('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                            }).format(transaction.amount)}</td>
                            <td>{transaction.category}</td>
                            <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}</td>
                        </tr>

                    )
                    )}


                </tbody>
            </table>

        </ContainerTable>
    );
}