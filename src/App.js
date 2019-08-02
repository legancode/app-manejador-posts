import React from 'react';
import './styles/main.css'
import TableContent from './components/TableContent';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      chargePosts: true,
      data: []
    }
  }

  handleRequest = async () => {
    const api = "https://jsonplaceholder.typicode.com"
    const req = await fetch(`${api}/posts`)
    const reqJson = await req.json()
    const data = reqJson
    console.log(data)
    this.setState({ data, chargePosts: false })
  }

  componentDidMount() {

  }

  render() {
    return (
      <div className="container app">
        <div className="section header flex flex-column align-center">
          <h2 className="header__title">App Manejador de Posts</h2>
          <span className="header__subtitle">Crea, edita o elimina cualquier post</span>
          {
            this.state.chargePosts
              ? <button onClick={this.handleRequest} className="charge-posts">Cargar Posts</button>
              : null
          }
        </div>
        <main className="section main">
          <TableContent data={this.state.data} />
        </main>
        <footer className="section footer">
        </footer>
      </div>
    );
  }
}

export default App;
