# Пошук зображень

Напиши застосунок пошуку зображень за ключовим словом. Прев'ю робочого
застосунку

[![Превью](https://i.gyazo.com/76384ee7d41664406ee52acb77351f07.jpg)](https://gyazo.com/76384ee7d41664406ee52acb77351f07)

Створи компоненти `<SearchForm>`, `<ImageCard>`, `<Button>`. Для створення сітки
використовуй styled-components `<Grid>` та `<GridItem>`

> Тут самі файли [Grid](./src/components/Grid/Grid.styled.jsx)

## Інструкція Pexels API

Для HTTP-запитів використовуй публічний сервіс пошуку зображень
[ Pexels](https://www.pexels.com/api/documentation/). Зареєструйся та отримай
приватний ключ доступу.

Приклад HTTP-запиту.

```js
import axios from 'axios';

const API_KEY = 'тут вставити ключ';
axios.defaults.baseURL = 'https://api.pexels.com/v1/';
axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'landscape',
  per_page: 15,
};
```

Pexels API підтримує пагінацію, за замовчуванням параметр `page` дорівнює `1`.
Нехай у відповіді надходить по 15 об'єктів, встановлено в параметрі `per_page`.
Не забудь, що під час пошуку за новим ключовим словом, необхідно скидати
значення `page` до `1`.

У відповіді від API приходить масив об'єктів, в яких тобі цікаві лише наступні
властивості.

- `id` - унікальний ідентифікатор
- `avg_color` - колір фотографії,
- `alt` - опис фото,
- `src` - об'єкт з розмірами картинок, нам цікавий розмір `large`

## Опис компонента `<SearchForm>`

Компонент приймає один проп `onSubmit` - функцію для передачі значення інпута
під час сабміту форми. Він буде наступної структури.

```jsx
<SearchFormStyled>
  <FormBtn type="submit">
    <FiSearch size="16px" />
  </FormBtn>
  <InputSearch
    placeholder="What do you want to write?"
    name="search"
    required
    autoFocus
  />
</SearchFormStyled>
```

## Опис компонента галереї `<Grid/>`

Список карток зображень. Створює компонент наступної структури.

```jsx
<Grid>
  {/*
    Набір <GridItem></GridItem> із зображеннями
    */}
</Grid>
```

## Опис компонента `<GridItem>`

Компонент елемента списку із зображенням. Створює компонент наступної структури.

```jsx
<GridItem>
  <CardItem>
    <img src="" alt="" />
  </CardItem>
</GridItem>
```

## Опис компонента `<Button>`

При натисканні на кнопку `Load more` повинна довантажуватись наступна порція
зображень і рендеритися разом із попередніми. Кнопка повинна рендеритися лише
тоді, коли є якісь завантажені зображення. Якщо масив зображень порожній, кнопка
не рендериться.



