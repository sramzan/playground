import React                from 'react';
import PropTypes            from 'prop-types';
import {connect}            from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class MangeCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign({}, this.props.initialCourse),
            errors: {}
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    updateCourseState(event) {
        const field = event.target.name;
        let course = Object.assign({}, this.state.course);
        course[field] = event.target.value;
        return this.setState({
            course: course
        });
    }

    saveCourse(event){
        event.preventDefault();
        this.props.actions.saveCourse(this.state.course);
        this.context.router.history.push('/volumes');
    }

    render(){
        return (
            <CourseForm 
                allAuthors={this.props.authors}
                onChange={this.updateCourseState}
                onSave={this.saveCourse}
                course={this.state.course}
                errors={this.state.errors}
            />
        );
    }
}

MangeCoursePage.propTypes = {
    initialCourse : PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

MangeCoursePage.contextTypes = {
    router: PropTypes.object
};

function mapStateToProps(state, ownProps){
    let course = {
        id: '',
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
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MangeCoursePage);