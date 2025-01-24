import { useState } from 'react'
import App from './App.jsx'
export default function List({
    nation,
    nationRead,
    nationDelete,
    sortBy
}) {
    if(nation.length !== 0)
        return(
            <>
                <div class = "list">
                    <div class = "name" onClick = {sortBy}>
                        국가명
                    </div>
                    <div onClick = {sortBy}>
                        금메달
                    </div>
                    <div onClick = {sortBy}>
                        은메달
                    </div>
                    <div onClick = {sortBy}>
                        동메달
                    </div>
                    <div onClick = {sortBy}>
                        전체
                    </div>
                    <div>
                        액션
                    </div>
                </div>
                <ul>
                    {
                        nation.map(e => (
                            <li key = {e.name}>
                                <Country
                                    nation = {e}
                                    nationRead = {nationRead}
                                    nationDelete = {nationDelete}
                                />
                            </li>
                        ))
                    }
                </ul>
            </>
        );
    else
        return <><p>등록된 국가가 없습니다. 메달을 추적하세요!</p></>
}

function Country({nation,nationRead,nationDelete}) {
    const [update, setUpdate] = useState(false);
    let nationDetail;
    
    return(
        <div class = "list">
            {nationRead(nation)}
            <div>
                <button class = "delete" onClick = {() => nationDelete(nation.name)}>
                    삭제하기</button>
            </div>
        </div>
    );
}