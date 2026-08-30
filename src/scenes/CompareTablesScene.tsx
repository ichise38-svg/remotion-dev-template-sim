import React from 'react';
import {AbsoluteFill} from 'remotion';
import {ComparisonTable} from '../components/ComparisonTable';
import {carrierRows} from './CarrierTableScene';
import {budgetSimRows} from './BudgetSimTableScene';

// 大手・格安、両方の表を最初から同時に表示する(縮小せず画面を大きく使う)
export const COMPARE_TABLES_DURATION = 150; // 5秒

// 上段:大手キャリア系、下段:格安SIM系。両方とも最初から表示。
export const CompareTablesScene: React.FC = () => {
	return (
		<AbsoluteFill
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				gap: 56,
			}}
		>
			<ComparisonTable
				title="大手キャリア系"
				icon="📶"
				headerAccent="#FFD84D"
				rows={carrierRows}
			/>

			<ComparisonTable
				title="格安SIM系"
				icon="💳"
				headerAccent="#7CFFB2"
				rows={budgetSimRows}
			/>
		</AbsoluteFill>
	);
};
