import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createProjects = mutation({
  args: {
    title: v.string(),
    desc: v.string(),
    subdesc: v.string(),
    site_preview: v.string(),
    texture: v.string(),
    spotlight: v.string(),
    source_code: v.string(),
    image_url: v.string(),
    tags: v.array(v.object({
      name: v.string(),
      path:v.string()
    })),

  },
  handler: async (ctx, args) => {

    const Projects = await ctx.db.insert("projects_items", {
      title: args.title,
      desc:args.desc,
      subdesc:args.subdesc,
      site_preview:args.site_preview,
      texture:args.texture,
      spotlight:args.spotlight,
      source_code:args.source_code,
      image_url:args.image_url,
      tags:args.tags
    });

    return Projects;
  },
});

export const getAllProjects = query({
  handler: async (ctx) => {

    let projectsQuery = ctx.db.query('projects_items')


    const projects = await projectsQuery.order("desc").collect();

    return projects;
  },
});

export const getProjectById = query({
  args: { id: v.id("projects_items") },
  handler: async (ctx, args) => {

    const project = await ctx.db.get(args.id);

    if (!project) {
      return "Not found";
    }


    return project;
  },
});


export const updateProjectsFields = mutation({
  args: {
    id: v.id("projects_items"),
    title: v.optional(v.string()),
    desc: v.optional(v.string()),
    subdesc: v.optional(v.string()),
    site_preview: v.optional(v.string()),
    texture: v.optional(v.string()),
    spotlight: v.optional(v.string()),
    source_code: v.optional(v.string()),
    image_url: v.optional(v.string()),
    tags:v.optional( v.array(
      v.object({
        name: v.string(),
        path: v.string(),
      }))
    ),
  },
  handler: async (ctx, args) => {
    const { id, ...rest } = args;

    const existingproject = await ctx.db.get(id);

    if (!existingproject) {
      throw new Error("Not found");
    }

 
    const project = await ctx.db.patch(id, rest);

    return project;
  },
});






export const deleteProject = mutation({
  args: {
    id: v.id("projects_items"),
  },
  handler: async (ctx, args) => {


    const existingProject = await ctx.db.delete(args.id);


    return existingProject;
  },
});