import React from 'react';
import {AbsoluteFill} from 'remotion';
import {MessageCard} from '../components/MessageCard';

export const HookScene: React.FC = () => {
	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<MessageCard icon="📶" label="CHECK" labelColor="#FFD84D" fontSize={48}>
				スマホ代、
				<br />
				比較するだけで
				<br />
				<span style={{color: '#FF3B30'}}>年間5万円</span>変わることが
				<br />
				あります
			</MessageCard>
		</AbsoluteFill>
	);
};
