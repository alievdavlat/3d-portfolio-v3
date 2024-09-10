import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createHeroData = mutation({
  args: {
    title: v.string(),
    subtitle: v.string(),
  },
  handler: async (ctx, args) => {

    const heroData = await ctx.db.insert("heroSection", {
      title: args.title,
      subtitle: args.subtitle,
    });

    return heroData;
  },
});

export const getHeroData = query({
  handler: async (ctx) => {

    let heroDataQuery = ctx.db.query('heroSection')


    const heroData = await heroDataQuery.order("desc").collect();

    return heroData;
  },
});



export const updateHeroDataFields = mutation({
  args: {
    id: v.id("heroSection"),
    title: v.optional(v.string()),
    subtitle:  v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { id, ...rest } = args;

    const existingHeroData = await ctx.db.get(id);

    if (!existingHeroData) {
      throw new Error("Not found");
    }

 
    const heroData = await ctx.db.patch(id, rest);

    return heroData;
  },
});






export const deleteHeroData = mutation({
  args: {
    id: v.id("heroSection"),
  },
  handler: async (ctx, args) => {


    const existingHeroData = await ctx.db.delete(args.id);


    return existingHeroData;
  },
});