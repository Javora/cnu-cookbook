import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import { RecipeDetailSection } from '../components/RecipeDetailPage/RecipeDetailSection';
import { api } from '../api';
import { RoundedButton } from '../components/common/RoundedButton';
import { CookbookLoader } from '../components/common/CookbookLoader';
import { SomethingWentWrong } from '../components/common/SomethingWentWrong';

export function RecipeDetailPage() {
  const { slug } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();
  const history = useHistory();

  function onFetchSuccess(recipes) {
    setData(recipes.data);
  }

  function onFetchFailure() {
    setData(false);
  }

  useEffect(() => {
    if (slug) {
      api
        .get(`/recipes/${slug}`)
        .then(onFetchSuccess)
        .catch(onFetchFailure)
        .finally(() => setLoading(false));
    }
  }, [slug]);

  if (loading) return <CookbookLoader />;

  if (data === false) return <SomethingWentWrong />;

  const deleteRecipe = () => {
    if (window.confirm('Opravdu chceš vymazat tento recept?'))
      api
        .delete(`/recipes/${data._id}`)
        .catch(() => window.alert('Something went wrong when deleting recipe'))
        .finally(history.push('/'));
  };

  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        <h1 style={{ marginRight: 'auto' }}>Recept</h1>
        <div style={{ display: 'flex' }}>
          <div style={{ marginRight: '1rem' }}>
            <RoundedButton text="Smazat" onClick={deleteRecipe} />
          </div>
          <RoundedButton text="Editovat" link={`${pathname}/edit`} />{' '}
        </div>
      </div>
      {data && <RecipeDetailSection {...data} />}
    </>
  );
}
