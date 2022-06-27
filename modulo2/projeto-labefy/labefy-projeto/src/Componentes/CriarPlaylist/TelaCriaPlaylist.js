import axios from "axios";
import React from "react";
import { BASE_URL } from "../../constants/BASE_URL";
import { headers } from "../../constants/headers";
import { ContainerCriaPlaylist, Input, ButtonCriar, ButtonDetalhesPlaylist } from "./styledCriarPlaylist"

export default class TelaCriaPlaylist extends React.Component {
  state = {
    inputPlaylist: "",
  };

  onChangePlaylist = (eve) => {
    this.setState({
      inputPlaylist: eve.target.value,
    });
  };

  postCreatePlaylist = () => {
    const body = {
      name: this.state.inputPlaylist,
    };

    axios
      .post(`${BASE_URL}playlists`, body, headers)
      .then((res) => {
        alert("Playlist criada. Arrasooou gatah(oh)!!!");

        this.setState({
          inputPlaylist: "",
        });
      })
      .catch((err) => {
        alert("Erro. Tente novamente!");
      });
  };

  render() {
    return (
      <ContainerCriaPlaylist>
        <h2>Crie sua Playlist</h2>
        <div>
          <Input
            placeholder={"Nome Playlist"}
            value={this.state.inputPlaylist}
            onChange={this.onChangePlaylist}
          />
        </div>
        <div>
          <ButtonCriar onClick={this.postCreatePlaylist}>Criar</ButtonCriar>
        </div>
        {/* <div>
          <ButtonDetalhesPlaylist onClick={this.props.irParaPlaylist}>
            Playlists
          </ButtonDetalhesPlaylist>
        </div> */}
      </ContainerCriaPlaylist>
    );
  }
}
