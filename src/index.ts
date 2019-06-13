import ifElse from 'ramda/src/ifElse';
import curry from 'ramda/src/curry';

const doNotRender = () => null;

export const renderWhen = curry(
	(predicate: (props: any) => boolean, component: any) =>
		ifElse(predicate, component, doNotRender),
);

export const renderUnless = curry(
	(predicate: (props: any) => boolean, component: any) =>
		ifElse(predicate, doNotRender, component),
);
