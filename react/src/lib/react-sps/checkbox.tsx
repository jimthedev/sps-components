import * as React from "react";
import themed, { withProps } from "./themed-components";
import { Font, withFonts, sourceSansPro } from "react-sps/font";

interface IThemedCheckboxProps {
  sourceSansPro: Font;
}

const styled = {
  checkbox: withProps<IThemedCheckboxProps>()(themed.div),
};

const ThemedCheckbox = withFonts({ sourceSansPro })(styled.checkbox`

/* Base for label styling */
[type="checkbox"]:not(:checked),
[type="checkbox"]:checked {
  position: absolute;
  left: -9999px;
}
[type="checkbox"]:not(:checked) + label,
[type="checkbox"]:checked + label {
  position: relative;
  padding-left: 1.95em;
  cursor: pointer;
  user-select: none;
}

/* checkbox aspect */
[type="checkbox"]:not(:checked) + label:before,
[type="checkbox"]:checked + label:before {
  content: '';
  position: absolute;
  left: 0; top: 0;
  width: 1.25em; height: 1.25em;
  background: ${({theme}) => theme.color.white };
  border: 2px solid ${({theme}) => theme.color.gray200 };
  border-radius: 4px;
  /*box-shadow: inset 0 1px 3px rgba(0,0,0,.1);*/
}
[type="checkbox"]:checked + label:before {
  border: 2px solid ${({theme}) => theme.color.blue200 };
  background: ${({theme}) => theme.color.blue200 };
}
/* checked mark aspect */
[type="checkbox"]:not(:checked) + label:after,
[type="checkbox"]:checked + label:after {
  content: '✔';
  position: absolute;
  top: .1em; left: .3em;
  font-size: 1.3em;
  line-height: 0.8;
  color: ${({theme}) => theme.color.white };
}
/* checked mark aspect changes */
[type="checkbox"]:not(:checked) + label:after {
  opacity: 0;
  transform: scale(0);
}
[type="checkbox"]:checked + label:after {
  opacity: 1;
  transform: scale(1);
}
/* disabled checkbox */
[type="checkbox"]:disabled:not(:checked) + label:before,
[type="checkbox"]:disabled:checked + label:before {
  box-shadow: none;
  border-color: #bbb;
  background-color: #ddd;
}
[type="checkbox"]:disabled:checked + label:after {
  color: #999;
}
[type="checkbox"]:disabled + label {
  color: #aaa;
}
/* accessibility */
[type="checkbox"]:checked:focus + label:before,
[type="checkbox"]:not(:checked):focus + label:before {
  border: 2px solid ${({theme}) => theme.color.blue300 };;
}

/* hover style just for information */
/*label:hover:before {
  border: 2px solid #4778d9!important;
}*/

`);

/*
  position: relative;
  > input[type="checkbox"] {
    opacity: 0;
  }
  > input[type="checkbox"]:focus + label::before {
    border: 2px dotted blue;
  }
  > input[type="checkbox"] + label {
    color: red;
    user-select: none;
    padding-left: 1.95em;
    cursor: pointer;
  }
  > input[type="checkbox"]:checked + label { color: green; }
  > input[type="checkbox"] + label::before {
    content: " ";
    position: absolute;
    left: 0; top: 0;
    width: 1.25em;
    height: 1.25em;
    border: 2px solid #ccc;
    background: #fff;
    border-radius: 4px;
    box-shadow: inset 0 1px 3px rgba(0,0,0,.1);
  }
  > input[type="checkbox"]:checked + label::before {
    display: inline-block;
    background-color: ${({theme}) => theme.color.blue200 };
    content: '✔';
    color: ${({theme}) => theme.color.white };
  }
  */

export class Checkbox extends React.Component<any> {
  render() {
    const {label, ...rest } = this.props;
    return (
      <ThemedCheckbox>
        <input type="checkbox" {...rest} /><label htmlFor={this.props.id}>{label}</label>
      </ThemedCheckbox>
    );
  }
};