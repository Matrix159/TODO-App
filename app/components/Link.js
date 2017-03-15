/**
 * Created by Eldridge on 3/14/2017.
 */
import React, {PropTypes} from 'react'

class Link extends React.Component {
    render() {
        if (props.active) {
            return <span>{props.children}</span>
        }
        return (
            <a href="#"
               onClick={e => {e.preventDefault(); props.onClick()}}>
                {props.children}
            </a>
        )
    }
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Link