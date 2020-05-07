import React, { Component } from 'react';


class BirthdayButton extends Component{
    constructor(props, parentNode){
        super();
        this.bDayCount=document.getElementById("age");
        const container= document.createElement("div");

        const heading= document.createElement("h2");
        heading.innerText= props.headingText;
        container.appendChild(heading);

        const paragraph = document.createElement("p");
        this.updateParagraph(paragraph);
        container.appendChild(paragraph);

        const btn = document.createElement("button");
        btn.innerText= props.buttonText;
        btn.addEventListener("click", (event)=>{
            this.bDayCount++;
            this.updateParagraph(paragraph);
        });
        container.appendChild(btn);

        parentNode.appendChild(container);
    }
    updateParagraph(pTag){
        pTag.innerText= `${this.firstName} just had a birthday! They are now ${this.bDayCount}`
    }
}

export default BirthdayButton;