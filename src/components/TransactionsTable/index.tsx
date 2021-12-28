import { useEffect } from "react";
import { api } from "../../services/api";
import { ContainerTable } from "./styles";

export function TransactionsTable() {

    useEffect(()=>{
        api.get('/transactions')
        .then(response=>console.log(response.data))
    },[])
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
                    <tr>
                        <td>Desenvolvimentos do site</td>
                        <td  className="deposit">R$12.0000</td>
                        <td>Dev</td>
                        <td>20/05/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw"> - R$10.0000</td>
                        <td>Casa</td>
                        <td>20/05/2020</td>
                    </tr>
                   
                </tbody>
            </table>

        </ContainerTable>
    );
}