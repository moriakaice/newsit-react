import { connect } from 'react-redux';
import Feed from '../components/Feed';
import { requestNews } from '../actions/';
import { withRouter } from 'react-router';

const getNews = (state) => {
	// console.log(state);
	let workingState = Object.assign({}, state);
	Object.keys(workingState.news).forEach(item => {
		workingState.news[item] = state.news[item];
	});
	return workingState;
};



const getPreferences = (state) => {
	let returning;

	if (state.savePreferences.hasOwnProperty('preferences')){
		returning = Object.assign({}, state.savePreferences.preferences.preferencesObject);
	}

	return returning;
};

const getError = ({error}) => error;



const mapStateToProps = (state, ownProps) => {
	return {
		news : getNews(state),

		error : getError(state),
		savedPreferences: getPreferences(state),
		ownProps
	};
};

const mapDispatchToProps = dispatch => ({
	getNews: (category) => dispatch(requestNews(category))
});

export default withRouter(connect(
	mapStateToProps,
	mapDispatchToProps,
)(Feed));
