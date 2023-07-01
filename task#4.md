# Історія транзакцій

Необхідно створити компонент історії транзакцій в особистому кабінеті
крипто-гаманця.

[![Прев'ю компонента CryptoHistory](https://i.gyazo.com/c40db818fdf62f749f97ab24f1946928.png)](https://gyazo.com/c40db818fdf62f749f97ab24f1946928)

Дані для списку доступні у форматі JSON у файлі
[transactions.json](./src/data/transactions.json). Це масив об'єктів, кожен
об'єкт описує одну транзакцію з наступними властивостями:

- `id` — унікальний ідентифікатор транзакції
- `price` — залишок на рахунку
- `amount` - сума транзакції
- `date` - дата транзакції

## Опис компонента `<CryptoHistory>`

Необхідно створити компонент `<CryptoHistory>`, який приймає один проп `items` -
масив об'єктів транзакцій з `transactions.json`. Компонент створює розмітку
таблиці. Кожна транзакція - це рядок таблиці. У прикладі наведена структура двох
транзакцій.

```jsx
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
    <Tr>
      <Td>1</Td>
      <Td>3190</Td>
      <Td>0.24843</Td>
      <Td>02/01/2022, 1:14 PM</Td>
    </Tr>
    <Tr>
      <Td>2</Td>
      <Td>3195</Td>
      <Td>0.088</Td>
      <Td>05/09/2022, 2:24 PM</Td>
    </Tr>
  </tbody>
</BaseTable>
```

> Для форматування дати використовуйте метод
> [format](https://date-fns.org/v2.28.0/docs/format) бібліотеки **date-fns**

## Приклад використання

```js
import transactions from 'data/transactions.json';

<TransactionHistory items={transactions} />;
```
