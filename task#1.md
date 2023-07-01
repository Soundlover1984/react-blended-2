# Картка блогу

Необхідно створити компонент `<BlogCard/>`, за допомогою якого ми могли б
відображати інформацію про користувача соціальної мережі. Дані про користувача
лежать у файлі [article.json](./src/data/article.json).

[![Прев'ю компонента BlogCard](https://i.gyazo.com/5ce54e49016220bcde9209b893eb5e62.jpg)](https://gyazo.com/5ce54e49016220bcde9209b893eb5e62)

## Опис компонента `<BlogCard/>`

Компонент повинен приймати кілька пропсів з інформацією про користувача:

- `poster` — постер картки
- `tag` — категорія статті
- `title` — заголовок статті
- `description` — опис
- `name` — ім'я користувача
- `avatar` — аватар користувача
- `postedAt` — час створення (рекомендовано в форматі від дати до сьогодні)

Компонент повинен створювати наступну структуру.

```jsx
<Card>
  <CardHeader>
    <CardPoster
      src="https://source.unsplash.com/600x400/?computer"
      alt="card__image"
    />
  </CardHeader>
  <CardBody>
    <Tag>Technology</Tag>
    <CardTitle>What's new in 2022 Tech</CardTitle>
    <CardText>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis
      molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!
    </CardText>
  </CardBody>
  <CardFooter>
    <UserBox>
      <Avatar src="https://i.pravatar.cc/40?img=1" alt="Jane Doe" />
      <UserInfo>
        <UserName>Jane Doe</UserName>
        <Date>2h ago</Date>
      </UserInfo>
    </UserBox>
  </CardFooter>
</Card>
```

> Для форматування дати використовуйте метод
> [formatDistanceToNow](https://date-fns.org/v2.28.0/docs/formatDistanceToNow)
> бібліотеки **date-fns**

## Приклад використання

```js
import article from 'data/article.json';

<BlogCard
  poster={article.poster}
  tag={article.tag}
  title={article.title}
  description={article.description}
  userName={article.name}
  avatar={article.avatar}
  postedAt={article.postedAt}
/>;
```
