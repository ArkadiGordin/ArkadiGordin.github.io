const HeroesListItem = ({ name, description, element, onDelete }) => {
    let elementClassName;

    switch (element) {
        case "fire":
            elementClassName = 'bg-danger bg-gradient';
            break;
        case "water":
            elementClassName = "bg-primary bg-gradient";
            break;
        case "wind":
            elementClassName = "bg-success bg-gradient";
            break;
        case "earth":
            elementClassName = "bg-secondary bg-gradient";
            break;
        default:
            elementClassName = "bg-danger bg-gradient";
    }

    return (
        <li
            className={`card flex-row mb-4 shadow-lg text-white ${elementClassName}`}
        >
            <img
                src="https://upload.wikipedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg"
                className="img-fluid w-25 d-inline"
                alt="unknown hero"
                style={{ objectFit: "cover" }}
            />
            <div className="card-body">
                <h3 className="card-title">{name}</h3>
                <p className="card-text">{description}</p>
            </div>
            <span
            onClick={onDelete}
            className="position-absolute top-0 start-100 translate-middle badge border rounded-pill bg-light"
            >
                <button
                type="button"
                className="btn-close btn-close"
                aria-label="Close"
                ></button>
            </span>
        </li>
    );
};

export default HeroesListItem;
