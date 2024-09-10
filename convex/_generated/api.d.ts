/* eslint-disable */
/**
 * Generated `api` utility.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * To regenerate, run `npx convex dev`.
 * @module
 */

import type {
  ApiFromModules,
  FilterApi,
  FunctionReference,
} from "convex/server";
import type * as about from "../about.js";
import type * as contact from "../contact.js";
import type * as hero from "../hero.js";
import type * as projects from "../projects.js";
import type * as reviews from "../reviews.js";
import type * as section_controller from "../section_controller.js";
import type * as skils from "../skils.js";
import type * as work_experience from "../work_experience.js";

/**
 * A utility for referencing Convex functions in your app's API.
 *
 * Usage:
 * ```js
 * const myFunctionReference = api.myModule.myFunction;
 * ```
 */
declare const fullApi: ApiFromModules<{
  about: typeof about;
  contact: typeof contact;
  hero: typeof hero;
  projects: typeof projects;
  reviews: typeof reviews;
  section_controller: typeof section_controller;
  skils: typeof skils;
  work_experience: typeof work_experience;
}>;
export declare const api: FilterApi<
  typeof fullApi,
  FunctionReference<any, "public">
>;
export declare const internal: FilterApi<
  typeof fullApi,
  FunctionReference<any, "internal">
>;
