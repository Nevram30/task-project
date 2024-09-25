// pages/index.tsx

import BookFilter from "./components/BooksFilter";
import { books } from "./mock-data/data";

const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Book Library</h1>
      <BookFilter books={books} />
    </div>
  );
};

export default Home;
