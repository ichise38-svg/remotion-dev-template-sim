import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

type TelopProps = {
	children: React.ReactNode;
	delay?: number;
	fontSize?: number;
	color?: string;
	weight?: number;
	align?: 'left' | 'center';
	style?: React.CSSProperties;
};

// 通信費見直しリール用の基本テロップ。
// フェードイン + 下からのスライドインで、比較表と同じ配色トーンに合わせている。
export const Telop: React.FC<TelopProps> = ({
	children,
	delay = 0,
	fontSize = 56,
	color = '#2B2B2B',
	weight = 800,
	align = 'center',
	style,
}) => {
	const frame = useCurrentFrame();
	const localFrame = frame - delay;

	const opacity = interpolate(localFrame, [0, 12], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});
	const translateY = interpolate(localFrame, [0, 12], [24, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	return (
		<div
			style={{
				opacity,
				transform: `translateY(${translateY}px)`,
				fontSize,
				fontWeight: weight,
				color,
				textAlign: align,
				fontFamily:
					"'Hiragino Sans', 'Noto Sans JP', 'Yu Gothic', sans-serif",
				lineHeight: 1.4,
				textShadow: '0 2px 10px rgba(0,0,0,0.06)',
				...style,
			}}
		>
			{children}
		</div>
	);
};
