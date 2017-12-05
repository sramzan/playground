import React                from 'react';
import PropTypes            from 'prop-types';
import {connect}            from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import * as authorActions from '../../actions/authorActions';
import CourseForm from './CourseForm';

class MangeCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign({}, this.props.initialCourse),
            errors: {}
        };
    }

    render(){
        return (
            <CourseForm 
                allAuthors={this.props.authors}
                course={this.state.course}
                errors={this.state.errors}
            />
        );
    }
}

MangeCoursePage.propTypes = {
    initialCourse : PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps){
    let course = {
        id: '',
        watchHref: '',
        title: '',
        authorId: '',
        length: '',
        category: ''
    };

    /**
     * Maps the data from the API to our code model
     */
    const authorsFormattedForDropdown = state.authorsReducer.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        };
    });

    return {
        initialCourse: course,
        authors: authorsFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(courseActions,authorActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MangeCoursePage);