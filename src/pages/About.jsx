import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';

const About = () => {
    return (
        <div>
            <Navigation/>
            <Logo/>
            <h1 className="about">A propos</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero voluptas minus impedit iste fugit pariatur consequuntur quisquam, possimus explicabo consectetur quas aut debitis dignissimos veniam nobis facere suscipit non earum porro? Quisquam distinctio quas voluptatem, debitis eligendi aliquid blanditiis iste maiores mollitia ex iure id laboriosam commodi facere tempora! Necessitatibus possimus nesciunt quasi, eligendi dicta omnis? Nesciunt impedit porro fugit.</p>
        </div>
    );
};

export default About;