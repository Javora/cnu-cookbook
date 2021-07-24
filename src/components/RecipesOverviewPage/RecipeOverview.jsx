export function RecipeOverview(props) {
  return (
    <a href={`/recept/${props.slug}`}>
      <div className="RecipeOverview">
        <div style={{ fontSize: '130%' }}>{props.title}</div>
        <div>{props.preparationTime} minut</div>
      </div>
    </a>
  );
}
