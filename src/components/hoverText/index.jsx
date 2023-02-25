import * as React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

const longText = `
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.
Praesent non nunc mollis, fermentum neque at, semper arcu.
Nullam eget est sed sem iaculis gravida eget vitae justo.
`;

export default function VariableWidth(props) {
  return (
    <div>
      <Tooltip title={props.text}>
        <Button sx={{ m: 1 }}>{props.title}</Button>
      </Tooltip>
    </div>
  );
}