import React from "react";
import { ButtonSuasPlaylists, Container } from "./styleHeader";

export class Header extends React.Component {
    render() {
    return (
      <Container>
        <h2>LABEFY.songs</h2>
        <ButtonSuasPlaylists onClick={this.props.irParaPlaylist} > Suas Playlists </ButtonSuasPlaylists>
        {/* <button onClick={this.props.irParaMusicaPlaylist} > Detalhes Playlist </button> */}
      </Container>
    );
    }
}
