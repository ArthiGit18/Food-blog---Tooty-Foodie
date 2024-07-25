import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Navbar } from '../../pages/navbar';
import { Footer } from '../../pages/footer';
import recipeData from '../../data/recipe.json';
import Copyright from '../../pages/copyright';

const Veg = () => {
    const [selectedRecipe, setSelectedRecipe] = React.useState(null);
    const recipeRefs = React.useRef([]);

    const handleScrollToRecipe = (recipeName) => {
        setSelectedRecipe(recipeName);
        const recipeIndex = recipeData.findIndex((recipe) => recipe.name === recipeName);
        if (recipeIndex !== -1) {
            recipeRefs.current[recipeIndex].scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div>
            <Navbar />
            <div className='container'>
                <div className='search_recipe'>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={recipeData.map(recipe => recipe.name)}
                        sx={{ width: 300 }}
                        onChange={(event, value) => handleScrollToRecipe(value)}
                        renderInput={(params) => <TextField {...params} label="Search Recipe" />}
                    />
                </div>
                <h3 className='section-header'>Veg Recipes</h3>
                <div className='trending-recipe'>
                    {/* <div className='trending_more'>
                        <a href="another"><span>View More</span></a>
                    </div> */}
                    {recipeData.map((recipe, index) => (
                        <div
                            key={recipe.id}
                            className={`recipe_card text-center ${selectedRecipe === recipe.name ? 'selected' : ''}`}
                            ref={el => (recipeRefs.current[index] = el)}
                        >
                            <img src={recipe.image} alt="recipe" className='my-5 img-fluid' />
                            <h3 className='my-3'>{recipe.name}</h3>
                            <p>{recipe.description}</p>
                            <a href={recipe.link}><span>View Recipe</span></a>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
            <Copyright />
        </div>
    );
};

export default Veg;
