import * as React from 'react';
import { Scroller, Section } from 'react-fully-scrolled';
import "./HomePageContent.less";

export default class HomePage extends React.Component<any,any>{

    handleEntryClick = () =>{
        console.log("click");
    }

    render() {
        return (
            <Scroller
            curPage={1}
            onBeforeScroll={(from, to) => {
                var title;
                if(to > 4){
                    title = document.getElementById("left-text");
                    title.className = "fadeInLeft animated";
                    title = document.getElementById("right-text");
                    title.className = "fadeInRight animated";
                    title = document.getElementById("pulse-circle");
                    title.className = "pulse animated infinite pulse-circle";
                }else{
                    title = document.getElementById("page-" + to);
                    title.className = "fadeInUp animated";
                }
                if(from > 4){
                    title = document.getElementById("left-text");
                    title.className = "";
                    title = document.getElementById("right-text");
                    title.className = "";
                    title = document.getElementById("pulse-circle");
                    title.className = "";
                }else{
                    title = document.getElementById("page-" + from);
                    title.className = "";
                }
            }}
            onAfterScroll={(page) => {

            }}
            isEnabled={true}
          >
            <Section>
                <div className="fadeInUp animated" id="page-1">热夏你归来听蝉</div>      
            </Section>
            <Section>
                <div  id="page-2">再游于北方知寒</div>
            </Section>
            <Section>
                <div  id="page-3">沿途不枉为少年</div> 
            </Section>
            <Section>
                <div  id="page-4">终有个结局圆满</div>
            </Section>
            <Section className="enter-page">
                <div className="entry-btn" onClick={this.handleEntryClick}>
                    <div id="pulse-circle" className="pulse-circle"></div>
                    <div className="circle">查看</div>
                </div>
                <div  id="page-5">
                    <div id="left-text">陪你喜怒哀乐</div>
                    <div id="right-text">这一年 , 早茶舍</div>      
                </div>
            </Section>
          </Scroller>
        )
    }
}