import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createAboutItem = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    imageUrl: v.string(),
    email: v.string(),
  },
  handler: async (ctx, args) => {


    const aboutItem = await ctx.db.insert("aboutItems", {
      title: args.title,
      description: args.description,
      imageUrl:args.imageUrl,
      email:args.email
    });

    return aboutItem;
  },
});

export const getAllAboutItem = query({
  handler: async (ctx) => {

    let aboutItemsQuery = ctx.db.query('aboutItems')


    const aboutItems = await aboutItemsQuery.order("desc").collect();

    return aboutItems;
  },
});



export const updateAboutItemFields = mutation({
  args: {
    id: v.id("aboutItems"),
    title: v.optional(v.string()),
    description:  v.optional(v.string()),
    imageUrl:  v.optional(v.string()),
    email:  v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { id, ...rest } = args;

    const existingAboutItem = await ctx.db.get(id);

    if (!existingAboutItem) {
      throw new Error("Not found");
    }

 
    const aboutItem = await ctx.db.patch(id, rest);

    return aboutItem;
  },
});






export const deleteAboutItem = mutation({
  args: {
    id: v.id("aboutItems"),
  },
  handler: async (ctx, args) => {


    const existingAboutItem = await ctx.db.delete(args.id);


    return existingAboutItem;
  },
});