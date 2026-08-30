import {TableRow} from '../components/ComparisonTable';

// 格安SIM系の行データ(CompareTablesSceneから参照)。UQモバイルは未使用のため含まない。
export const budgetSimRows: TableRow[] = [
	{
		badgeText: '楽天',
		badgeColor: '#BF0000',
		name: '楽天モバイル',
		price: '1,078〜3,278円',
		capacity: '従量',
		feature: '使った分だけ課金・20GB超は定額',
	},
	{
		badgeText: 'Y!m',
		badgeColor: '#FF0033',
		name: 'Y!mobile',
		price: '2,365〜4,015円',
		capacity: '4〜30',
		feature: 'SoftBank回線・家族割で割安に',
	},
	{
		badgeText: 'mio',
		badgeColor: '#003399',
		name: 'IIJmio',
		price: '850〜2,000円',
		capacity: '2〜20',
		feature: '業界最安級・混雑時は速度低下あり',
	},
	{
		badgeText: 'mineo',
		badgeColor: '#00A2E8',
		name: 'mineo',
		price: '1,320〜2,000円',
		capacity: '5〜20',
		feature: 'docomo/au/SoftBank回線を選択可',
	},
	{
		badgeText: 'OCN',
		badgeColor: '#00A650',
		name: 'OCNモバイル',
		price: '550円〜',
		capacity: '小容量',
		feature: 'docomo回線・低容量ユーザー向け最安級',
	},
	{
		badgeText: 'HIS',
		badgeColor: '#F7941D',
		name: 'HISモバイル',
		price: '490〜4,400円',
		capacity: '〜20GB',
		feature: '4回線から選択・初月無料の場合あり',
	},
];
