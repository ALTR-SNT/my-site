// sanity/env.ts
// sanity/env.ts
export const apiVersion = 
  process.env.SANITY_STUDIO_API_VERSION || 
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || 
  '2025-08-06';

export const dataset = 
  process.env.SANITY_STUDIO_DATASET || 
  process.env.NEXT_PUBLIC_SANITY_DATASET || 
  'production';

export const projectId = 
  process.env.SANITY_STUDIO_PROJECT_ID || 
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 
  '28b55qac';

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage);
  }
  return v;
}