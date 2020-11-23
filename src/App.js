import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <main>
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
            <div className="container">
                <a className="navbar-brand" href="#">Admin</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <a className="navbar-brand" href="#">Admin</a>
                </button>
            
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/pet">Lista de Pets</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/dono">Lista de Donos</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="container">
            <h1 className="mx-3"> Donos </h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Data Nascimento</th>
                        <th>Email</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                <tr>
                        <td>Gabriel Bowen</td>
                        <td>01/09/20</td>
                        <td>consequat.enim@Sed.ca</td>
                        <td>
                            <a href="/dono/1/visualizar">Ver</a>
                            
                            <span className="text-primary"> | </span>

                            <a href="/dono/1/editar">Editar</a>

                            <span className="text-primary"> | </span>

                            <form action="/dono/1/remover" className="d-inline">
                                <button className="btn btn-link p-0">Deletar</button>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td>Gabriel Bowen</td>
                        <td>01/09/20</td>
                        <td>consequat.enim@Sed.ca</td>
                        <td>
                            <a href="/dono/1/visualizar">Ver</a>
                            
                            <span className="text-primary"> | </span>

                            <a href="/dono/1/editar">Editar</a>

                            <span className="text-primary"> | </span>

                            <form action="/dono/1/remover" className="d-inline">
                                <button className="btn btn-link p-0">Deletar</button>
                            </form>
                        </td>
                    </tr>
                    <tr>
                        <td>Gabriel Bowen</td>
                        <td>01/09/20</td>
                        <td>consequat.enim@Sed.ca</td>
                        <td>
                            <a href="/dono/1/visualizar">Ver</a>
                            
                            <span className="text-primary"> | </span>

                            <a href="/dono/1/editar">Editar</a>

                            <span className="text-primary"> | </span>

                            <form action="/dono/1/remover" className="d-inline">
                                <button className="btn btn-link p-0">Deletar</button>
                            </form>
                        </td>
                    </tr>
                </tbody>
            </table>
            <p className="text-right">
                <a href="/dono/criar" className="btn btn-success">+ Adicionar</a>
            </p>

            <hr className="my-4" />

            <div class="container mt-3">
                <h1>Novo Dono</h1>
                <form method="POST" action="/dono/<%= dono.id %>/alterar?_method=put">
                    <div class="row">
                        <label class="form-group col-12">
                            <span class="form-label">Nome</span>
                            <input class="form-control" type="text" name="nome" value="" />
                        </label>
                    </div>
                    <div class="row">
                        <label class="form-group col-12">
                            <span class="form-label">Email</span>
                            <input class="form-control" type="email" name="email" value=""  />
                        </label>
                    </div>
                    <div class="row">
                        <label class="form-group col-12">
                            <span class="form-label">Data de nascimento</span>
                            <input class="form-control" type="text" name="data_nascimento" value=""  />
                        </label>
                    </div>
                    
                    <p class="text-right mt-3">
                        <button class="btn btn-primary">Enviar</button>
                    </p>
                </form>
            </div>
        </div>
    </main>
  );
}

export default App;
