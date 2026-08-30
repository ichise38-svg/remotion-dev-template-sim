import React from 'react';
import {Composition} from 'remotion';
import {Video, TOTAL_DURATION_IN_FRAMES, FPS} from './Video';

export const RemotionRoot: React.FC = () => {
	return (
		<Composition
			id="TsuushinReview"
			component={Video}
			durationInFrames={TOTAL_DURATION_IN_FRAMES}
			fps={FPS}
			width={1080}
			height={1920}
		/>
	);
};
