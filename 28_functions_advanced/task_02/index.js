const favorites = ['id-2', 'id-19'];

const tree = {
  id: 'id-1',
  name: 'Products',
  nodes: [
    {
      id: 'id-2',
      name: 'Food',
      nodes: [
        {
          id: 'id-16',
          name: 'Food',
          nodes: [],
        },
      ],
    },
    {
      id: 'id-21',
      name: 'Food',
      nodes: [
        {
          id: 'id-19',
          name: 'Food',
          nodes: [],
        },
      ],
    },
  ],
};
const markFavorites = (tree, favorites) => {
  const isFavorite = favorites.includes(tree.id);
  return {
    ...tree,
    isFavorite,
    nodes: tree.nodes.map(childNode => markFavorites(childNode, favorites)),
  };
};
const result = markFavorites(tree, favorites);
console.log(result);
