import { FormField } from './FormField';
import { IngredientsEditFormField } from './IngredientsEditFormField';

export function RecipeEditSection(props) {
  return (
    <div
      style={{
        margin: '1.5rem 0',
        padding: '1rem',
        borderRadius: '0.5rem',
        backgroundColor: 'lightgray',
      }}
    >
      <form>
        <FormField
          type="text"
          name="Název"
          internalName="title"
          value={props.title}
          setData={props.setData}
        />
        <FormField
          type="number"
          name="Doba přípravy (v minutách)"
          internalName="preparationTime"
          value={props.preparationTime}
          setData={props.setData}
        />
        <FormField
          type="number"
          name="Počet porcí"
          internalName="servingCount"
          value={props.servingCount}
          setData={props.setData}
        />
        <IngredientsEditFormField ingredientsList={props.ingredients} setData={props.setData} />
        <FormField
          type="textarea"
          name="Příprava"
          internalName="directions"
          value={props.directions}
          setData={props.setData}
        />
      </form>
    </div>
  );
}
