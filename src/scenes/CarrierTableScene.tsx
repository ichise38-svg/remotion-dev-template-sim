import {TableRow} from '../components/ComparisonTable';

// 大手キャリア系の行データ(CompareTablesSceneから参照)
export const carrierRows: TableRow[] = [
	{
		badgeText: '本体',
		badgeColor: '#333333',
		name: 'docomo/au/SB',
		price: '7,000〜8,000円',
		capacity: '20GB',
		feature: '回線最安定・店舗サポート手厚い・割高',
	},
	{
		badgeText: 'ahamo',
		badgeColor: '#DA1919',
		name: 'ahamo',
		price: '2,970円',
		capacity: '30GB',
		feature: '5分かけ放題込み・本体回線と同品質',
	},
	{
		badgeText: 'povo',
		badgeColor: '#FF3D69',
		name: 'povo2.0',
		price: '0円+都度課金',
		capacity: '任意',
		feature: '基本料0円・トッピング制・サブ回線向き',
	},
	{
		badgeText: 'LINE',
		badgeColor: '#00C300',
		name: 'LINEMO',
		price: '990〜2,970円',
		capacity: '3/30GB',
		feature: 'LINEギガフリー・小容量派に有利',
	},
];
