function hi(){
    document.getElementById('content').innerHTML = `<div class="container">
    Hello! My name is <span style="color:#129cce">Bryan Luo</span>
    <br/> <br/>
    <a href="https://www.linkedin.com/in/luobryan/"><i class="fab fa-linkedin" ></i></a>
    <a href="https://github.com/luobryan"><i class="fab fa-github"></i></a>
    <a href="mailto:bryanluo100@gmail.com"><i class="fas fa-envelope"></i></a>
    <a href="https://drive.google.com/file/d/1GEG1s7_9JQVdlXPDsR0yFXjofM8KHK53/view?usp=sharing"><i class="fas fa-file"></i></a>
    <br/>
    </div>`;
}

function about(){
    document.getElementById('content').innerHTML = `  
    <div class="flex-container-about">
        <div>
             <img src="bluo.jpg"/>
        </div>
        <div class="about-text-col">
            Nice to meet <span style="color:#129cce">you</span>. 
            <br/>
            <div class="about-text">
            I am a computer science undergrad student at the University of California, 
            Los Angeles. I am currently interested
             in front-end technologies for web and mobile development. Feel free to contact me if 
             you have any questions.
             </div>
        </div>
    </div>`;
}