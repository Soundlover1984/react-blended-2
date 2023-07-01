
import { format } from 'date-fns';
import PropTypes from 'prop-types';
import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';

export const CryptoHistory = ({ items }) => {
  return (
    <BaseTable>
      <THead>
        <tr>
          <Th>№</Th>
          <Th>PRICE</Th>
          <Th>AMOUNT</Th>
          <Th>DATE</Th>
        </tr>
      </THead>

      <tbody>
        {items.map(({ id, price, amount, date }, index) => (
          <Tr key={id}>
            <Td>{index += 1}</Td>
            <Td>{price}</Td>
            <Td>{amount}</Td>
            <Td>{format(new Date(date), 'MM/dd/yyyy, h:mm a')}</Td>
          </Tr>
        ))}
      </tbody>
    </BaseTable>
  );
};

CryptoHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
      
    })
  ).isRequired,
};

export default CryptoHistory;