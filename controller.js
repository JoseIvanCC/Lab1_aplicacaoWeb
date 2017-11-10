angular.module("Scgfy", []);
angular.module("Scgfy").controller("ScgfyCtrl", function ($scope) {
            $scope.app = "Scgfy";
            $scope.artistas = [];
            $scope.albuns = [];
            $scope.musicas = [];
            $scope.favoritos = [];

$scope.select = function(selected) {
    $scope.selected = selected
};

function Album(nomeAlbum, autorAlbum) {
    this.musicas = [];
    this.nomeAlbum = nomeAlbum;
    this.autorAlbum = autorAlbum;

    this.addMusic = function(music) {
      if (existeMusica(this.musicas, music.nome)) {
          alert("Música já existente no álbum");
          delete $scope.musica;
    } else {
          this.musicas.push(music);
          $scope.musicas.push(angular.copy(music));
          delete $scope.musica;
    }
  }
}

function Favorito(nomeFavorito) {
  this.nomeFavorito = nomeFavorito;
}

$scope.adicionarAosFavoritos = function (artist) {
  $scope.favoritos.push(angular.copy(artist));
  console.log($scope.favoritos);
}

const existeArtistaNosFavoritos = function (nomeDoArtista) {
  for (i = 0; i < $scope.favoritos.length; i++) {
    if ($scope.favoritos[i].nome == nomeDoArtista) {
      return $scope.favoritos[i];
    }
  }
  return null;
}

$scope.excluirFavorito = function (favorito) {
  for (i = 0; i < $scope.favoritos.length; i++) {
    if ($scope.favoritos[i].nome == favorito.nome) {
      $scope.favoritos.splice(i,1);
      alert("artista excluído dos favoritos com sucesso");
    }
  }
}


//Verifica se existe um determinado album com determinado nome, se existir, retorna o album, se nao, retorna um novo album vazio
retornaAlbum = function (nomeAlbum, autor) {
    for (i = 0; i < $scope.albuns.length; i++) {
      if ($scope.albuns[i].nomeAlbum == nomeAlbum) {
        return $scope.albuns[i];
      }
    }
    var newAlbum = new Album(nomeAlbum, autor);
    $scope.albuns.push(newAlbum);
    return newAlbum;
}

$scope.retornaAlbuns = function (autor) {
  album = [];
  for (i = 0; i < $scope.albuns.length; i++) {
    if ($scope.albuns[i].autorAlbum == autor) {
      album.push($scope.albuns[i]);
    }
  }
  return album;
}

$scope.verificaTable = function (array) {
    return array.length > 0;
}

//Adiciona uma musica a um album que está no array de albuns.
$scope.adicionarMusica = function (music) {
    album = retornaAlbum(music.album, music.autor);
    album.addMusic(angular.copy(music));
    delete music;
}

const existeMusica = function (musicas, nomeMusica) {
    for (i = 0; i < musicas.length; i++) {
        if (musicas[i].nome ===  nomeMusica) {
            return true;
        }
    }
          return false;
}



$scope.adicionarArtista = function (artist) {
    if (existeArtista(artist)) {
        alert("artista já existente no sistema");
            } else {
                $scope.artistas.push(angular.copy(artist));
                    delete $scope.artista;
                    }
                      };

const existeArtista = function(artist) {
    for (i = 0; i < $scope.artistas.length; i++) {
          if (artist.nome === $scope.artistas[i].nome) {
            return true;
                      }
                  }
                  return false;
                };

$scope.atualizaDadosArtista = function (selectedItem) {
    for (i = 0; i < $scope.artistas.length; i++) {
      if ($scope.artistas[i].nome == selectedItem.nome) {
        $scope.artistas[i].nota = selectedItem.nota;
        $scope.artistas[i].ultimaMusica = selectedItem.ultimaMusica;
      }
    }
}

        });
