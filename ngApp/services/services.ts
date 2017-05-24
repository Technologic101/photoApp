namespace photos.Services {

  export class PhotoService {
    private PhotoResource;

    public get(id) {
      return this.PhotoResource.get({id:id});
    }

    public list() {
      return this.PhotoResource.query()
    }

    public save(photo) {
      return this.PhotoResource.save(photo).$promise;
    }

    public remove(id) {
      console.log('called');
      return this.PhotoResource.delete({id:id}).$promise;
    }


    constructor($resource: ng.resource.IResourceService) {
        this.PhotoResource = $resource('/api/photos');
    }
  }

  angular.module('photos').service('photoService', PhotoService);

    export class MovieService {
        private MovieResource;

        public listMovies() {
            return this.MovieResource.query();
        }

        constructor($resource: ng.resource.IResourceService) {
            this.MovieResource = $resource('/api/movies');
        }
    }
    angular.module('photos').service('movieService', MovieService);
    export class MyService {

    }
    }
