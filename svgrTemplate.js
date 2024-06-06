const template = (variables, { tpl }) => tpl`
import * as React from 'react';
import Svg, { SvgProps } from 'react-native-svg';

interface Props extends SvgProps {
  fill?: string;
}

const ${variables.componentName}: React.FC<Props> = (props) => (
  <Svg {...props}>
    ${variables.jsx}
  </Svg>
);

export default ${variables.componentName};
`;

module.exports = template;
