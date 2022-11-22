import logo from './logo.svg';
import './App.css';
function Header(){
  return <header>
  </header>
}

function Nav(props){
  console.log('props', props, props.title);
  return <nav>
    <h1 id="title">FREE WI-FI ZONE</h1>
    <p>여기는 FREE WI-FI ZONE 입니다.</p>
    <p>개인정보 동의를 통해 무료로 무선</p>
    <p>인터넷을 제공하는 장소입니다. 개인정보</p>
    <p>입력으로 별도 가입없이 무선인터넷을</p>
    <p>무료로 이용하실 수 있습니다. 무료 인터넷</p>
    <p>제공 시간에 제한은 없으며, 4시간마다</p>
    <p>재인증을 통해 계속하여 사용하실 수 있습니다.</p>
    <button type="button" onclick="location.href='agreement.html'">개인정보 이용동의하기</button>
  </nav>
}

function App() {
  return (
      <Nav tilte="content"></Nav>

  );
}

export default App;
