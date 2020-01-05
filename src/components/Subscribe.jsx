import React, {Component} from 'react';

class Subscribe extends Component {
    
    state = {
        EMAIL: "",
        FNAME: "",
        LNAME: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })      
    }

    componentDidMount(){
        const script = document.createElement("script");
        script.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
        script.async = true;
        script.innerHTML = "document.write(</script><script type='text/javascript'>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';}(jQuery));var $mcj = jQuery.noConflict(true);</script>);"
        document.body.appendChild(script);
    }

    render(){
        return (
            <div id="mc_embed_signup">
                <form action='https://facebook.us17.list-manage.com/subscribe/post?u=1eda5abfeac8a16bd7696d8a2&amp;id=115f24da0b' method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                    <h2>Subscribe</h2>
                    <div id="mc_embed_signup_scroll">
                        
                        <p>Enter your e-mail below and get notified on the latest updates.</p>
                        <input type="email" onChange={this.handleChange} value={this.state.EMAIL} placeholder="Email (Required)" name="EMAIL" id="mce-EMAIL"/>
                        <input type="text" onChange={this.handleChange} value={this.state.FNAME} placeholder="First Name" name="FNAME" id="mce-FNAME"/>
                        <input type="text" onChange={this.handleChange} value={this.state.LNAME} placeholder="Last Name" name="LNAME" id="mce-LNAME"/>

                        <div id="mce-responses">
                            <div className="response" id="mce-error-response" style={{display: 'none'}}></div>
                            <div className="response" id="mce-success-response" style={{display: 'none'}}></div>
                        </div>

                        <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
                            <input type="text" onChange={this.handleChange} name="b_1eda5abfeac8a16bd7696d8a2_115f24da0b" tabIndex="-1" value=""/>
                        </div>

                        <input type="submit" onChange={this.handleChange} value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className='btn'/>

                    </div>
                </form>
            </div>
        )
    }
    
}

export default Subscribe