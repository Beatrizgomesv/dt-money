import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de Websites</td>
            <td className="deposit"> R$12.000</td>
            <td>Desenvolvimento</td>
            <td>10/10/2022</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$1.100</td>
            <td>Casa</td>
            <td>05/10/2022</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
