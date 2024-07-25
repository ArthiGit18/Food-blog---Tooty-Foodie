import React from 'react';
import recipeData from '../data/recipe.json'; // Assuming recipes.json is in the same directory

export const Feedback = () => {
  return (
    <div className='container'>
        <h3 className='section-header'>Clients Feedback</h3>
        <div className='trending-recipe'>
        <div className='trending_more'>
            <a href="another"><span>View More</span></a>
          </div>
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
