export default (data = []) => ({
  create: (obj = {}) => {
    data.push(obj);
    return new Promise((resolve) => resolve(obj));
  },

  findAll: () => new Promise((resolve) => resolve([...data])),
});
