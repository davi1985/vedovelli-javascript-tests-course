import { queryString, parse } from './queryString';

describe('Object to query string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = {
      name: 'Davi',
      profession: 'developer',
    };

    expect(queryString(obj)).toBe('name=Davi&profession=developer');
  });

  it('should create a valid query string even when an array is passed as value ', () => {
    const obj = {
      name: 'Davi',
      skills: ['JS', 'React', 'Typescript'],
    };

    expect(queryString(obj)).toBe('name=Davi&skills=JS,React,Typescript');
  });

  it('should throw an error when an object is passed as value', () => {
    const obj = {
      name: 'Davi',
      skills: { first: 'JS', second: 'React' },
    };

    expect(() => queryString(obj)).toThrowError();
  });
});

describe('Query string to object', () => {
  it('should convert a query string to object', () => {
    const qs = 'name=Davi&profession=developer';

    expect(parse(qs)).toEqual({
      name: 'Davi',
      profession: 'developer',
    });
  });

  it('should convert a query string of a single key-value to object', () => {
    const qs = 'name=Davi';

    expect(parse(qs)).toEqual({
      name: 'Davi',
    });
  });

  it('should convert a query string to an object taking care of comma separated valuess', () => {
    const qs = 'name=Davi&skills=JS,React';

    expect(parse(qs)).toEqual({
      name: 'Davi',
      skills: ['JS', 'React'],
    });
  });
});
