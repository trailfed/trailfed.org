// Curated list of known TrailFed instances. PR welcome to add your own.
// Keep ordered alphabetically by domain within each category.

export type Category = 'general' | 'vanlife' | 'sailing' | 'cycling' | 'hiking';

export interface Server {
  domain: string;
  name: string;
  description: string;
  category: Category;
  language: string;
  region: string;
  signup: 'open' | 'approval' | 'closed';
  phase: 'scaffold' | 'alpha' | 'beta' | 'stable';
}

export const servers: Server[] = [
  {
    domain: 'camp.trailfed.org',
    name: 'camp.trailfed.org',
    description:
      'Reference TrailFed instance operated by the project maintainers. Open to all travellers. Phase 0 scaffold — federation plumbing only.',
    category: 'general',
    language: 'en',
    region: 'EU',
    signup: 'closed',
    phase: 'scaffold',
  },
];

export const categoryLabels: Record<Category, string> = {
  general: 'General',
  vanlife: 'Van-life',
  sailing: 'Sailing',
  cycling: 'Cycling',
  hiking: 'Hiking',
};
