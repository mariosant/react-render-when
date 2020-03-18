import { curry, ifElse } from 'ramda';

const doNotRender = () => null;

export const renderWhen = curry(
	(predicate: (props: any) => boolean, component: any) =>
		ifElse(predicate, component, doNotRender)
);

export const renderUnless = curry(
	(predicate: (props: any) => boolean, component: any) =>
		ifElse(predicate, doNotRender, component)
);
