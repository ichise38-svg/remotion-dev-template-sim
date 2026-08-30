import React from 'react';
import {AbsoluteFill, Sequence} from 'remotion';
import {HookScene} from './scenes/HookScene';
import {CompareTablesScene, COMPARE_TABLES_DURATION} from './scenes/CompareTablesScene';
import {SuggestionCtaScene, SUGGESTION_CTA_DURATION} from './scenes/SuggestionCtaScene';

export const FPS = 30;

// タイムライン(合計14秒 = 420フレーム / ナレーションなし・テロップのみ)
// 各シーンは背景を透明にしてあるので、背景動画を別レイヤーとして
// このコンポジションの一番下(Sequenceの外側)に敷く想定。
// 0-2s   フック
// 2-9s   比較表(大手キャリア表→消さずに格安SIM表を追加表示)
// 9-14s  示唆パート+締め(CTA)
const HOOK = 60; // 2s
const COMPARE_TABLES = COMPARE_TABLES_DURATION; // 7s(210フレーム)
const SUGGESTION_CTA = SUGGESTION_CTA_DURATION; // 5s(150フレーム、黄色いコメント削除済み)

export const TOTAL_DURATION_IN_FRAMES = HOOK + COMPARE_TABLES + SUGGESTION_CTA;

export const Video: React.FC = () => {
	let cursor = 0;

	const hookFrom = cursor;
	cursor += HOOK;
	const compareTablesFrom = cursor;
	cursor += COMPARE_TABLES;
	const suggestionCtaFrom = cursor;

	return (
		<AbsoluteFill style={{backgroundColor: 'transparent'}}>
			{/* ここに背景動画レイヤーを追加する想定
			    例: <OffthreadVideo src={staticFile('bg.mp4')} style={{position:'absolute', width:'100%', height:'100%', objectFit:'cover'}} /> */}

			<Sequence from={hookFrom} durationInFrames={HOOK}>
				<HookScene />
			</Sequence>

			<Sequence from={compareTablesFrom} durationInFrames={COMPARE_TABLES}>
				<CompareTablesScene />
			</Sequence>

			<Sequence from={suggestionCtaFrom} durationInFrames={SUGGESTION_CTA}>
				<SuggestionCtaScene />
			</Sequence>
		</AbsoluteFill>
	);
};
