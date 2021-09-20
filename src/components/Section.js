import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
  background-color: white;
  border: solid 3px #6487A5;
  margin: 6px;
  width: 300px;
  height: 50px;
  border-radius: 10px;
  display: flex;
  justify-content: left;
  font-size: 40px;
  color: #2ED199;
  
`

const StyledWeekdayTitle = styled.title`
  display: flex; 
  justify-content: center;
  width: 50px; 
  border-right: solid 3px lightgrey;
  font-family: "Josefin Sans", sans-serif;
  
`
const StyledWeekendTitle = styled(StyledWeekdayTitle)`
  background-color: #EEEEEE;
  border-radius: 7px 0 0 7px;
`

const ProgressSection = styled.div`
  width: 250px;
`
const ProgressBar = styled.div`
  background-color: ${({progress})=> {
    let numeric = progress.slice(0, -1)
    let integer= parseInt(numeric)
    if(integer >= 80) return "#FF9F82";
    else if(integer >=60) return "#FFE266";
    else if (integer >=40) return "#6FBAFF";
    else return "#CAE968";
  }};
  height: 44px;
  width: ${({progress})=> progress || "0%"}
`
const TodayProgressBar = styled(ProgressBar)`
  background-color: #A250FF;
`
const Section = ({text, progress, day}) => {
  let today = new Date();
  
  let dayOfTheWeek = today.getDay();

  const isToday = day === dayOfTheWeek

  const isWeekend = text==='S';
  return (
      <StyledSection>
            {!isWeekend && <StyledWeekdayTitle>{text}</StyledWeekdayTitle>}
            {isWeekend && <StyledWeekendTitle>{text}</StyledWeekendTitle>}
            <ProgressSection>
              {isToday && <TodayProgressBar progress = {progress}/>}
              {!isToday && <ProgressBar progress = {progress}/>}
            </ProgressSection>
        </StyledSection>
      )
    }

        

export default Section