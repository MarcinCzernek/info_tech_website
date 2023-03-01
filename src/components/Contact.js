import Person from '../assets/person.png'
import  './Contact.scss'
import Slack from '../assets/slack.jpg'
import GitCat from '../assets/GitHub.png'
import CW from '../assets/logo.svg'
import DropBox from '../assets/Dropbox-logo.png'

const Contact = () =>{
    return (
        <div className="Contact">
            <div id="opinion">
                <h2>Our customers opinions</h2>
            <div className="opinion_block">
                <blocquote className="quote">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse officiis quas recusandae temporibus vitae. Ad at beatae consequuntur dignissimos expedita, fugit inventore minus mollitia odit quam sint veniam voluptatem voluptatum.</blocquote>
                <img className="person_image" src={Person} alt="" height="50px" width="50px"/>
                <h4 className="name">Lorem Ipsum</h4>
                <p className="role">Lorem ipsum dolor sit amet.  </p>
            </div>
                <div className="opinion_block">
                    <blocquote className="quote">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse officiis quas recusandae temporibus vitae. Ad at beatae consequuntur dignissimos expedita, fugit inventore minus mollitia odit quam sint veniam voluptatem voluptatum.</blocquote>
                    <img className="person_image" src={Person} alt="" height="50px" width="50px"/>
                    <h4 className="name">Lorem Ipsum</h4>
                    <p className="role">Lorem ipsum dolor sit amet.  </p>
                </div>
                <div className="opinion_block">
                    <blocquote className="quote">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse officiis quas recusandae temporibus vitae. Ad at beatae consequuntur dignissimos expedita, fugit inventore minus mollitia odit quam sint veniam voluptatem voluptatum.</blocquote>
                    <img className="person_image" src={Person} alt="" height="50px" width="50px"/>
                    <h4 className="name">Lorem Ipsum</h4>
                    <p className="role">Lorem ipsum dolor sit amet.  </p>
                </div>
            </div>

<div className="faq">
<h2>FAQ</h2>
<details>
<summary><h3>Lorem ipsum?</h3></summary>
    <ul>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem facilis hic ipsa, nulla placeat recusandae ullam? Accusantium distinctio dolorem eaque facilis minus nisi nostrum perferendis placeat quam, saepe temporibus voluptatum?</p>
    </ul>
</details>

    <details>
        <summary><h3>Lorem ipsum?</h3></summary>
        <ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem facilis hic ipsa, nulla placeat recusandae ullam? Accusantium distinctio dolorem eaque facilis minus nisi nostrum perferendis placeat quam, saepe temporibus voluptatum?</p>
        </ul>
    </details>

    <details>
        <summary><h3>Lorem ipsum?</h3></summary>
        <ul>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem facilis hic ipsa, nulla placeat recusandae ullam? Accusantium distinctio dolorem eaque facilis minus nisi nostrum perferendis placeat quam, saepe temporibus voluptatum?</p>
        </ul>
    </details>

</div>
            <h2>Trusted by brands</h2>
<div className="brands">

<ul>
    <li><img src={Slack} alt="" height="50px" weight="50px" /></li>
    <li><img src={GitCat} alt="" height="50px" weight="50px" /></li>
    <li><img src={CW} alt="" height="50px" weight="50px" /></li>
    <li><img src={DropBox} alt="" height="50px" weight="50px" /></li>
</ul>

 </div>
<div className="contact_form">
<h2>Contact us</h2>
<form action="post">
<h3>Email</h3>
<input type="email" placeholder="Your Email"/>
<h3>Write to us</h3>
<textarea type="Content" placeholder="Your Text"/><br/>
<input type="button" value="Send" placeholder="Send"/>
</form>
</div>
</div>

    )
}

export default Contact;