import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createWorkExperience = mutation({
  args: {
    company: v.string(),
    work_position: v.string(),
    start_date: v.string(),
    end_date: v.string(),
    logo: v.optional(v.string()),
    description: v.string(),
  },
  handler: async (ctx, args) => {

    const WorkExperience = await ctx.db.insert("workExperiences_items", {
    company: args.company,
    work_position: args.work_position,
    start_date: args.start_date,
    end_date: args.end_date,
    logo: args.logo,
    description: args.description,
    });

    return WorkExperience;
  },
});

export const getAllworkExperiences = query({
  handler: async (ctx) => {

    let WorkExperienceQuery = ctx.db.query('workExperiences_items')


    const WorkExperience = await WorkExperienceQuery.order("desc").collect();

    return WorkExperience;
  },
});


export const updateWorkExperienceFields = mutation({
  args: {
    id: v.id("workExperiences_items"),
    company:v.optional(v.string()),
    work_position:v.optional(v.string()),
    start_date:v.optional(v.string()),
    end_date:v.optional(v.string()),
    logo: v.optional(v.string()),
    description: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { id, ...rest } = args;

    const existingWorkExperience = await ctx.db.get(id);

    if (!existingWorkExperience) {
      throw new Error("Not found");
    }

 
    const WorkExperience = await ctx.db.patch(id, rest);

    return WorkExperience;
  },
});






export const deleteWorkExperience = mutation({
  args: {
    id: v.id("workExperiences_items"),
  },
  handler: async (ctx, args) => {


    const existingWorkExperience = await ctx.db.delete(args.id);


    return existingWorkExperience;
  },
});