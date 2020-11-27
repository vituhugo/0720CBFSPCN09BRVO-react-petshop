import './App.css';
import Linha from './components/Linha'
import Layout from './components/Layout';
function App() {
    var donos = [
        {nome:"Rafael de Carvalho", email: "rafael.carvalho@gmail.com", data_nascimento: "12/01/1983"},
        {nome:"Everton Luis da Silva", email: "everton.luis@gmail.com", data_nascimento: "12/01/1982"},
        {nome:"Victor Rodrigues", email: "victor.rodrigues@digitalhouse.com", data_nascimento: "04/10/1991"},
        {nome:"Vinicius", email: "vini@digitalhouse.com", data_nascimento: "04/10/1991"},
    ]
  return (
    <Layout>
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
                    {donos.map((dono) => (
                        <Linha nome={dono.nome} email={dono.email} data_nascimento={dono.data_nascimento} />
                    ))}
                </tbody>
            </table>
            <p className="text-right">
                <a href="/dono/criar" className="btn btn-success">+ Adicionar</a>
            </p>

            <hr className="my-4" />

            <div className="container mt-3">
                <h1>Novo Dono</h1>
                <form method="POST" action="/dono/<%= dono.id %>/alterar?_method=put">
                    <div className="row">
                        <label className="form-group col-12">
                            <span className="form-label">Nome</span>
                            <input className="form-control" type="text" name="nome" value="" />
                        </label>
                    </div>
                    <div className="row">
                        <label className="form-group col-12">
                            <span className="form-label">Email</span>
                            <input className="form-control" type="email" name="email" value=""  />
                        </label>
                    </div>
                    <div className="row">
                        <label className="form-group col-12">
                            <span className="form-label">Data de nascimento</span>
                            <input className="form-control" type="text" name="data_nascimento" value=""  />
                        </label>
                    </div>
                    
                    <p className="text-right mt-3">
                        <button className="btn btn-primary">Enviar</button>
                    </p>
                </form>
            </div>
        </div>
    </Layout>
  );
}

export default App;
