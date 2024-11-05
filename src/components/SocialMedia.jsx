import React from 'react';
import { BsLinkedin, BsGithub, BsEnvelopeFill } from 'react-icons/bs'


const SocialMedia = ({styleClass}) => {
    return (
        <div className = {`${styleClass}`} >
            <a style={{textDecoration: 'none'}} href='https://mail.google.com/mail/?view=cm&fs=1&to=divyanshu10245@gmail.com'><div>
                <BsEnvelopeFill />
            </div></a>
            <a href='https://www.linkedin.com/in/divyanshu-kr/'><div>
                <BsLinkedin />
            </div></a>
            <a href='https://github.com/divyansraj'><div>
                <BsGithub />
            </div></a>
        </div>
    );
}

export default SocialMedia;
