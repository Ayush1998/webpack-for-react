import React from 'react';
import { Loader } from 'semantic-ui-react';
import ReactDelayRender from 'react-delay-render';

const Loading = () => <Loader active size="massive" />;

export default ReactDelayRender({ delay: 3000 })(Loading);