import Gentleman from "../Gentleman/Gentleman";

const App = (): JSX.Element => {
  return (
    <div className="container">
      <header className="main-header">
        <h1 className="main-title">Señores que te apuntan con el dedo</h1>
      </header>
      <section className="controls">
        <p className="info">0 señores que te apuntan con el dedo marcados</p>
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
