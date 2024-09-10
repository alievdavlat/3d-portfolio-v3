import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createSkils = mutation({
  args: {
    name: v.string(),
    image_url: v.string(),
  },
  handler: async (ctx, args) => {

    const skills = await ctx.db.insert("skils_items", {
      name: args.name,
      image_url:args.image_url,
    });

    return skills;
  },
});

export const getAllSkils = query({
  handler: async (ctx) => {

    let skillsQuery = ctx.db.query('skils_items')


    const skills = await skillsQuery.order("desc").collect();

    return skills;
  },
});


export const updateSkilsFields = mutation({
  args: {
    id: v.id("skils_items"),
    name:v.optional(v.string()),
    image_url:v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { id, ...rest } = args;

    const existingSkils = await ctx.db.get(id);

    if (!existingSkils) {
      throw new Error("Not found");
    }

 
    const skills = await ctx.db.patch(id, rest);

    return skills;
  },
});






export const deleteSkills = mutation({
  args: {
    id: v.id("skils_items"),
  },
  handler: async (ctx, args) => {


    const existingSkils = await ctx.db.delete(args.id);


    return existingSkils;
  },
});