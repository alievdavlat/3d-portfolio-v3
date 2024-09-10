import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  heroSection: defineTable({
    title: v.string(),
    subtitle: v.string(),
  }),
  aboutItems: defineTable({
    title: v.string(),
    description: v.string(),
    imageUrl: v.string(),
    email: v.optional(v.string()),
  }),
  contactSection: defineTable({
    title: v.string(),
    description: v.string(),
  }),
  skils_items: defineTable({
    name: v.string(),
    image_url: v.string(),
  }),
  projects_items: defineTable({
    title: v.string(),
    desc: v.string(),
    subdesc: v.optional(v.string()),
    site_preview: v.optional(v.string()),
    texture: v.optional(v.string()),
    spotlight: v.string(),
    source_code: v.string(),
    image_url: v.string(),
    tags: v.array(
      v.object({
        name: v.string(),
        path: v.string(),
      })
    ),
  }),
  reviews_items: defineTable({
    client_name: v.string(),
    client_job: v.string(),
    star: v.optional(v.number()),
    client_avatar: v.string(),
    comment: v.string(),
  }),
  workExperiences_items: defineTable({
    company: v.string(),
    work_position: v.string(),
    start_date: v.string(),
    end_date: v.string(),
    logo: v.optional(v.string()),
    description: v.string(),
  }),
  section_controller: defineTable({
    hero: v.boolean(),
    about: v.boolean(),
    contact: v.boolean(),
    skils: v.boolean(),
    reviews: v.boolean(),
    projects: v.boolean(),
    workExperiences: v.boolean(), 
  }),
});
