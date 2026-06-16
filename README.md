<div align="center">

<img src="https://raw.githubusercontent.com/TanStack/query/main/media/emblem-light.svg" width="120" alt="React Query Logo" />

# React Query CRUD

CRUD application built with React, React Query, Axios and JSONPlaceholder API.

</div>

---

## About Project | Loyiha haqida

This project is a CRUD application built with React, React Query, and Axios.

Bu loyiha React, React Query va Axios yordamida yaratilgan CRUD ilovasidir.

The application uses JSONPlaceholder fake APIs for fetching and manipulating data.

Ilova ma'lumotlarni olish va boshqarish uchun JSONPlaceholder fake API laridan foydalanadi.

---

## Features | Imkoniyatlar

### Task 1 - Users API

* Fetch users (GET) | Foydalanuvchilarni olish (GET)
* Add new user (POST) | Yangi foydalanuvchi qo'shish (POST)
* Update user (PUT) | Foydalanuvchini tahrirlash (PUT)
* Delete user (DELETE) | Foydalanuvchini o'chirish (DELETE)

### Task 2 - Posts API

* Fetch posts (GET) | Postlarni olish (GET)
* Add new post (POST) | Yangi post qo'shish (POST)
* Update post (PUT) | Postni tahrirlash (PUT)
* Delete post (DELETE) | Postni o'chirish (DELETE)

---

## Technologies | Texnologiyalar

* React
* React Query (@tanstack/react-query)
* Axios
* Vite
* CSS

---

## APIs Used | Ishlatilgan API lar

Users API

https://jsonplaceholder.typicode.com/users

Posts API

https://jsonplaceholder.typicode.com/posts

---

## Important Note | Muhim eslatma

JSONPlaceholder is a fake API.

JSONPlaceholder fake API hisoblanadi.

GET requests return real data.

GET so'rovlari haqiqiy ma'lumotlarni qaytaradi.

POST, PUT, and DELETE requests return successful responses, but changes are not permanently stored on the server.

POST, PUT va DELETE so'rovlari muvaffaqiyatli javob qaytarsa ham, o'zgarishlar serverda doimiy saqlanmaydi.

To simulate CRUD operations visually, React Query cache is updated using `setQueryData()`.

CRUD amallarini vizual ko'rsatish uchun React Query cache `setQueryData()` yordamida yangilanadi.

---

## Installation | O'rnatish

```bash
npm install

npm install axios @tanstack/react-query

npm run dev
```

---

## Author | Muallif

Davron Jurayev
