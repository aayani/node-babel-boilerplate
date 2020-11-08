export const Controller = (route = '') => (target, name, descriptor) => () => {
  console.log({ target, name, descriptor });
};

export const Service = () => () => () => {};

export const Get = (route = '') => () => () => {};

export const Put = (route = '') => () => () => {};

export const Post = (route = '') => () => () => {};

export const Patch = (route = '') => () => () => {};

export const Delete = (route = '') => () => () => {};
