import { useSearchParams } from "react-router-dom";

const postsData = [
  { id: 1, title: "Вивчення React Router" },
  { id: 2, title: "Новини JavaScript" },
  { id: 3, title: "Що нового у Vite" },
];

const NewsFeed = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("query") || "";
  const sort = searchParams.get("sort") || "asc";

  // 🔍 Поиск
  const handleSearchChange = (e) => {
    const text = e.target.value;

    const params = {};
    if (text) params.query = text;
    if (sort) params.sort = sort;

    setSearchParams(params);
  };

  // 🔽 Сортировка
  const handleSortChange = (e) => {
    const value = e.target.value;

    const params = {};
    if (searchQuery) params.query = searchQuery;
    if (value) params.sort = value;

    setSearchParams(params);
  };

  // 1️⃣ Фильтрация
  const filteredPosts = postsData.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // 2️⃣ Сортировка
  const sortedPosts = [...filteredPosts].sort((a, b) => {
    if (sort === "asc") {
      return a.title.localeCompare(b.title);
    } else {
      return b.title.localeCompare(a.title);
    }
  });

  return (
    <div>
      <h2>Стрічка новин</h2>

      {/* 🔍 Поиск */}
      <input
        type="text"
        placeholder="Пошук новин..."
        value={searchQuery}
        onChange={handleSearchChange}
      />

      {/* 🔽 Сортировка */}
      <select value={sort} onChange={handleSortChange}>
        <option value="asc">Від А до Я</option>
        <option value="desc">Від Я до А</option>
      </select>

      {/* 📃 Список */}
      <div>
        {sortedPosts.length > 0 ? (
          sortedPosts.map((post) => (
            <p key={post.id}>{post.title}</p>
          ))
        ) : (
          <p>Нічого не знайдено 😢</p>
        )}
      </div>
    </div>
  );
};

export default NewsFeed;