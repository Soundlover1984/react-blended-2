# Заняття 4. План

- Kahoot
- Питання-відповідь
- Практичне заняття

## Завдання

### Крок 1

Виконай рефакторинг коду застосунку **"TODO LIST"** на `react-hooks`

### Крок 2

Виконай рефакторинг коду застосунку **"TODO LIST"**, додавши управління станом
за допомогою бібліотеки [Redux Toolkit](https://redux-toolkit.js.org/).

Нехай Redux-state виглядає наступним чином.

```bash
{
  todos: [],
}
```

- Створи сховище з `configureStore()`
- Створи редюсери todo. Використовуй функцію `createSlice()`.
- Зв'яжи React-компоненти з Redux-логікою за допомогою хуків бібліотеки

```bash
npm install @reduxjs/toolkit react-redux
```

[react-redux](https://react-redux.js.org/).

- Для зберігання всего `state` застосунку в `local storage` використовуй
  бібліотеку [redux-persist](https://github.com/rt2zz/redux-persist#basic-usage)

- використовуй цей
  [конфіг](https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist)
  для `store`
