import { useState } from "react";
import { PieChart } from "react-minimal-pie-chart";

import Logo from "../../images/quizinator-logo.svg";
import { Button, Loader, Rater } from "../../components";
import styles from "../../App.module.scss";
import { IQuestions } from "../../types/types";

interface IResultsProps { 
	questions: IQuestions[] | undefined;
  selectNewQuizOptions: () => void;
}

export const Results = (props: IResultsProps) => {
	const { questions, selectNewQuizOptions } = props;
	
	const findResults = (questions: IQuestions[]) => {
		const results = {
			total: questions.length,
			known: 0,
			unknown: 0,
			partial: 0,
		};
		questions.forEach((question) => {
			if (question.rating === 0) results.unknown = results.unknown + 1;
			if (question.rating === 1) results.partial = results.partial + 1;
			if (question.rating === 2) results.known = results.known + 1;
		});
		return results;
	}

	return (
		<div className={styles.appContainer}>
			<div className={styles.appDashboard}>
				<img className={styles.appLogo} src={Logo} alt='quizinator logo' />				
				<h2>Your results</h2>
				{questions && questions.length > 0 &&
					<>
					<h3>SCORE: {(findResults(questions).known / findResults(questions).total) * 100}%</h3>
					<PieChart
						data={[								
							{ title: 'Kinda Got It', className: 'correct', value: findResults(questions).partial / findResults(questions).total, color: '#B554E0' },
							{ title: 'No Idea...', className: 'partial', value: findResults(questions).unknown / findResults(questions).total, color: '#77869F' },
							{ title: 'Knew It!', className: 'incorrect', value: findResults(questions).known / findResults(questions).total, color: '#75FBCD' },
						]}
						style={{
							fontFamily:
								'"Nunito Sans", -apple-system, Helvetica, Arial, sans-serif',
							fontSize: '8px',
						}}
						// radius={pieChartDefaultProps.radius - 6}
						lineWidth={60}
						segmentsStyle={{ transition: 'stroke .3s', cursor: 'pointer' }}
						// segmentsShift={(index) => (index === selected ? 6 : 1)}
						animate
						label={({ x, y, dx, dy, dataEntry }) => (
							<text
								x={x}
								y={y}
								dx={dx}
								dy={dy}
								className={dataEntry.className}
								dominant-baseline="central"
								text-anchor="middle"
								style={{
									fontSize: '5px',
									fontFamily: 'sans-serif'
								}}
							>
								{dataEntry.title}: {Math.round(dataEntry.percentage)}%
							</text>
							)}
							labelPosition={100 - 60 / 2}
							labelStyle={{
								fill: '#3C5273',
								opacity: 0.75,
								pointerEvents: 'none',
							}}
						/>
					</>
				}
				<Button displayText='new quiz' onClick={() => selectNewQuizOptions()} />
			</div>
		</div>
	);
};
