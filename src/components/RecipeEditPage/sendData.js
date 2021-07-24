import { api } from '../../api';

const cleanIngredientsIds = (data) => {
  data.ingredients = data.ingredients.map((ingredient) => {
    const { _id, ...cleanIngredient } = ingredient;
    return cleanIngredient;
  });
  return data;
};

export const sendData = (data, history, slug) => {
  const cleanData = cleanIngredientsIds(data);
  if (slug !== 'null')
    api
      .post(`/recipes/${cleanData._id}`, cleanData)
      .then(
        api.get(`/recipes`).then((response) => {
          history.push(
            `/recept/${response.data.find((recipe) => recipe._id === cleanData._id).slug}`,
          );
        }),
      )
      .catch(() => {
        window.alert('Something went wrong when editing the recipe');
      });
  else
    api
      .post(`/recipes`, cleanData)
      .catch(() => window.alert('Something went wrong when posting the recipe'))
      .finally(history.push('/'));
};
