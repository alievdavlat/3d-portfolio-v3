import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createSectionController = mutation({
  args: {
    hero: v.boolean(),
    about: v.boolean(),
    contact: v.boolean(),
    skils: v.boolean(),
    reviews: v.boolean(),
    workExperiences: v.boolean(),
    projects: v.boolean(),

  },
  handler: async (ctx, args) => {
    const section_controller = await ctx.db.insert("section_controller", {
      hero: args.hero,
      about: args.about,
      contact: args.contact,
      skils: args.skils,
      reviews: args.reviews,
      workExperiences: args.workExperiences,
      projects: args.projects,

    });

    return section_controller;
  },
});

export const getSectionControllers = query({
  handler: async (ctx) => {
    let sectionControllerQuery = ctx.db.query("section_controller");

    const reviews = await sectionControllerQuery.order("desc").collect();

    return reviews;
  },
});

export const updateSectionControllerFields = mutation({
  args: {
    id: v.id("section_controller"),
    hero: v.optional(v.boolean()),
    about: v.optional(v.boolean()),
    contact: v.optional(v.boolean()),
    skils: v.optional(v.boolean()),
    reviews: v.optional(v.boolean()),
    workExperiences: v.optional(v.boolean()),
    projects: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    const { id, ...rest } = args;

    const existingCOntroller = await ctx.db.get(id);

    if (!existingCOntroller) {
      throw new Error("Not found");
    }

    const sectionController = await ctx.db.patch(id, rest);

    return sectionController;
  },
});


