import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createRevies = mutation({
  args: {
    client_name: v.string(),
    client_job: v.string(),
    star: v.optional(v.number()),
    client_avatar: v.string(),
    comment: v.string(),
  },
  handler: async (ctx, args) => {
    const reviews = await ctx.db.insert("reviews_items", {
      client_name: args.client_name,
      client_avatar: args.client_avatar,
      client_job: args.client_job,
      comment: args.comment,
      star: args.star,
    });

    return reviews;
  },
});

export const getReviews = query({
  handler: async (ctx) => {
    let reviewsQuery = ctx.db.query("reviews_items");

    const reviews = await reviewsQuery.order("desc").collect();

    return reviews;
  },
});

export const updateReviewsFields = mutation({
  args: {
    id: v.id("reviews_items"),
    client_name: v.optional(v.string()),
    client_job: v.optional(v.string()),
    star: v.optional(v.number()),
    client_avatar: v.optional(v.string()),
    comment: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const { id, ...rest } = args;

    const existingReview = await ctx.db.get(id);

    if (!existingReview) {
      throw new Error("Not found");
    }

    const review = await ctx.db.patch(id, rest);

    return review;
  },
});

export const deleteReviews = mutation({
  args: {
    id: v.id("reviews_items"),
  },
  handler: async (ctx, args) => {
    const existingReview = await ctx.db.delete(args.id);

    return existingReview;
  },
});
