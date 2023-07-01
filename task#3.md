# Список Forbes

Необхідно створити компонент `<ForbesList>`, за допомогою якого ми могли б
відображати інформацію про актуальну інформацію портала **Forbes**. Інформація
про актуальний рейтинг [forbes.json](./src/data/forbes.json).

[![Прев'ю компонента ForbesList](https://i.gyazo.com/d860b2fbd570a9eb800917b116fa0423.png)](https://gyazo.com/d860b2fbd570a9eb800917b116fa0423)

## Опис компонента `<ForbesList>`

Компонент повинен приймати один проп `list` - масив об'єктів друзів.

Компонент повинен створювати наступну структуру.

```jsx
<LeaderBoard>
  <BoardHeader>
    <BoardTitle>
      <TitleTop>Forbes</TitleTop>
      <TitleBottom>Leader board</TitleBottom>
    </BoardTitle>
  </BoardHeader>

  <LeaderBoardProfiles>
    {/* Довільна кіл-сть FriendListItem */}
  </LeaderBoardProfiles>
</LeaderBoard>
```

## Опис компонента `<ForbesListItem>`

Компонент повинен приймати кілька пропcів:

- `avatar` - аватар мільйонера
- `name` - ім'я мільйонера
- `capital` - статки мільйонера
- `isIncrease` - буль, що сигналізує про стан мільйонера: збільшився або ні.

Залежно від пропа `isIncrease`, повинна змінюватися іконка: при збільшення
статку - `<FcBullish/>` або при зменшенні - `<FcBearish/>`

Компонент повинен бути наступної структури.

```jsx
<ForbesItem>
  <Avatar
    src="https://randomuser.me/api/portraits/men/32.jpg"
    alt="Mark Zuckerberg"
  />
  <Name>Mark Zuckerberg</Name>
  <Capital>
    35.7 <BiDollarCircle color={theme.colors.accent} size={22} />
    {/* Тут має бути необхідна іконка зміни статку */}
  </Capital>
</ForbesItem>
```

## Приклад використання

```js
import forbes from 'data/forbes.json';

<ForbesList list={forbes} />,
```
