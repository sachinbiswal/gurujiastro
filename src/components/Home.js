import Recipe from "./Recipe";
import { ImSpinner9 } from "react-icons/im";

const Home = ({ recipes, loading, error }) => {
  return (
    
    <div className='home container mx-auto py-8 flex flex-wrap gap-10 justify-center'>
      
      {!loading && !error && recipes.length === 0 ? (
        <div>
          <p className='text-2xl font-semibold  text-red-500 lg:text-4xl text-center leading-normal'>
            Nothing to show, please search something!
          </p>
        
        </div>
      ) : null}

      {loading && (
        <p>
          {error ? (
            <span className='text-2xl font-semibold  text-red-300 lg:text-4xl text-center leading-normal'>
              {error}
            </span>
          ) : (
            <ImSpinner9 className='w-16 h-16 border-t-2 border-r-2 border-b-2 border-red-500 border-transparent rounded-full animate-spin' />
          )}
        </p>
      )}

      {recipes?.length > 0 &&
        recipes.map((recipe) => <Recipe recipe={recipe} key={recipe.id} />)}
    </div>
  );
};

export default Home;
