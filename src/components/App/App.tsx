import Gentleman from "../Gentleman/Gentleman";
import Info from "../Info/Info";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">Señores que te apuntan con el dedo</h1>
      </header>
      <section className="controls">
        <Info />
        <button type="button" className="button button--select">
          Marcar todos
        </button>
      </section>
      <main className="main">
        <ul className="gentlemen">
          <Gentleman />
        </ul>
      </main>
    </div>
  );
};

export default App;
