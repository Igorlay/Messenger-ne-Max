1. type="text"
placeholder="Пошук постів..."
value={searchTerm}
onChange={(e) => onSearchChange(e.target.value)}
className={styles.searchInput}

2. const filteredPosts = postsData.filter(post => {
const matchesSearch =
post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
post.author.toLowerCase().includes(searchTerm.toLowerCase());
const matchesCategory = activeCategory === "All" || post.category
=== activeCategory;
return matchesSearch && matchesCategory;
});