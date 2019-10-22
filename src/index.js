import ReactDOM from 'react-dom';
import React, {useState} from 'react';
import * as Space from 'react-spaces';
import LeftDrawer from './LeftDrawer';

const grayStyle = { backgroundColor: "#eee" };
const blueStyle = { backgroundColor: "#e0eeee" };

const Demo = () => (
  <Space.ViewPort>
      <LeftDrawer style={grayStyle} width="25%">
        {Description('Left')}
      </LeftDrawer>
  </Space.ViewPort>
);


const Description = (desc) => (
    <Space.Centered>
      <strong style={{ fontFamily: "Roboto", fontSize: 14 }}>{desc}</strong>
      <Space.Info>
        {info => (<div style={{ fontFamily: "Roboto", fontSize: 12 }}>
                    {info.width} x {info.height}
                  </div>)
        }
      </Space.Info>
    </Space.Centered>
);


ReactDOM.render(<Demo />, document.getElementById('root'));
