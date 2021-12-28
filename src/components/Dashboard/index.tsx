import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionsTable";
import { ContainerDashboard } from "./styles";


export function Dashboard() {
    return (
        <ContainerDashboard>
            <Summary/>
            <TransactionsTable/>

        </ContainerDashboard>

    );
}