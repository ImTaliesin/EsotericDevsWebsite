import BlobBackground from '@components/Small/blobBackground';

const Background = () => {
	return (
		<div className='fixed top-0 left-0 w-full h-full bg-gradient-to-r from-bg-1 to-bg-2 z-0'>
			<div>
				<div className='gradients-container'>
					<div className='g1' />
					<div className='g2' />
					<div className='g3' />
					<div className='g4' />
					<div className='g5' />
					<div className='g6' />
					<div className='g7' />
					<BlobBackground className='interactive' />
				</div>
			</div>
		</div>
	);
};

export default Background;
