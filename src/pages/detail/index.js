import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../../common/header';
import { DetailWrapper } from './style';
import { camelcaseToWords } from '../../utils/utils';

class Detail extends PureComponent {
    render () {
         const {list, id} = this.props;
         const newList = list.toJS();
         const item = newList.find(item => item.account === id);
         const entries =  Object.entries(item);
        return (
        <DetailWrapper>
          <Header title={'Transaction ' + id} />
            <Link to={'/'}>
                <button>Home</button>
            </Link>
          <hr />
          <ul>
              {entries.map(([key, value]) => <li key={key}>{camelcaseToWords(key)} : {value}</li>)}
          </ul>
        </DetailWrapper>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.account_id;
  return {
      id : id,
      list: state.getIn(['home', 'list']),
  }
}

export default connect(mapStateToProps)(Detail)