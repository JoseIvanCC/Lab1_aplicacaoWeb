angular.module("Scgfy", []);
angular.module("Scgfy").controller("ScgfyCtrl", function ($scope) {
            $scope.app = "Scgfy";
            $scope.artistas = [];
            $scope.musicas = [];

function Album(nomeAlbum, autorAlbum) {
    this.musicas = [];
    this.nomeAlbum = nomeAlbum;
    this.autorAlbum = autorAlbum;
}

const imprimir = function () {
  alert("oi");
}

$scope.adicionarMusica = function (music) {
    if (existeMusica(this.musicas, music)) {
        alert("Música já existente no álbum");
  } else {
        $scope.musicas.push(angular.copy(music));
        delete $scope.musica;
  }
}

const existeMusica = function (musicas, nomeMusica) {
    for (i = 0; i < musicas.length; i++) {
        if (musicas[i].nome ===  nomeMusica) {
            return true;
        }
    }
          return false;
}

            /*var album = function(musicas: [], nome) {
              this.musicas = musicas;
              this.nome = nome;
            }

            $scope.adicionarMusica = function (musica) {
              if (existeMusica) {
                alert("Música já existente no álbum");
              } else {
                $scope.album.push(angular.copy(musica));
                delete $scope.musica;
              }
            }

            const existeMusica = function(musica) {
              for (i = 0; i < $scope.artistas.length; i++) {
                    if (album.musicas[i].nome === musica.nome) {
                      return true;
                    }
                }
                return false;
            }*/

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

        });
