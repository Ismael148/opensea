import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'ga3e9zx1',
  dataset: 'production',
  apiVersion: '2022-11-23',
  token:
    'sk6MRUjnoK0NEKIL6psesVkNFbT3O2BCwaHxhUVXlEdOnWR5l4PVEKJDMIiNNSChuQBiAvfWe4RwV9sIgTLRNZxrJ6JSWwJSLtEkP0kKZiFg3anllqasHBpBs1seR656cq9Tv8zJ30VRbkOEqKW5ubEoUXUKAlm33QQsZfFcIQ7VI6PSW0Yj',
  useCdn: false,
});
