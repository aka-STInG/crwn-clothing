import { createAction } from "../../utils/reducer/reducer.util";
import { CATEGORIES_ACTIION_TYPES } from "./category.types";

export const setCategories = (categoriesArray) =>
  createAction(CATEGORIES_ACTIION_TYPES.SET_CATEGORIES, categoriesArray);
