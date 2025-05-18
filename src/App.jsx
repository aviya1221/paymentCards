import "./App.css";
function App() {
  return (
    <>
      <div id="gridCont">
        <BulidCrad level="Basic" price="9$" gb1="1" gb2= "10" email="2" last="Ultimate" ></BulidCrad>
        <BulidCrad level="Standart" price="17$" gb1="3" gb2= "25" email="5" last="Ultimate" ></BulidCrad>
        <BulidCrad level="Professional" price="29$" gb1="10" gb2= "100" email="20" last="Ultimate" ></BulidCrad>
        <BulidCrad level="Enterprise" price="59$" gb1="5" gb2= "50" email="10" last="Ultimate" ></BulidCrad>
      </div>
    </>
  );
}

function BulidCrad({ level, price, gb1, gb2, email, last}) {
  return (
    <>
      <div className="card">
        <div className="top">
          <span className="cardTitle">{level}</span>
          <div className="circle">
            <span>{price}</span>
          </div>
        </div>
        <button id="btSign">SIGN UP</button>
        <BuildBottom gb1={gb1} gb2={gb2} email={email} last={last}/>
      </div>
    </>
  );
}
function BuildBottom({gb1,gb2,email,last}){
  return(
    <>
       <div className="bottom">
          <span>{gb1} Disk Space</span>
          <span>{gb2}  Monthly Bandwidth</span>
          <span>{email} Email Accounts</span>
          <span>{last} sudbdommains</span>
        </div>
    </>
  )
}
export default App;
