// types.ts
import type { PortableTextBlock } from '@portabletext/react';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export type Post = {
  [x: string]: unknown;
  _id: string;
  _createdAt: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage?: {
    url: string | StaticImport;
    _type: 'image';
    asset: {
      _ref: string;
      _type: 'reference';
      // URL-адреса буде додана в GROQ-запиті
    };
  };
  body: PortableTextBlock[];
};