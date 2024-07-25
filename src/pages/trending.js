import React from 'react';
import recipeData from '../data/recipe.json'; // Assuming recipes.json is in the same directory

export const Trending = () => {
  return (
    <div className='container'>
        <h3 className='section-header'>Our Trending Recipes</h3>
        <div className='trending-recipe'>
            {recipeData.map((recipe) => (
                <div key={recipe.id} className='text-center'>
                    <img src={recipe.image} alt="recipe" className='my-5 img-fluid' />
                    <p>{recipe.description}</p>
                    <a href={recipe.link}><span>View Recipe</span></a>
                </div>
            ))}
        </div>
    </div>
  );
}
