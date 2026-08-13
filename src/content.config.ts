import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { z } from 'astro:content';

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        /**
         * Provenance and review state for every page, surfaced on the page
         * itself so nobody mistakes converted-but-unverified content for
         * checked content.
         */
        reviewStatus: z
          .enum(['verified', 'converted-unverified', 'new', 'rewritten'])
          .default('converted-unverified'),
        /** Where this page came from, for the audit trail. */
        sourceNote: z.string().optional(),
        /** Kotahi version this page describes, if known. */
        appliesTo: z.string().optional(),
      }),
    }),
  }),
};
