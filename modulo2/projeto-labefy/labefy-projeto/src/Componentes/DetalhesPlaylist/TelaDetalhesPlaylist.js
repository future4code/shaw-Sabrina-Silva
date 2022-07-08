import React from "react";
import axios from "axios";
import { ContainaerDetalhesPlaylist, Lista, ButtonDeletar, ButtonAdicionarMusica } from "./styledDetalhesPlaylist";

const headers = {
  headers: {
    Authorization: "sabrina-pires-shaw",
  },
};

export default class TelaDetalhesPlaylist extends React.Component {
  state = {
    playlist: [],
    pagina: 1,
  };

  getAllPlaylists = () => {
    const url =
      "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists";
    axios
      .get(url, headers)
      .then((response) => {
        this.setState({ playlist: response.data.result.list });
      })
      .catch((error) => {
        alert(error, "Ocorreu um problema, tente novamente");
      });
  };

  deletePlaylist = (playlistId) => {
    const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${playlistId}`;
    
    if (window.confirm(
      `Tem certeza que deseja deletar essa Playlist?`))
    {
      axios
      .delete(url, headers)
      .then((res) => {
      
        alert("Playlist deletada!");
        this.getAllPlaylists()
      })
      .catch((err) => {
        alert(err, "Erro!");
      });
    }else{
      alert(`Playlist não deletada!`)
    }
  };
  componentDidMount() {
    this.getAllPlaylists();
  }

  componentDidUpdate() {
    this.getAllPlaylists();
  }

  // trocarPagina = (playlistId) => {
  //   if (this.state.pagina ===1){
  //     this.setState({
  //       pagina: this.state.pagina + 1,

  //     })
  //   }
  // }

  render() {
    const renderPlaylist = this.state.playlist.map((playlists) => {
      return (
        <Lista 
        key={playlists.id}>
            <p>{playlists.name}</p>
            <ButtonDeletar onClick={() => this.deletePlaylist(playlists.id)}>X</ButtonDeletar>
        </Lista>
      );
    });

    return (
      <ContainaerDetalhesPlaylist>
        <h3>Suas Playlists</h3>
        <ul>{renderPlaylist}</ul>
        <ButtonAdicionarMusica onClick={this.props.irParaMusicaPlaylist}>
         Adicionar Musicas
        </ButtonAdicionarMusica>
        <ButtonAdicionarMusica onClick={this.props.irParaCriarPlaylist}>Voltar</ButtonAdicionarMusica>
      </ContainaerDetalhesPlaylist>
    );
  }
}
