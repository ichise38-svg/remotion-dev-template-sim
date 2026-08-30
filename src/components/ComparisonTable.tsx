import React from 'react';
import {japaneseFontFamily} from '../fonts';

export type TableRow = {
	badgeText: string;
	badgeColor: string;
	name: string;
	price: string;
	capacity: string;
	feature: string;
};

type ComparisonTableProps = {
	title: string;
	icon: string;
	headerAccent: string; // 見出しバー内の文字色(大手=黄色系、格安SIM=緑系)
	rows: TableRow[];
};

// 事前に作成した比較表(バッジ+月額+容量+特徴の一覧)と
// 同じレイアウト・配色を動画内で再現するコンポーネント。
// 画面を大きく使うため、行の高さ・フォントサイズをゆったり大きめにしている。
export const ComparisonTable: React.FC<ComparisonTableProps> = ({
	title,
	icon,
	headerAccent,
	rows,
}) => {
	return (
		<div
			style={{
				width: 980,
				boxSizing: 'border-box',
				borderRadius: 26,
				overflow: 'hidden',
				border: '8px solid #FFF7E8',
				fontFamily: japaneseFontFamily,
			}}
		>
			<div
				style={{
					background: '#2B2B2B',
					padding: '26px 32px',
					display: 'flex',
					alignItems: 'center',
					gap: 14,
				}}
			>
				<span style={{fontSize: 32}}>{icon}</span>
				<span
					style={{
						color: headerAccent,
						fontSize: 32,
						fontWeight: 800,
						letterSpacing: 1,
						fontFamily: japaneseFontFamily,
					}}
				>
					{title}
				</span>
			</div>

			<div
				style={{
					display: 'grid',
					gridTemplateColumns: '86px 1fr 0.8fr 0.5fr 1.6fr',
					background: '#F5F0E6',
					borderBottom: '1px solid #E5DCC8',
				}}
			>
				<div />
				<HeaderCell>サービス</HeaderCell>
				<HeaderCell center>月額</HeaderCell>
				<HeaderCell center>容量</HeaderCell>
				<HeaderCell>特徴</HeaderCell>
			</div>

			<div style={{background: '#fff'}}>
				{rows.map((row, i) => (
					<div
						key={row.name}
						style={{
							display: 'grid',
							gridTemplateColumns: '86px 1fr 0.8fr 0.5fr 1.6fr',
							alignItems: 'center',
							padding: '28px 0',
							background: i % 2 === 1 ? '#FAFAFA' : '#fff',
							borderBottom:
								i < rows.length - 1 ? '1px solid #F0F0F0' : 'none',
						}}
					>
						<div style={{paddingLeft: 18}}>
							<div
								style={{
									width: 66,
									height: 66,
									borderRadius: '50%',
									background: row.badgeColor,
									color: '#fff',
									fontSize: 18,
									fontWeight: 800,
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									textAlign: 'center',
									fontFamily: japaneseFontFamily,
								}}
							>
								{row.badgeText}
							</div>
						</div>
						<div style={{fontSize: 30, fontWeight: 700, color: '#2B2B2B'}}>
							{row.name}
						</div>
						<div
							style={{
								fontSize: 27,
								fontWeight: 800,
								color: '#2B2B2B',
								textAlign: 'center',
							}}
						>
							{row.price}
						</div>
						<div style={{fontSize: 24, color: '#555', textAlign: 'center'}}>
							{row.capacity}
						</div>
						<div
							style={{
								fontSize: 22,
								color: '#666',
								lineHeight: 1.4,
								paddingRight: 20,
							}}
						>
							{row.feature}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

const HeaderCell: React.FC<{
	children: React.ReactNode;
	center?: boolean;
}> = ({children, center}) => (
	<div
		style={{
			padding: '14px 8px',
			fontSize: 20,
			fontWeight: 800,
			color: '#8A6D3B',
			textAlign: center ? 'center' : 'left',
		}}
	>
		{children}
	</div>
);
