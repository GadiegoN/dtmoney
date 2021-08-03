import { Summary } from "../Summary";
import { TrasectionsTable } from "../TransactionsTable";
import { Container } from "./styles";

export function Dashboard() {
    return (
        <Container>
            <Summary />
            <TrasectionsTable />
        </Container>
    )
}