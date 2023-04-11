import React from 'react';

class BubbleComponent extends React.Component {
    render() {
      const {x, y, datum} = this.props;
      if(datum.category === "design1") { 
      return (
        <svg width={datum.size*10} height={datum.size*10} x={x} y={y} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g filter="url(#shadow1)">
        <circle cx="117.5" cy="77.5" r="37.5" fill="#030092"/>
        <circle cx="117.5" cy="77.5" r="37.5" fill="url(#color1)"/>
        </g>
        {datum.size>30 ? <text font-size="0.4em" x="29.11%" y="17.93%" text-anchor="middle" fill='snow' stroke="white" stroke-width="0.1px" dy=".3em">{datum.name}</text> : ""}
        {datum.size>30 ? <text font-size="0.5em" x="29.11%" y="19.93%" text-anchor="middle" fill='snow' stroke="white" stroke-width="0.1px" dy=".3em">{datum.time["3 month"]}</text> : ""}
        {datum.size>30 ? <text font-size="0.3em" x="29.11%" y="21.53%" text-anchor="middle" fill='snow' stroke="white" stroke-width="0.1px" dy=".3em">{Object.keys(datum.time)[0]}</text> : ""}
        </svg>
      );}
      else if(datum.category === "design2") {
        return (
        <svg width={datum.size*6} height={datum.size*6} x={x} y={y} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#shadow2)">
                <circle cx="107.5" cy="107.5" r="87.5" fill="#C500F7"/>
                <circle cx="107.5" cy="107.5" r="87.5" fill="url(#color2)"/>
            </g>
            {datum.size>30 ? <text font-size="1.2em" x="26.11%" y="28.93%" text-anchor="middle" fill='snow' stroke="white" stroke-width="0.05px" dy=".3em">{datum.name}</text> : ""}
            {datum.size>30 ? <text font-size="1.3em" x="26.11%" y="24.13%" text-anchor="middle" fill='snow' stroke="white" stroke-width="0.08px" dy=".3em">{datum.amount}</text> : ""} 
            {datum.size>40 ? <text font-size="1em" x="26.11%" y="33.93%" text-anchor="middle" fill='blue' stroke="white" stroke-width="0.1px" dy=".3em">3 months</text> : ""}   
        </svg>
      );

      }
      else if(datum.category === "design3") {
        return (
        <svg width={datum.size*6} height={datum.size*6} x={x} y={y} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#shadow3)">
                <circle cx="63.5" cy="63.5" r="43.5" fill="#00CAF7"/>
                <circle cx="63.5" cy="63.5" r="43.5" fill="url(#color3)"/>
            </g>
            {datum.size>30 ? <text font-size="0.5em" x="23.11%" y="15.93%" text-anchor="middle" fill='snow' stroke="white" stroke-width="0.1px" dy=".3em">Text</text> : ""}    
        </svg>
      );

      }
      else if(datum.category === "design4") {
        return (
        <svg width={datum.size*10} height={datum.size*10} x={x} y={y} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#shadow4)">
                    <circle cx="103.5" cy="99.5" r="23.5" fill="#030092"/>
                    <circle cx="103.5" cy="99.5" r="23.5" fill="url(#color4)"/>
                </g>
            {datum.size>50 ? <text font-size="0.5em" x="23.11%" y="15.93%" text-anchor="middle" fill='snow' stroke="white" stroke-width="0.1px" dy=".3em">Text</text> : ""}    
        </svg>
      );

      }
      else if(datum.category === "design5") {
        return (
        <svg width={datum.size*6} height={datum.size*6} x={x} y={y} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#shadow5)">
                <circle cx="70.5" cy="70.5" r="50.5" fill="#FF8A00"/>
                <circle cx="70.5" cy="70.5" r="50.5" fill="url(#color5)"/>
                </g>
            {datum.size>30 ? <text font-size="0.5em" x="23.11%" y="15.93%" text-anchor="middle" fill='snow' stroke="white" stroke-width="0.1px" dy=".3em">Text</text> : ""}    
        </svg>
      );

      }
      else if(datum.category === "design6") {
        return (
        <svg width={datum.size*6} height={datum.size*6} x={x} y={y} viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg">
             <g filter="url(#shadow6)">
                <circle cx="30" cy="30" r="30" fill="#0811E2"/>
                <circle cx="30" cy="30" r="30" fill="url(#color6)"/>
            </g>
            {datum.size>30 ? <text font-size="0.5em" x="23.11%" y="15.93%" text-anchor="middle" fill='snow' stroke="white" stroke-width="0.1px" dy=".3em">Text</text> : ""}    
        </svg>
      );

      }
    }
  }


export default BubbleComponent;