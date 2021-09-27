export const increment = () => {
  return {
    type: 'INCREMENT',
  };
};

// We can also pass data.
// export const increment = (number) => {
//   return {
//     type: 'INCREMENT',
//     data: number, // Most people use the property name "payload" instead of "data".
//   };
// };
