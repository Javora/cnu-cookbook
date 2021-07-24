export function RoundedButton(props) {
  return (
    <a onClick={props.onClick} href={props.link}>
      <div className="ButtonLink">{props.text}</div>
    </a>
  );
}
