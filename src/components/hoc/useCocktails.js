import { useFetch } from "../../hooks/useFetch";

export const useCocktails = (search = "margarita") => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`;
  const { data, isLoading, error } = useFetch(url);

  // У TheCocktailDB результати у data.drinks
  return { drinks: data?.drinks || [], isLoading, error };
};