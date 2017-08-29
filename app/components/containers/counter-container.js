import { connect } from 'react-redux'
import Counter from '../presentation/counter'
import { changeCount } from '../../actions'

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
};

const mapDispatchToProps = dispatch => {
    return {
        changeCountClick: (amount) => {
            dispatch(changeCount(amount))
        },
    }
};

const CounterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

export default CounterContainer;