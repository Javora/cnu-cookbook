export function IngredientsEditFormField({ ingredientsList, setData }) {
  function findIngredient(ingredientsList, ingredient) {
    return ingredientsList.findIndex((testIngredient) => ingredient._id === testIngredient._id);
  }

  function updateIngredients(ingredient, property, value) {
    ingredientsList[findIngredient(ingredientsList, ingredient)] = {
      ...ingredient,
      [property]: value,
    };
    setData((data) => {
      return { ...data, ingredients: [...ingredientsList] };
    });
  }

  function addIngredient() {
    setData((data) => {
      return {
        ...data,
        ingredients: [
          ...ingredientsList,
          { _id: new Date().getTime(), name: '', amount: '', amountUnit: '' },
        ],
      };
    });
  }

  function removeIngredient(ingredient) {
    ingredientsList.splice(findIngredient(ingredientsList, ingredient), 1);
    setData((data) => {
      return { ...data, ingredients: [...ingredientsList] };
    });
  }

  return (
    <>
      <label>Ingredience:</label>
      <br />
      <ul style={{ margin: '0' }}>
        {ingredientsList &&
          ingredientsList.map((ingredient) => (
            <li key={ingredient._id} className="Ingredient">
              <div
                style={{
                  display: 'flex',
                  width: '100%',
                  flexWrap: 'wrap',
                }}
                className="Ingredient"
              >
                <input
                  type="text"
                  id={ingredient._id + '-name'}
                  name={ingredient._id + '-name'}
                  value={ingredient.name}
                  onChange={(e) => updateIngredients(ingredient, 'name', e.target.value)}
                  style={{
                    width: '60%',
                    flexGrow: '1',
                    minWidth: '200px',
                    marginTop: '.5rem',
                    marginRight: '20px',
                  }}
                />
                <div
                  style={{
                    display: 'inline-flex',
                    width: '35%',
                    flexGrow: '1',
                    justifyContent: 'space-between',
                    minWidth: '200px',
                    marginTop: '.5rem',
                    marginRight: '20px',
                  }}
                >
                  <input
                    type="number"
                    id={ingredient._id + '-amount'}
                    name={ingredient._id + '-amount'}
                    value={ingredient.amount}
                    onChange={(e) => updateIngredients(ingredient, 'amount', e.target.value)}
                    style={{ width: '35%' }}
                  />
                  <input
                    type="text"
                    id={ingredient._id + '-amountUnit'}
                    name={ingredient._id + '-amountUnit'}
                    value={ingredient.amountUnit}
                    onChange={(e) => updateIngredients(ingredient, 'amountUnit', e.target.value)}
                    style={{ width: '25%' }}
                  />
                  <div
                    className="ButtonLinkSmall"
                    style={{ cursor: 'pointer', width: '25%', minWidth: '65px' }}
                    onClick={() => removeIngredient(ingredient)}
                    onKeyPress={(e) => {
                      e.preventDefault();
                      if (e.code === 'Space' || e.code === 'Enter') removeIngredient(ingredient);
                    }}
                    tabIndex="0"
                  >
                    Smazat
                  </div>
                </div>
              </div>
            </li>
          ))}
        <div
          className="ButtonLinkSmall"
          style={{ cursor: 'pointer', marginTop: '.5rem' }}
          onKeyPress={(e) => {
            e.preventDefault();
            if (e.code === 'Space' || e.code === 'Enter') addIngredient();
          }}
          onClick={() => addIngredient()}
          tabIndex="0"
        >
          Přidat ingredienci
        </div>
      </ul>
    </>
  );
}
