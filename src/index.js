import { T, when, always } from 'ramda';

const fn = when(T, always([[5, 1], [2, 2]]));

export default fn;
