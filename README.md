# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

-국가를 추가하고 메달 개수로 정렬을 할수있는 간단한 웹입니다<br>
-국가명 금메달 은메달 동메달 전체를 클릭시 각각에 대한 값으로 정렬합니다<br>
-국가추가 : 국가명 금메달 은메달 동메달을 입력한후 버튼 클릭시 저장되고 하단부에 나타납니다<br>
-업데이트 : 수정하고 싶은 국가명을 입력하고 메달수를 원하는대로 조정합니다 그 후 하단부에 수정된값으로 표시됩니다.<br>
-국가명 : string 값<br>
-메달 : int >= 0 (0미만의 값은 정규식을 사용되여 특수문자및 문자가 기입되지 않습니다)<br>
-local storage를 사용하여 페이지 새로고침시에도 입력한 내용이 유지됩니다.<br>

-정렬 : 토글 방식으로 작동하며 국가명을 클릭하여 내림차순으로 정렬된후 재클릭시 오름차순으로 정렬됩니다. ex) 1회클릭시 해당 div 내용에대하여 오름차순정렬 2회클릭시 내림차순 정렬 <br>

-하단부에는 입력한 값을 확인할수있습니다<br>
-각각의 국가명 금메달 은메달 동메달 전체 메달수 액션이 있습니다.<br>
-액션의 경우 각각의 국가에 대한 객체를 삭제할 수 있습니다.<br>

