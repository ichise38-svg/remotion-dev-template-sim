import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {MessageCard} from '../components/MessageCard';

// 「示唆パート」と「締め(CTA)」を1つの連続したシーンとして統合。
// 背景動画を敷いても文字が埋もれないよう、テロップは全てテーブル風カード
// (ダークヘッダー+白いカード)に統一している。
export const SUGGESTION_CTA_DURATION = 150; // 5秒

export const SuggestionCtaScene: React.FC = () => {
	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				gap: 40,
				padding: '0 70px',
			}}
		>
			{/* 示唆パート:年間・10年換算をまとめて1枚のカードで表示 */}
			<MessageCard icon="📊" label="POINT" labelColor="#FFD84D" fontSize={30}>
				<div style={{fontSize: 26, color: '#8A6D3B', marginBottom: 14}}>
					毎月5,000円の差でも
				</div>
				<div style={{fontSize: 40, marginBottom: 14}}>
					1年で<span style={{color: '#FF3B30'}}>6万円</span>
					<br />
					10年で<span style={{color: '#FF3B30'}}>60万円</span>
				</div>
				<div style={{fontSize: 22, color: '#8A6D3B'}}>
					新NISAに回せる金額と同じ規模
				</div>
			</MessageCard>

			{/* 前のカードは消さずに、CTAカードを続けて追加表示 */}
			<Sequence from={95} layout="none">
				<MessageCard
					icon="📌"
					label="保存推奨"
					labelColor="#7CFFB2"
					fontSize={34}
				>
					自分のプラン、保存して
					<br />
					今月中に見直してみてください
				</MessageCard>
			</Sequence>
		</AbsoluteFill>
	);
};
