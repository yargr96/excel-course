import './scss';

const foo = async ({a}) => {
  return a**a;
};

console.log(foo({a: 2}));
