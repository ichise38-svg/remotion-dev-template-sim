import React from 'react';
import {japaneseFontFamily} from '../fonts';

type MessageCardProps = {
	icon: string;
	label: string;
	labelColor: string; // ヘッダーバーの文字色(大手=黄色系、格安=緑系と同じ考え方)
	children: React.ReactNode;
	fontSize?: number;
};

// 比較表(ComparisonTable)と同じ「ダークヘッダー + 白いカード」の
// デザインで、1メッセージだけを見せるテーブル風カード。
// フック・CTAのテロップをこのカードに統一している。
export const MessageCard: React.FC<MessageCardProps> = ({
	icon,
	label,
	labelColor,
	children,
	fontSize = 46,
}) => {
	return (
		<div
			style={{
				width: 900,
				borderRadius: 26,
				overflow: 'hidden',
				border: '8px solid #2B2B2B',
				fontFamily: japaneseFontFamily,
			}}
		>
			<div
				style={{
					background: '#2B2B2B',
					padding: '22px 32px',
					display: 'flex',
					alignItems: 'center',
					gap: 14,
				}}
			>
				<span style={{fontSize: 30}}>{icon}</span>
				<span
					style={{
						color: labelColor,
						fontSize: 28,
						fontWeight: 800,
						letterSpacing: 1,
						fontFamily: japaneseFontFamily,
					}}
				>
					{label}
				</span>
			</div>

			<div
				style={{
					background: '#fff',
					padding: '52px 40px',
					textAlign: 'center',
				}}
			>
				<div
					style={{
						fontSize,
						fontWeight: 800,
						color: '#2B2B2B',
						lineHeight: 1.5,
						fontFamily: japaneseFontFamily,
					}}
				>
					{children}
				</div>
			</div>
		</div>
	);
};
