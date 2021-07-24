import React from 'react';
import { RecipesOverviewSection } from '../components/RecipesOverviewPage/RecipesOverviewSection';
import { RoundedButton } from '../components/common/RoundedButton';

export function RecipeListPage() {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <h1>Recepty</h1>
        <div style={{ marginLeft: 'auto' }}>
          <RoundedButton text="Nový recept" link="/recept/null/edit" />
        </div>
      </div>
      <RecipesOverviewSection />
    </>
  );
}
