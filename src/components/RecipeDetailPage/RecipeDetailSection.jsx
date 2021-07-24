import ReactMarkdown from 'react-markdown';

export function RecipeDetailSection(props) {
  return (
    <div
      style={{
        margin: '1.5rem 0',
        padding: '1rem',
        borderRadius: '0.5rem',
        backgroundColor: 'lightgray',
      }}
    >
      <h1>{props.title}</h1>
      <div>Délka přípravy: {props.preparationTime} minut</div>
      <div>Počet porcí: {props.servingCount}</div>
      <div>Ingredience</div>
      <ul>
        {props.ingredients.map((ingredient) => (
          <li key={ingredient._id}>
            {ingredient.name}
            {ingredient.amount || ingredient.amountUnit
              ? ` - ${ingredient.amount ?? ''}
            ${ingredient.amountUnit}`
              : null}
          </li>
        ))}
      </ul>
      <h3>Příprava</h3>
      <div style={{ border: '2px solid grey', padding: '1rem', borderRadius: '1rem' }}>
        <ReactMarkdown>{props.directions}</ReactMarkdown>
      </div>
    </div>
  );
}
