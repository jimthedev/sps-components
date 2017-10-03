import React from 'react';
import { RouteComponentProps, match, Link } from 'react-router-dom';
import { get } from 'lodash';

interface AboutParams {
  name: string;
  value: string;
}

interface AboutProps extends RouteComponentProps<any> {
  match: match<AboutParams>;
}

const yo = {
  my: {
      name: 'asdf'
  }
};

export default ({ match }: AboutProps) => <div>hi, {match.params.name} { get(yo, 'my.name') }
  <Link to="/">Index</Link><span>Hi</span>
</div>;
