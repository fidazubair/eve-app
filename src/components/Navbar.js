import React from 'react'
import '../Navbar.css'

export default class Navbar extends React.Component {


    componentDidMount() {
        let mainNavLinks = document.querySelectorAll("nav ul li a");
        // let mainSections = document.querySelectorAll("main section");
        console.log("mainavlinks", mainNavLinks)
        
        window.addEventListener("scroll", event => {
            let fromTop = window.scrollY;
            console.log('hhdhdhdhhdh', fromTop)
            mainNavLinks.forEach(link => {
                let section = document.querySelector(link.hash);
               
                if (
                    section.offsetTop <= fromTop &&
                    section.offsetTop + section.offsetHeight > fromTop
                ) {
                    link.classList.add("current");
                } else {
                    link.classList.remove("current");
                }
            });
        });
    }


    render() {
        return (<div>

                <div style={{display: 'flex', flexDirection: 'column'}}>
                    {/*<header>*/}
                    {/*    <h1>Website</h1>*/}
                    {/*</header>*/}
                    <nav style={{display: 'flex', flexDirection: 'row', position: 'fixed'}}>
                        <ul style={{display: 'flex'}}>
                            <li><a href="#section-1">Section 1</a></li>
                            <li><a href="#section-2">Section 2</a></li>
                            <li><a href="#section-3">Section 3</a></li>
                            <li><a href="#section-4">Section 4</a></li>

                        </ul>
                    </nav>

                   
                    <section id="section-1">
                        <h1>Section 1</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, blanditiis expedita?
                            Earum eligendi pariatur quaerat quos expedita ab quibusdam ratione veniam in, mollitia fuga
                            repudiandae?</p>

                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, blanditiis expedita?
                            Earum eligendi pariatur quaerat quos expedita ab quibusdam ratione veniam in, mollitia fuga
                            repudiandae?</p></section>
                    <section id="section-2">
                        <h1>Section 2</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, blanditiis expedita?
                            Earum eligendi pariatur quaerat quos expedita ab quibusdam ratione veniam in, mollitia fuga
                            repudiandae?</p>

                        <p>Ratione nulla nam, ipsa dignissimos corrupti veniam nostrum, laudantium asperiores sequi
                            numquam placeat velit voluptate in praesentium non labore unde incidunt laborum maxime quae
                            magni.</p>
                    </section>
                    <section id="section-3">
                        <h1>Section 3</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, blanditiis expedita?
                            Earum eligendi pariatur quaerat quos expedita ab quibusdam ratione veniam in, mollitia fuga
                            repudiandae?</p>
                        <p>Soluta quibusdam ad nostrum vel voluptate delectus sequi dolores quia quaerat officia
                            corrupti, aperiam fugit facere debitis repudiandae praesentium sapiente inventore
                            repellendus, nemo commodi alias!</p>
                        <p>Soluta quibusdam ad nostrum vel voluptate delectus sequi dolores quia quaerat officia
                            corrupti, aperiam fugit facere debitis repudiandae praesentium sapiente inventore
                            repellendus, nemo commodi alias!</p>
                    </section>
                    <section id="section-4">
                        <h1>Section 4</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, blanditiis expedita?
                            Earum eligendi pariatur quaerat quos expedita ab quibusdam ratione veniam in, mollitia fuga
                            repudiandae?</p>
                        <p>Aliquid aliquam magnam ducimus similique obcaecati, unde exercitationem laborum incidunt,
                            quas in ipsum inventore nostrum? Blanditiis optio cumque earum iste odio! Alias sint
                            accusamus repudiandae.</p>
                    </section>


            


                </div>
                <footer>
                    &copy;2018 Footer
                </footer>
            </div>
        )
    }
}