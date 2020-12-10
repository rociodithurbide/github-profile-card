import "./style.scss";

function Button(props) {
  return (
    <a href={props.url} className="button">
      Ir a GitHub
    </a>
  );
}

export default Button;
