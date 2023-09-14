import * as Style from './styles/skeleton-card';

const SkeletonCard = () => {
	return (
		<Style.SkeletonInner>
			<Style.SkeletonImg />
			<Style.SkeletonBtn />
			<Style.SkeletonLineOne />
			<Style.SkeletonLineTwo />
		</Style.SkeletonInner>
	);
};

export default SkeletonCard;
