import { useEffect, useState } from 'react'
import React from 'react'
import './App.css'

export default function Form({nationCreate,nationUpdate}) {
    const [name,setName] = useState('');
    const [gold,setGold] = useState(0);
    const [silver,setSilver] = useState(0);
    const [bronze,setBronze] = useState(0);
    // 입력폼 
    return(
        <>
            
                <div>
                    <p>국가명</p>
                    <input type = "text" 
                    value = {name}
                    onChange = {e => setName(e.target.value)}></input>
                </div>

                <div>
                    <p>금메달</p>
                    <input type = "number" 
                    min = "0"
                    onInput= {e => {
                        e.target.value = String(e.target.value)
                          .replace(/[^0-9.]/g, '') // 숫자와 소수점 이외 제거
                          .replace(/(\..*)\./g, '$1') // 소수점이 여러 개일 경우 첫 번째만 유지
                          .replace(/^0+(?!\.)/, '0'); // 0으로 시작하는 숫자를 허용 (0. 제외)
                      }}
                    value = {gold}
                    onChange = {e => setGold(e.target.value)}></input>
                </div>

                <div>
                    <p>은메달</p>
                    <input type = "number"
                    min = "0"
                    onInput= {e => {
                        e.target.value = String(e.target.value)
                          .replace(/[^0-9.]/g, '') // 숫자와 소수점 이외 제거
                          .replace(/(\..*)\./g, '$1') // 소수점이 여러 개일 경우 첫 번째만 유지
                          .replace(/^0+(?!\.)/, '0'); // 0으로 시작하는 숫자를 허용 (0. 제외)
                      }}
                    value = {silver}
                    onChange = {e => setSilver(e.target.value)}></input>
                </div>

                <div>
                    <p>동메달</p>
                    <input type = "number" 
                    min = "0"
                    onInput= {e => {
                        e.target.value = String(e.target.value)
                          .replace(/[^0-9.]/g, '') // 숫자와 소수점 이외 제거
                          .replace(/(\..*)\./g, '$1') // 소수점이 여러 개일 경우 첫 번째만 유지
                          .replace(/^0+(?!\.)/, '0'); // 0으로 시작하는 숫자를 허용 (0. 제외)
                      }}
                    value = {bronze}
                    onChange = {e => setBronze(e.target.value)}></input>
                </div>
            
            <button onClick = {() =>
                {   
                    nationCreate(name,gold,silver,bronze);
                }}>국가 추가</button>
            <button onClick = {() =>
            {
                nationUpdate({
                    name : name,
                    gold : gold,
                    silver : silver,
                    bronze : bronze
                  });
            }}>업데이트</button>
        </>
    )
    
}

