# Секція статистики

Створити компонент `<Statistics>`, який би показував статистику з переданих
пропсів - основну статистику інтернет-магазину стосовно зареєстрованих
користувачів, відгуків тощо . Дані про статистику лежать у файлі
[data.json](./src/data/data.json).

[![Прев'ю компонента Statistics](https://i.gyazo.com/a75d617620bdb0805e19d5a394699dea.png)](https://gyazo.com/a75d617620bdb0805e19d5a394699dea)

## Опис компонента

Компонент повинен приймати два пропи `title` і `stats`, в яких вказується
заголовок та об'єкт статистики.

- `title` - не обов'язковий, і якщо він не переданий, не повинна рендеритись
  розмітка заголовка `<h3>`.
- `stats` - масив об'єктів, що містять інформацію про елемент статистики. Може
  мати довільну кількість елементів.

Компонент повинен створювати наступну структуру.

```jsx
<StatisticTitle>Main Statistics</StatisticTitle>

<StatisticsList>
  <StatisticBox>
    {/* Тут має бути іконка */}
    <StatisticCounter>2147</StatisticCounter>
    <StatisticText>Happy Customers</StatisticText>
  </StatisticBox>

  <StatisticBox>
    {/* Тут має бути іконка */}
    <StatisticCounter>3275</StatisticCounter>
    <StatisticText>Registered Members</StatisticText>
  </StatisticBox>

  <StatisticBox>
    {/* Тут має бути іконка */}
    <StatisticCounter>289</StatisticCounter>
    <StatisticText>Available Products</StatisticText>
  </StatisticBox>

  <StatisticBox>
    {/* Тут має бути іконка */}
    <StatisticCounter>1563</StatisticCounter>
    <StatisticText>Saved Trees</StatisticText>
  </StatisticBox>
</StatisticsList>
```

> Завдання з іконкою робити за бажанням. Треба продумати логіку, як динамічно
> відмалювати з бібліотеки
> [**react-icons**](https://github.com/react-icons/react-icons) та змінити
> дефолтний розмір

## Приклад використання

```js
import data from 'data/data.json';

<Statistics title="Main Statistics" stats={data} />;
<Statistics stats={data} />;
```
