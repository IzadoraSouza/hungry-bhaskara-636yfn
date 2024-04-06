import "./styles.css";

function App() { 
  
  return ( 

    <div className='container'> 

     <header> 

      <p>React JS</p> 

    </header> 

     <main> 
  
     <section className='box-titulo'>
     <h1>React JS</h1> 
     <p>Biblioteca JavaScript para criar SPAs</p> 
     <a href='https://reactjs.org/' target="_blank">Site Oficial</a> 
     </section>  

     <section className='box-requisitos'> 
     <h2>Requisitos</h2> 
     <p>Veja abaixo os requisitos mínimos para aprender React JS:</p> 
     </section>

     <div className='box-cards'>
     <div className='card'> 
     <h3>HTML</h3> 
     <p>Aprender a estruturar os elementos da página com HTML</p> 
     </div> 

     </div> 

    </main> 
    <footer> 
    <p className="autor">Curso de introdução de React JS</p> 
    </footer> 
  </div>
 
)

}
export default App;
