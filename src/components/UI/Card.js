import './Card.css'

function Card(props){
    const classes = 'card ' + props.className;
    return (<div className={classes}>{props.children}</div>);   // children to make it a wrapper
}

export default Card;