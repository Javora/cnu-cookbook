import { useState, useEffect } from 'react';

import { RecipeOverview } from './RecipeOverview';
import { RecipeFilter } from './RecipeFilter';

import { CookbookLoader } from '../common/CookbookLoader';
import { SomethingWentWrong } from '../common/SomethingWentWrong';
import { api } from '../../api';

export function RecipesOverviewSection() {
  const [filter, setFilter] = useState('');
  const [recipes, setRecipes] = useState();
  const [loading, setLoading] = useState(true);

  function filterInputHandler(e) {
    setFilter(e.target.value);
  }

  function onFetchSuccess(recipes) {
    setRecipes(recipes.data);
  }

  function onFetchFailure() {
    setRecipes(false);
  }

  useEffect(() => {
    api
      .get('/recipes')
      .then(onFetchSuccess)
      .catch(onFetchFailure)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <CookbookLoader />;

  if (recipes === false) return <SomethingWentWrong />;

  return (
    <>
      <RecipeFilter inputHandler={filterInputHandler} />
      <div className="RecipesOverviewSection">
        {recipes &&
          recipes
            .filter((recipe) =>
              recipe.title
                .toLocaleLowerCase('en-US')
                .match(new RegExp(filter.toLocaleLowerCase('en-US'), 'i')),
            )
            .map((recipe) => <RecipeOverview key={recipe._id} {...recipe} />)}
      </div>
    </>
  );
}
