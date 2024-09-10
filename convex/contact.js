import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createContactData = mutation({
  args: {
    title: v.string(),
    description: v.string(),
  },
  handler: async (ctx, args) => {

    const contactData = await ctx.db.insert("contactSection", {
      title: args.title,
      description: args.description,
    });

    return contactData;
  },
});

export const getContactData = query({
  handler: async (ctx) => {

    let contactDataQuery = ctx.db.query('contactSection')


    const contactData = await contactDataQuery.order("desc").collect();

    return contactData;
  },
});



export const updateContactFields = mutation({
  args: {
    id: v.id("contactSection"),
    title: v.optional(v.string()),
    description:  v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { id, ...rest } = args;

    const existingcontactData = await ctx.db.get(id);

    if (!existingcontactData) {
      throw new Error("Not found");
    }

 
    const contactData = await ctx.db.patch(id, rest);

    return contactData;
  },
});






export const deleteContactData = mutation({
  args: {
    id: v.id("contactSection"),
  },
  handler: async (ctx, args) => {


    const existingContactData = await ctx.db.delete(args.id);


    return existingContactData;
  },
});