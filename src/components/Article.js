import 'font-awesome/css/font-awesome.min.css';
import  './Article.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import graph from '../assets/graph.jpg'

import { faComputer } from '@fortawesome/free-solid-svg-icons'
import { faCube } from '@fortawesome/free-solid-svg-icons'
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faComputer} />
const element2 = <FontAwesomeIcon icon={faCube} />
const element3 = <FontAwesomeIcon icon={faNetworkWired}/>

const Article = () =>{
    return (
        <div className="Article">
            <h2 id="about_title">About us</h2>
               <div id="about">
                   <div className="about_block">
                       <p>{element}</p>
                       <h3>Lorem ipsum</h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                   </div>
                   <div className="about_block">
                       <p>{element2}</p>
                       <h3>Lorem ipsum</h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                   </div>
                   <div className="about_block">
                       <p>{element3}</p>
                       <h3>Lorem ipsum</h3>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                   </div>

               </div>
            <div className="feature">
                <img className="item_photo" src={graph} alt="" width="310px" height="310px" />
                <h4 className="title">Lorem ospum</h4>
                <h1 className="sub_title">Lorem Ipsum</h1>
                <p className="item_description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab accusantium aut autem corporis, cum debitis error eveniet hic itaque, magnam nemo quia!</p>
            </div>

        </div>
    )
}

export default Article;