const hello = (parent, args, context, info) => {
  return 'world';
};

const bye = (parent, args, context, info) => {
  return 10;
};

export default { hello, bye };
