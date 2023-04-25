interface GentlemanProps {
  name: string;
  status: string;
  profession: string;
  twitter: string;
  picture: string;
  alternativeText: string;
}

const Gentleman = ({
  name,
  status,
  profession,
  twitter,
  picture,
  alternativeText,
}: GentlemanProps): JSX.Element => {
  return (
    <li className="gentleman">
      <div className="gentleman__avatar-container">
        <img
          className="gentleman__avatar"
          src={`img/${picture}`}
          alt={`${alternativeText}`}
        />
        <span className="gentleman__initial">{name.charAt(0)}</span>
      </div>
      <div className="gentleman__data-container">
        <h2 className="gentleman__name">{name}</h2>
        <ul className="gentleman__data-list">
          <li className="gentleman__data">
            <span className="gentleman__data-label">Profesión:</span>
            {profession}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Estado:</span> {status}
          </li>
          <li className="gentleman__data">
            <span className="gentleman__data-label">Twitter:</span> {twitter}
          </li>
        </ul>
      </div>{" "}
      <i className="icon gentleman__icon fas fa-check"></i>
    </li>
  );
};

export default Gentleman;
