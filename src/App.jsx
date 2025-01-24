import { useState } from 'react'
import Form from './Form.jsx'
import List from './List.jsx'
import './App.css'
import { StrictMode } from 'react'

var nations_loaded = JSON.parse(localStorage.getItem('medal'));
export default function App() {
  const [nation, setNation] = useState(nations_loaded);
  const [flag,setflag] = useState(false);
  function nationCreate(name,gold,silver,bronze){
    console.log(name);
    console.log(dupCheck(name));
    
    if(!dupCheck(name)){
      setNation([
        ...nation,{
          name : name,
          gold : Number(gold),
          silver : Number(silver),
          bronze : Number(bronze),
          total : Number(gold) + Number(silver) + Number(bronze)
        }
      ]);
      //nations_loaded = [...nation];
    }
    else
      alert("중복된 국가 이름입니다");
  }

  function dupCheck(name){
    return nation.some(e => e.name === name);
  }

  function sortBy(e){
    console.log("호출됨 정렬");
    console.log(nation);
    const sortedNation = [...nation];
    console.log(e.target.innerText);
    setflag(!flag);
    switch(e.target.innerText){
      case "금메달" : 
        if(flag){
          sortedNation.sort((a,b) => Number(a.gold) - Number(b.gold));
          break;
        }
        else{
          sortedNation.sort((a,b) => Number(b.gold) - Number(a.gold));
          break;
        };
      case "은메달" :
        if(flag){
          sortedNation.sort((a,b) => Number(a.silver) - Number(b.silver));
          break;
        }
        else{
          sortedNation.sort((a,b) => Number(b.silver) - Number(a.silver));
          break;
        };
      case "동메달" :
        if(flag){
          sortedNation.sort((a,b) => a.bronze - b.bronze);
          break;
        }
        else{
          sortedNation.sort((a,b) => b.bronze - a.bronze);
          break;
        };
      case "전체" :
        if(flag){
          sortedNation.sort((a,b) => a.total - b.total);
          break;
        }
        else{
          sortedNation.sort((a,b) => b.total - a.total);
          break;
        };
      case "국가명" : 
        if(flag){
          sortedNation.sort((a,b) => a.name > b.name? 1: a.name < b.name ? -1:0);
          break;
        }
        else{
          sortedNation.sort((a,b) => b.name > a.name? 1: b.name < a.name ? -1:0);
          break;
        };
    }
    console.log("정렬된 배열");

    setNation(sortedNation);
  }

  function nationRead(nextNation){
    let str ="";
    str = nextNation.name+ " " + nextNation.gold + " " + nextNation.silver + " " + nextNation.bronze + " " + nextNation.total;
    localStorage.setItem('medal',JSON.stringify(nation));
    return (
      <>
          <div class = "name">
            {nextNation.name}
          </div>
          <div class = "medal">
            {nextNation.gold}
          </div>
          <div class = "medal">
            {nextNation.silver}
          </div>
          <div class = "medal">
            {nextNation.bronze}
          </div>
          <div class = "medal">
            {nextNation.total}
          </div>
      </>
    )
  }

  function nationDelete(nationName) {
    console.log("삭제 이름 " + nationName);
    setNation(
      nation.filter(e=> e.name !== nationName)
    );
  }

  function nationUpdate(nextNation){
    console.log("호출됨");
    console.log(nextNation);
    let flag = false;
    nation.forEach((e) => {
      if(e.name === nextNation.name){
        e.gold = Number(nextNation.gold);
        e.silver = Number(nextNation.silver);
        e.bronze = Number(nextNation.bronze);
        e.total = Number(nextNation.total);
        flag = true;
        console.log(e);
      }
    });
    if(!flag)
      alert("해당하는 국가가 없습니다");
    setNation([...nation]);
    console.log(nation);
  }

  return (
    <>
      <div class = "main">
        <h1>2024 파리 올림픽</h1>
        <div class = "card">
          <StrictMode>
            <Form 
            nationCreate = {nationCreate}
            nationUpdate = {nationUpdate}/>
          </StrictMode>
        </div>
        
        <div class = "display_area" id = "display_area"> 
          <StrictMode>
            <List 
            nation = {nation}
            nationUpdate={nationUpdate}
            nationRead={nationRead}
            nationDelete={nationDelete}
            sortBy = {sortBy}/>
          </StrictMode>
        </div>
      </div>
    </>
  )
}
