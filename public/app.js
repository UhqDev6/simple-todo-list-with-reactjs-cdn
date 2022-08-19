// const root = document.getElementById('root');
// const element = document.createElement('h1');
// element.innerText = 'hello world';
// element.className = 'heading-1';
// root.appendChild(element);

/* const p1 = React.createElement('h1', {
    children: 'hello react',
    className: 'heading-1',
});
 const p2 = React.createElement('h1', {
    children: 'hello react2',
    className: 'heading-2',
});
 const li1 = React.createElement('li', {
    children: 'coto',
});
 const li2 = React.createElement('li', {clasName: 'food'} , 'konro');
 const element = React.createElement('div', {
    children: [p1,p2,li1,li2],
}); */
// const element = (
//     <ul>
//         <li>one</li>
//     </ul>
// );
// const bio = text => {
//     return text.toUpperCase();
// }
// const name = "ulhaq";
// const element = (
//     <h1>{bio(name)}</h1>
// );
// const Halo = (props) => {
//     console.log(props);
//     return <p>Halo <b>{props.name}</b></p>
// }
// const element = (
//     <>
//     <img src="https://images.unsplash.com/photo-1660467095171-4052fcacfa69?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2787&q=80" alt="gambar" width="300"/>
//     <p>Halo <b>Ulhaq</b></p>
//     <p>Halo <b>Dhiya</b></p>
//     {Halo('nurul')}
//     <Halo name="Nurul" />
//     <Halo name="alfiyyah" />
//     </>
// );
// const time = () => {
//     const element = (
//     <div>
//         <h1>Jama Sekarang</h1>
//         <h2>{new Date().toLocaleTimeString()}</h2>
//     </div>
//     );
// ReactDOM.render(element, root);
// }
// setInterval(()=> {
//     time();
// }, 1000);
// const klikAku = (msg) => {
//     alert(msg);
// }
// const element = (
//     <>
//         <div style={{
//             width:200,
//             height:200,
//             backgroundColor:'blue'
//             }}>
//         </div>
//         <div className="box">
//         <button onClick={()=> {
//             klikAku("haiii fia")
//         }}>Klik</button>
//         </div>
//     </>
// );
// const App = () => {
//     const [count, setCount] = React.useState(1);
//     // const count = state[0];
//     // const updateCount = state[1];
//     return (
//         <>
//             <button onClick={()=> {
//                 setCount(count - 1);
//             }}>-</button>
//             <span>{count}</span>
//             <button onClick={()=> {
//                 setCount(count + 1);
//             }}>+</button>
//         </>
//     );
// }
// const App = () => {
//     const [login, setLogin] = React.useState(false);
//     if(login){
//         return (
//             <>
//                 <h1>Anda sudah login bang</h1>
//                 <button onClick={()=> {
//                     setLogin(false);
//                 }}>logout</button>
//             </>
//         );
//     }
//     return (
//         <> 
//             <h1>Sign in dlu bang !!</h1>
//             <p>{login ? <b>Anda sudah Login</b> : <i>Anda belum Login</i>}</p>
//             <button onClick={()=> {
//                 setLogin(true);
//             }}>Login</button>
//         </>
//     );
// }
// const App = () => {
//     const [login, setLogin] = React.useState(false);
//     const judulRef = React.useRef(null);
//     /* manipulasi dom menggunakan useEffect */
//     React.useEffect(()=> {
//         // const judul = document.getElementById('judul');
//         setTimeout(()=> {
//             judulRef.current.textContent = "application";
//         }, 1000);
//     }, []);
//     return (
//         <>
//             <h1 ref={judulRef}>Application</h1>
//         </>
//     );
// }
// const App = () => {
//     const fruits = ['Apple','Anggur','Alpukat','Semangka'];
//     return (
//         <ul>
//         {fruits.map((fruit)=> {
//             return <li key={fruit}>{fruit}</li>
//         })}
//         </ul>
//     );
// }
// const App = () => {
//     // const nameRef = React.useRef(null);
//     const [name, setName] = React.useState('masukkan nama');
//     const sendData = (event) => {
//         event.preventDefault();
//         // const nama = nameRef.current.value;
//         console.log(`nama ${name}`);
//         // const data = document.getElementById('name').value;
//         // console.log(`ini nama ${data}`);
//     }
//     return (
//         <form onSubmit={sendData}>
//             <div>
//                 <label>Name :</label>
//                 <input type="text" name="name" id="name" value={name} onChange={(event)=> {
//                     setName(event.target.value);
//                 }} required />
//             </div>
//             <div>
//                 <button type="submit">Send</button>
//             </div>
//         </form>
//     );
// }
// const App = () => {
//     const [news, setNews] = React.useState([]);
//     const [loading, setLoading] = React.useState(true);
//     React.useEffect(()=> {
//         try {
//             const getData = async () => {
//                 const request = await fetch(
//                     'https://the-lazy-media-api.vercel.app/api/games?page=1'
//                 );
//                 console.log(request);
//                 const response = await request.json();
//                 setNews(response);
//                 setLoading(false);
//             }
//             getData();
//         } catch (error) {
//             console.log(error);
//         }
//     },[]);
//     return (
//         <>
//             <h1>Data API</h1>
//             {loading ? 
//                 (<ul>
//                     memproses data...
//                 </ul>)
//             : 
//                 (<ul>
//                     {news.map((item)=> {
//                         console.log(item);
//                         return (
//                             <div key={item.key}>
//                                 <li>{item.title}</li>
//                                 <p>{item.desc}</p>
//                                 <img src={item.thumb} alt={item.title} />
//                             </div>
//                         )
//                     })}
//                 </ul>)
//             }
//         </>
//     );
// }
// const App = () => {
//     const [activity, setActivity] = React.useState('');
//     const [todos, setTodos] = React.useState([]);
//     const [edit, setEdit] = React.useState({});
//     const [message, setMessage] = React.useState('');
//     const saveTodoHandler = (event) => {
//         event.preventDefault();
//         if(!activity) {
//              return setMessage('Data harus terisi');
//         }
//         setMessage('');
//         if(edit.id){
//             const updateTodo = {
//                 ... edit,
//                 activity,
//             };
//             const editTodoIndex = todos.findIndex((todo)=> {
//                 return todo.id === edit.id;
//             });
//             const updateTodos = [
//                 ...todos
//             ];
//             updateTodos[editTodoIndex] = updateTodo;
//             setTodos(updateTodos);
//             return
//         }
//         setTodos([... todos, {
//             id: generateId(),
//             activity,
//             done: false
//         }]);
//         setMessage('');
//         setActivity('');
//     }
//     const generateId = () => {
//         return  +new Date();
//     }
//     const removeTodoHandler = (todoId) => {
//         const filteredTodos = todos.filter((todo)=> {
//             console.log(todoId , todo.id)
//             return todo.id !== todoId;
//         });
//         setTodos(filteredTodos);
//         if(edit.id) resetEditTodoHandler();
//     }
//     const editTodoHandler = (todo) => {
//         setActivity(todo.activity);
//         setEdit(todo);
//     }
//     const resetEditTodoHandler = () => {
//         setEdit({});
//         setActivity('');
//     }
//     const doneTodoHandler = (todo) => {
//        const updateTodo = {
//         ... todo,
//             // id: todo.id,
//             // activity: todo.activity,
//             done: todo.done ? false : true
//        };
//        const editTodoIndex = todos.findIndex((currentTodo)=> {
//             return currentTodo.id === todo.id;
//        });
//        const updateTodos = [... todos];
//        updateTodos[editTodoIndex] = updateTodo;
//        setTodos(updateTodos);
//     }
//     return(
//         <>
//             <h1>Simple Todo List</h1>
//             <form onSubmit={saveTodoHandler}>
//                 {message && <div style={{color:'green',fontSize:'30px'}}>{message}</div>}
//                 <input
//                 type="text"
//                 placeholder="Name Activities" 
//                 value={activity}
//                 onChange={(event) =>  {
//                     setActivity(event.target.value);
//                 }}
//                 />
//                 <button type="submit">
//                     {edit.id ? "Update to Data" : "Add to Data"}
//                 </button>
//                 {edit.id && 
//                     <button onClick={resetEditTodoHandler}>Reset</button>
//                 }
//             </form>
//             {todos.length > 0 ? (
//                 <ul>
//                 {todos.map((todo)=> {
//                    return (
//                     <li key={todo.id}>
//                     <input type="checkbox"  onChange={()=> {
//                         doneTodoHandler(todo);
//                     }}/>
//                     {todo.activity}{" "}{todo.done ? "selesai" : "belum selesai"}
//                     <button onClick={()=>{
//                         editTodoHandler(todo);
//                     }}>Edit</button>
//                     <button onClick={()=> {
//                         removeTodoHandler(todo.id);
//                     }}>hapus</button>
//                     </li>
//                    );
//                 })}
//             </ul>
//             ) : (
//                 <h3>data tidak ada</h3>
//             )}
//         </>
//     );
// }
const App = () => {
  const [activity, setActivity] = React.useState('');
  const [todos, setTodos] = React.useState([]);
  const [message, setMessage] = React.useState('');
  const [edit, setEdit] = React.useState({});

  const saveTodoHandler = event => {
    event.preventDefault();

    if (!activity) {
      return setMessage('data tidak boleh kosong');
    }

    setMessage('');

    if (edit.id) {
      const updateTodo = { ...edit,
        activity
      };
      const editTodoIndex = todos.findIndex(todo => {
        return todo.id === edit.id;
      });
      const updateTodos = [...todos];
      updateTodos[editTodoIndex] = updateTodo;
      setTodos(updateTodos);
      return;
    }

    setTodos([...todos, {
      id: generatedId(),
      activity,
      done: false
    }]);
    setMessage('');
    setActivity('');
  };

  console.log(todos);

  const generatedId = () => {
    return +new Date();
  };

  const editTodoHandler = todo => {
    setActivity(todo.activity);
    setEdit(todo);
  };

  const resetTodoHandler = () => {
    setEdit({});
    setActivity('');
  };

  const removeTodoHandler = todoId => {
    const filteredTodos = todos.filter(todo => {
      // console.log(todoId,todo.id);
      return todo.id !== todoId;
    });
    setTodos(filteredTodos);
    if (edit.id) resetTodoHandler();
  };

  const doneTodoHandler = todo => {
    const updateChakedToList = { ...todo,
      done: todo.done ? false : true
    };
    const editTodoIndex = todos.findIndex(currentTodo => {
      return currentTodo.id === todo.id;
    });
    const updateChakeds = [...todos];
    updateChakeds[editTodoIndex] = updateChakedToList;
    setTodos(updateChakeds);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", {
    className: "title"
  }, "Simple Todo List"), /*#__PURE__*/React.createElement("form", {
    onSubmit: saveTodoHandler
  }, /*#__PURE__*/React.createElement("input", {
    type: "text",
    value: activity,
    placeholder: "What Activities Today",
    onChange: event => {
      setActivity(event.target.value);
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit"
  }, edit.id ? "Edit to Data " : "Save to Data"), edit.id && /*#__PURE__*/React.createElement("button", {
    onClick: resetTodoHandler
  }, "Reset")), /*#__PURE__*/React.createElement("ul", null, message && /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'red',
      fontSize: '30px'
    }
  }, message), todos.map(todo => {
    return /*#__PURE__*/React.createElement("li", {
      key: todo.id
    }, /*#__PURE__*/React.createElement("input", {
      type: "checkbox",
      onChange: () => {
        doneTodoHandler(todo);
      }
    }), todo.activity, " ", " ", todo.done ? /*#__PURE__*/React.createElement("i", null, "Selesai") : /*#__PURE__*/React.createElement("i", null, "Belum Selesai"), /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        editTodoHandler(todo);
      }
    }, "edit"), /*#__PURE__*/React.createElement("button", {
      onClick: () => {
        removeTodoHandler(todo.id);
      }
    }, "hapus"));
  })));
};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), root);