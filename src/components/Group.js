import React from 'react';
import PropTypes from 'prop-types';
import Story from './Story';
import StoryMain from './StoryMain';

import classnames from 'classnames';
import '../../styles/Group.scss';

const Group = (props) => {
	const {
		category,
	 		data,
	 		searchResults,
	 		categoryCollapse,
	 		numberOfStories,
	 		history,
	 		view,
	 		activeCategory
	} = props;

	let filteredData;

	if (view === 'default' && category == 'general') {
		filteredData = data.filter((story) => {
			return data.indexOf(story) <= 2;
		});
	} else {
		filteredData = data.filter((story) => {
			return data.indexOf(story) <= (numberOfStories-1);
		});
	}

	const viewToRender =
	<div className={classnames({
		'hidden' : (categoryCollapse && (category != activeCategory)),
		'category-group' : !(categoryCollapse && (category != activeCategory))
	})}>
		<div className={classnames('group-wrapper','group-'+category, {
			'group-general-row': (category === 'general' && view === 'category' || category === 'general' && view === 'personalised')
		})}>
			{/*  cannot do the if statement here :-/ */}
			{filteredData.map((storyData, i) => {
				if (view === 'default' && category == 'general') {
					return <StoryMain
						storyData={storyData}
						order={i}
						key={i}
					/>;
				} else {
					return <Story
						storyData={storyData}
						key={i}
					/>;
				}
			})}
		</div>
		<button
			className={(category === activeCategory) || (view === 'personalised') ? 'hidden' : 'btn-more'}
			onClick={event => {
				if (view != 'personalised') {
					history.push(`/category/${category}`);
				}
			}}
		> ~ More ~
		</button>
	</div>;

	return (
		<section className={classnames('group', {
			'group-active': (category === activeCategory),
			'column-width': (view === 'category' || view === 'found')
		})}>
			<h2
				className={classnames({
					'hidden': (category === 'general' && view === 'default'),
					'category-heading': !(category === 'general' && view === 'default')
				})}
				onClick={event => {
					if (view != 'personalised') {
						history.push(`/category/${category}`);
					}
				}}
			> {category}
			</h2>
			{viewToRender}
		</section>
	);
};

Group.propTypes = {
	category: PropTypes.string,
	data: PropTypes.array,
	history: PropTypes.object,
	searchResults: PropTypes.func,
	categoryCollapse: PropTypes.bool,
	view: PropTypes.string,
	activeCategory: PropTypes.string,
	numberOfStories: PropTypes.number
};

export default Group;
