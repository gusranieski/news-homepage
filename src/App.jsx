import { ArticlesContainer } from "./components/ArticlesContainer";
import { Header } from "./components/header";
import { MainArticle } from "./components/MainArticle";
import { NewContainer } from "./components/NewContainer";

function App() {
  return (
    <main className="px-4 py-6">
      <Header />
      <div className='lg:flex lg:gap-8'>
        <MainArticle />
        <NewContainer />
      </div>
        <ArticlesContainer />
    </main>
  );
}

export default App;
