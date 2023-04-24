const Info = (): JSX.Element => {
  return (
    <>
      <div className="gentleman__avatar-container">
        <img
          className="gentleman__avatar"
          src="img/fary.jpg"
          alt="The Fary apuntándote con el dedo"
        />
        <span className="gentleman__initial">F</span>
      </div>
      <div className="gentleman__data-container">
        <h2 className="gentleman__name">The Farytale</h2>
        <ul className="gentleman__data-list">
          <li className="gentleman__data">
            <span className="gentleman__data-label">Profesión:</span>
            Influencer
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Estado:</span> RIP
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Twitter:</span> pendiente
          </li>
        </ul>
      </div>
    </>
  );
};

export default Info;
