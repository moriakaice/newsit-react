import React from 'react';
import PropTypes from 'prop-types';
// import Group from './Group';
import GroupMain from './GroupMain';

// const Feed = ({data}) => {
// 	return (
// 		<section className="feed">
// 			<GroupMain
// 				categoryData={data.generalData}
// 			/>
// {			<Group
// 				category='business'
// 				categoryData={data.businessData}
// 			/>
// 			<Group 
// 				category='entertaiment'
// 				categoryData={data.entertaimentData}
// 			/>
// 			<Group 
// 				category='health'
// 				categoryData={data.healthData}
// 			/>
// 			<Group 
// 				category='science'
// 				categoryData={data.scienceData}
// 			/>
// 			<Group 
// 				category='sports'
// 				categoryData={data.sportsData}
// 			/>
// 			<Group 
// 				category='technology'
// 				categoryData={data.technologyData}
// 			/>}
// 		</section>
// 	);
// };

class Feed extends React.Component {
	constructor(props) {
		super(props);
	};

	componentDidMount() {
		this.props.getNews();
	};

	render() {
		return (
			<section className="feed">
				<GroupMain 
					categoryData={this.props.generalNews}
				/>
			</section>
		);
	};
};


Feed.propTypes = {
	generalNews: PropTypes.object,
	getNews: PropTypes.func
};


export default Feed;