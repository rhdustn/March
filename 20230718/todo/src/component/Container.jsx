import React,{createContext,useContext,useState,useMemo} from 'react'
import Global from '../Global';
import Write from './Write';
import TodoList from './TodoList';

const Content01 = ()=>{
  return<>
  <div className='sub-header'>
  <div><Work></Work></div>
  <div><Name></Name></div>
  </div>
  </>
}




const Name= ()=>{
  const {name,setName}=useContext(Global)
  const [editing, setEditing] = useState(false);
  const [newName, setnewName] = useState("");

  const handleEdit=()=>{
    setEditing(true);
    setName(name)
  }
  const handleSave=()=>{
    setName(newName);
    setEditing(false)
  }
  const handleCanel=()=>{
    setEditing(false);
  }
  return (
    <>
      {editing ? (
        <>
          <input
            type="text"
            value={newName}
            onChange={(e) => setnewName(e.target.value)}
          />
          <button onClick={handleSave}>저장</button>
          <button onClick={handleCanel}>취소</button>
        </>
      ) : (
        <>
        <div className='font'>
          name: {name}
          <button onClick={handleEdit}>변경</button>
          </div>
          
        </>
      )}
    </>
  );
}


const Work = () => {
  const { work, setWork } = useContext(Global);
  const [editing, setEditing] = useState(false);
  const [newWork, setNewWork] = useState("");

  const handleEditClick = () => {
    setEditing(true);
    setNewWork(work);
  };

  const handleSaveClick = () => {
    setWork(newWork);
    setEditing(false);
  };

  const handleCancelClick = () => {
    setEditing(false);
  };

  return (
    <>
      {editing ? (
        <>
          <input
            type="text"
            value={newWork}
            onChange={(e) => setNewWork(e.target.value)}
          />
          <button onClick={handleSaveClick}>Save</button>
          <button onClick={handleCancelClick}>Cancel</button>
        </>
      ) : (
        <>
        <div className='font'>
          work: {work}
          <button onClick={handleEditClick}>변경</button>
          </div>
        </>
      )}
    </>
  );
};


const Container = () => {
  const [name,setName] = useState("yeon")
  const [work,setWork]=useState("오늘 할 일")
  const [content,setContent]=useState([])
  const [showWrite, setShowWrite] = useState(false);
    const obj ={
        name,
        setName,
        work,
        setWork,
        content,
        setContent,
        showWrite, 
        setShowWrite

    }
    const handleWriteClick = () => {
      setShowWrite(!showWrite);
    }
  
    

  return (
    <Global.Provider value={obj}>
    <div className='container'> <h3>TODO-LIST</h3>
      <Content01></Content01>
    <TodoList></TodoList>
    <button className='write-btn'onClick={handleWriteClick}>작성하기</button>
    {showWrite && <Write />}
    </div>
    </Global.Provider>
  )
}

export default Container