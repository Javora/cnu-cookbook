import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { api } from '../api';
import { RoundedButton } from '../components/common/RoundedButton';
import { RecipeEditSection } from '../components/RecipeEditPage/RecipeEditSection';
import { emptyPage } from '../components/RecipeEditPage/emptyPage';
import { CookbookLoader } from '../components/common/CookbookLoader';
import { SomethingWentWrong } from '../components/common/SomethingWentWrong';
import { sendData } from '../components/RecipeEditPage/sendData';

export function RecipeEditPage() {
  const { slug } = useParams();
  const history = useHistory();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(true);

  function onFetchSuccess(recipes) {
    setData(recipes.data);
  }

  function onFetchFailure() {
    setData(false);
  }

  useEffect(() => {
    if (slug !== 'null') {
      api
        .get(`/recipes/${slug}`)
        .then(onFetchSuccess)
        .catch(onFetchFailure)
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [slug]);

  if (loading) return <CookbookLoader />;

  if (data === false) return <SomethingWentWrong />;

  if (!data) setData(emptyPage);

  return (
    <>
      <div style={{ display: 'flex' }}>
        <h1>Editace receptu</h1>
        <div style={{ marginLeft: 'auto', paddingLeft: '10px' }}>
          <RoundedButton text="Uložit změny" onClick={() => sendData(data, history, slug)} />
        </div>
      </div>
      <RecipeEditSection {...data} setData={setData} />
    </>
  );
}
