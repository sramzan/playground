import React                from 'react';
import PropTypes            from 'prop-types';
import CourseList           from './CourseList';
import {connect}            from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions   from '../../actions/courseActions';

class CoursePage extends React.Component{
    constructor(props, context){
        super(props, context);

        this.state = {
            course: {
                title : ""
            }
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event){
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({
            course: course
        });
    }

    onClickSave(){
        // alert('Saving ' + this.state.course.title);
        // this.props.dispatch(courseActions.createCourse(this.state.course)); // if we don't define mapDispatchToProps in the connect call, we have to make a manaul dispatch call
        this.props.actions.createCourse(this.state.course);
    }

    courseRow(course, index){
        return <div key={index}>{course.title}</div>;
    }

    // <h1>Courses</h1>
    // {this.props.courses.map(this.courseRow)}
    // <h2>Add Courses</h2>
    // <input 
    //     type="text"
    //     onChange={this.onTitleChange}
    //     value={this.state.course.title}
    // />
    // <input
    //     type="submit"
    //     value="Save"
    //     onClick={this.onClickSave} 
    // />

    render() {
        const {courses} = this.props;

        // TOOD: move markup to presentation component
        return (
            <div>
                <h1>Volumes</h1>
                <input 
                    type="submit"
                    value="Add Course"
                    className="btn btn-primary"
                    onClick={this.redirectToAddCoursePage}
                />
                <CourseList courses={courses}/>
            </div>
        );
    }
}

/**
 * dispatch validation
 */
CoursePage.propTypes = {
    // dispatch: PropTypes.func.isRequired,
    courses: PropTypes.array.isRequired,
    // createCourse: PropTypes.func.isRequired
    actions: PropTypes.object.isRequired
};

/**
 * @state is our state in the redux store
 * @ownProps reference to component's own props
 */
function mapStateToProps(state, ownProps){
    return {
        courses: state.courseReducer //i.e. this.props.courses in the component above
    };
}

/**
 * @dispatch - injected by connect function
 * Determines what actions are available in our component
 */
function mapDispatchToProps(dispatch){
    // return {
    //     createCourse: (course) => {
    //         dispatch(courseActions.createCourse(course));
    //     }
    // };
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };

}

/**
 *  This is a container component (high order component), which means we use
 * connect method in order to interact with redux
 * connect() returns a function which is passed to our container component CoursePage
 * 
 * Could this instead if you do not like the dual method calls
 * const connectedStaeAndProps = connect(mapStateToProps, mapDispatchToProps);
 * export default connectedStateAndProps(CoursePage);
 */
export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);