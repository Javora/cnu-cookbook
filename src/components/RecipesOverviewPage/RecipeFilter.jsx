export function RecipeFilter(props) {
  return (
    <div style={{ margin: '1rem 0 2rem 0', fontSize: '130%' }}>
      <span>Vyhledávání: </span>
      <input onChange={props.inputHandler}></input>
    </div>
  );
}
